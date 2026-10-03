// Rules smoke test: npm run verify
// Builds characters for every race/subrace x class x level and asserts derived values are sane,
// then runs targeted spot checks against PHB/TCE numbers.
import { RACES } from '../src/data/races.js'
import { CLASSES } from '../src/data/classes.js'
import { derive, effectiveScores } from '../src/compute.js'
import { getSpellByName } from '../src/data/spells.js'
import { FEATS } from '../src/data/featMechanics.js'

const base = (o = {}) => ({
  classKey: 'fighter', subclassKey: '', raceKey: 'human', subraceKey: 'standard', backgroundKey: 'soldier',
  level: 1, scores: { str: 15, dex: 14, con: 13, int: 12, wis: 10, cha: 8 }, skills: [], expertise: [], spells: [],
  raceChoices: {}, subclassChoices: {}, levelUps: {}, equipment: {}, ...o,
})
let fails = 0
const check = (cond, msg) => { if (!cond) { fails++; console.log('FAIL', msg) } }

// Every spell referenced by mechanics must resolve.
for (const c of CLASSES) {
  for (const s of c.subclasses) {
    const names = [...Object.values(s.alwaysPrepared || {}).flat(), ...(s.expandedList || []), ...(s.bonusCantrips || [])]
    names.forEach((n) => check(getSpellByName(n), `spell not found: ${n} (${c.key}/${s.key})`))
  }
}
FEATS.forEach((f) => (f.spells || []).forEach((n) => check(getSpellByName(n), `feat spell not found: ${n}`)))

let n = 0
for (const r of RACES) {
  const subs = r.subraces.length ? r.subraces.map((s) => s.key) : ['']
  for (const sk of subs) {
    for (const c of CLASSES) {
      for (const level of [1, 2, 3, 5, 11, 20]) {
        const sub = c.subclasses[0]?.key || ''
        const ch = base({ raceKey: r.key, subraceKey: sk, classKey: c.key, subclassKey: sub, level })
        const d = derive(ch)
        n++
        const tag = `${r.key}/${sk}/${c.key}/${level}`
        for (const v of [...Object.values(d.scores), ...Object.values(d.mods), d.maxHp, d.ac, d.speed, d.initiative, d.passivePerception]) {
          check(Number.isFinite(v), `${tag} non-finite value`)
        }
        Object.values(d.scores).forEach((v) => check(v <= 20, `${tag} score > 20`))
        const cast = d.sub?.casting || d.cls.casting
        check(!!d.spell === !!(cast && level >= cast.startLevel), `${tag} spell block mismatch`)
      }
    }
  }
}
console.log(`checked ${n} combinations`)

// ---- Spot checks ----
const eq = (a, b, msg) => check(JSON.stringify(a) === JSON.stringify(b), `${msg}: got ${JSON.stringify(a)} expected ${JSON.stringify(b)}`)
const sc = { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 }

eq(effectiveScores(base({ scores: sc, subraceKey: 'standard' })), { str: 11, dex: 11, con: 11, int: 11, wis: 11, cha: 11 }, 'Standard human +1 all')
eq(effectiveScores(base({ scores: sc, subraceKey: 'variant', raceChoices: { asi: { str: 1, con: 1 } } })), { str: 11, dex: 10, con: 11, int: 10, wis: 10, cha: 10 }, 'Variant human +1/+1')
eq(effectiveScores(base({ scores: sc, raceKey: 'half-elf', subraceKey: '', raceChoices: { asi: { dex: 1, wis: 1 } } })), { str: 10, dex: 11, con: 10, int: 10, wis: 11, cha: 12 }, 'Half-elf')
eq(effectiveScores(base({ scores: sc, raceKey: 'half-elf', subraceKey: '', raceChoices: { asi: { cha: 1, wis: 1 } } })).cha, 12, 'Half-elf cannot stack CHA')
eq(effectiveScores(base({ scores: sc, raceKey: 'custom-lineage', subraceKey: '', raceChoices: { asi: { int: 2 } } })).int, 12, 'Custom lineage +2')

const barb = derive(base({ raceKey: 'dwarf', subraceKey: 'mountain', classKey: 'barbarian', level: 5, scores: { str: 15, dex: 14, con: 14, int: 8, wis: 10, cha: 8 } }))
eq([barb.ac, barb.speed], [10 + 2 + 3, 35], 'Mountain dwarf barbarian 5 AC/speed')
const monk = derive(base({ classKey: 'monk', level: 2, scores: { str: 10, dex: 16, con: 12, int: 10, wis: 14, cha: 8 } }))
eq([monk.ac, monk.speed], [10 + 3 + 2, 40], 'Monk 2 AC/speed')
const ek = derive(base({ classKey: 'fighter', subclassKey: 'eldritch-knight', level: 3 }))
eq([ek.spell?.lists, ek.spell?.slots], [['wizard'], [{ level: 1, count: 2 }]], 'Eldritch Knight 3')
eq(derive(base({ classKey: 'paladin', level: 1 })).spell, null, 'Paladin 1 no spells')
eq(derive(base({ classKey: 'paladin', level: 5 })).spell.slots.map((s) => s.count), [4, 2], 'Paladin 5 slots')
eq(derive(base({ classKey: 'ranger', level: 17 })).spell.slots.map((s) => s.count), [4, 3, 3, 3, 1], 'Ranger 17 slots')
eq(derive(base({ classKey: 'warlock', level: 11 })).spell.slots, [{ level: 5, count: 3, pact: true }], 'Warlock 11 pact')
eq(derive(base({ classKey: 'wizard', level: 20 })).spell.slots.map((s) => s.count), [4, 3, 3, 3, 3, 2, 2, 1, 1], 'Wizard 20 slots')
const tough = derive(base({ raceKey: 'dwarf', subraceKey: 'hill', classKey: 'sorcerer', subclassKey: 'draconic', level: 4, scores: { ...sc, con: 10 },
  levelUps: { 4: { type: 'feat', feat: { key: 'tough' } } } }))
// d6, CON 12 (+1 from dwarf): 7 at 1st, 3 × (4 + 1), then +4/level (dwarf 1, draconic 1, tough 2).
eq(tough.maxHp, 7 + 3 * 5 + 4 * 4, 'Hill dwarf draconic tough HP')
eq(derive(base({ classKey: 'sorcerer', subclassKey: 'draconic', level: 1, scores: { ...sc, dex: 14 } })).ac, 15, 'Draconic resilience AC')
const lvl4 = derive(base({ scores: sc, level: 4, levelUps: { 4: { type: 'asi', asi: { str: 2 } } } }))
eq(lvl4.scores.str, 13, 'Level 4 ASI applied')
const capped = derive(base({ scores: { ...sc, str: 19 }, level: 4, levelUps: { 4: { type: 'asi', asi: { str: 2 } } } }))
eq(capped.scores.str, 20, 'ASI capped at 20')
const elf = derive(base({ raceKey: 'elf', subraceKey: 'wood' }))
eq([elf.speed, elf.skills.find((s) => s.key === 'perception').proficient, elf.darkvision], [35, true, 60], 'Wood elf')
const drow = derive(base({ raceKey: 'elf', subraceKey: 'drow', level: 5 }))
eq([drow.darkvision, drow.innate.map((s) => s.key)], [120, ['dancing-lights', 'faerie-fire', 'darkness']], 'Drow')
const rogue = derive(base({ classKey: 'rogue', level: 6, skills: ['stealth', 'acrobatics', 'deception', 'insight'], expertise: ['stealth', 'acrobatics', 'deception', 'insight', 'athletics'] }))
eq(rogue.skills.filter((s) => s.expert).length, 4, 'Rogue 6 expertise count (athletics not proficient)')
const plate = derive(base({ equippedArmor: 'plate', shield: true, scores: { ...sc, str: 15 } }))
eq(plate.ac, 20, 'Plate + shield')
const fighterDef = derive(base({ equippedArmor: 'chain-mail', fightingStyle: 'defense' }))
eq(fighterDef.ac, 17, 'Chain mail + defense')
const alert = derive(base({ scores: sc, subraceKey: 'variant', raceChoices: { feat: { key: 'alert' } } }))
eq(alert.initiative, 5, 'Alert feat')

const art1 = derive(base({ classKey: 'artificer', level: 1, scores: { ...sc, int: 16 } }))
eq([art1.spell.slots, art1.spell.cantripsKnown, art1.spell.preparedMax], [[{ level: 1, count: 2 }], 2, 3], 'Artificer 1')
const art5 = derive(base({ classKey: 'artificer', subclassKey: 'battle-smith', level: 5, scores: { ...sc, int: 14 } }))
eq([art5.spell.slots.map((s) => s.count), art5.spell.preparedMax, art5.spell.alwaysPrepared], [[4, 2], 4, ['heroism', 'shield', 'branding-smite', 'warding-bond']], 'Artificer 5 battle smith')
check(art5.profs.weapons.includes('Martial weapons'), 'Battle smith martial weapons')
check(derive(base({ classKey: 'artificer', subclassKey: 'armorer', level: 3 })).profs.armor.includes('Heavy armor'), 'Armorer heavy armor')
eq(derive(base({ classKey: 'artificer', level: 20 })).spell.slots.map((s) => s.count), [4, 3, 3, 3, 2], 'Artificer 20 slots')

// ---- Builder rules: normalize + validate never crash, and a fresh character only owes real choices ----
const { normalize, validateStep, stepsFor, languageSlots } = await import('../src/builderRules.js')
let owed = 0
for (const r of RACES) {
  for (const sk of r.subraces.length ? r.subraces.map((s) => s.key) : ['']) {
    for (const c of CLASSES) {
      for (const level of [1, 4, 20]) {
        const ch = normalize(base({ raceKey: r.key, subraceKey: sk, classKey: c.key, level, scoreMethod: 'standard' }))
        const errs = stepsFor(ch).flatMap((s) => validateStep(s.key, ch))
        // A default character must at least be asked for its class skills; nothing may be NaN/undefined in messages.
        check(errs.some((e) => e.includes('class skills')), `${r.key}/${sk}/${c.key}/${level} not asked for class skills`)
        check(!errs.some((e) => /undefined|NaN/.test(e)), `${r.key}/${sk}/${c.key}/${level} bad message: ${errs.find((e) => /undefined|NaN/.test(e))}`)
        owed += errs.length
      }
    }
  }
}
// Duplicate skill picks are dropped by precedence (background beats class picks).
const dup = normalize(base({ backgroundKey: 'soldier', skills: ['athletics', 'perception'] }))
eq(dup.skills, ['perception'], 'class pick duplicating background skill is dropped')
// Lowering level trims expertise and level-ups.
const trimmed = normalize(base({ classKey: 'rogue', level: 4, skills: ['stealth', 'acrobatics', 'deception', 'insight'], expertise: ['stealth', 'acrobatics', 'deception', 'insight'], levelUps: { 4: { type: 'asi', asi: { dex: 2 } }, 8: { type: 'asi', asi: { dex: 2 } } } }))
eq([trimmed.expertise.length, Object.keys(trimmed.levelUps)], [2, ['4']], 'rogue 4 trims expertise and level-ups')
eq(languageSlots(base({ raceKey: 'half-elf', subraceKey: '', backgroundKey: 'sage' })), 3, 'Half-elf sage language slots')
// Levistus tiefling: CHA +2 / CON +1 (replaces base), Legacy of Stygia replaces Infernal Legacy.
const lev = derive(base({ raceKey: 'tiefling', subraceKey: 'levistus', level: 5, scores: sc }))
eq([lev.scores.cha, lev.scores.con, lev.scores.int, lev.innate.map((s) => s.key)], [12, 11, 10, ['ray-of-frost', 'armor-of-agathys', 'darkness']], 'Levistus tiefling')
const { racialTraits } = await import('../src/compute.js')
check(!racialTraits(base({ raceKey: 'tiefling', subraceKey: 'levistus' })).some((t) => t.name === 'Infernal Legacy'), 'Levistus drops Infernal Legacy')
// DM bonus feats: Magic Initiate twice at level 1.
const mi = derive(base({ level: 1, bonusFeats: [{ key: 'magic-initiate', spellList: 'wizard', spellAbility: 'int', spells: ['fire-bolt'] }, { key: 'magic-initiate', spellList: 'cleric', spellAbility: 'wis', spells: ['guidance'] }] }))
eq(mi.feats.length, 2, 'two bonus Magic Initiate feats')
eq(mi.innate.map((s) => s.key).sort(), ['fire-bolt', 'guidance'], 'bonus feat spells')
// Off-list class skills are kept; custom proficiencies apply.
eq(normalize(base({ classKey: 'wizard', skills: ['stealth', 'arcana'] })).skills, ['stealth', 'arcana'], 'off-list class skill kept')
const cust = derive(base({ customProfs: { skills: ['stealth'], expertise: ['stealth'], saves: ['wis'], tools: "Thieves' tools, Lute", languages: 'Sylvan' } }))
eq([cust.skills.find((s) => s.key === 'stealth').expert, cust.saves.wis.proficient, cust.profs.tools.includes('Lute'), cust.profs.languages.includes('Sylvan')], [true, true, true, true], 'custom proficiencies')
// Guard (2024): +2/+1 among STR/INT/WIS, Alert origin feat; "none" skips the increases.
const guard = derive(base({ backgroundKey: 'guard', subraceKey: 'standard', scores: sc, bgAsiMode: '21', bgAsi: { str: 2, wis: 1 } }))
eq([guard.scores.str, guard.scores.wis, guard.initiative, guard.skills.find((s) => s.key === 'perception').proficient], [13, 12, 5, true], 'Guard background')
const guardNone = normalize(base({ backgroundKey: 'guard', scores: sc, bgAsiMode: 'none', bgAsi: { str: 2, wis: 1 } }))
eq(derive(guardNone).scores.str, 11, 'Guard with no background increases')
console.log(`builder rules checked (${owed} owed choices across defaults)`)

console.log(fails ? `${fails} failures` : 'all checks passed')
process.exit(fails ? 1 : 0)
