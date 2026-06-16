export const ABILITIES = [
  { key: 'str', name: 'Strength', desc: 'Physical power, melee attacks, athletics.' },
  { key: 'dex', name: 'Dexterity', desc: 'Agility, reflexes, balance, stealth.' },
  { key: 'con', name: 'Constitution', desc: 'Health, stamina, vital force.' },
  { key: 'int', name: 'Intelligence', desc: 'Reasoning, memory, recall.' },
  { key: 'wis', name: 'Wisdom', desc: 'Awareness, intuition, insight.' },
  { key: 'cha', name: 'Charisma', desc: 'Force of personality, persuasion.' },
]

export const SKILLS = [
  { key: 'acrobatics', name: 'Acrobatics', ability: 'dex' },
  { key: 'animal-handling', name: 'Animal Handling', ability: 'wis' },
  { key: 'arcana', name: 'Arcana', ability: 'int' },
  { key: 'athletics', name: 'Athletics', ability: 'str' },
  { key: 'deception', name: 'Deception', ability: 'cha' },
  { key: 'history', name: 'History', ability: 'int' },
  { key: 'insight', name: 'Insight', ability: 'wis' },
  { key: 'intimidation', name: 'Intimidation', ability: 'cha' },
  { key: 'investigation', name: 'Investigation', ability: 'int' },
  { key: 'medicine', name: 'Medicine', ability: 'wis' },
  { key: 'nature', name: 'Nature', ability: 'int' },
  { key: 'perception', name: 'Perception', ability: 'wis' },
  { key: 'performance', name: 'Performance', ability: 'cha' },
  { key: 'persuasion', name: 'Persuasion', ability: 'cha' },
  { key: 'religion', name: 'Religion', ability: 'int' },
  { key: 'sleight-of-hand', name: 'Sleight of Hand', ability: 'dex' },
  { key: 'stealth', name: 'Stealth', ability: 'dex' },
  { key: 'survival', name: 'Survival', ability: 'wis' },
]

export const abilityMod = (score) => Math.floor((score - 10) / 2)
export const fmtMod = (n) => (n >= 0 ? `+${n}` : `${n}`)
export const profBonus = (level) => Math.ceil(level / 4) + 1

export const POINT_BUY_COST = { 8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9 }
export const STANDARD_ARRAY = [15, 14, 13, 12, 10, 8]
