// Character persistence via localStorage.
const KEY = 'grimoire.characters.v1'

export function loadCharacters() {
  try {
    return (JSON.parse(localStorage.getItem(KEY)) || []).map(migrateCharacter)
  } catch {
    return []
  }
}

export function saveCharacters(list) {
  localStorage.setItem(KEY, JSON.stringify(list))
}

export function getCharacter(id) {
  return loadCharacters().find((c) => c.id === id)
}

export function upsertCharacter(char) {
  const list = loadCharacters()
  const idx = list.findIndex((c) => c.id === char.id)
  if (idx >= 0) list[idx] = char
  else list.push(char)
  saveCharacters(list)
  return char
}

export function deleteCharacter(id) {
  saveCharacters(loadCharacters().filter((c) => c.id !== id))
}

export function newCharacter() {
  return {
    id: crypto.randomUUID(),
    v: 2, // schema version (see migrateCharacter)
    name: '',
    playerName: '',
    classKey: 'fighter',
    subclassKey: '',
    raceKey: 'human',
    subraceKey: 'standard',
    backgroundKey: 'soldier',
    level: 1,
    alignment: 'True Neutral',
    experience: 0,
    scoreMethod: 'standard',
    scores: { str: 15, dex: 14, con: 13, int: 12, wis: 10, cha: 8 },
    rolled: [],
    // Choices owed by race/class/subclass/background (see builderRules.js)
    raceChoices: {},
    subclassChoices: {},
    skills: [],
    expertise: [],
    fightingStyle: '',
    infusions: [],
    languages: [],
    levelUps: {},
    equipment: { classKey: 'fighter', choices: {}, picks: {} },
    equippedArmor: '',
    shield: false,
    spells: [],
    // Sheet free-text fields (persisted so the printable sheet round-trips)
    attacks: [
      { name: '', bonus: '', damage: '' },
      { name: '', bonus: '', damage: '' },
      { name: '', bonus: '', damage: '' },
    ],
    attacksText: '',
    personalityText: '',
    idealsText: '',
    bondsText: '',
    flawsText: '',
    // null = show the auto-filled default; any string (even empty) is the player's own text
    equipmentText: null,
    featuresText: null,
    spellsText: '',
    abilitiesText: null,
    hpCurrent: null,
    notes: '',
    createdAt: Date.now(),
  }
}

// Fill in fields added after a character was saved, so older characters keep working.
export function migrateCharacter(c) {
  const out = { ...newCharacter(), ...c }
  // Human used to have only the Variant subrace; a blank subrace meant the standard human.
  if (out.raceKey === 'human' && !out.subraceKey) out.subraceKey = 'standard'
  // Older characters had no recorded score method; treat their scores as manually entered.
  if (!c.scoreMethod) out.scoreMethod = 'manual'
  if (!c.equipment) out.equipment = { classKey: out.classKey, choices: {}, picks: {}, gold: true }
  // Before v2, untouched auto-filled text was stored as ''; now null means "use the default".
  if (!c.v) for (const k of ['equipmentText', 'featuresText', 'abilitiesText']) if (out[k] === '') out[k] = null
  out.v = 2
  return out
}
