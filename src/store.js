// Character persistence via localStorage.
const KEY = 'grimoire.characters.v1'

export function loadCharacters() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || []
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
    name: '',
    playerName: '',
    classKey: 'fighter',
    subclassKey: '',
    raceKey: 'human',
    subraceKey: '',
    backgroundKey: 'soldier',
    level: 1,
    alignment: 'True Neutral',
    experience: 0,
    scores: { str: 15, dex: 14, con: 13, int: 12, wis: 10, cha: 8 },
    skills: [],
    expertise: [],
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
    equipmentText: '',
    featuresText: '',
    spellsText: '',
    abilitiesText: '',
    hpCurrent: null,
    notes: '',
    createdAt: Date.now(),
  }
}
