// Aggregates all 12 D&D 5e classes (PHB) with full features and the complete
// set of subclasses from the Player's Handbook, Dungeon Master's Guide,
// Xanathar's Guide to Everything, and Tasha's Cauldron of Everything.
import barbarian from './classData/barbarian.js'
import bard from './classData/bard.js'
import cleric from './classData/cleric.js'
import druid from './classData/druid.js'
import fighter from './classData/fighter.js'
import monk from './classData/monk.js'
import paladin from './classData/paladin.js'
import ranger from './classData/ranger.js'
import rogue from './classData/rogue.js'
import sorcerer from './classData/sorcerer.js'
import warlock from './classData/warlock.js'
import wizard from './classData/wizard.js'

export const CLASSES = [
  barbarian, bard, cleric, druid, fighter, monk,
  paladin, ranger, rogue, sorcerer, warlock, wizard,
]

export const getClass = (key) => CLASSES.find((c) => c.key === key)

// Flattened list of every subclass with a back-reference to its parent class.
export const ALL_SUBCLASSES = CLASSES.flatMap((c) =>
  c.subclasses.map((s) => ({ ...s, classKey: c.key, className: c.name, classColor: c.color, classIcon: c.icon }))
)
