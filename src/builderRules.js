// Character-builder rules: which choices a character owes, keeping state legal
// as choices change (normalize), and per-step validation for the wizard.
import { getClass } from './data/classes.js'
import { getBackground } from './data/backgrounds.js'
import { SKILLS, STANDARD_ARRAY, POINT_BUY_COST } from './data/abilities.js'
import { STARTING_EQUIPMENT } from './data/equipment.js'
import {
  derive, raceInfo, activeSubclass, earnedAsiLevels, expertiseAllowed, featsTaken, inventory, spellOptions, scoreBonuses,
} from './compute.js'

// PHB standard and exotic languages.
export const LANGUAGES = [
  'Common', 'Dwarvish', 'Elvish', 'Giant', 'Gnomish', 'Goblin', 'Halfling', 'Orc',
  'Abyssal', 'Celestial', 'Draconic', 'Deep Speech', 'Infernal', 'Primordial', 'Sylvan', 'Undercommon',
]

// PHB Draconic Ancestry table.
export const DRAGON_ANCESTRY = [
  { key: 'black', name: 'Black', damage: 'Acid', breath: '5 by 30 ft. line (Dex. save)' },
  { key: 'blue', name: 'Blue', damage: 'Lightning', breath: '5 by 30 ft. line (Dex. save)' },
  { key: 'brass', name: 'Brass', damage: 'Fire', breath: '5 by 30 ft. line (Dex. save)' },
  { key: 'bronze', name: 'Bronze', damage: 'Lightning', breath: '5 by 30 ft. line (Dex. save)' },
  { key: 'copper', name: 'Copper', damage: 'Acid', breath: '5 by 30 ft. line (Dex. save)' },
  { key: 'gold', name: 'Gold', damage: 'Fire', breath: '15 ft. cone (Dex. save)' },
  { key: 'green', name: 'Green', damage: 'Poison', breath: '15 ft. cone (Con. save)' },
  { key: 'red', name: 'Red', damage: 'Fire', breath: '15 ft. cone (Dex. save)' },
  { key: 'silver', name: 'Silver', damage: 'Cold', breath: '15 ft. cone (Con. save)' },
  { key: 'white', name: 'White', damage: 'Cold', breath: '15 ft. cone (Con. save)' },
]

const ALL_SKILLS = SKILLS.map((s) => s.key)
const fromList = (from) => (from === 'any' ? ALL_SKILLS : from || [])
const skillName = (k) => SKILLS.find((s) => s.key === k)?.name || k

// ---------- What the character owes ----------

// Extra languages owed from race, background, subclass and feats.
export function languageSlots(char) {
  const ri = raceInfo(char)
  const bg = getBackground(char.backgroundKey)
  const sub = activeSubclass(char)
  const feats = featsTaken(char)
  return (ri?.languageChoice || 0) + (bg?.languages || 0) + (sub?.languageChoice || 0)
    + feats.reduce((n, { feat }) => n + (feat.languageChoice || 0), 0)
}

// Skill proficiencies from each source, in precedence order (fixed grants first).
// A lower-precedence pick that duplicates a higher one is dropped by normalize().
export function skillSources(char) {
  const ri = raceInfo(char)
  const bg = getBackground(char.backgroundKey)
  const sub = activeSubclass(char)
  const fixed = [...(bg?.skills || []), ...(ri?.skills || []), ...(sub?.skills || [])]
  const race = [...(char.raceChoices?.skills || []), ...(char.raceChoices?.variable === 'skill' ? char.raceChoices?.variableSkills || [] : [])]
  const cls = char.skills || []
  const subPicks = char.subclassChoices?.skills || []
  const feat = featsTaken(char).flatMap(({ choices }) => choices.skills || [])
  return { fixed, race, cls, sub: subPicks, feat }
}

// Skills already granted by any source other than the one named (for greying out pickers).
export function skillsTakenExcept(char, source) {
  const s = skillSources(char)
  return new Set(Object.entries(s).filter(([k]) => k !== source).flatMap(([, v]) => v))
}

// The spell-step is shown only for class spellcasters (racial/feat spells are picked inline).
export function hasSpellStep(char) {
  return !!derive(char).spell
}

// ---------- Normalize: keep state legal after any change ----------

const take = (arr, n) => (arr || []).slice(0, Math.max(0, n))
const dedupe = (arr, used) => (arr || []).filter((k) => { if (used.has(k)) return false; used.add(k); return true })

export function normalize(input) {
  const c = { ...input }
  const cls = getClass(c.classKey)
  c.level = Math.max(1, Math.min(20, Number(c.level) || 1))

  // Race / subrace
  const raceObj = raceInfo({ ...c, subraceKey: '' })?.race
  if (raceObj?.subraces?.length) {
    if (!raceObj.subraces.some((s) => s.key === c.subraceKey)) c.subraceKey = raceObj.subraces[0].key
  } else c.subraceKey = ''
  const ri = raceInfo(c)
  const rc = { ...(c.raceChoices || {}) }
  if (ri?.asiChoice) {
    const keys = Object.keys(rc.asi || {}).filter((k) => !(ri.asiChoice.exclude || []).includes(k))
    rc.asi = Object.fromEntries(take(keys, ri.asiChoice.count).map((k) => [k, ri.asiChoice.amount]))
  } else delete rc.asi
  if (!ri?.skillChoice) delete rc.skills
  if (!ri?.featChoice) delete rc.feat
  if (!ri?.variableTrait) { delete rc.variable; delete rc.variableSkills }
  if (rc.variable !== 'skill') delete rc.variableSkills
  if (!ri?.sizeChoice) delete rc.size
  if (!ri?.toolChoice || !ri.toolChoice.from.includes(rc.tool)) delete rc.tool
  if (!ri?.cantripChoice) delete rc.cantrip
  if (!ri?.ancestryChoice) delete rc.ancestry
  c.raceChoices = rc

  // Subclass
  if (!cls?.subclasses?.some((s) => s.key === c.subclassKey)) c.subclassKey = ''
  const sub = activeSubclass(c)
  const sc = { ...(c.subclassChoices || {}) }
  if (sc.forSubclass !== c.subclassKey) { c.subclassChoices = { forSubclass: c.subclassKey }; } else c.subclassChoices = sc
  if (!sub?.cantripChoice) delete c.subclassChoices.cantrip

  // Skills: dedupe across sources by precedence, then trim to counts
  const used = new Set(skillSources(c).fixed)
  if (rc.skills) rc.skills = take(dedupe(rc.skills.filter((k) => fromList(ri.skillChoice.from).includes(k)), used), ri.skillChoice.count)
  if (rc.variableSkills) rc.variableSkills = take(dedupe(rc.variableSkills, used), 1)
  c.skills = take(dedupe((c.skills || []).filter((k) => fromList(cls?.skillsFrom).includes(k)), used), cls?.skillsChoose || 0)
  if (sub?.skillChoice) c.subclassChoices.skills = take(dedupe((c.subclassChoices.skills || []).filter((k) => fromList(sub.skillChoice.from).includes(k)), used), sub.skillChoice.count)
  else delete c.subclassChoices.skills

  // Level-ups: only earned ASI levels, and feat sub-choices deduped against other skills
  const earned = earnedAsiLevels(c)
  c.levelUps = Object.fromEntries(Object.entries(c.levelUps || {}).filter(([l]) => earned.includes(Number(l))))
  const fixFeat = (f) => (f?.skills ? { ...f, skills: dedupe(f.skills, used) } : f)
  if (rc.feat) rc.feat = fixFeat(rc.feat)
  for (const l of Object.keys(c.levelUps)) if (c.levelUps[l]?.feat) c.levelUps[l] = { ...c.levelUps[l], feat: fixFeat(c.levelUps[l].feat) }

  // Expertise: only as many as the class grants, only from proficient skills (or the class's expertise tools)
  const d0 = derive(c)
  const allowedExp = new Set([...d0.skills.filter((s) => s.proficient).map((s) => s.key), ...(cls?.expertiseTools ? ['thieves-tools'] : [])])
  c.expertise = take([...new Set((c.expertise || []).filter((k) => allowedExp.has(k)))], expertiseAllowed(c))

  // Fighting style, infusions
  if (!cls?.fightingStyle || c.level < cls.fightingStyle.level || !cls.fightingStyle.options.includes(c.fightingStyle)) delete c.fightingStyle
  const infusionCount = cls?.infusionsKnown?.[c.level - 1] || 0
  c.infusions = take((c.infusions || []).filter((k) => cls?.infusions?.some((i) => i.key === k && (i.prereqLevel || 0) <= c.level)), infusionCount)

  // Languages: unique, not already known, trimmed to slots
  const known = new Set(d0.profs.languages.filter((l) => !(c.languages || []).includes(l)))
  c.languages = take([...new Set(c.languages || [])].filter((l) => !known.has(l)), languageSlots(c))

  // Equipment resets when the class changes; equipped items must be carried
  if (c.equipment?.classKey !== c.classKey) c.equipment = { classKey: c.classKey, choices: {}, picks: {} }
  const inv = inventory(c)
  if (c.equippedArmor && !inv.armor.includes(c.equippedArmor)) c.equippedArmor = ''
  if (c.shield && !inv.shield) c.shield = false

  // Spells: only legal options, trimmed to limits
  const opts = spellOptions(c)
  if (!opts) c.spells = []
  else {
    const cantripKeys = new Set(opts.cantrips.map((s) => s.key))
    const leveledKeys = new Set(opts.leveled.map((s) => s.key))
    const sp = [...new Set(c.spells || [])]
    c.spells = [...take(sp.filter((k) => cantripKeys.has(k)), opts.cantripLimit), ...take(sp.filter((k) => leveledKeys.has(k)), opts.leveledLimit)]
  }
  return c
}

// ---------- Validation ----------

// Errors for one feat choice object, given its resolved feat definition.
export function featChoiceErrors(feat, choices, where) {
  if (!feat) return [`${where}: choose a feat.`]
  const errs = []
  if (feat.asi?.choose && !feat.asi.choose.includes(choices.ability)) errs.push(`${where}: choose which ability ${feat.name} increases.`)
  if (feat.skillChoice && (choices.skills || []).length < feat.skillChoice.count) errs.push(`${where}: choose ${feat.skillChoice.count} skill proficienc${feat.skillChoice.count === 1 ? 'y' : 'ies'} for ${feat.name}.`)
  if (feat.expertiseChoice && (choices.expertise || []).length < feat.expertiseChoice) errs.push(`${where}: choose a skill for ${feat.name}'s expertise.`)
  if (feat.spellChoice) {
    if (!choices.spellList) errs.push(`${where}: choose a class spell list for ${feat.name}.`)
    else if ((choices.spells || []).length < feat.spellChoice.cantrips + feat.spellChoice.level1) errs.push(`${where}: choose ${feat.spellChoice.cantrips} cantrip${feat.spellChoice.cantrips > 1 ? 's' : ''} and ${feat.spellChoice.level1} 1st-level spell for ${feat.name}.`)
  }
  if (feat.toolChoice && !choices.tool) errs.push(`${where}: choose a tool for ${feat.name}.`)
  return errs
}

export const STEP_DEFS = [
  { key: 'race', label: 'Race' },
  { key: 'class', label: 'Class' },
  { key: 'background', label: 'Background' },
  { key: 'abilities', label: 'Abilities' },
  { key: 'levelups', label: 'Level-ups' },
  { key: 'equipment', label: 'Equipment' },
  { key: 'spells', label: 'Spells' },
  { key: 'review', label: 'Review' },
]

export function stepsFor(char) {
  return STEP_DEFS.filter((s) => s.key !== 'spells' || hasSpellStep(char))
}

export function validateStep(step, char) {
  const errs = []
  const ri = raceInfo(char)
  const cls = getClass(char.classKey)
  const d = derive(char)

  if (step === 'race') {
    if (!ri) return ['Choose a race.']
    if (ri.race.subraces.length && !ri.sub) errs.push('Choose a subrace.')
    if (ri.asiChoice && Object.keys(char.raceChoices?.asi || {}).length < ri.asiChoice.count) errs.push(`Choose ${ri.asiChoice.count} abilit${ri.asiChoice.count === 1 ? 'y' : 'ies'} to increase by ${ri.asiChoice.amount}.`)
    if (ri.skillChoice && (char.raceChoices?.skills || []).length < ri.skillChoice.count) errs.push(`Choose ${ri.skillChoice.count} racial skill proficienc${ri.skillChoice.count === 1 ? 'y' : 'ies'}.`)
    if (ri.variableTrait) {
      if (!char.raceChoices?.variable) errs.push('Choose darkvision or a skill proficiency (Variable Trait).')
      else if (char.raceChoices.variable === 'skill' && !(char.raceChoices.variableSkills || []).length) errs.push('Choose a skill for your Variable Trait.')
    }
    if (ri.sizeChoice && !char.raceChoices?.size) errs.push('Choose your size.')
    if (ri.toolChoice && !char.raceChoices?.tool) errs.push('Choose a tool proficiency.')
    if (ri.cantripChoice && !char.raceChoices?.cantrip) errs.push('Choose your racial cantrip.')
    if (ri.ancestryChoice && !char.raceChoices?.ancestry) errs.push('Choose your draconic ancestry.')
    if (ri.featChoice) {
      const t = d.feats.find((f) => f.source === (ri.sub?.name || ri.race.name))
      errs.push(...featChoiceErrors(t?.feat, char.raceChoices?.feat || {}, 'Racial feat'))
    }
  }

  if (step === 'class') {
    if (!cls) return ['Choose a class.']
    if (cls.subclasses.length && char.level >= cls.subclassLevel && !char.subclassKey) errs.push(`Choose a subclass (required at level ${cls.subclassLevel}).`)
    if ((char.skills || []).length < cls.skillsChoose) errs.push(`Choose ${cls.skillsChoose} class skills (${(char.skills || []).length} chosen).`)
    const sub = d.sub
    if (sub?.skillChoice && (char.subclassChoices?.skills || []).length < sub.skillChoice.count) errs.push(`Choose ${sub.skillChoice.count} skill${sub.skillChoice.count > 1 ? 's' : ''} from ${sub.name}.`)
    if (sub?.cantripChoice && !char.subclassChoices?.cantrip) errs.push(`Choose your ${sub.name} cantrip.`)
    const exp = expertiseAllowed(char)
    if (exp && (char.expertise || []).length < exp) errs.push(`Choose ${exp} expertise picks (${(char.expertise || []).length} chosen).`)
    if (cls.fightingStyle && char.level >= cls.fightingStyle.level && !char.fightingStyle) errs.push('Choose a fighting style.')
    const inf = cls.infusionsKnown?.[char.level - 1] || 0
    if (inf && (char.infusions || []).length < inf) errs.push(`Choose ${inf} artificer infusions (${(char.infusions || []).length} chosen).`)
  }

  if (step === 'background') {
    if (!getBackground(char.backgroundKey)) errs.push('Choose a background.')
    const slots = languageSlots(char)
    if ((char.languages || []).length < slots) errs.push(`Choose ${slots} additional language${slots > 1 ? 's' : ''} (${(char.languages || []).length} chosen).`)
  }

  if (step === 'abilities') {
    const vals = Object.values(char.scores || {})
    if (vals.length !== 6 || vals.some((v) => !Number.isFinite(v))) errs.push('Enter all six ability scores.')
    if (char.scoreMethod === 'standard' && [...vals].sort((a, b) => b - a).join() !== STANDARD_ARRAY.join()) errs.push(`Assign each value of the standard array (${STANDARD_ARRAY.join(', ')}) exactly once.`)
    if (char.scoreMethod === 'pointbuy') {
      const used = vals.reduce((s, v) => s + (POINT_BUY_COST[v] ?? 99), 0)
      if (used > 27) errs.push('Point buy exceeds 27 points (scores must be 8–15).')
    }
    if (char.scoreMethod === 'roll' && (char.rolled || []).length === 6 && [...vals].sort((a, b) => b - a).join() !== [...char.rolled].sort((a, b) => b - a).join()) errs.push('Assign each rolled value exactly once.')
    if (char.scoreMethod === 'roll' && (char.rolled || []).length !== 6) errs.push('Roll your ability scores.')
    if (char.scoreMethod === 'manual' && vals.some((v) => v < 3 || v > 18)) errs.push('Base scores must be between 3 and 18.')
  }

  if (step === 'levelups') {
    const { race } = scoreBonuses(char)
    for (const lvl of earnedAsiLevels(char)) {
      const lu = char.levelUps?.[lvl]
      if (!lu?.type) { errs.push(`Level ${lvl}: choose an Ability Score Improvement or a feat.`); continue }
      if (lu.type === 'asi') {
        const total = Object.values(lu.asi || {}).reduce((a, b) => a + b, 0)
        if (total !== 2) errs.push(`Level ${lvl}: assign +2 to one ability or +1 to two abilities.`)
      } else {
        const t = d.feats.find((f) => f.source === `Level ${lvl}`)
        errs.push(...featChoiceErrors(t?.feat, lu.feat || {}, `Level ${lvl}`))
      }
    }
    // Any increase that would push a score past 20 is wasted; flag it.
    const raw = {}
    for (const k of Object.keys(char.scores || {})) raw[k] = (char.scores[k] || 0) + (race[k] || 0)
    for (const lvl of earnedAsiLevels(char)) {
      const lu = char.levelUps?.[lvl]
      for (const [k, v] of Object.entries(lu?.type === 'asi' ? lu.asi || {} : {})) raw[k] += v
    }
    for (const { feat, choices } of d.feats) {
      if (feat.asi?.fixed) for (const [k, v] of Object.entries(feat.asi.fixed)) raw[k] += v
      else if (feat.asi?.choose && choices.ability) raw[choices.ability] += feat.asi.amount
    }
    for (const [k, v] of Object.entries(raw)) if (v > 20 && (char.scores[k] || 0) <= 20) errs.push(`${k.toUpperCase()} would exceed 20 (${v}); move an increase elsewhere.`)
  }

  if (step === 'equipment') {
    const eq = char.equipment || {}
    if (!eq.gold) {
      const groups = STARTING_EQUIPMENT[char.classKey] || []
      groups.forEach((g, gi) => {
        const oi = g.fixed ? 0 : eq.choices?.[gi]
        if (oi === undefined) { errs.push(`Make starting equipment choice ${gi + 1}.`); return }
        const items = g.fixed || g.options[oi]
        items.forEach((it, ii) => {
          if (!it.pick) return
          for (let n = 0; n < it.qty; n++) if (!eq.picks?.[`${gi}-${oi}-${ii}-${n}`]) errs.push(`Choose a weapon for equipment choice ${gi + 1}.`)
        })
      })
    }
  }

  if (step === 'spells') {
    const opts = spellOptions(char, d)
    if (opts) {
      const keys = new Set(char.spells || [])
      const c = opts.cantrips.filter((s) => keys.has(s.key)).length
      const l = opts.leveled.filter((s) => keys.has(s.key)).length
      if (c < opts.cantripLimit) errs.push(`Choose ${opts.cantripLimit} cantrips (${c} chosen).`)
      if (l < opts.leveledLimit) errs.push(`Choose ${opts.leveledLimit} ${opts.leveledLabel} (${l} chosen).`)
    }
  }

  if (step === 'review') {
    for (const s of stepsFor(char)) if (s.key !== 'review') errs.push(...validateStep(s.key, char).map((e) => `${s.label}: ${e}`))
  }
  return [...new Set(errs)]
}

export { skillName }
