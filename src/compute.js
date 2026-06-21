// Derived character math: applies race ASIs, computes mods, AC, HP, saves, skills.
import { getClass } from './data/classes.js'
import { getRace } from './data/races.js'
import { getBackground } from './data/backgrounds.js'
import { ABILITIES, SKILLS, abilityMod, profBonus } from './data/abilities.js'

export function effectiveScores(char) {
  const race = getRace(char.raceKey)
  const out = { ...char.scores }
  if (race?.asi) for (const [k, v] of Object.entries(race.asi)) out[k] = (out[k] || 0) + v
  if (char.subraceKey && race?.subraces) {
    const sub = race.subraces.find((s) => s.key === char.subraceKey)
    if (sub?.asi) for (const [k, v] of Object.entries(sub.asi)) out[k] = (out[k] || 0) + v
  }
  return out
}

export function derive(char) {
  const cls = getClass(char.classKey)
  const race = getRace(char.raceKey)
  const bg = getBackground(char.backgroundKey)
  const scores = effectiveScores(char)
  const mods = {}
  for (const a of ABILITIES) mods[a.key] = abilityMod(scores[a.key] ?? 10)
  const pb = profBonus(char.level)

  // Proficient skills = class-chosen + background-granted
  const profSkills = new Set(char.skills || [])
  if (bg) bg.skills.forEach((s) => profSkills.add(s))
  const expertise = new Set(char.expertise || [])

  // Bard's Jack of All Trades: half proficiency to non-proficient checks (incl. initiative)
  const hasJoat = char.classKey === 'bard' && char.level >= 2
  const joat = Math.floor(pb / 2)

  const saves = {}
  for (const a of ABILITIES) {
    const proficient = cls?.saves?.includes(a.key)
    saves[a.key] = { value: mods[a.key] + (proficient ? pb : 0), proficient }
  }

  const skills = SKILLS.map((s) => {
    const proficient = profSkills.has(s.key)
    const expert = expertise.has(s.key)
    const bonus = expert ? pb * 2 : proficient ? pb : hasJoat ? joat : 0
    return { ...s, value: mods[s.ability] + bonus, proficient, expert, joat: !proficient && !expert && hasJoat }
  })

  // HP: max at 1st level + average per level after; Hill Dwarf adds +1/level
  const hd = cls?.hitDie || 8
  const conMod = mods.con
  const avgPerLevel = Math.floor(hd / 2) + 1
  const hillDwarf = char.subraceKey === 'hill' ? char.level : 0
  const maxHp = hd + conMod + (char.level - 1) * (avgPerLevel + conMod) + hillDwarf

  const dexMod = mods.dex
  const baseAC = 10 + dexMod
  const initiative = dexMod + (hasJoat ? joat : 0)
  const speed = char.subraceKey === 'wood' ? 35 : race?.speed || 30
  const passivePerception = 10 + skills.find((s) => s.key === 'perception').value

  // Spellcasting (only meaningful for caster classes)
  let spell = null
  if (cls?.spellcaster && cls.spellAbility) {
    const ab = cls.spellAbility
    spell = { ability: ab, dc: 8 + pb + mods[ab], attack: pb + mods[ab] }
  }

  return {
    cls, race, bg, scores, mods, pb, saves, skills,
    maxHp, baseAC, initiative, speed, passivePerception, hitDie: hd, spell,
  }
}

// All racial traits (base + subrace) as {name, desc} for the sheet.
export function racialTraits(char) {
  const race = getRace(char.raceKey)
  if (!race) return []
  const out = [...race.traits]
  const sub = race.subraces?.find((s) => s.key === char.subraceKey)
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
  if (char.subclassKey) {
    const sub = cls.subclasses?.find((s) => s.key === char.subclassKey)
    if (sub) sub.features?.filter((f) => f.level <= char.level).forEach((f) => feats.push({ ...f, sub: sub.name }))
  }
  return feats.sort((a, b) => a.level - b.level)
}
