// Derived character math: the single home for rules calculations.
// Reads the structured mechanics on races, classes (classMechanics.js), feats
// (featMechanics.js) and equipment; components only render what derive() returns.
import { getClass } from './data/classes.js'
import { getRace } from './data/races.js'
import { getBackground } from './data/backgrounds.js'
import { ABILITIES, SKILLS, abilityMod, profBonus } from './data/abilities.js'
import { getFeat } from './data/featMechanics.js'
import { getSpellByName, getSpell, ALL_SPELLS } from './data/spells.js'
import { slotsFor, maxSpellLevel } from './data/spellSlots.js'
import { ARMOR, getArmor, getWeapon, STARTING_EQUIPMENT, STARTING_GOLD, SHIELD } from './data/equipment.js'
import { FIGHTING_STYLES } from './data/classMechanics.js'

const ABILITY_KEYS = ABILITIES.map((a) => a.key)
const isAbility = (k) => ABILITY_KEYS.includes(k)
const spellKey = (name) => getSpellByName(name)?.key
const uniq = (arr) => [...new Set(arr.filter(Boolean))]

// ---------- Race ----------

export function getSubrace(char) {
  const race = getRace(char.raceKey)
  return race?.subraces?.find((s) => s.key === char.subraceKey) || null
}

// Race + subrace mechanics merged into one view (subrace overrides scalars, lists concatenate).
export function raceInfo(char) {
  const race = getRace(char.raceKey)
  if (!race) return null
  const sub = getSubrace(char)
  const pick = (k) => (sub && sub[k] !== undefined ? sub[k] : race[k])
  const cat = (k) => [...(race[k] || []), ...(sub?.[k] || [])]
  return {
    race, sub,
    asiChoice: pick('asiChoice'),
    skillChoice: pick('skillChoice'),
    featChoice: (race.featChoice || 0) + (sub?.featChoice || 0),
    languageChoice: (race.languageChoice || 0) + (sub?.languageChoice || 0),
    toolChoice: pick('toolChoice'),
    cantripChoice: pick('cantripChoice'),
    sizeChoice: pick('sizeChoice'),
    variableTrait: pick('variableTrait'),
    ancestryChoice: pick('ancestryChoice'),
    spells: pick('spells'),
    skills: cat('skills'),
    weapons: cat('weapons'),
    armor: cat('armor'),
    tools: cat('tools'),
    darkvision: pick('darkvision') || 0,
    speed: pick('speed') || 30,
    size: race.size,
    hpPerLevel: (race.hpPerLevel || 0) + (sub?.hpPerLevel || 0),
    languages: race.languages.filter((l) => !/choice/i.test(l)),
  }
}

// ---------- Class / subclass ----------

// The chosen subclass, but only once the character has reached the subclass level.
export function activeSubclass(char) {
  const cls = getClass(char.classKey)
  if (!cls || !char.subclassKey) return null
  if (char.level < (cls.subclassLevel || 3)) return null
  return cls.subclasses.find((s) => s.key === char.subclassKey) || null
}

// Class levels at which an ASI/feat is earned, up to the character's level.
export const earnedAsiLevels = (char) => (getClass(char.classKey)?.asiLevels || []).filter((l) => l <= char.level)

// Number of skill expertise picks the class grants at this level.
export function expertiseAllowed(char) {
  const cls = getClass(char.classKey)
  return (cls?.expertise || []).filter((e) => e.level <= char.level).reduce((n, e) => n + e.count, 0)
}

// ---------- Feats ----------

// Every feat the character has taken, with the per-feat choices stored on the character.
export function featsTaken(char) {
  const out = []
  const ri = raceInfo(char)
  if (ri?.featChoice && char.raceChoices?.feat?.key) {
    const feat = getFeat(char.raceChoices.feat.key)
    if (feat) out.push({ feat, choices: char.raceChoices.feat, source: ri.sub?.name || ri.race.name })
  }
  for (const lvl of earnedAsiLevels(char)) {
    const lu = char.levelUps?.[lvl]
    if (lu?.type === 'feat' && lu.feat?.key) {
      const feat = getFeat(lu.feat.key)
      if (feat) out.push({ feat, choices: lu.feat, source: `Level ${lvl}` })
    }
  }
  // 2024 backgrounds grant a fixed origin feat.
  const bgDef = getBackground(char.backgroundKey)
  if (bgDef?.originFeat) {
    const feat = getFeat(bgDef.originFeat)
    if (feat) out.push({ feat, choices: { key: feat.key, ...(char.bgFeatChoices || {}) }, source: bgDef.name })
  }
  // Extra feats granted by the DM, at any level.
  ;(char.bonusFeats || []).forEach((choices, i) => {
    const feat = choices?.key && getFeat(choices.key)
    if (feat) out.push({ feat, choices, source: `Bonus feat ${i + 1}` })
  })
  return out
}

// ---------- Ability scores ----------

function addAsi(out, asi, mult = 1) {
  for (const [k, v] of Object.entries(asi || {})) if (isAbility(k) && typeof v === 'number') out[k] = (out[k] || 0) + v * mult
}

// Ability score increases from every source, as {key: bonus}, split by source for display.
export function scoreBonuses(char) {
  const race = {}
  const ri = raceInfo(char)
  if (ri) {
    if (!ri.sub?.replacesParentAsi) addAsi(race, ri.race.asi)
    addAsi(race, ri.sub?.asi)
    if (ri.asiChoice) {
      const allowed = Object.entries(char.raceChoices?.asi || {}).filter(([k]) => !(ri.asiChoice.exclude || []).includes(k))
      for (const [k] of allowed.slice(0, ri.asiChoice.count)) race[k] = (race[k] || 0) + ri.asiChoice.amount
    }
  }
  // 2024 backgrounds: +2/+1 or +1/+1/+1 among the listed abilities (or none, if using racial increases).
  const bgDef = getBackground(char.backgroundKey)
  if (bgDef?.asiFrom) {
    const picks = Object.entries(char.bgAsi || {}).filter(([k, v]) => bgDef.asiFrom.includes(k) && v > 0)
    const total = picks.reduce((n, [, v]) => n + v, 0)
    if (total <= 3 && picks.every(([, v]) => v <= 2)) for (const [k, v] of picks) race[k] = (race[k] || 0) + v
  }
  const level = {}
  for (const lvl of earnedAsiLevels(char)) {
    const lu = char.levelUps?.[lvl]
    if (lu?.type === 'asi') addAsi(level, lu.asi)
  }
  for (const { feat, choices } of featsTaken(char)) {
    if (feat.asi?.fixed) addAsi(level, feat.asi.fixed)
    else if (feat.asi?.choose && feat.asi.choose.includes(choices.ability)) addAsi(level, { [choices.ability]: feat.asi.amount })
  }
  return { race, level }
}

export function effectiveScores(char) {
  const { race, level } = scoreBonuses(char)
  const out = {}
  for (const k of ABILITY_KEYS) {
    const base = char.scores?.[k] ?? 10
    const total = base + (race[k] || 0) + (level[k] || 0)
    // Increases can't raise a score above 20 (a higher base score is left as entered).
    out[k] = total > 20 ? Math.max(20, base) : total
  }
  return out
}

// ---------- Equipment ----------

// Resolves starting-equipment selections into concrete items.
// char.equipment = { gold: bool, choices: {groupIdx: optionIdx}, picks: {'g-o-i-n': weaponKey} }
export function inventory(char) {
  const groups = STARTING_EQUIPMENT[char.classKey] || []
  const eq = char.equipment || {}
  const inv = { weapons: [], armor: [], shield: false, gear: [] }
  // Taking starting wealth: any armor or shield may be bought, so all can be worn.
  if (eq.gold) return { ...inv, armor: ARMOR.map((a) => a.key), shield: true, bought: true }
  groups.forEach((g, gi) => {
    const oi = g.fixed ? 0 : eq.choices?.[gi]
    const items = g.fixed || g.options?.[oi]
    if (!items) return
    items.forEach((it, ii) => {
      if (it.weapon) inv.weapons.push({ key: it.weapon, qty: it.qty })
      else if (it.armor) inv.armor.push(it.armor)
      else if (it.shield) inv.shield = true
      else if (it.gear) inv.gear.push(it.gear)
      else if (it.pick) {
        for (let n = 0; n < it.qty; n++) {
          const key = eq.picks?.[`${gi}-${oi ?? 0}-${ii}-${n}`]
          if (key) inv.weapons.push({ key, qty: 1 })
        }
      }
    })
  })
  return inv
}

// Is the character proficient with a weapon, given proficiency strings like "Martial weapons" or "Longswords"?
export function weaponProficient(weapon, weaponProfs) {
  if (!weapon) return false
  const singular = (s) => s.toLowerCase().replace(/s$/, '')
  return weaponProfs.some((p) => {
    const lp = p.toLowerCase()
    if (lp === 'simple weapons') return weapon.category === 'simple'
    if (lp === 'martial weapons') return weapon.category === 'martial'
    return singular(p) === singular(weapon.name)
  })
}

export function armorProficient(armor, armorProfs) {
  if (!armor) return true
  if (armorProfs.includes('All armor')) return true
  const need = { light: 'Light armor', medium: 'Medium armor', heavy: 'Heavy armor' }[armor.category]
  return armorProfs.includes(need)
}

// ---------- Derive ----------

export function derive(char) {
  const cls = getClass(char.classKey)
  const ri = raceInfo(char)
  const race = ri?.race
  const bg = getBackground(char.backgroundKey)
  const sub = activeSubclass(char)
  const feats = featsTaken(char)
  const scores = effectiveScores(char)
  const mods = {}
  for (const k of ABILITY_KEYS) mods[k] = abilityMod(scores[k])
  const pb = profBonus(char.level)

  // --- Proficiencies ---
  const subSkills = sub ? [...(sub.skills || []), ...(sub.skillChoice ? (char.subclassChoices?.skills || []).slice(0, sub.skillChoice.count) : [])] : []
  const raceSkillPicks = ri?.skillChoice ? (char.raceChoices?.skills || []).slice(0, ri.skillChoice.count) : []
  const variableSkill = ri?.variableTrait && char.raceChoices?.variable === 'skill' ? (char.raceChoices?.variableSkills || []).slice(0, 1) : []
  const featSkills = feats.flatMap(({ feat, choices }) => (feat.skillChoice ? (choices.skills || []).slice(0, feat.skillChoice.count) : []))
  // Player-chosen extras from the Review step (house rules / DM grants), unrestricted.
  const custom = char.customProfs || {}
  // Free-text extras are stored as comma-separated strings.
  const listOf = (v) => (Array.isArray(v) ? v : (v || '').split(',').map((t) => t.trim()).filter(Boolean))
  const skillProfs = new Set(uniq([
    ...(char.skills || []), ...(bg?.skills || []), ...(ri?.skills || []),
    ...raceSkillPicks, ...variableSkill, ...subSkills, ...featSkills, ...(custom.skills || []),
  ]))

  // Expertise only counts on proficient skills and only as many as the class grants.
  // Tool expertise picks (e.g. a rogue's thieves' tools) use up a slot but aren't skills.
  const expertisePicks = (char.expertise || []).slice(0, expertiseAllowed(char))
  const classExpertise = expertisePicks.filter((s) => skillProfs.has(s))
  const toolExpertise = expertisePicks.filter((s) => !SKILLS.some((k) => k.key === s))
  const subExpertise = sub ? [...(sub.expertiseSkills || []), ...(sub.skillChoice?.expertise ? subSkills : [])] : []
  const featExpertise = feats.flatMap(({ feat, choices }) => (feat.expertiseChoice ? (choices.expertise || []).slice(0, feat.expertiseChoice) : []))
  const expertise = new Set([...classExpertise, ...subExpertise, ...featExpertise, ...(custom.expertise || [])].filter((s) => skillProfs.has(s)))

  const saveProfs = new Set(cls?.saves || [])
  feats.forEach(({ feat, choices }) => { if (feat.saveFromAsi && choices.ability) saveProfs.add(choices.ability) })
  ;(custom.saves || []).forEach((k) => saveProfs.add(k))

  const profs = {
    armor: uniq([...(cls?.armor || []), ...(ri?.armor || []), ...(sub?.armor || []), ...feats.flatMap(({ feat }) => feat.armor || []), ...listOf(custom.armor)]),
    weapons: uniq([...(cls?.weapons || []), ...(ri?.weapons || []), ...(sub?.weapons || []), ...listOf(custom.weapons)]),
    tools: uniq([
      ...(cls?.tools || []), ...(bg?.tools || []), ...(ri?.tools || []), ...(sub?.tools || []),
      char.raceChoices?.tool, ...feats.flatMap(({ feat }) => feat.tools || []), ...listOf(custom.tools),
    ]),
    languages: uniq([...(ri?.languages || []), ...(sub?.languages || []), ...(char.languages || []), ...listOf(custom.languages)]),
  }

  // Jack of All Trades: half proficiency (rounded down) on non-proficient checks, incl. initiative.
  const hasJoat = !!cls?.jackOfAllTrades && char.level >= cls.jackOfAllTrades
  const joat = Math.floor(pb / 2)

  const saves = {}
  for (const k of ABILITY_KEYS) {
    const proficient = saveProfs.has(k)
    saves[k] = { value: mods[k] + (proficient ? pb : 0), proficient }
  }

  const skills = SKILLS.map((s) => {
    const proficient = skillProfs.has(s.key)
    const expert = expertise.has(s.key)
    const bonus = expert ? pb * 2 : proficient ? pb : hasJoat ? joat : 0
    return { ...s, value: mods[s.ability] + bonus, proficient, expert, joat: !proficient && hasJoat }
  })

  // --- Hit points ---
  const hd = cls?.hitDie || 8
  const avgPerLevel = Math.floor(hd / 2) + 1
  const perLevelBonus = (ri?.hpPerLevel || 0) + (sub?.hpPerLevel || 0) + feats.reduce((n, { feat }) => n + (feat.hpPerLevel || 0), 0)
  let maxHp = Math.max(1, hd + mods.con)
  for (let l = 2; l <= char.level; l++) maxHp += Math.max(1, avgPerLevel + mods.con)
  maxHp += perLevelBonus * char.level

  // --- Armor class ---
  const inv = inventory(char)
  const armor = getArmor(char.equippedArmor)
  const shieldOn = !!char.shield
  const mediumDexCap = feats.some(({ feat }) => feat.mediumDexCap) ? 3 : 2
  const style = FIGHTING_STYLES[char.fightingStyle] && cls?.fightingStyle && char.level >= cls.fightingStyle.level ? FIGHTING_STYLES[char.fightingStyle] : null
  const acOptions = []
  if (armor) {
    const cap = armor.category === 'medium' ? mediumDexCap : armor.dexCap
    const dex = cap === null ? mods.dex : Math.min(mods.dex, cap)
    acOptions.push({ value: armor.base + dex + (style?.acArmored || 0) + (shieldOn ? SHIELD.bonus : 0), label: `${armor.name}${shieldOn ? ' + shield' : ''}` })
  } else {
    acOptions.push({ value: 10 + mods.dex + (shieldOn ? SHIELD.bonus : 0), label: `Unarmored${shieldOn ? ' + shield' : ''}` })
    const unarmored = [cls?.unarmoredAC, sub?.unarmoredAC, ...feats.map(({ feat }) => feat.unarmoredAC)].filter(Boolean)
    for (const u of unarmored) {
      if (shieldOn && !u.shieldOk) continue
      const v = (u.base || 10) + u.abilities.reduce((n, k) => n + mods[k], 0) + (shieldOn ? SHIELD.bonus : 0)
      acOptions.push({ value: v, label: `Unarmored Defense (${u.base || 10} + ${u.abilities.map((k) => k.toUpperCase()).join(' + ')})${shieldOn ? ' + shield' : ''}` })
    }
  }
  // On a tie, prefer the later (feature-based) option so the sheet names the feature.
  const bestAc = acOptions.reduce((a, b) => (b.value >= a.value ? b : a))
  const acNotes = []
  if (armor && !armorProficient(armor, profs.armor)) acNotes.push(`Not proficient with ${armor.name.toLowerCase()} armor: disadvantage on STR/DEX rolls and no spellcasting.`)
  if (armor?.stealthDis) acNotes.push('Disadvantage on Stealth checks.')
  if (shieldOn && !profs.armor.some((a) => a === 'Shields' || a === 'All armor' || a.startsWith('Shields'))) acNotes.push('Not proficient with shields.')

  // --- Speed ---
  let speed = ri?.speed || 30
  if (armor?.strReq && scores.str < armor.strReq) { speed -= 10; acNotes.push(`STR below ${armor.strReq}: speed reduced by 10 ft.`) }
  let classSpeed = 0
  for (const b of cls?.speedBonus || []) {
    if (char.level < b.level) continue
    if (b.unarmored && (armor || shieldOn)) continue
    if (b.noHeavyArmor && armor?.category === 'heavy') continue
    classSpeed = Math.max(classSpeed, b.amount)
  }
  speed += classSpeed + feats.reduce((n, { feat }) => n + (feat.speed || 0), 0)

  const initiative = mods.dex + (hasJoat ? joat : 0) + feats.reduce((n, { feat }) => n + (feat.initiative || 0), 0)
  const passiveBonus = feats.reduce((n, { feat }) => n + (feat.passive || 0), 0)
  const passivePerception = 10 + skills.find((s) => s.key === 'perception').value + passiveBonus
  const darkvision = Math.max(
    ri?.darkvision || 0,
    ri?.variableTrait && char.raceChoices?.variable === 'darkvision' ? ri.variableTrait.darkvision : 0,
    sub?.darkvision || 0,
  )
  const size = ri?.sizeChoice ? char.raceChoices?.size || ri.sizeChoice[1] : ri?.size

  // --- Spellcasting ---
  const spell = deriveSpellcasting(char, cls, sub, mods, pb)
  const innate = deriveInnateSpells(char, ri, feats, mods, pb)

  // --- Attacks from carried weapons ---
  const attacks = inv.weapons.map(({ key, qty }) => {
    const w = getWeapon(key)
    const finesse = w.props.includes('finesse')
    const monkWeapon = char.classKey === 'monk' && (w.key === 'shortsword' || (w.category === 'simple' && w.kind === 'melee' && !w.props.includes('two-handed') && !w.props.includes('heavy')))
    const ab = w.kind === 'ranged' && !w.props.includes('thrown') ? 'dex' : finesse || monkWeapon ? (mods.dex > mods.str ? 'dex' : 'str') : 'str'
    const prof = weaponProficient(w, profs.weapons)
    const styleBonus = style?.attackBonus?.ranged && w.kind === 'ranged' ? style.attackBonus.ranged : 0
    const toHit = mods[ab] + (prof ? pb : 0) + styleBonus
    const dmgMod = mods[ab]
    return {
      key, qty, name: w.name, proficient: prof,
      bonus: toHit,
      damage: `${w.damage}${dmgMod ? (dmgMod > 0 ? ` + ${dmgMod}` : ` − ${-dmgMod}`) : ''} ${w.type}`,
      notes: [...w.props, w.range ? `range ${w.range}` : null].filter(Boolean).join(', '),
    }
  })

  return {
    cls, race, sub, bg, ri, feats, scores, mods, pb, saves, skills, profs, expertise, toolExpertise,
    maxHp, ac: bestAc.value, acLabel: bestAc.label, acNotes, baseAC: bestAc.value,
    initiative, speed, darkvision, size, passivePerception, hitDie: hd,
    spell, innate, inventory: inv, attacks, fightingStyle: style,
  }
}

function deriveSpellcasting(char, cls, sub, mods, pb) {
  const cast = sub?.casting || cls?.casting
  if (!cast || char.level < cast.startLevel) return null
  const ab = cast.ability
  const slots = slotsFor(cast, char.level)
  const maxLevel = maxSpellLevel(slots)
  const lvlMod = mods[ab]
  const preparedMax = cast.prepared === 'level' ? Math.max(1, lvlMod + char.level)
    : cast.prepared === 'half' ? Math.max(1, lvlMod + Math.floor(char.level / 2)) : null
  const alwaysPrepared = []
  for (const [lvl, names] of Object.entries(sub?.alwaysPrepared || {})) {
    if (Number(lvl) <= char.level) names.forEach((n) => alwaysPrepared.push(spellKey(n)))
  }
  const bonusCantrips = (sub?.bonusCantrips || []).map(spellKey)
  if (sub?.cantripChoice && char.subclassChoices?.cantrip) bonusCantrips.push(char.subclassChoices.cantrip)
  return {
    type: cast.type, ability: ab, dc: 8 + pb + lvlMod, attack: pb + lvlMod,
    startLevel: cast.startLevel, slots, maxLevel,
    cantripsKnown: cast.cantrips?.[char.level - 1] || 0,
    spellsKnown: cast.known ? cast.known[char.level - 1] : null,
    preparedMax,
    lists: uniq([cast.list, ...(sub?.extraLists || [])]),
    expanded: uniq((sub?.expandedList || []).map(spellKey)),
    alwaysPrepared: uniq(alwaysPrepared),
    bonusCantrips: uniq(bonusCantrips),
  }
}

// Racial and feat spells cast without (or alongside) class spellcasting.
function deriveInnateSpells(char, ri, feats, mods, pb) {
  const out = []
  const add = (key, ability, source, minLevel = 1) => {
    if (!key || char.level < minLevel) return
    out.push({ key, ability, source, dc: 8 + pb + mods[ability], attack: pb + mods[ability] })
  }
  if (ri?.spells) ri.spells.list.forEach((s) => add(s.key, ri.spells.ability, ri.sub?.name || ri.race.name, s.level))
  if (ri?.cantripChoice && char.raceChoices?.cantrip) add(char.raceChoices.cantrip, ri.cantripChoice.ability, ri.sub?.name || ri.race.name)
  for (const { feat, choices, source } of feats) {
    const ab = choices.spellAbility || 'int'
    ;(feat.spells || []).forEach((n) => add(spellKey(n), ab, `${feat.name} (${source})`))
    ;(choices.spells || []).forEach((k) => add(k, ab, `${feat.name} (${source})`))
  }
  return out.filter((s, i) => out.findIndex((o) => o.key === s.key) === i)
}

// Spells a character may choose for their class spellcasting, with the limits that apply.
// Always-prepared and bonus spells are granted automatically and excluded from the pools.
export function spellOptions(char, d = derive(char)) {
  const sp = d.spell
  if (!sp) return null
  const auto = new Set([...sp.alwaysPrepared, ...sp.bonusCantrips])
  const onList = (s) => s.classes.some((c) => sp.lists.includes(c)) || sp.expanded.includes(s.key)
  const pool = ALL_SPELLS.filter((s) => onList(s) && !auto.has(s.key))
  return {
    cantrips: pool.filter((s) => s.level === 0),
    leveled: pool.filter((s) => s.level >= 1 && s.level <= sp.maxLevel),
    cantripLimit: sp.cantripsKnown,
    leveledLimit: sp.spellsKnown ?? sp.preparedMax ?? 0,
    leveledLabel: sp.spellsKnown != null ? 'spells known' : 'prepared spells',
  }
}

// ---------- Sheet text helpers ----------

// All racial traits (base + subrace) as {name, desc} for the sheet.
export function racialTraits(char) {
  const race = getRace(char.raceKey)
  if (!race) return []
  const sub = getSubrace(char)
  // Some subraces swap out a base trait (e.g. Levistus' Legacy of Stygia replaces Infernal Legacy).
  const out = race.traits.filter((t) => !(sub?.replacesTraits || []).includes(t.name))
  if (sub) sub.traits.forEach((t) => out.push(t))
  return out
}

// Pre-filled text for the sheet's free-text feature areas, from our rich data.
export function defaultFeatureText(char) {
  const feats = classFeaturesUpTo(char)
  const compact = feats.map((f) => `Lvl ${f.level}: ${f.name}${f.sub ? ` (${f.sub})` : ''}`).join('\n')
  const detailed = feats.map((f) => `${f.name} — Lvl ${f.level}${f.sub ? ` · ${f.sub}` : ''}\n${f.desc}`).join('\n\n')
  return { compact, detailed }
}

export function classFeaturesUpTo(char) {
  const cls = getClass(char.classKey)
  if (!cls) return []
  const feats = cls.features?.filter((f) => f.level <= char.level) || []
  const sub = activeSubclass(char)
  if (sub) sub.features?.filter((f) => f.level <= char.level).forEach((f) => feats.push({ ...f, sub: sub.name }))
  return feats.sort((a, b) => a.level - b.level)
}

export const spellName = (key) => getSpell(key)?.name || key

// Pre-filled equipment list for the sheet: starting gear (or wealth) plus background gear.
export function defaultEquipmentText(char, d = derive(char)) {
  const inv = d.inventory
  const lines = []
  if (inv.bought) lines.push(`Starting wealth: ${STARTING_GOLD[char.classKey]}`)
  else {
    inv.weapons.forEach((w) => lines.push(`${w.qty > 1 ? `${w.qty} × ` : ''}${getWeapon(w.key)?.name}`))
    inv.armor.forEach((k) => lines.push(`${getArmor(k)?.name} armor${k === char.equippedArmor ? ' (worn)' : ''}`))
    if (inv.shield) lines.push(`Shield${char.shield ? ' (equipped)' : ''}`)
    inv.gear.forEach((g) => lines.push(g))
  }
  if (d.bg?.equipment) lines.push('', `Background: ${d.bg.equipment}`)
  return lines.join('\n')
}
