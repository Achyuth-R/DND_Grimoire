// Structured feat rules (PHB, XGE, TCE) layered over the verbatim text in feats.js.
import { FEATS as FEAT_TEXT } from './feats.js'

export const featKey = (name) => name.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const ANY = ['str', 'dex', 'con', 'int', 'wis', 'cha']
const MENTAL = ['int', 'wis', 'cha']
const one = (...choose) => ({ choose, amount: 1 })

// prereq: { ability: {str: 13} (all) | anyAbility: {int: 13, wis: 13}, race: [...], subrace: [...], spellcasting, armor }
// asi: { fixed: {cha: 1} } | { choose: [...], amount }
const RULES = {
  actor: { asi: { fixed: { cha: 1 } }, prereq: { ability: { cha: 13 } } },
  alert: { initiative: 5 },
  athlete: { asi: one('str', 'dex') },
  'defensive-duelist': { prereq: { ability: { dex: 13 } } },
  durable: { asi: { fixed: { con: 1 } } },
  'elemental-adept': { prereq: { spellcasting: true } },
  grappler: { prereq: { ability: { str: 13 } } },
  'heavily-armored': { asi: { fixed: { str: 1 } }, armor: ['Heavy armor'], prereq: { armor: 'Medium armor' } },
  'heavy-armor-master': { asi: { fixed: { str: 1 } }, prereq: { armor: 'Heavy armor' } },
  'inspiring-leader': { prereq: { ability: { cha: 13 } } },
  'keen-mind': { asi: { fixed: { int: 1 } } },
  'lightly-armored': { asi: one('str', 'dex'), armor: ['Light armor'] },
  linguist: { asi: { fixed: { int: 1 } }, languageChoice: 3 },
  'magic-initiate': { spellChoice: { lists: ['bard', 'cleric', 'druid', 'sorcerer', 'warlock', 'wizard'], cantrips: 2, level1: 1 } },
  'medium-armor-master': { mediumDexCap: 3, prereq: { armor: 'Medium armor' } },
  mobile: { speed: 10 },
  'moderately-armored': { asi: one('str', 'dex'), armor: ['Medium armor', 'Shields'], prereq: { armor: 'Light armor' } },
  observant: { asi: one('int', 'wis'), passive: 5 },
  resilient: { asi: one(...ANY), saveFromAsi: true },
  'ritual-caster': { prereq: { anyAbility: { int: 13, wis: 13 } } },
  skilled: { skillChoice: { count: 3, from: 'any' } },
  skulker: { prereq: { ability: { dex: 13 } } },
  'spell-sniper': { prereq: { spellcasting: true } },
  'tavern-brawler': { asi: one('str', 'con') },
  tough: { hpPerLevel: 2 },
  'war-caster': { prereq: { spellcasting: true } },
  'weapon-master': { asi: one('str', 'dex') },
  // Tasha's Cauldron of Everything
  'artificer-initiate': { spellChoice: { lists: ['artificer'], cantrips: 1, level1: 1 }, toolChoice: { count: 1, from: "One type of artisan's tools" } },
  chef: { asi: one('con', 'wis'), tools: ["Cook's utensils"] },
  crusher: { asi: one('str', 'con') },
  'eldritch-adept': { prereq: { spellcasting: true } },
  'fey-touched': { asi: one(...MENTAL), spells: ['Misty Step'] },
  'fighting-initiate': { prereq: { weapons: 'Martial weapons' } },
  gunner: { asi: { fixed: { dex: 1 } } },
  'metamagic-adept': { prereq: { spellcasting: true } },
  piercer: { asi: one('str', 'dex') },
  poisoner: { tools: ["Poisoner's kit"] },
  'shadow-touched': { asi: one(...MENTAL), spells: ['Invisibility'] },
  'skill-expert': { asi: one(...ANY), skillChoice: { count: 1, from: 'any' }, expertiseChoice: 1 },
  slasher: { asi: one('str', 'dex') },
  telekinetic: { asi: one(...MENTAL), spells: ['Mage Hand'] },
  telepathic: { asi: one(...MENTAL), spells: ['Detect Thoughts'] },
  // Xanathar's Guide racial feats
  'bountiful-luck': { prereq: { race: ['halfling'] } },
  'dragon-fear': { asi: one('str', 'con', 'cha'), prereq: { race: ['dragonborn'] } },
  'dragon-hide': { asi: one('str', 'con', 'cha'), unarmoredAC: { base: 13, abilities: ['dex'], shieldOk: true }, prereq: { race: ['dragonborn'] } },
  'drow-high-magic': { prereq: { subrace: ['drow'] }, spells: ['Detect Magic', 'Levitate', 'Dispel Magic'] },
  'dwarven-fortitude': { asi: { fixed: { con: 1 } }, prereq: { race: ['dwarf'] } },
  'elven-accuracy': { asi: one('dex', 'int', 'wis', 'cha'), prereq: { race: ['elf', 'half-elf'] } },
  'fade-away': { asi: one('dex', 'int'), prereq: { race: ['gnome'] } },
  'fey-teleportation': { asi: one('int', 'cha'), prereq: { subrace: ['high'] }, spells: ['Misty Step'] },
  'flames-of-phlegethos': { asi: one('int', 'cha'), prereq: { race: ['tiefling'] } },
  'infernal-constitution': { asi: { fixed: { con: 1 } }, prereq: { race: ['tiefling'] } },
  'orcish-fury': { asi: one('str', 'con'), prereq: { race: ['half-orc'] } },
  prodigy: { skillChoice: { count: 1, from: 'any' }, expertiseChoice: 1, languageChoice: 1, prereq: { race: ['half-elf', 'half-orc', 'human'] } },
  'second-chance': { asi: one('dex', 'con', 'cha'), prereq: { race: ['halfling'] } },
  'squat-nimbleness': { asi: one('str', 'dex'), speed: 5, skillChoice: { count: 1, from: ['acrobatics', 'athletics'] }, prereq: { race: ['dwarf', 'gnome', 'halfling'] } },
  'wood-elf-magic': { prereq: { subrace: ['wood'] }, spells: ['Longstrider', 'Pass without Trace'] },
}

export const FEATS = FEAT_TEXT.map((f) => {
  const key = featKey(f.name)
  return { ...f, key, ...(RULES[key] || {}) }
})
export const getFeat = (key) => FEATS.find((f) => f.key === key)

// Does a character (with derived data) meet a feat's prerequisite?
export function meetsPrereq(feat, char, d) {
  const p = feat.prereq
  if (!p) return true
  if (p.ability && !Object.entries(p.ability).every(([k, v]) => (d.scores[k] ?? 0) >= v)) return false
  if (p.anyAbility && !Object.entries(p.anyAbility).some(([k, v]) => (d.scores[k] ?? 0) >= v)) return false
  if (p.race && !p.race.includes(char.raceKey)) return false
  if (p.subrace && !p.subrace.includes(char.subraceKey)) return false
  if (p.spellcasting && !d.spell) return false
  if (p.armor && !d.profs.armor.some((a) => a === p.armor || a === 'All armor')) return false
  if (p.weapons && !d.profs.weapons.includes(p.weapons)) return false
  return true
}
