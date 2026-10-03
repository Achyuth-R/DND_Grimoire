// Character persistence. localStorage is the source the app reads synchronously;
// sync.js (optional, Supabase) listens for local writes and mirrors them to the shared store.
const KEY = 'grimoire.characters.v1'

// Listeners for local writes: fn({ type: 'upsert', char } | { type: 'delete', id }).
const writeListeners = new Set()
export const onLocalWrite = (fn) => { writeListeners.add(fn); return () => writeListeners.delete(fn) }
const emitWrite = (e) => writeListeners.forEach((fn) => fn(e))

// Listeners for any change to the stored list (local or remote), so pages can refresh.
const changeListeners = new Set()
export const onCharactersChanged = (fn) => { changeListeners.add(fn); return () => changeListeners.delete(fn) }
export const emitCharactersChanged = () => changeListeners.forEach((fn) => fn())

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

// Save a character the player edited (stamps updatedAt and notifies sync).
export function upsertCharacter(char) {
  const stamped = { ...char, updatedAt: new Date().toISOString() }
  putLocal(stamped)
  emitWrite({ type: 'upsert', char: stamped })
  return stamped
}

export function deleteCharacter(id) {
  saveCharacters(loadCharacters().filter((c) => c.id !== id))
  emitWrite({ type: 'delete', id })
}

// Write a character locally without stamping or notifying sync (used when applying remote data).
export function putLocal(char) {
  const list = loadCharacters()
  const idx = list.findIndex((c) => c.id === char.id)
  if (idx >= 0) list[idx] = char
  else list.push(char)
  saveCharacters(list)
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
    bonusFeats: [], // DM-granted feats at any level
    customProfs: {}, // player-chosen extra proficiencies (Review step)
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

// ---------- JSON export / import ----------

const EXPORT_FORMAT = 'grimoire-characters'

// Serialize characters into a portable JSON file body.
export function exportCharacters(list) {
  return JSON.stringify({ format: EXPORT_FORMAT, version: 2, exportedAt: new Date().toISOString(), characters: list }, null, 2)
}

// Parse an export (or a bare character / array of characters) and merge it into storage.
// A character whose id already exists replaces the stored copy. Returns { added, updated, skipped }.
export function importCharacters(text) {
  let data
  try { data = JSON.parse(text) } catch { throw new Error("That file isn't valid JSON.") }
  if (data?.format && data.format !== EXPORT_FORMAT) throw new Error("That file isn't a Grimoire character export.")
  const incoming = Array.isArray(data) ? data : Array.isArray(data?.characters) ? data.characters : [data]
  const valid = incoming.filter((c) => c && typeof c === 'object' && c.id && c.classKey && c.raceKey && c.scores)
  if (!valid.length) throw new Error('No characters found in that file.')
  const existing = new Set(loadCharacters().map((c) => c.id))
  let added = 0
  let updated = 0
  for (const c of valid.map(migrateCharacter)) {
    if (existing.has(c.id)) updated++
    else added++
    upsertCharacter(c)
  }
  return { added, updated, skipped: incoming.length - valid.length }
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
