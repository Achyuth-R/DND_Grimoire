// Spell slot tables (PHB ch. 3 / TCE). Index 0 = character level 1.
// Each row lists slots for spell levels 1..9.
const FULL = [
  [2], [3], [4, 2], [4, 3], [4, 3, 2], [4, 3, 3], [4, 3, 3, 1], [4, 3, 3, 2], [4, 3, 3, 3, 1], [4, 3, 3, 3, 2],
  [4, 3, 3, 3, 2, 1], [4, 3, 3, 3, 2, 1], [4, 3, 3, 3, 2, 1, 1], [4, 3, 3, 3, 2, 1, 1], [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1], [4, 3, 3, 3, 2, 1, 1, 1, 1], [4, 3, 3, 3, 3, 1, 1, 1, 1], [4, 3, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 2, 1, 1],
]

// Pact Magic: slot count and slot level by warlock level.
const PACT_COUNT = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4]
const PACT_LEVEL = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]

// Effective row in the full-caster table for each casting type.
// Paladin/Ranger and Eldritch Knight/Arcane Trickster tables match the full table
// at half (rounded up) / a third (rounded up) of their level once casting starts.
function fullRow(type, level, startLevel) {
  if (level < startLevel) return 0
  if (type === 'full') return level
  if (type === 'half' || type === 'halfUp') return Math.ceil(level / 2)
  if (type === 'third') return Math.ceil(level / 3)
  return 0
}

// Returns [{ level, count }] for spell levels with at least one slot.
export function slotsFor(casting, level) {
  if (!casting || level < casting.startLevel) return []
  if (casting.type === 'pact') {
    return [{ level: PACT_LEVEL[level - 1], count: PACT_COUNT[level - 1], pact: true }]
  }
  const row = fullRow(casting.type, level, casting.startLevel)
  if (!row) return []
  return FULL[row - 1].map((count, i) => ({ level: i + 1, count }))
}

export const maxSpellLevel = (slots) => slots.reduce((m, s) => Math.max(m, s.level), 0)
