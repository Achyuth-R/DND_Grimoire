// D&D 5e SRD spells (open license). Concise mechanical summaries.
// level: 0 = cantrip. classes use our class keys.
// fields: key, name, level, school, classes[], time, range, components, duration, conc, ritual, desc
export const SCHOOLS = ['Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation']

const S = (o) => ({ conc: false, ritual: false, source: 'PHB', ...o })
export const SPELL_SOURCES = ['PHB', 'XGE', 'TCE']

export const SPELLS = [
  // ===== CANTRIPS =====
  S({ key: 'acid-splash', name: 'Acid Splash', level: 0, school: 'Conjuration', classes: ['sorcerer', 'wizard'], time: '1 action', range: '60 ft', components: 'V, S', duration: 'Instant', desc: `You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a dexterity saving throw or take 1d6 acid damage.

This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).` }),
  S({ key: 'chill-touch', name: 'Chill Touch', level: 0, school: 'Necromancy', classes: ['sorcerer', 'warlock', 'wizard'], time: '1 action', range: '120 ft', components: 'V, S', duration: '1 round', desc: `You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target.

If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn.

This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).` }),
  S({ key: 'dancing-lights', name: 'Dancing Lights', level: 0, school: 'Evocation', classes: ['bard', 'sorcerer', 'wizard'], time: '1 action', range: '120 ft', components: 'V, S, M', duration: '1 min', conc: true, desc: `You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius.

As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell's range.` }),
  S({ key: 'druidcraft', name: 'Druidcraft', level: 0, school: 'Transmutation', classes: ['druid'], time: '1 action', range: '30 ft', components: 'V, S', duration: 'Instant', desc: `Whispering to the spirits of nature, you create one of the following effects within 'range':

- You create a tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. The effect might manifest as a golden orb for clear skies, a cloud for rain, falling snowflakes for snow, and so on. This effect persists for 1 round.

- You instantly make a flower bloom, a seed pod open, or a leaf bud bloom.

- You create an instantaneous, harmless sensory effect, such as falling leaves, a puff of wind, the sound of a small animal, or the faint order of skunk. The effect must fit in a 5-foot cube.

- You instantly light or snuff out a candle, a torch, or a small campfire.` }),
  S({ key: 'eldritch-blast', name: 'Eldritch Blast', level: 0, school: 'Evocation', classes: ['warlock'], time: '1 action', range: '120 ft', components: 'V, S', duration: 'Instant', desc: `A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage. The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam.` }),
  S({ key: 'fire-bolt', name: 'Fire Bolt', level: 0, school: 'Evocation', classes: ['sorcerer', 'wizard'], time: '1 action', range: '120 ft', components: 'V, S', duration: 'Instant', desc: `You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried.

This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).` }),
  S({ key: 'guidance', name: 'Guidance', level: 0, school: 'Divination', classes: ['cleric', 'druid'], time: '1 action', range: 'Touch', components: 'V, S', duration: '1 min', conc: true, desc: `You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.` }),
  S({ key: 'light', name: 'Light', level: 0, school: 'Evocation', classes: ['bard', 'cleric', 'sorcerer', 'wizard'], time: '1 action', range: 'Touch', components: 'V, M', duration: '1 hour', desc: `You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action.

If you target an object held or worn by a hostile creature, that creature must succeed on a dexterity saving throw to avoid the spell.` }),
  S({ key: 'mage-hand', name: 'Mage Hand', level: 0, school: 'Conjuration', classes: ['bard', 'sorcerer', 'warlock', 'wizard'], time: '1 action', range: '30 ft', components: 'V, S', duration: '1 min', desc: `A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.

You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.

The hand can't attack, activate magic items, or carry more than 10 pounds.` }),
  S({ key: 'mending', name: 'Mending', level: 0, school: 'Transmutation', classes: ['bard', 'cleric', 'druid', 'sorcerer', 'wizard'], time: '1 min', range: 'Touch', components: 'V, S, M', duration: 'Instant', desc: `This spell repairs a single break or tear in an object you touch, such as a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no longer than 1 foot in any dimension, you mend it, leaving no trace of the former damage.

This spell can physically repair a magic item or construct, but the spell can't restore magic to such an object.` }),
  S({ key: 'message', name: 'Message', level: 0, school: 'Transmutation', classes: ['bard', 'sorcerer', 'wizard'], time: '1 action', range: '120 ft', components: 'V, S, M', duration: '1 round', desc: `You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.

You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn't have to follow a straight line and can travel freely around corners or through openings.` }),
  S({ key: 'minor-illusion', name: 'Minor Illusion', level: 0, school: 'Illusion', classes: ['bard', 'sorcerer', 'warlock', 'wizard'], time: '1 action', range: '30 ft', components: 'S, M', duration: '1 min', desc: `You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.

If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.

If you create an image of an object--such as a chair, muddy footprints, or a small chest--it must be no larger than a 5-foot cube. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it.

If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.` }),
  S({ key: 'poison-spray', name: 'Poison Spray', level: 0, school: 'Conjuration', classes: ['druid', 'sorcerer', 'warlock', 'wizard'], time: '1 action', range: '10 ft', components: 'V, S', duration: 'Instant', desc: `You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a constitution saving throw or take 1d12 poison damage.

This spell's damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), and 17th level (4d12).` }),
  S({ key: 'prestidigitation', name: 'Prestidigitation', level: 0, school: 'Transmutation', classes: ['bard', 'sorcerer', 'warlock', 'wizard'], time: '1 action', range: '10 ft', components: 'V, S', duration: 'Up to 1 hour', desc: `This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within 'range':

You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.

You instantaneously light or snuff out a candle, a torch, or a small campfire.

You instantaneously clean or soil an object no larger than 1 cubic foot.

You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.

You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.

You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn.

If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.` }),
  S({ key: 'produce-flame', name: 'Produce Flame', level: 0, school: 'Conjuration', classes: ['druid'], time: '1 action', range: 'Self', components: 'V, S', duration: '10 min', desc: `A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again.

You can also attack with the flame, although doing so ends the spell. When you cast this spell, or as an action on a later turn, you can hurl the flame at a creature within 30 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 fire damage.

This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).` }),
  S({ key: 'ray-of-frost', name: 'Ray of Frost', level: 0, school: 'Evocation', classes: ['sorcerer', 'wizard'], time: '1 action', range: '60 ft', components: 'V, S', duration: 'Instant', desc: `A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn.

The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).` }),
  S({ key: 'sacred-flame', name: 'Sacred Flame', level: 0, school: 'Evocation', classes: ['cleric'], time: '1 action', range: '60 ft', components: 'V, S', duration: 'Instant', desc: `Flame-like radiance descends on a creature that you can see within range. The target must succeed on a dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.

The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).` }),
  S({ key: 'shillelagh', name: 'Shillelagh', level: 0, school: 'Transmutation', classes: ['druid'], time: '1 bonus action', range: 'Touch', components: 'V, S, M', duration: '1 min', desc: `The wood of a club or a quarterstaff you are holding is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn't already. The spell ends if you cast it again or if you let go of the weapon.` }),
  S({ key: 'spare-the-dying', name: 'Spare the Dying', level: 0, school: 'Necromancy', classes: ['cleric'], time: '1 action', range: 'Touch', components: 'V, S', duration: 'Instant', desc: `You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs.` }),
  S({ key: 'thaumaturgy', name: 'Thaumaturgy', level: 0, school: 'Transmutation', classes: ['cleric'], time: '1 action', range: '30 ft', components: 'V', duration: 'Up to 1 min', desc: `You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range.

- Your voice booms up to three times as loud as normal for 1 minute.

- You cause flames to flicker, brighten, dim, or change color for 1 minute.

- You cause harmless tremors in the ground for 1 minute.

- You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.

- You instantaneously cause an unlocked door or window to fly open or slam shut.

- You alter the appearance of your eyes for 1 minute.

If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action.` }),
  S({ key: 'thorn-whip', name: 'Thorn Whip', level: 0, school: 'Transmutation', classes: ['druid'], time: '1 action', range: '30 ft', components: 'V, S, M', duration: 'Instant', desc: `You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you.

This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).` }),
  S({ key: 'vicious-mockery', name: 'Vicious Mockery', level: 0, school: 'Enchantment', classes: ['bard'], time: '1 action', range: '60 ft', components: 'V', duration: 'Instant', desc: `You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.

This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).` }),
  S({ key: 'shocking-grasp', name: 'Shocking Grasp', level: 0, school: 'Evocation', classes: ['sorcerer', 'wizard'], time: '1 action', range: 'Touch', components: 'V, S', duration: 'Instant', desc: `Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it can't take reactions until the start of its next turn.

The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).` }),

  // ===== LEVEL 1 =====
  S({ key: 'bless', name: 'Bless', level: 1, school: 'Enchantment', classes: ['cleric', 'paladin'], time: '1 action', range: '30 ft', components: 'V, S, M', duration: '1 min', conc: true, desc: `You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.

At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.` }),
  S({ key: 'burning-hands', name: 'Burning Hands', level: 1, school: 'Evocation', classes: ['sorcerer', 'wizard'], time: '1 action', range: 'Self (15-ft cone)', components: 'V, S', duration: 'Instant', desc: `As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one.

The fire ignites any flammable objects in the area that aren't being worn or carried.

At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.` }),
  S({ key: 'charm-person', name: 'Charm Person', level: 1, school: 'Enchantment', classes: ['bard', 'druid', 'sorcerer', 'warlock', 'wizard'], time: '1 action', range: '30 ft', components: 'V, S', duration: '1 hour', desc: `You attempt to charm a humanoid you can see within range. It must make a wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.

At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.` }),
  S({ key: 'cure-wounds', name: 'Cure Wounds', level: 1, school: 'Evocation', classes: ['bard', 'cleric', 'druid', 'paladin', 'ranger'], time: '1 action', range: 'Touch', components: 'V, S', duration: 'Instant', desc: `A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.

At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.` }),
  S({ key: 'detect-magic', name: 'Detect Magic', level: 1, school: 'Divination', classes: ['bard', 'cleric', 'druid', 'paladin', 'ranger', 'sorcerer', 'wizard'], time: '1 action', range: 'Self (30 ft)', components: 'V, S', duration: '10 min', conc: true, ritual: true, desc: `For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.

The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.` }),
  S({ key: 'disguise-self', name: 'Disguise Self', level: 1, school: 'Illusion', classes: ['bard', 'sorcerer', 'wizard'], time: '1 action', range: 'Self', components: 'V, S', duration: '1 hour', desc: `You make yourself--including your clothing, armor, weapons, and other belongings on your person--look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can't change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.

The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair.

To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC.` }),
  S({ key: 'faerie-fire', name: 'Faerie Fire', level: 1, school: 'Evocation', classes: ['bard', 'druid'], time: '1 action', range: '60 ft', components: 'V', duration: '1 min', conc: true, desc: `Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius.

Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible.` }),
  S({ key: 'feather-fall', name: 'Feather Fall', level: 1, school: 'Transmutation', classes: ['bard', 'sorcerer', 'wizard'], time: '1 reaction', range: '60 ft', components: 'V, M', duration: '1 min', desc: `Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature.` }),
  S({ key: 'healing-word', name: 'Healing Word', level: 1, school: 'Evocation', classes: ['bard', 'cleric', 'druid'], time: '1 bonus action', range: '60 ft', components: 'V', duration: 'Instant', desc: `A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.

At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 1st.` }),
  S({ key: 'hex', name: 'Hex', level: 1, school: 'Enchantment', classes: ['warlock'], time: '1 bonus action', range: '90 ft', components: 'V, S, M', duration: '1 hour', conc: true, desc: `You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also, choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability.

If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to curse a new creature.

A remove curse cast on the target ends this spell early.

At Higher Levels. When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours.` }),
  S({ key: 'mage-armor', name: 'Mage Armor', level: 1, school: 'Abjuration', classes: ['sorcerer', 'wizard'], time: '1 action', range: 'Touch', components: 'V, S, M', duration: '8 hours', desc: `You touch a willing creature who isn't wearing armor, and a protective magical force surrounds it until the spell ends. The target's base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action.` }),
  S({ key: 'magic-missile', name: 'Magic Missile', level: 1, school: 'Evocation', classes: ['sorcerer', 'wizard'], time: '1 action', range: '120 ft', components: 'V, S', duration: 'Instant', desc: `You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.

At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st.` }),
  S({ key: 'shield', name: 'Shield', level: 1, school: 'Abjuration', classes: ['sorcerer', 'wizard'], time: '1 reaction', range: 'Self', components: 'V, S', duration: '1 round', desc: `An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile.` }),
  S({ key: 'sleep', name: 'Sleep', level: 1, school: 'Enchantment', classes: ['bard', 'sorcerer', 'wizard'], time: '1 action', range: '90 ft', components: 'V, S, M', duration: '1 min', desc: `This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures).

Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.

Undead and creatures immune to being charmed aren't affected by this spell.

At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d8 for each slot level above 1st.` }),
  S({ key: 'thunderwave', name: 'Thunderwave', level: 1, school: 'Evocation', classes: ['bard', 'druid', 'sorcerer', 'wizard'], time: '1 action', range: 'Self (15-ft cube)', components: 'V, S', duration: 'Instant', desc: `A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed.

In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet.

At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.` }),
  S({ key: 'guiding-bolt', name: 'Guiding Bolt', level: 1, school: 'Evocation', classes: ['cleric'], time: '1 action', range: '120 ft', components: 'V, S', duration: '1 round', desc: `A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes 4d6 radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then.

At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.` }),
  S({ key: 'hunters-mark', name: "Hunter's Mark", level: 1, school: 'Divination', classes: ['ranger'], time: '1 bonus action', range: '90 ft', components: 'V', duration: '1 hour', conc: true, desc: `You choose a creature you can see within range and mystically mark it as your quarry. Until the spell ends, you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, and you have advantage on any Wisdom (Perception) or Wisdom (Survival) check you make to find it. If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to mark a new creature.

At Higher Levels. When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours.` }),
  S({ key: 'detect-evil-and-good', name: 'Detect Evil and Good', level: 1, school: 'Divination', classes: ['cleric', 'paladin'], time: '1 action', range: 'Self (30 ft)', components: 'V, S', duration: '10 min', conc: true, desc: `For the duration, you know if there is an aberration, celestial, elemental, fey, fiend, or undead within 30 feet of you, as well as where the creature is located. Similarly, you know if there is a place or object within 30 feet of you that has been magically consecrated or desecrated.

The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.` }),
  S({ key: 'command', name: 'Command', level: 1, school: 'Enchantment', classes: ['cleric', 'paladin'], time: '1 action', range: '60 ft', components: 'V', duration: '1 round', desc: `You speak a one-word command to a creature you can see within range. The target must succeed on a wisdom saving throw or follow the command on its next turn. The spell has no effect if the target is undead, if it doesn't understand your language, or if your command is directly harmful to it.

Some typical commands and their effects follow. You might issue a command other than one described here. If you do so, the GM determines how the target behaves. If the target can't follow your command, the spell ends.

***Approach.*** The target moves toward you by the shortest and most direct route, ending its turn if it moves within 5 feet of you.

***Drop.*** The target drops whatever it is holding and then ends its turn.

***Flee.*** The target spends its turn moving away from you by the fastest available means.

***Grovel.*** The target falls prone and then ends its turn.

***Halt.*** The target doesn't move and takes no actions. A flying creature stays aloft, provided that it is able to do so. If it must move to stay aloft, it flies the minimum distance needed to remain in the air.

At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.` }),
  S({ key: 'entangle', name: 'Entangle', level: 1, school: 'Conjuration', classes: ['druid'], time: '1 action', range: '90 ft', components: 'V, S', duration: '1 min', conc: true, desc: `Grasping weeds and vines sprout from the ground in a 20-foot square starting form a point within range. For the duration, these plants turn the ground in the area into difficult terrain.

A creature in the area when you cast the spell must succeed on a strength saving throw or be restrained by the entangling plants until the spell ends. A creature restrained by the plants can use its action to make a Strength check against your spell save DC. On a success, it frees itself.

When the spell ends, the conjured plants wilt away.` }),

  // ===== LEVEL 2 =====
  S({ key: 'aid', name: 'Aid', level: 2, school: 'Abjuration', classes: ['cleric', 'paladin'], time: '1 action', range: '30 ft', components: 'V, S, M', duration: '8 hours', desc: `Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration.

At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd.` }),
  S({ key: 'blur', name: 'Blur', level: 2, school: 'Illusion', classes: ['sorcerer', 'wizard'], time: '1 action', range: 'Self', components: 'V', duration: '1 min', conc: true, desc: `Your body becomes blurred, shifting and wavering to all who can see you. For the duration, any creature has disadvantage on attack rolls against you. An attacker is immune to this effect if it doesn't rely on sight, as with blindsight, or can see through illusions, as with truesight.` }),
  S({ key: 'darkness', name: 'Darkness', level: 2, school: 'Evocation', classes: ['sorcerer', 'warlock', 'wizard'], time: '1 action', range: '60 ft', components: 'V, M', duration: '10 min', conc: true, desc: `Magical darkness spreads from a point you choose within range to fill a 15-foot-radius sphere for the duration. The darkness spreads around corners. A creature with darkvision can't see through this darkness, and nonmagical light can't illuminate it.

If the point you choose is on an object you are holding or one that isn't being worn or carried, the darkness emanates from the object and moves with it. Completely covering the source of the darkness with an opaque object, such as a bowl or a helm, blocks the darkness.

If any of this spell's area overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled.` }),
  S({ key: 'flaming-sphere', name: 'Flaming Sphere', level: 2, school: 'Conjuration', classes: ['druid', 'wizard'], time: '1 action', range: '60 ft', components: 'V, S, M', duration: '1 min', conc: true, desc: `A 5-foot-diameter sphere of fire appears in an unoccupied space of your choice within range and lasts for the duration. Any creature that ends its turn within 5 feet of the sphere must make a dexterity saving throw. The creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one.

As a bonus action, you can move the sphere up to 30 feet. If you ram the sphere into a creature, that creature must make the saving throw against the sphere's damage, and the sphere stops moving this turn.

When you move the sphere, you can direct it over barriers up to 5 feet tall and jump it across pits up to 10 feet wide. The sphere ignites flammable objects not being worn or carried, and it sheds bright light in a 20-foot radius and dim light for an additional 20 feet.

At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.` }),
  S({ key: 'hold-person', name: 'Hold Person', level: 2, school: 'Enchantment', classes: ['bard', 'cleric', 'druid', 'sorcerer', 'warlock', 'wizard'], time: '1 action', range: '60 ft', components: 'V, S, M', duration: '1 min', conc: true, desc: `Choose a humanoid that you can see within range. The target must succeed on a wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another wisdom saving throw. On a success, the spell ends on the target.

At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, you can target one additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them.` }),
  S({ key: 'invisibility', name: 'Invisibility', level: 2, school: 'Illusion', classes: ['bard', 'sorcerer', 'warlock', 'wizard'], time: '1 action', range: 'Touch', components: 'V, S, M', duration: '1 hour', conc: true, desc: `A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person. The spell ends for a target that attacks or casts a spell.

At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.` }),
  S({ key: 'lesser-restoration', name: 'Lesser Restoration', level: 2, school: 'Abjuration', classes: ['bard', 'cleric', 'druid', 'paladin', 'ranger'], time: '1 action', range: 'Touch', components: 'V, S', duration: 'Instant', desc: `You touch a creature and can end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned.` }),
  S({ key: 'misty-step', name: 'Misty Step', level: 2, school: 'Conjuration', classes: ['sorcerer', 'warlock', 'wizard'], time: '1 bonus action', range: 'Self', components: 'V', duration: 'Instant', desc: `Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see.` }),
  S({ key: 'scorching-ray', name: 'Scorching Ray', level: 2, school: 'Evocation', classes: ['sorcerer', 'wizard'], time: '1 action', range: '120 ft', components: 'V, S', duration: 'Instant', desc: `You create three rays of fire and hurl them at targets within range. You can hurl them at one target or several.

Make a ranged spell attack for each ray. On a hit, the target takes 2d6 fire damage.

At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, you create one additional ray for each slot level above 2nd.` }),
  S({ key: 'spiritual-weapon', name: 'Spiritual Weapon', level: 2, school: 'Evocation', classes: ['cleric'], time: '1 bonus action', range: '60 ft', components: 'V, S', duration: '1 min', desc: `You create a floating, spectral weapon within range that lasts for the duration or until you cast this spell again. When you cast the spell, you can make a melee spell attack against a creature within 5 feet of the weapon. On a hit, the target takes force damage equal to 1d8 + your spellcasting ability modifier.

As a bonus action on your turn, you can move the weapon up to 20 feet and repeat the attack against a creature within 5 feet of it.

The weapon can take whatever form you choose. Clerics of deities who are associated with a particular weapon (as St. Cuthbert is known for his mace and Thor for his hammer) make this spell's effect resemble that weapon.

At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for every two slot levels above the 2nd.` }),
  S({ key: 'web', name: 'Web', level: 2, school: 'Conjuration', classes: ['sorcerer', 'wizard'], time: '1 action', range: '60 ft', components: 'V, S, M', duration: '1 hour', conc: true, desc: `You conjure a mass of thick, sticky webbing at a point of your choice within range. The webs fill a 20-foot cube from that point for the duration. The webs are difficult terrain and lightly obscure their area.

If the webs aren't anchored between two solid masses (such as walls or trees) or layered across a floor, wall, or ceiling, the conjured web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a flat surface have a depth of 5 feet.

Each creature that starts its turn in the webs or that enters them during its turn must make a dexterity saving throw. On a failed save, the creature is restrained as long as it remains in the webs or until it breaks free.

A creature restrained by the webs can use its action to make a Strength check against your spell save DC. If it succeeds, it is no longer restrained.

The webs are flammable. Any 5-foot cube of webs exposed to fire burns away in 1 round, dealing 2d4 fire damage to any creature that starts its turn in the fire.` }),
  S({ key: 'hold-monster', name: 'Hold Monster', level: 5, school: 'Enchantment', classes: ['bard', 'sorcerer', 'warlock', 'wizard'], time: '1 action', range: '90 ft', components: 'V, S, M', duration: '1 min', conc: true, desc: `Choose a creature you can see and reach. The target must make a saving throw of Wisdom or be paralyzed for the duration of the spell. This spell has no effect against the undead. At the end of each round, the target can make a new saving throw of Wisdom. If successful, the spell ends for the creature.

At Higher Levels. When you cast this spell using a level 6 or higher location, you can target an additional creature for each level of location beyond the fifth. The creatures must be within 30 feet o f each other when you target them.` }),
  S({ key: 'see-invisibility', name: 'See Invisibility', level: 2, school: 'Divination', classes: ['bard', 'sorcerer', 'wizard'], time: '1 action', range: 'Self', components: 'V, S, M', duration: '1 hour', desc: `For the duration of the spell, you see invisible creatures and objects as if they were visible, and you can see through Ethereal. The ethereal objects and creatures appear ghostly translucent.` }),
  S({ key: 'spike-growth', name: 'Spike Growth', level: 2, school: 'Transmutation', classes: ['druid', 'ranger'], time: '1 action', range: '150 ft', components: 'V, S, M', duration: '10 min', conc: true, desc: `The ground in a 20-foot radius centered on a point within range twists and sprouts hard spikes and thorns. The area becomes difficult terrain for the duration. When a creature moves into or within the area, it takes 2d4 piercing damage for every 5 feet it travels.

The transformation of the ground is camouflaged to look natural. Any creature that can't see the area at the time the spell is cast can make a Wisdom (Perception) check against your spell save DC to recognize the terrain as hazardous before entering it.` }),
  S({ key: 'pass-without-trace', name: 'Pass Without Trace', level: 2, school: 'Abjuration', classes: ['druid', 'ranger'], time: '1 action', range: 'Self (30 ft)', components: 'V, S, M', duration: '1 hour', conc: true, desc: `A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and can't be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage.` }),

  // ===== LEVEL 3 =====
  S({ key: 'counterspell', name: 'Counterspell', level: 3, school: 'Abjuration', classes: ['sorcerer', 'warlock', 'wizard'], time: '1 reaction', range: '60 ft', components: 'S', duration: 'Instant', desc: `You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a success, the creature's spell fails and has no effect.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the interrupted spell has no effect if its level is less than or equal to the level of the spell slot you used.` }),
  S({ key: 'dispel-magic', name: 'Dispel Magic', level: 3, school: 'Abjuration', classes: ['bard', 'cleric', 'druid', 'paladin', 'sorcerer', 'warlock', 'wizard'], time: '1 action', range: '120 ft', components: 'V, S', duration: 'Instant', desc: `Choose one creature, object, or magical effect within range. Any spell of 3rd level or lower on the target ends. For each spell of 4th level or higher on the target, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a successful check, the spell ends.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, you automatically end the effects of a spell on the target if the spell's level is equal to or less than the level of the spell slot you used.` }),
  S({ key: 'fireball', name: 'Fireball', level: 3, school: 'Evocation', classes: ['sorcerer', 'wizard'], time: '1 action', range: '150 ft', components: 'V, S, M', duration: 'Instant', desc: `A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one.

The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.` }),
  S({ key: 'fly', name: 'Fly', level: 3, school: 'Transmutation', classes: ['sorcerer', 'warlock', 'wizard'], time: '1 action', range: 'Touch', components: 'V, S, M', duration: '10 min', conc: true, desc: `You touch a willing creature. The target gains a flying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd.` }),
  S({ key: 'haste', name: 'Haste', level: 3, school: 'Transmutation', classes: ['sorcerer', 'wizard'], time: '1 action', range: '30 ft', components: 'V, S, M', duration: '1 min', conc: true, desc: `Choose a willing creature that you can see within range. Until the spell ends, the target's speed is doubled, it gains a +2 bonus to AC, it has advantage on dexterity saving throws, and it gains an additional action on each of its turns. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action.

When the spell ends, the target can't move or take actions until after its next turn, as a wave of lethargy sweeps over it.` }),
  S({ key: 'lightning-bolt', name: 'Lightning Bolt', level: 3, school: 'Evocation', classes: ['sorcerer', 'wizard'], time: '1 action', range: 'Self (100-ft line)', components: 'V, S, M', duration: 'Instant', desc: `A stroke of lightning forming a line 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much damage on a successful one.

The lightning ignites flammable objects in the area that aren't being worn or carried.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.` }),
  S({ key: 'mass-healing-word', name: 'Mass Healing Word', level: 3, school: 'Evocation', classes: ['cleric'], time: '1 bonus action', range: '60 ft', components: 'V', duration: 'Instant', desc: `As you call out words of restoration, up to six creatures of your choice that you can see within range regain hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the healing increases by 1d4 for each slot level above 3rd.` }),
  S({ key: 'revivify', name: 'Revivify', level: 3, school: 'Necromancy', classes: ['cleric', 'paladin'], time: '1 action', range: 'Touch', components: 'V, S, M', duration: 'Instant', desc: `You touch a creature that has died within the last minute. That creature returns to life with 1 hit point. This spell can't return to life a creature that has died of old age, nor can it restore any missing body parts.` }),
  S({ key: 'sleet-storm', name: 'Sleet Storm', level: 3, school: 'Conjuration', classes: ['druid', 'sorcerer', 'wizard'], time: '1 action', range: '150 ft', components: 'V, S, M', duration: '1 min', conc: true, desc: `Until the spell ends, freezing rain and sleet fall in a 20-foot-tall cylinder with a 40-foot radius centered on a point you choose within range. The area is heavily obscured, and exposed flames in the area are doused.

The ground in the area is covered with slick ice, making it difficult terrain. When a creature enters the spell's area for the first time on a turn or starts its turn there, it must make a dexterity saving throw. On a failed save, it falls prone.

If a creature is concentrating in the spell's area, the creature must make a successful constitution saving throw against your spell save DC or lose concentration.` }),
  S({ key: 'spirit-guardians', name: 'Spirit Guardians', level: 3, school: 'Conjuration', classes: ['cleric'], time: '1 action', range: 'Self (15 ft)', components: 'V, S, M', duration: '10 min', conc: true, desc: `You call forth spirits to protect you. They flit around you to a distance of 15 feet for the duration. If you are good or neutral, their spectral form appears angelic or fey (your choice). If you are evil, they appear fiendish.

When you cast this spell, you can designate any number of creatures you can see to be unaffected by it. An affected creature's speed is halved in the area, and when the creature enters the area for the first time on a turn or starts its turn there, it must make a wisdom saving throw. On a failed save, the creature takes 3d8 radiant damage (if you are good or neutral) or 3d8 necrotic damage (if you are evil). On a successful save, the creature takes half as much damage.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.` }),
  S({ key: 'fireball', name: 'Fireball', level: 3, school: 'Evocation', classes: ['sorcerer', 'wizard'], time: '1 action', range: '150 ft', components: 'V, S, M', duration: 'Instant', desc: 'A bright streak detonates in a 20-ft radius; Dexterity save for 8d6 fire (half on success). +1d6 per slot above 3rd.', dup: true }),
  S({ key: 'water-breathing', name: 'Water Breathing', level: 3, school: 'Transmutation', classes: ['druid', 'ranger', 'sorcerer', 'wizard'], time: '1 action', range: '30 ft', components: 'V, S, M', duration: '24 hours', ritual: true, desc: `This spell gives a maximum of ten willing creatures within range and you can see, the ability to breathe underwater until the end of its term. Affected creatures also retain their normal breathing pattern.` }),

  // ===== LEVEL 4 =====
  S({ key: 'banishment', name: 'Banishment', level: 4, school: 'Abjuration', classes: ['cleric', 'paladin', 'sorcerer', 'warlock', 'wizard'], time: '1 action', range: '60 ft', components: 'V, S, M', duration: '1 min', conc: true, desc: `You attempt to send one creature that you can see within range to another plane of existence. The target must succeed on a charisma saving throw or be banished.

If the target is native to the plane of existence you're on, you banish the target to a harmless demiplane. While there, the target is incapacitated. The target remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied.

If the target is native to a different plane of existence than the one you're on, the target is banished with a faint popping noise, returning to its home plane. If the spell ends before 1 minute has passed, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. Otherwise, the target doesn't return.

At Higher Levels. When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th.` }),
  S({ key: 'dimension-door', name: 'Dimension Door', level: 4, school: 'Conjuration', classes: ['bard', 'sorcerer', 'warlock', 'wizard'], time: '1 action', range: '500 ft', components: 'V', duration: 'Instant', desc: `You teleport yourself from your current location to any other spot within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualize, or one you can describe by stating distance and direction, such as "200 feet straight downward" or "upward to the northwest at a 45-degree angle, 300 feet."

You can bring along objects as long as their weight doesn't exceed what you can carry. You can also bring one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell.

If you would arrive in a place already occupied by an object or a creature, you and any creature traveling with you each take 4d6 force damage, and the spell fails to teleport you.` }),
  S({ key: 'greater-invisibility', name: 'Greater Invisibility', level: 4, school: 'Illusion', classes: ['bard', 'sorcerer', 'wizard'], time: '1 action', range: 'Touch', components: 'V, S', duration: '1 min', conc: true, desc: `You or a creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person.` }),
  S({ key: 'ice-storm', name: 'Ice Storm', level: 4, school: 'Evocation', classes: ['druid', 'sorcerer', 'wizard'], time: '1 action', range: '300 ft', components: 'V, S, M', duration: 'Instant', desc: `A hail of rock-hard ice pounds to the ground in a 20-foot-radius, 40-foot-high cylinder centered on a point within range. Each creature in the cylinder must make a dexterity saving throw. A creature takes 2d8 bludgeoning damage and 4d6 cold damage on a failed save, or half as much damage on a successful one.

Hailstones turn the storm's area of effect into difficult terrain until the end of your next turn.

At Higher Levels. When you cast this spell using a spell slot of 5th level or higher, the bludgeoning damage increases by 1d8 for each slot level above 4th.` }),
  S({ key: 'polymorph', name: 'Polymorph', level: 4, school: 'Transmutation', classes: ['bard', 'druid', 'sorcerer', 'wizard'], time: '1 action', range: '60 ft', components: 'V, S, M', duration: '1 hour', conc: true, desc: `This spell transforms a creature that you can see within range into a new form. An unwilling creature must make a wisdom saving throw to avoid the effect. A shapechanger automatically succeeds on this saving throw.

The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be any beast whose challenge rating is equal to or less than the target's (or the target's level, if it doesn't have a challenge rating). The target's game statistics, including mental ability scores, are replaced by the statistics of the chosen beast. It retains its alignment and personality.

The target assumes the hit points of its new form. When it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious.

The creature is limited in the actions it can perform by the nature of its new form, and it can't speak, cast spells, or take any other action that requires hands or speech.

The target's gear melds into the new form. The creature can't activate, use, wield, or otherwise benefit from any of its equipment.` }),
  S({ key: 'wall-of-fire', name: 'Wall of Fire', level: 4, school: 'Evocation', classes: ['druid', 'sorcerer', 'wizard'], time: '1 action', range: '120 ft', components: 'V, S, M', duration: '1 min', conc: true, desc: `You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and lasts for the duration.

When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 5d8 fire damage, or half as much damage on a successful save.

One side of the wall, selected by you when you cast this spell, deals 5d8 fire damage to each creature that ends its turn within 10 feet o f that side or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side of the wall deals no damage.

The other side of the wall deals no damage.

At Higher Levels. When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th.` }),
  S({ key: 'guardian-of-faith', name: 'Guardian of Faith', level: 4, school: 'Conjuration', classes: ['cleric'], time: '1 action', range: '30 ft', components: 'V', duration: '8 hours', desc: `A Large spectral guardian appears and hovers for the duration in an unoccupied space of your choice that you can see within range. The guardian occupies that space and is indistinct except for a gleaming sword and shield emblazoned with the symbol of your deity.

Any creature hostile to you that moves to a space within 10 feet of the guardian for the first time on a turn must succeed on a dexterity saving throw. The creature takes 20 radiant damage on a failed save, or half as much damage on a successful one. The guardian vanishes when it has dealt a total of 60 damage.` }),

  // ===== LEVEL 5+ =====
  S({ key: 'cone-of-cold', name: 'Cone of Cold', level: 5, school: 'Evocation', classes: ['druid', 'sorcerer', 'wizard'], time: '1 action', range: 'Self (60-ft cone)', components: 'V, S, M', duration: 'Instant', desc: `A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a constitution saving throw. A creature takes 8d8 cold damage on a failed save, or half as much damage on a successful one.

A creature killed by this spell becomes a frozen statue until it thaws.

At Higher Levels. When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th.` }),
  S({ key: 'greater-restoration', name: 'Greater Restoration', level: 5, school: 'Abjuration', classes: ['bard', 'cleric', 'druid'], time: '1 action', range: 'Touch', components: 'V, S, M', duration: 'Instant', desc: `You imbue a creature you touch with positive energy to undo a debilitating effect. You can reduce the target's exhaustion level by one, or end one of the following effects on the target:

- One effect that charmed or petrified the target

- One curse, including the target's attunement to a cursed magic item

- Any reduction to one of the target's ability scores

- One effect reducing the target's hit point maximum` }),
  S({ key: 'mass-cure-wounds', name: 'Mass Cure Wounds', level: 5, school: 'Evocation', classes: ['bard', 'cleric', 'druid'], time: '1 action', range: '60 ft', components: 'V, S', duration: 'Instant', desc: `A wave of healing energy washes out from a point of your choice within range. Choose up to six creatures in a 30-foot-radius sphere centered on that point. Each target regains hit points equal to 3d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.

At Higher Levels. When you cast this spell using a spell slot of 6th level or higher, the healing increases by 1d8 for each slot level above 5th.` }),
  S({ key: 'flame-strike', name: 'Flame Strike', level: 5, school: 'Evocation', classes: ['cleric'], time: '1 action', range: '60 ft', components: 'V, S, M', duration: 'Instant', desc: `A vertical column of divine fire roars down from the heavens in a location you specify. Each creature in a 10-foot-radius, 40-foot-high cylinder centered on a point within range must make a dexterity saving throw. A creature takes 4d6 fire damage and 4d6 radiant damage on a failed save, or half as much damage on a successful one.

At Higher Levels. When you cast this spell using a spell slot of 6th level or higher, the fire damage or the radiant damage (your choice) increases by 1d6 for each slot level above 5th.` }),
  S({ key: 'raise-dead', name: 'Raise Dead', level: 5, school: 'Necromancy', classes: ['bard', 'cleric', 'paladin'], time: '1 hour', range: 'Touch', components: 'V, S, M', duration: 'Instant', desc: `You return a dead creature you touch to life, provided that it has been dead no longer than 10 days. If the creature's soul is both willing and at liberty to rejoin the body, the creature returns to life with 1 hit point.

This spell also neutralizes any poisons and cures nonmagical diseases that affected the creature at the time it died. This spell doesn't, however, remove magical diseases, curses, or similar effects; if these aren't first removed prior to casting the spell, they take effect when the creature returns to life. The spell can't return an undead creature to life.

This spell closes all mortal wounds, but it doesn't restore missing body parts. If the creature is lacking body parts or organs integral for its survival--its head, for instance--the spell automatically fails.

Coming back from the dead is an ordeal. The target takes a -4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears.` }),
  S({ key: 'wall-of-force', name: 'Wall of Force', level: 5, school: 'Evocation', classes: ['wizard'], time: '1 action', range: '120 ft', components: 'V, S, M', duration: '10 min', conc: true, desc: `An invisible wall of force springs into existence at a point you choose within range. The wall appears in any orientation you choose, as a horizontal or vertical barrier or at an angle. It can be free floating or resting on a solid surface. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-by-10-foot panels. Each panel must be contiguous with another panel. In any form, the wall is 1/4 inch thick. It lasts for the duration. If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice which side).

Nothing can physically pass through the wall. It is immune to all damage and can't be dispelled by dispel magic. A disintegrate spell destroys the wall instantly, however. The wall also extends into the Ethereal Plane, blocking ethereal travel through the wall.` }),
  S({ key: 'heal', name: 'Heal', level: 6, school: 'Evocation', classes: ['cleric', 'druid'], time: '1 action', range: '60 ft', components: 'V, S', duration: 'Instant', desc: `Choose a creature that you can see within range. A surge of positive energy washes through the creature, causing it to regain 70 hit points. This spell also ends blindness, deafness, and any diseases affecting the target. This spell has no effect on constructs or undead.

At Higher Levels. When you cast this spell using a spell slot of 7th level or higher, the amount of healing increases by 10 for each slot level above 6th.` }),
  S({ key: 'chain-lightning', name: 'Chain Lightning', level: 6, school: 'Evocation', classes: ['sorcerer', 'wizard'], time: '1 action', range: '150 ft', components: 'V, S, M', duration: 'Instant', desc: `You create a bolt of lightning that arcs toward a target of your choice that you can see within range. Three bolts then leap from that target to as many as three other targets, each of which must be within 30 feet of the first target. A target can be a creature or an object and can be targeted by only one of the bolts.

A target must make a dexterity saving throw. The target takes 10d8 lightning damage on a failed save, or half as much damage on a successful one.

At Higher Levels. When you cast this spell using a spell slot of 7th level or higher, one additional bolt leaps from the first target to another target for each slot level above 6th.` }),
  S({ key: 'disintegrate', name: 'Disintegrate', level: 6, school: 'Transmutation', classes: ['sorcerer', 'wizard'], time: '1 action', range: '60 ft', components: 'V, S, M', duration: 'Instant', desc: `A thin green ray springs from your pointing finger to a target that you can see within range. The target can be a creature, an object, or a creation of magical force, such as the wall created by wall of force.

A creature targeted by this spell must make a dexterity saving throw. On a failed save, the target takes 10d6 + 40 force damage. If this damage reduces the target to 0 hit points, it is disintegrated.

A disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of fine gray dust. The creature can be restored to life only by means of a true resurrection or a wish spell.

This spell automatically disintegrates a Large or smaller nonmagical object or a creation of magical force. If the target is a Huge or larger object or creation of force, this spell disintegrates a 10-foot-cube portion of it. A magic item is unaffected by this spell.

At Higher Levels. When you cast this spell using a spell slot of 7th level or higher, the damage increases by 3d6 for each slot level above 6th.` }),
  S({ key: 'finger-of-death', name: 'Finger of Death', level: 7, school: 'Necromancy', classes: ['sorcerer', 'warlock', 'wizard'], time: '1 action', range: '60 ft', components: 'V, S', duration: 'Instant', desc: `You send negative energy coursing through a creature that you can see within range, causing it searing pain. The target must make a constitution saving throw. It takes 7d8 + 30 necrotic damage on a failed save, or half as much damage on a successful one.

A humanoid killed by this spell rises at the start of your next turn as a zombie that is permanently under your command, following your verbal orders to the best of its ability.` }),
  S({ key: 'fire-storm', name: 'Fire Storm', level: 7, school: 'Evocation', classes: ['cleric', 'druid', 'sorcerer'], time: '1 action', range: '150 ft', components: 'V, S', duration: 'Instant', desc: `A storm made up of sheets of roaring flame appears in a location you choose within range. The area of the storm consists of up to ten 10-foot cubes, which you can arrange as you wish. Each cube must have at least one face adjacent to the face of another cube. Each creature in the area must make a dexterity saving throw. It takes 7d10 fire damage on a failed save, or half as much damage on a successful one.

The fire damages objects in the area and ignites flammable objects that aren't being worn or carried. If you choose, plant life in the area is unaffected by this spell.` }),
  S({ key: 'power-word-stun', name: 'Power Word Stun', level: 8, school: 'Enchantment', classes: ['bard', 'sorcerer', 'warlock', 'wizard'], time: '1 action', range: '60 ft', components: 'V', duration: 'Instant', desc: `You speak a word of power that can overwhelm the mind of one creature you can see within range, leaving it dumbfounded. If the target has 150 hit points or fewer, it is stunned. Otherwise, the spell has no effect.

The stunned target must make a constitution saving throw at the end of each of its turns. On a successful save, this stunning effect ends.` }),
  S({ key: 'meteor-swarm', name: 'Meteor Swarm', level: 9, school: 'Evocation', classes: ['sorcerer', 'wizard'], time: '1 action', range: '1 mile', components: 'V, S', duration: 'Instant', desc: `Blazing orbs of fire plummet to the ground at four different points you can see within range. Each creature in a 40-foot-radius sphere centered on each point you choose must make a dexterity saving throw. The sphere spreads around corners. A creature takes 20d6 fire damage and 20d6 bludgeoning damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one fiery burst is affected only once.

The spell damages objects in the area and ignites flammable objects that aren't being worn or carried.` }),
  S({ key: 'wish', name: 'Wish', level: 9, school: 'Conjuration', classes: ['sorcerer', 'wizard'], time: '1 action', range: 'Self', components: 'V', duration: 'Instant', desc: `Wish is the mightiest spell a mortal creature can cast. By simply speaking aloud, you can alter the very foundations of reality in accord with your desires.

The basic use of this spell is to duplicate any other spell of 8th level or lower. You don't need to meet any requirements in that spell, including costly components. The spell simply takes effect.

Alternatively, you can create one of the following effects of your choice:

- You create one object of up to 25,000 gp in value that isn't a magic item. The object can be no more than 300 feet in any dimension, and it appears in an unoccupied space you can see on the ground.

- You allow up to twenty creatures that you can see to regain all hit points, and you end all effects on them described in the greater restoration spell.

- You grant up to ten creatures that you can see resistance to a damage type you choose.

- You grant up to ten creatures you can see immunity to a single spell or other magical effect for 8 hours. For instance, you could make yourself and all your companions immune to a lich's life drain attack.

- You undo a single recent event by forcing a reroll of any roll made within the last round (including your last turn). Reality reshapes itself to accommodate the new result. For example, a wish spell could undo an opponent's successful save, a foe's critical hit, or a friend's failed save. You can force the reroll to be made with advantage or disadvantage, and you can choose whether to use the reroll or the original roll.

You might be able to achieve something beyond the scope of the above examples. State your wish to the GM as precisely as possible. The GM has great latitude in ruling what occurs in such an instance; the greater the wish, the greater the likelihood that something goes wrong. This spell might simply fail, the effect you desire might only be partly achieved, or you might suffer some unforeseen consequence as a result of how you worded the wish. For example, wishing that a villain were dead might propel you forward in time to a period when that villain is no longer alive, effectively removing you from the game. Similarly, wishing for a legendary magic item or artifact might instantly transport you to the presence of the item's current owner.

The stress of casting this spell to produce any effect other than duplicating another spell weakens you. After enduring that stress, each time you cast a spell until you finish a long rest, you take 1d10 necrotic damage per level of that spell. This damage can't be reduced or prevented in any way. In addition, your Strength drops to 3, if it isn't 3 or lower already, for 2d4 days. For each of those days that you spend resting and doing nothing more than light activity, your remaining recovery time decreases by 2 days. Finally, there is a 33 percent chance that you are unable to cast wish ever again if you suffer this stress.` }),
,
  S({ source: 'XGE',
    key: "abi-dalzims-horrid-wilting",
    name: "Abi-Dalzim's Horrid Wilting",
    level: 8,
    school: "Necromancy",
    classes: ["wizard", "sorcerer"],
    time: "1 action",
    range: "150 feet",
    components: "V, S, M (a bit of sponge)",
    duration: "Instantaneous",
    desc: "You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead aren't affected, and plants and water elementals make this saving throw with disadvantage. A creature takes 12d8 necrotic damage on a failed save, or half as much damage on a successful one.\n\nNonmagical plants in the area that aren't creatures, such as trees and shrubs, wither and die instantly."
  }),
  S({ source: 'XGE',
    key: "absorb-elements",
    name: "Absorb Elements",
    level: 1,
    school: "Abjuration",
    classes: ["druid", "ranger", "wizard"],
    time: "1 reaction, which you take when you take acid, cold, fire, lightning, or thunder damage",
    range: "Self",
    components: "S",
    duration: "1 round",
    desc: "The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends.\n\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st."
  }),
  S({ source: 'XGE',
    key: "aganazzars-scorcher",
    name: "Aganazzar's Scorcher",
    level: 2,
    school: "Evocation",
    classes: ["sorcerer", "wizard"],
    time: "1 action",
    range: "30 feet",
    components: "V, S, M (a red dragon's scale)",
    duration: "Instantaneous",
    desc: "A line of roaring flame 30 feet long and 5 feet wide emanates from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 3d8 fire damage on a failed save, or half as much damage on a successful one.\n\nAt Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
  }),
  S({ source: 'XGE',
    key: "beast-bond",
    name: "Beast Bond",
    level: 1,
    school: "Divination",
    classes: ["druid", "ranger"],
    time: "1 action",
    range: "Touch",
    components: "V, S, M (a bit of fur wrapped in a cloth)",
    duration: "Concentration, up to 10 minutes",
    desc: "You establish a telepathic link with one beast you touch that is friendly to you or charmed by you. The spell fails if the beast's Intelligence score is 4 or higher. Until the spell ends, the link is active while you and the beast are within line of sight of each other. Through the link, the beast can understand your telepathic messages to it, and it can telepathically communicate simple emotions and concepts back to you. While the link is active, the beast gains advantage on attack rolls against any creature within 5 feet of you that you can see."
  }),
  S({ source: 'XGE',
    key: "bones-of-the-earth",
    name: "Bones of the Earth",
    level: 6,
    school: "Transmutation",
    classes: ["druid"],
    time: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Instantaneous",
    desc: "You cause up to six pillars of stone to burst from places on the ground that you can see within range. Each pillar is a cylinder that has a diameter of 5 feet and a height of up to 30 feet. The ground where a pillar appears must be wide enough for its diameter, and you can target the ground under a creature if that creature is Medium or smaller. Each pillar has AC 5 and 30 hit points. When reduced to 0 hit points, a pillar crumbles into rubble, which creates an area of difficult terrain with a 10-foot radius that lasts until the rubble is cleared. Each 5-foot-diameter portion of the area requires at least 1 minute to clear by hand.\n\nIf a pillar is created under a creature, that creature must succeed on a Dexterity saving throw or be lifted by the pillar. A creature can choose to fail the save.\n\nIf a pillar is prevented from reaching its full height because of a ceiling or other obstacle, a creature on the pillar takes 6d6 bludgeoning damage and is restrained, pinched between the pillar and the obstacle. The restrained creature can use an action to make a Strength or Dexterity check (the creature's choice) against the spell's save DC. On a success, the creature is no longer restrained and must either move off the pillar or fall off it.\n\nAt Higher Levels. When you cast this spell using a spell slot of 7th level or higher, you can create two additional pillars for each slot level above 6th."
  }),
  S({ source: 'XGE',
    key: "catapult",
    name: "Catapult",
    level: 1,
    school: "Transmutation",
    classes: ["sorcerer", "wizard"],
    time: "1 action",
    range: "60 feet",
    components: "S",
    duration: "Instantaneous",
    desc: "Choose one object weighing 1 to 5 pounds within range that isn't being worn or carried. The object flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface. If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. When the object strikes something, the object and what it strikes each take 3d8 bludgeoning damage.\n\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the maximum weight of objects that you can target with this spell increases by 5 pounds, and the damage increases by 1d8, for each slot level above 1st."
  }),
  S({ source: 'XGE',
    key: "catnap",
    name: "Catnap",
    level: 3,
    school: "Enchantment",
    classes: ["bard", "sorcerer", "wizard"],
    time: "1 action",
    range: "30 feet",
    components: "S, M (a pinch of sand)",
    duration: "10 minutes",
    desc: "You make a calming gesture, and up to three willing creatures of your choice that you can see within range fall unconscious for the spell's duration. The spell ends on a target early if it takes damage or someone uses an action to shake or slap it awake. If a target remains unconscious for the full duration, that target gains the benefit of a short rest, and it can't be affected by this spell again until it finishes a long rest.\n\nAt Higher Levels. When you cast this spell using a spell slot of 4th level or higher, you can target one additional willing creature for each slot level above 3rd."
  }),
  S({ source: 'XGE',
    key: "cause-fear",
    name: "Cause Fear",
    level: 1,
    school: "Necromancy",
    classes: ["warlock", "wizard"],
    time: "1 action",
    range: "60 feet",
    components: "V",
    duration: "Concentration, up to 1 minute",
    desc: "You awaken the sense of mortality in one creature you can see within range. A construct or an undead is immune to this effect. The target must succeed on a Wisdom saving throw or become frightened of you until the spell ends. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."
  }),
  S({ source: 'XGE',
    key: "ceremony",
    name: "Ceremony",
    level: 1,
    school: "Abjuration",
    classes: ["cleric", "paladin"],
    time: "1 hour",
    range: "Touch",
    components: "V, S, M (25 gp worth of powdered silver, which the spell consumes)",
    duration: "Instantaneous",
    desc: "You perform a special religious ceremony that is infused with magic. When you cast the spell, choose one of the following rites, the target of which must be within 10 feet of you throughout the casting.\n\nAtonement. You touch one willing creature whose alignment has changed, and you make a DC 20 Wisdom (Insight) check. On a successful check, you restore the target to its original alignment.\n\nBless Water. You touch one vial of water and cause it to become holy water.\n\nComing of Age. You touch one humanoid who is a young adult. For the next 24 hours, whenever the target makes an ability check, it can roll a d4 and add the number rolled to the ability check. A creature can benefit from this rite only once.\n\nDedication. You touch one humanoid who wishes to be dedicated to your god's service. For the next 24 hours, whenever the target makes a saving throw, it can roll a d4 and add the number rolled to the save. A creature can benefit from this rite only once.\n\nFuneral Rite. You touch one corpse, and for the next 7 days, the target can't become undead by any means short of a wish spell.\n\nWedding. You touch adult humanoids willing to be bonded together in marriage. For the next 7 days, each target gains a +2 bonus to AC while they are within 30 feet of each other. A creature can benefit from this rite again only if widowed."
  }),
  S({ source: 'XGE',
    key: "chaos-bolt",
    name: "Chaos Bolt",
    level: 1,
    school: "Evocation",
    classes: ["sorcerer"],
    time: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Instantaneous",
    desc: "You hurl an undulating, warbling mass of chaotic energy at one creature in range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 + 1d6 damage. Choose one of the d8s. The number rolled on that die determines the attack's damage type, as shown below.\n\n1 Acid\n2 Cold\n3 Fire\n4 Force\n5 Lightning\n6 Poison\n7 Psychic\n8 Thunder\n\nIf you roll the same number on both d8s, the chaotic energy leaps from the target to a different creature of your choice within 30 feet of it. Make a new attack roll against the new target, and make a new damage roll, which could cause the chaotic energy to leap again.\n\nA creature can be targeted only once by each casting of this spell.\n\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, each target takes 1d6 extra damage of the type rolled for each slot level above 1st."
  }),
  S({ source: 'XGE',
    key: "charm-monster",
    name: "Charm Monster",
    level: 4,
    school: "Enchantment",
    classes: ["bard", "druid", "sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "1 hour",
    desc: "You attempt to charm a creature you can see within range. It must make a Wisdom saving throw, and it does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature is friendly to you. When the spell ends, the creature knows it was charmed by you.\n\nAt Higher Levels. When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them."
  }),
  S({ source: 'XGE',
    key: "control-flames",
    name: "Control Flames",
    level: 0,
    school: "Transmutation",
    classes: ["druid", "sorcerer", "wizard"],
    time: "1 action",
    range: "60 feet",
    components: "S",
    duration: "Instantaneous or 1 hour (see below)",
    desc: "You choose a nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways:\n\n• You instantaneously expand the flame 5 feet in one direction, provided that wood or other fuel is present in the new location.\n• You instantaneously extinguish the flames within the cube.\n• You double or halve the area of bright light and dim light cast by the flame, change its color, or both. The change lasts for 1 hour.\n• You cause simple shapes—such as the vague form of a creature, an inanimate object, or a location—to appear within the flames and animate as you like. The shapes last for 1 hour.\n\nIf you cast this spell multiple times, you can have up to three non-instantaneous effects created by it active at a time, and you can dismiss such an effect as an action."
  }),
  S({ source: 'XGE',
    key: "control-winds",
    name: "Control Winds",
    level: 5,
    school: "Transmutation",
    classes: ["druid", "sorcerer", "wizard"],
    time: "1 action",
    range: "300 feet",
    components: "V, S",
    duration: "Concentration, up to 1 hour",
    desc: "You take control of the air in a 100-foot cube that you can see within range. Choose one of the following effects when you cast the spell. The effect lasts for the spell's duration, unless you use your action on a later turn to switch to a different effect. You can also use your action to temporarily halt the effect or to restart one you've halted.\n\nGusts. A wind picks up within the cube, continually blowing in a horizontal direction you designate. You choose the intensity of the wind: calm, moderate, or strong. If the wind is moderate or strong, ranged weapon attacks that enter or leave the cube or pass through it have disadvantage on their attack rolls. If the wind is strong, any creature moving against the wind must spend 1 extra foot of movement for each foot moved.\n\nDowndraft. You cause a sustained blast of strong wind to blow downward from the top of the cube. Ranged weapon attacks that pass through the cube or that are made against targets within it have disadvantage on their attack rolls. A creature must make a Strength saving throw if it flies into the cube for the first time on a turn or starts its turn there flying. On a failed save, the creature is knocked prone.\n\nUpdraft. You cause a sustained updraft within the cube, rising upward from the cube's bottom side. Creatures that end a fall within the cube take only half damage from the fall. When a creature in the cube makes a vertical jump, the creature can jump up to 10 feet higher than normal."
  }),
  S({ source: 'XGE',
    key: "create-bonfire",
    name: "Create Bonfire",
    level: 0,
    school: "Conjuration",
    classes: ["druid", "sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    desc: "You create a bonfire on ground that you can see within range. Until the spell ends, the magic bonfire fills a 5-foot cube. Any creature in the bonfire's space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 fire damage. A creature must also make the saving throw when it moves into the bonfire's space for the first time on a turn or ends its turn there.\n\nThe bonfire ignites flammable objects in its area that aren't being worn or carried.\n\nThe spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
  }),
  S({ source: 'XGE',
    key: "create-homunculus",
    name: "Create Homunculus",
    level: 6,
    school: "Transmutation",
    classes: ["wizard"],
    time: "1 hour",
    range: "Touch",
    components: "V, S, M (clay, ash, and mandrake root, all of which the spell consumes, and a jewel-encrusted dagger worth at least 1,000 gp)",
    duration: "Instantaneous",
    desc: "While speaking an intricate incantation, you cut yourself with a jewel-encrusted dagger, taking 2d4 piercing damage that can't be reduced in any way. You then drip your blood on the spell's other components and touch them, transforming them into a special construct called a homunculus.\n\nThe statistics of the homunculus are in the Monster Manual. It is your faithful companion, and it dies if you die. Whenever you finish a long rest, you can spend up to half your Hit Dice if the homunculus is on the same plane of existence as you. When you do so, roll each die and add your Constitution modifier to it. Your hit point maximum is reduced by the total, and the homunculus's hit point maximum and current hit points are both increased by it. This process can reduce you to no lower than 1 hit point, and the change to your and the homunculus's hit points ends when you finish your next long rest. The reduction to your hit point maximum can't be removed by any means before then, except by the homunculus's death.\n\nYou can have only one homunculus at a time. If you cast this spell while your homunculus lives, the spell fails."
  }),
  S({ source: 'XGE',
    key: "crown-of-stars",
    name: "Crown of Stars",
    level: 7,
    school: "Evocation",
    classes: ["sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "Self",
    components: "V, S",
    duration: "1 hour",
    desc: "Seven star-like motes of light appear and orbit your head until the spell ends. You can use a bonus action to send one of the motes streaking toward one creature or object within 120 feet of you. When you do so, make a ranged spell attack. On a hit, the target takes 4d12 radiant damage. Whether you hit or miss, the mote is expended. The spell ends early if you expend the last mote.\n\nIf you have four or more motes remaining, they shed bright light in a 30-foot radius and dim light for an additional 30 feet. If you have one to three motes remaining, they shed dim light in a 30-foot radius.\n\nAt Higher Levels. When you cast this spell using a spell slot of 8th level or higher, the number of motes created increases by two for each slot level above 7th."
  }),
  S({ source: 'XGE',
    key: "danse-macabre",
    name: "Danse Macabre",
    level: 5,
    school: "Necromancy",
    classes: ["warlock", "wizard"],
    time: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Concentration, up to 1 hour",
    desc: "Threads of dark power leap from your fingers to pierce up to five Small or Medium corpses you can see within range. Each corpse immediately stands up and becomes undead. You decide whether it is a zombie or a skeleton (the statistics for zombies and skeletons are in the Monster Manual), and it gains a bonus to its attack and damage rolls equal to your spellcasting ability modifier.\n\nYou can use a bonus action to mentally command the creatures you make with this spell, issuing the same command to all of them. To receive the command, a creature must be within 60 feet of you. You decide what action the creatures will take and where they will move during their next turn, or you can issue a general command, such as to guard a chamber or passageway against your foes. If you issue no commands, the creatures do nothing except defend themselves against hostile creatures. Once given an order, the creatures continue to follow it until their task is complete.\n\nThe creatures are under your control until the spell ends, after which they become inanimate once more.\n\nAt Higher Levels. When you cast this spell using a spell slot of 6th level or higher, you animate up to two additional corpses for each slot level above 5th."
  }),
  S({ source: 'XGE',
    key: "dawn",
    name: "Dawn",
    level: 5,
    school: "Evocation",
    classes: ["cleric", "wizard"],
    time: "1 action",
    range: "60 feet",
    components: "V, S, M (a sunburst pendant worth at least 100 gp)",
    duration: "Concentration, up to 1 minute",
    desc: "The light of dawn shines down on a location you specify within range. Until the spell ends, a 30-foot-radius, 40-foot-high cylinder of bright light glimmers there. This light is sunlight.\n\nWhen the cylinder appears, each creature in it must make a Constitution saving throw, taking 4d10 radiant damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw whenever it ends its turn in the cylinder.\n\nIf you're within 60 feet of the cylinder, you can move it up to 60 feet as a bonus action on your turn."
  }),
  S({ source: 'XGE',
    key: "dragons-breath",
    name: "Dragon's Breath",
    level: 2,
    school: "Transmutation",
    classes: ["sorcerer", "wizard"],
    time: "1 bonus action",
    range: "Touch",
    components: "V, S, M (a hot pepper)",
    duration: "Concentration, up to 1 minute",
    desc: "You touch one willing creature and imbue it with the power to spew magical energy from its mouth, provided it has one. Choose acid, cold, fire, lightning, or poison. Until the spell ends, the creature can use an action to exhale energy of the chosen type in a 15-foot cone. Each creature in that area must make a Dexterity saving throw, taking 3d6 damage of the chosen type on a failed save, or half as much damage on a successful one.\n\nAt Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
  }),
  S({ source: 'XGE',
    key: "druid-grove",
    name: "Druid Grove",
    level: 6,
    school: "Abjuration",
    classes: ["druid"],
    time: "10 minutes",
    range: "Touch",
    components: "V, S, M (mistletoe, which the spell consumes, that was harvested with a golden sickle under the light of a full moon)",
    duration: "24 hours",
    desc: "You invoke the spirits of nature to protect an area outdoors or underground. The area can be as small as a 30-foot cube or as large as a 90-foot cube. Buildings and other structures are excluded from the affected area. If you cast this spell in the same area every day for a year, the spell lasts until dispelled.\n\nThe spell creates the following effects within the area. When you cast this spell, you can specify creatures as friends who are immune to the effects. You can also specify a password that, when spoken aloud, makes the speaker immune to these effects.\n\nThe entire warded area radiates magic. A dispel magic cast on the area, if successful, removes only one of the following effects, not the entire area. That spell's caster chooses which effect to end. Only when all its effects are gone is this spell dispelled.\n\nSolid Fog. You can fill any number of 5-foot squares on the ground with thick fog, making them heavily obscured. The fog reaches 10 feet high. In addition, every foot of movement through the fog costs 2 extra feet. To a creature immune to this effect, the fog obscures nothing and looks like soft mist, with motes of green light floating in the air.\n\nGrasping Undergrowth. You can fill any number of 5-foot squares on the ground that aren't filled with fog with grasping weeds and vines, as if they were affected by an entangle spell. To a creature immune to this effect, the weeds and vines feel soft and reshape themselves to serve as temporary seats or beds.\n\nGrove Guardians. You can animate up to four trees in the area, causing them to uproot themselves from the ground. These trees have the same statistics as an awakened tree, which appears in the Monster Manual, except they can't speak, and their bark is covered with druidic symbols. If any creature not immune to this effect enters the warded area, the grove guardians fight until they have driven off or slain the intruders. The grove guardians also obey your spoken commands (no action required by you) that you issue while in the area. If you don't give them commands and no intruders are present, the grove guardians do nothing. The grove guardians can't leave the warded area. When the spell ends, the magic animating them disappears, and the trees take root again if possible.\n\nAdditional Spell Effect. You can place your choice of one of the following magical effects within the warded area:\n\n• A constant gust of wind in two locations of your choice\n• Spike growth in one location of your choice\n• Wind wall in two locations of your choice\n\nTo a creature immune to this effect, the winds are a fragrant, gentle breeze, and the area of spike growth is harmless."
  }),
  S({ source: 'XGE',
    key: "dust-devil",
    name: "Dust Devil",
    level: 2,
    school: "Conjuration",
    classes: ["druid", "sorcerer", "wizard"],
    time: "1 action",
    range: "60 feet",
    components: "V, S, M (a pinch of dust)",
    duration: "Concentration, up to 1 minute",
    desc: "Choose an unoccupied 5-foot cube of air that you can see within range. An elemental force that resembles a dust devil appears in the cube and lasts for the spell's duration.\n\nAny creature that ends its turn within 5 feet of the dust devil must make a Strength saving throw. On a failed save, the creature takes 1d8 bludgeoning damage and is pushed 10 feet away from the dust devil. On a successful save, the creature takes half as much damage and isn't pushed.\n\nAs a bonus action, you can move the dust devil up to 30 feet in any direction. If the dust devil moves over sand, dust, loose dirt, or light gravel, it sucks up the material and forms a 10-foot-radius cloud of debris around itself that lasts until the start of your next turn. The cloud heavily obscures its area.\n\nAt Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
  }),
  S({ source: 'XGE',
    key: "earthbind",
    name: "Earthbind",
    level: 2,
    school: "Transmutation",
    classes: ["druid", "sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "300 feet",
    components: "V",
    duration: "Concentration, up to 1 minute",
    desc: "Choose one creature you can see within range. Yellow strips of magical energy loop around the creature. The target must succeed on a Strength saving throw, or its flying speed (if any) is reduced to 0 feet for the spell's duration. An airborne creature affected by this spell safely descends at 60 feet per round until it reaches the ground or the spell ends."
  }),
  S({ source: 'XGE',
    key: "earth-tremor",
    name: "Earth Tremor",
    level: 1,
    school: "Evocation",
    classes: ["bard", "druid", "sorcerer", "wizard"],
    time: "1 action",
    range: "10 feet",
    components: "V, S",
    duration: "Instantaneous",
    desc: "You cause a tremor in the ground within range. Each creature other than you in that area must make a Dexterity saving throw. On a failed save, a creature takes 1d6 bludgeoning damage and is knocked prone. If the ground in that area is loose earth or stone, it becomes difficult terrain until cleared, with each 5-foot-diameter portion requiring at least 1 minute to clear by hand.\n\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
  }),
  S({ source: 'XGE',
    key: "elemental-bane",
    name: "Elemental Bane",
    level: 4,
    school: "Transmutation",
    classes: ["druid", "warlock", "wizard"],
    time: "1 action",
    range: "90 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    desc: "Choose one creature you can see within range, and choose one of the following damage types: acid, cold, fire, lightning, or thunder. The target must succeed on a Constitution saving throw or be affected by the spell for its duration. The first time each turn the affected target takes damage of the chosen type, the target takes an extra 2d6 damage of that type. Moreover, the target loses any resistance to that damage type until the spell ends.\n\nAt Higher Levels. When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them."
  }),
  S({ source: 'XGE',
    key: "enemies-abound",
    name: "Enemies Abound",
    level: 3,
    school: "Enchantment",
    classes: ["bard", "sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    desc: "You reach into the mind of one creature you can see and force it to make an Intelligence saving throw. A creature automatically succeeds if it is immune to being frightened. On a failed save, the target loses the ability to distinguish friend from foe, regarding all creatures it can see as enemies until the spell ends. Each time the target takes damage, it can repeat the saving throw, ending the effect on itself on a success.\n\nWhenever the affected creature chooses another creature as a target, it must choose the target at random from among the creatures it can see within range of the attack, spell, or other ability it's using. If an enemy provokes an opportunity attack from the affected creature, the creature must make that attack if it is able to."
  }),
  S({ source: 'XGE',
    key: "enervation",
    name: "Enervation",
    level: 5,
    school: "Necromancy",
    classes: ["sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    desc: "A tendril of inky darkness reaches out from you, touching a creature you can see within range to drain life from it. The target must make a Dexterity saving throw. On a successful save, the target takes 2d8 necrotic damage, and the spell ends. On a failed save, the target takes 4d8 necrotic damage, and until the spell ends, you can use your action on each of your turns to automatically deal 4d8 necrotic damage to the target. The spell ends if you use your action to do anything else, if the target is ever outside the spell's range, or if the target has total cover from you.\n\nWhenever the spell deals damage to a target, you regain hit points equal to half the amount of necrotic damage the target takes.\n\nAt Higher Levels. When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
  }),
  S({ source: 'XGE',
    key: "erupting-earth",
    name: "Erupting Earth",
    level: 3,
    school: "Transmutation",
    classes: ["druid", "sorcerer", "wizard"],
    time: "1 action",
    range: "120 feet",
    components: "V, S, M (a piece of obsidian)",
    duration: "Instantaneous",
    desc: "Choose a point you can see on the ground within range. A fountain of churned earth and stone erupts in a 20-foot cube centered on that point. Each creature in that area must make a Dexterity saving throw. A creature takes 3d12 bludgeoning damage on a failed save, or half as much damage on a successful one. Additionally, the ground in that area becomes difficult terrain until cleared. Each 5-foot-square portion of the area requires at least 1 minute to clear by hand.\n\nAt Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d12 for each slot level above 3rd."
  }),
  S({ source: 'XGE',
    key: "far-step",
    name: "Far Step",
    level: 5,
    school: "Conjuration",
    classes: ["sorcerer", "warlock", "wizard"],
    time: "1 bonus action",
    range: "Self",
    components: "V",
    duration: "Concentration, up to 1 minute",
    desc: "You teleport up to 60 feet to an unoccupied space you can see. On each of your turns before the spell ends, you can use a bonus action to teleport in this way again."
  }),
  S({ source: 'XGE',
    key: "find-greater-steed",
    name: "Find Greater Steed",
    level: 4,
    school: "Conjuration",
    classes: ["paladin"],
    time: "10 minutes",
    range: "30 feet",
    components: "V, S",
    duration: "Instantaneous",
    desc: "You summon a spirit that assumes the form of a loyal, majestic mount. Appearing in an unoccupied space within range, the spirit takes on a form you choose: a griffon, a pegasus, a peryton, a dire wolf, a rhinoceros, or a saber-toothed tiger. The creature has the statistics provided in the Monster Manual for the chosen form, though it is a celestial, a fey, or a fiend (your choice) instead of its normal creature type. Additionally, if it has an Intelligence score of 5 or lower, its Intelligence becomes 6, and it gains the ability to understand one language of your choice that you speak.\n\nYou control the mount in combat. While the mount is within 1 mile of you, you can communicate with it telepathically. While mounted on it, you can make any spell you cast that targets only you also target the mount.\n\nThe mount disappears temporarily when it drops to 0 hit points or when you dismiss it as an action. Casting this spell again re-summons the bonded mount, with all its hit points restored and any conditions removed.\n\nYou can't have more than one mount bonded by this spell or find steed at the same time. As an action, you can release a mount from its bond, causing it to disappear permanently.\n\nWhenever the mount disappears, it leaves behind any objects it was wearing or carrying."
  }),
  S({ source: 'XGE',
    key: "flame-arrows",
    name: "Flame Arrows",
    level: 3,
    school: "Transmutation",
    classes: ["druid", "ranger", "sorcerer", "wizard"],
    time: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Concentration, up to 1 hour",
    desc: "You touch a quiver containing arrows or bolts. When a target is hit by a ranged weapon attack using a piece of ammunition drawn from the quiver, the target takes an extra 1d6 fire damage. The spell's magic ends on a piece of ammunition when it hits or misses, and the spell ends when twelve pieces of ammunition have been drawn from the quiver.\n\nAt Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the number of pieces of ammunition you can affect with this spell increases by two for each slot level above 3rd."
  }),
  S({ source: 'XGE',
    key: "frostbite",
    name: "Frostbite",
    level: 0,
    school: "Evocation",
    classes: ["druid", "sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    desc: "You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn.\n\nThe spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
  }),
  S({ source: 'XGE',
    key: "guardian-of-nature",
    name: "Guardian of Nature",
    level: 4,
    school: "Transmutation",
    classes: ["druid", "ranger"],
    time: "1 bonus action",
    range: "Self",
    components: "V",
    duration: "Concentration, up to 1 minute",
    desc: "A nature spirit answers your call and transforms you into a powerful guardian. The transformation lasts until the spell ends. You choose one of the following forms to assume: Primal Beast or Great Tree.\n\nPrimal Beast. Bestial fur covers your body, your facial features become feral, and you gain the following benefits:\n• Your walking speed increases by 10 feet.\n• You gain darkvision with a range of 120 feet.\n• You make Strength-based attack rolls with advantage.\n• Your melee weapon attacks deal an extra 1d6 force damage on a hit.\n\nGreat Tree. Your skin appears barky, leaves sprout from your hair, and you gain the following benefits:\n• You gain 10 temporary hit points.\n• You make Constitution saving throws with advantage.\n• You make Dexterity- and Wisdom-based attack rolls with advantage.\n• While you are on the ground, the ground within 15 feet of you is difficult terrain for your enemies."
  }),
  S({ source: 'XGE',
    key: "gust",
    name: "Gust",
    level: 0,
    school: "Transmutation",
    classes: ["druid", "sorcerer", "wizard"],
    time: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "Instantaneous",
    desc: "You seize the air and compel it to create one of the following effects at a point you can see within range:\n\n• One Medium or smaller creature that you choose must succeed on a Strength saving throw or be pushed up to 5 feet away from you.\n• You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away from you. It isn't pushed with enough force to cause damage.\n• You create a harmless sensory effect using air, such as causing leaves to rustle, wind to slam shutters closed, or your clothing to ripple in a breeze."
  }),
  S({ source: 'XGE',
    key: "healing-spirit",
    name: "Healing Spirit",
    level: 2,
    school: "Conjuration",
    classes: ["druid", "ranger"],
    time: "1 bonus action",
    range: "60 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    desc: "You call forth a nature spirit to soothe the wounded. The intangible spirit appears in a space that is a 5-foot cube you can see within range. The spirit looks like a transparent beast or fey (your choice).\n\nUntil the spell ends, whenever you or a creature you can see moves into the spirit's space for the first time on a turn or starts its turn there, you can cause the spirit to restore 1d6 hit points to that creature (no action required). The spirit can't heal constructs or undead.\n\nAs a bonus action on your turn, you can move the spirit up to 30 feet to a space you can see.\n\nAt Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the healing increases by 1d6 for each slot level above 2nd."
  }),
  S({ source: 'XGE',
    key: "holy-weapon",
    name: "Holy Weapon",
    level: 5,
    school: "Evocation",
    classes: ["cleric", "paladin"],
    time: "1 bonus action",
    range: "Touch",
    components: "V, S",
    duration: "Concentration, up to 1 hour",
    desc: "You imbue a weapon you touch with holy power. Until the spell ends, the weapon emits bright light in a 30-foot radius and dim light for an additional 30 feet. In addition, weapon attacks made with it deal an extra 2d8 radiant damage on a hit. If the weapon isn't already a magic weapon, it becomes one for the duration.\n\nAs a bonus action on your turn, you can dismiss this spell and cause the weapon to emit a burst of radiance. Each creature of your choice that you can see within 30 feet of you must make a Constitution saving throw. On a failed save, a creature takes 4d8 radiant damage, and it is blinded for 1 minute. On a successful save, a creature takes half as much damage and isn't blinded. At the end of each of its turns, a blinded creature can make a Constitution saving throw, ending the effect on itself on a success."
  }),
  S({ source: 'XGE',
    key: "ice-knife",
    name: "Ice Knife",
    level: 1,
    school: "Conjuration",
    classes: ["druid", "sorcerer", "wizard"],
    time: "1 action",
    range: "60 feet",
    components: "S, M (a drop of water or a piece of ice)",
    duration: "Instantaneous",
    desc: "You create a shard of ice and fling it at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 piercing damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of it must succeed on a Dexterity saving throw or take 2d6 cold damage.\n\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the cold damage increases by 1d6 for each slot level above 1st."
  }),
  S({ source: 'XGE',
    key: "illusory-dragon",
    name: "Illusory Dragon",
    level: 8,
    school: "Illusion",
    classes: ["wizard"],
    time: "1 action",
    range: "120 feet",
    components: "S",
    duration: "Concentration, up to 1 minute",
    desc: "By gathering threads of shadow material from the Shadowfell, you create a Huge shadowy dragon in an unoccupied space that you can see within range. The illusion lasts for the spell's duration and occupies its space, as if it were a creature.\n\nWhen the illusion appears, any of your enemies that can see it must succeed on a Wisdom saving throw or become frightened of it for 1 minute. If a frightened creature ends its turn in a location where it doesn't have line of sight to the illusion, it can repeat the saving throw, ending the effect on itself on a success.\n\nAs a bonus action on your turn, you can move the illusion up to 60 feet. At any point during its movement, you can cause it to exhale a blast of energy in a 60-foot cone originating from its space. When you create the dragon, choose a damage type: acid, cold, fire, lightning, necrotic, or poison. Each creature in the cone must make an Intelligence saving throw, taking 7d6 damage of the chosen damage type on a failed save, or half as much damage on a successful one.\n\nThe illusion is tangible because of the shadow stuff used to create it, but attacks miss it automatically, it succeeds on all saving throws, and it is immune to all damage and conditions. A creature that uses an action to examine the dragon can determine that it is an illusion by succeeding on an Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through it and has advantage on saving throws against its breath."
  }),
  S({ source: 'XGE',
    key: "immolation",
    name: "Immolation",
    level: 5,
    school: "Evocation",
    classes: ["sorcerer", "wizard"],
    time: "1 action",
    range: "90 feet",
    components: "V",
    duration: "Concentration, up to 1 minute",
    desc: "Flames wreathe one creature you can see within range. The target must make a Dexterity saving throw. It takes 8d6 fire damage on a failed save, or half as much damage on a successful one. On a failed save, the target also burns for the spell's duration. The burning target sheds bright light in a 30-foot radius and dim light for an additional 30 feet. At the end of each of its turns, the target repeats the saving throw. It takes 4d6 fire damage on a failed save, and the spell ends on a successful one. These magical flames can't be extinguished by nonmagical means.\n\nIf damage from this spell kills a target, the target is turned to ash."
  }),
  S({ source: 'XGE',
    key: "infernal-calling",
    name: "Infernal Calling",
    level: 5,
    school: "Conjuration",
    classes: ["warlock", "wizard"],
    time: "1 minute",
    range: "90 feet",
    components: "V, S, M (a ruby worth at least 999 gp)",
    duration: "Concentration, up to 1 hour",
    desc: "Uttering a dark incantation, you summon a devil from the Nine Hells. You choose the devil's type, which must be one of challenge rating 6 or lower, such as a barbed devil or a bearded devil. The devil appears in an unoccupied space that you can see within range. The devil disappears when it drops to 0 hit points or when the spell ends.\n\nThe devil is unfriendly toward you and your companions. Roll initiative for the devil, which has its own turns. It is under the Dungeon Master's control and acts according to its nature on each of its turns, which might result in its attacking you if it thinks it can prevail, or trying to tempt you to undertake an evil act in exchange for limited service. The DM has the creature's statistics.\n\nOn each of your turns, you can try to issue a verbal command to the devil (no action required by you). It obeys the command if the likely outcome is in accordance with its desires, especially if the result would draw you toward evil. Otherwise, you must make a Charisma (Deception, Intimidation, or Persuasion) check contested by its Wisdom (Insight) check. You make the check with advantage if you say the devil's true name. If your check fails, the devil becomes immune to your verbal commands for the duration of the spell, though it can still carry out your commands if it chooses. If your check succeeds, the devil carries out your command—such as 'attack my enemies,' 'explore the room ahead,' or 'bear this message to the queen'—until it completes the activity, at which point it returns to you to report having done so.\n\nIf your concentration ends before the spell reaches its full duration, the devil doesn't disappear if it has become immune to your verbal commands. Instead, it acts in whatever manner it chooses for 3d6 minutes, and then it disappears.\n\nIf you possess an individual devil's talisman, you can summon that devil if it is of the appropriate challenge rating plus 1, and it obeys all your commands, with no Charisma checks required.\n\nAt Higher Levels. When you cast this spell using a spell slot of 6th level or higher, the challenge rating increases by 1 for each slot level above 5th."
  }),
  S({ source: 'XGE',
    key: "infestation",
    name: "Infestation",
    level: 0,
    school: "Conjuration",
    classes: ["druid", "sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "30 feet",
    components: "V, S, M (a living flea)",
    duration: "Instantaneous",
    desc: "You cause a cloud of mites, fleas, and other parasites to appear momentarily on one creature you can see within range. The target must succeed on a Constitution saving throw, or it takes 1d6 poison damage and moves 5 feet in a random direction if it can move and its speed is at least 5 feet. Roll a d4 for the direction: 1, north; 2, south; 3, east; or 4, west. This movement doesn't provoke opportunity attacks, and if the direction rolled is blocked, the target doesn't move.\n\nThe spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
  }),
  S({ source: 'XGE',
    key: "investiture-of-flame",
    name: "Investiture of Flame",
    level: 6,
    school: "Transmutation",
    classes: ["druid", "sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "Self",
    components: "V, S",
    duration: "Concentration, up to 10 minutes",
    desc: "Flames race across your body, shedding bright light in a 30-foot radius and dim light for an additional 30 feet for the spell's duration. The flames don't harm you. Until the spell ends, you gain the following benefits:\n\n• You are immune to fire damage and have resistance to cold damage.\n• Any creature that moves within 5 feet of you for the first time on a turn or ends its turn there takes 1d10 fire damage.\n• You can use your action to create a line of fire 15 feet long and 5 feet wide extending from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 4d8 fire damage on a failed save, or half as much damage on a successful one."
  }),
  S({ source: 'XGE',
    key: "investiture-of-ice",
    name: "Investiture of Ice",
    level: 6,
    school: "Transmutation",
    classes: ["druid", "sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "Self",
    components: "V, S",
    duration: "Concentration, up to 10 minutes",
    desc: "Until the spell ends, ice rimes your body, and you gain the following benefits:\n\n• You are immune to cold damage and have resistance to fire damage.\n• You can move across difficult terrain created by ice or snow without spending extra movement.\n• The ground in a 10-foot radius around you is icy and is difficult terrain for creatures other than you. The radius moves with you.\n• You can use your action to create a 15-foot cone of freezing wind extending from your outstretched hand in a direction you choose. Each creature in the cone must make a Constitution saving throw. A creature takes 4d6 cold damage on a failed save, or half as much damage on a successful one. A creature that fails its save against this effect has its speed halved until the start of your next turn."
  }),
  S({ source: 'XGE',
    key: "investiture-of-stone",
    name: "Investiture of Stone",
    level: 6,
    school: "Transmutation",
    classes: ["druid", "sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "Self",
    components: "V, S",
    duration: "Concentration, up to 10 minutes",
    desc: "Until the spell ends, bits of rock spread across your body, and you gain the following benefits:\n\n• You have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.\n• You can use your action to create a small earthquake on the ground in a 15-foot radius centered on you. Other creatures on that ground must succeed on a Dexterity saving throw or be knocked prone.\n• You can move across difficult terrain made of earth or stone without spending extra movement. You can move through solid earth or stone as if it was air and without destabilizing it, but you can't end your movement there. If you do so, you are ejected to the nearest unoccupied space, this spell ends, and you are stunned until the end of your next turn."
  }),
  S({ source: 'XGE',
    key: "investiture-of-wind",
    name: "Investiture of Wind",
    level: 6,
    school: "Transmutation",
    classes: ["druid", "sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "Self",
    components: "V, S",
    duration: "Concentration, up to 10 minutes",
    desc: "Until the spell ends, wind whirls around you, and you gain the following benefits:\n\n• Ranged weapon attacks made against you have disadvantage on the attack roll.\n• You gain a flying speed of 60 feet. If you are still flying when the spell ends, you fall, unless you can somehow prevent it.\n• You can use your action to create a 15-foot cube of swirling wind centered on a point you can see within 60 feet of you. Each creature in that area must make a Constitution saving throw. A creature takes 2d10 bludgeoning damage on a failed save, or half as much damage on a successful one. If a Large or smaller creature fails the save, that creature is also pushed up to 10 feet away from the center of the cube."
  }),
  S({ source: 'XGE',
    key: "invulnerability",
    name: "Invulnerability",
    level: 9,
    school: "Abjuration",
    classes: ["wizard"],
    time: "1 action",
    range: "Self",
    components: "V, S, M (a small piece of adamantine worth at least 500 gp, which the spell consumes)",
    duration: "Concentration, up to 10 minutes",
    desc: "You are immune to all damage until the spell ends."
  }),
  S({ source: 'XGE',
    key: "life-transference",
    name: "Life Transference",
    level: 3,
    school: "Necromancy",
    classes: ["cleric", "wizard"],
    time: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "Instantaneous",
    desc: "You sacrifice some of your health to mend another creature's injuries. You take 4d8 necrotic damage, and one creature of your choice that you can see within range regains a number of hit points equal to twice the necrotic damage you take.\n\nAt Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd."
  }),
  S({ source: 'XGE',
    key: "maddening-darkness",
    name: "Maddening Darkness",
    level: 8,
    school: "Evocation",
    classes: ["warlock", "wizard"],
    time: "1 action",
    range: "150 feet",
    components: "V, M (a drop of pitch mixed with a drop of mercury)",
    duration: "Concentration, up to 10 minutes",
    desc: "Magical darkness spreads from a point you choose within range to fill a 60-foot-radius sphere until the spell ends. The darkness spreads around corners. A creature with darkvision can't see through this darkness. Nonmagical light, as well as light created by spells of 8th level or lower, can't illuminate the area.\n\nShrieks, gibbering, and mad laughter can be heard within the sphere. Whenever a creature starts its turn in the sphere, it must make a Wisdom saving throw, taking 8d8 psychic damage on a failed save, or half as much damage on a successful one."
  }),
  S({ source: 'XGE',
    key: "maelstrom",
    name: "Maelstrom",
    level: 5,
    school: "Evocation",
    classes: ["druid"],
    time: "1 action",
    range: "120 feet",
    components: "V, S, M (paper or leaf in the shape of a funnel)",
    duration: "Concentration, up to 1 minute",
    desc: "A swirling mass of 5-foot-deep water appears in a 30-foot radius centered on a point you can see within range. The point must be on the ground or in a body of water. Until the spell ends, that area is difficult terrain, and any creature that starts its turn there must succeed on a Strength saving throw or take 6d6 bludgeoning damage and be pulled 10 feet toward the center."
  }),
  S({ source: 'XGE',
    key: "magic-stone",
    name: "Magic Stone",
    level: 0,
    school: "Transmutation",
    classes: ["druid", "warlock"],
    time: "1 bonus action",
    range: "Touch",
    components: "V, S",
    duration: "1 minute",
    desc: "You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, a pebble has a range of 60 feet. If someone else attacks with a pebble, that attacker adds your spellcasting ability modifier, not the attacker's, to the attack roll. On a hit, the target takes bludgeoning damage equal to 1d6 + your spellcasting ability modifier. Whether the attack hits or misses, the spell then ends on the stone.\n\nIf you cast this spell again, the spell ends on any pebbles still affected by your previous casting."
  }),
  S({ source: 'XGE',
    key: "mass-polymorph",
    name: "Mass Polymorph",
    level: 9,
    school: "Transmutation",
    classes: ["bard", "sorcerer", "wizard"],
    time: "1 action",
    range: "120 feet",
    components: "V, S, M (a caterpillar cocoon)",
    duration: "Concentration, up to 1 hour",
    desc: "You transform up to ten creatures of your choice that you can see within range. An unwilling target must succeed on a Wisdom saving throw to resist the transformation. An unwilling shapechanger automatically succeeds on the save.\n\nEach target assumes a beast form of your choice, and you can choose the same form or different ones for each target. The new form can be any beast you have seen whose challenge rating is equal to or less than the target's (or half the target's level, if the target doesn't have a challenge rating). The target's game statistics, including mental ability scores, are replaced by the statistics of the chosen beast, but the target retains its hit points, alignment, and personality.\n\nEach target gains a number of temporary hit points equal to the hit points of its new form. These temporary hit points can't be replaced by temporary hit points from another source. A target reverts to its normal form when it has no more temporary hit points or it dies. If the spell ends before then, the creature loses all its temporary hit points and reverts to its normal form.\n\nThe creature is limited in the actions it can perform by the nature of its new form. It can't speak, cast spells, or do anything else that requires hands or speech.\n\nThe target's gear melds into the new form. The target can't activate, use, wield, or otherwise benefit from any of its equipment."
  }),
  S({ source: 'XGE',
    key: "maximilians-earthen-grasp",
    name: "Maximilian's Earthen Grasp",
    level: 2,
    school: "Transmutation",
    classes: ["sorcerer", "wizard"],
    time: "1 action",
    range: "30 feet",
    components: "V, S, M (a miniature hand sculpted from clay)",
    duration: "Concentration, up to 1 minute",
    desc: "You choose a 5-foot-square unoccupied space on the ground that you can see within range. A Medium hand made from compacted soil rises there and reaches for one creature you can see within 5 feet of it. The target must make a Strength saving throw. On a failed save, the target takes 2d6 bludgeoning damage and is restrained for the spell's duration.\n\nAs an action, you can cause the hand to crush the restrained target, which must make a Strength saving throw. The target takes 2d6 bludgeoning damage on a failed save, or half as much damage on a successful one.\n\nTo break out, the restrained target can use its action to make a Strength check against your spell save DC. On a success, the target escapes and is no longer restrained by the hand.\n\nAs an action, you can cause the hand to reach for a different creature or to move to a different unoccupied space within range. The hand releases a restrained target if you do either."
  }),
  S({ source: 'XGE',
    key: "melfs-minute-meteors",
    name: "Melf's Minute Meteors",
    level: 3,
    school: "Evocation",
    classes: ["sorcerer", "wizard"],
    time: "1 action",
    range: "Self",
    components: "V, S, M (niter, sulfur, and pine tar formed into a bead)",
    duration: "Concentration, up to 10 minutes",
    desc: "You create six tiny meteors in your space. They float in the air and orbit you for the spell's duration. When you cast the spell—and as a bonus action on each of your turns thereafter—you can expend one or two of the meteors, sending them streaking toward a point or points you choose within 120 feet of you. Once a meteor reaches its destination or impacts against a solid surface, the meteor explodes. Each creature within 5 feet of the point where the meteor explodes must make a Dexterity saving throw. A creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one.\n\nAt Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the number of meteors created increases by two for each slot level above 3rd."
  }),
  S({ source: 'XGE',
    key: "mental-prison",
    name: "Mental Prison",
    level: 6,
    school: "Illusion",
    classes: ["sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "60 feet",
    components: "S",
    duration: "Concentration, up to 1 minute",
    desc: "You attempt to bind a creature within an illusory cell that only it perceives. One creature you can see within range must make an Intelligence saving throw. The target succeeds automatically if it is immune to being charmed. On a successful save, the target takes 5d10 psychic damage, and the spell ends. On a failed save, the target takes 5d10 psychic damage, and you make the area immediately around the target's space appear dangerous to it in some way. You might cause the target to perceive itself as being surrounded by fire, floating razors, or hideous maws filled with dripping teeth. Whatever form the illusion takes, the target can't see or hear anything beyond it and is restrained for the spell's duration. If the target is moved out of the illusion, makes a melee attack through it, or reaches any part of its body through it, the target takes 10d10 psychic damage, and the spell ends."
  }),
  S({ source: 'XGE',
    key: "mighty-fortress",
    name: "Mighty Fortress",
    level: 8,
    school: "Conjuration",
    classes: ["wizard"],
    time: "1 minute",
    range: "1 mile",
    components: "V, S, M (a diamond worth at least 500 gp, which the spell consumes)",
    duration: "Instantaneous",
    desc: "A fortress of stone erupts from a square area of ground of your choice that you can see within range. The area is 120 feet on each side, and it must not have any buildings or other structures on it. Any creatures in the area are harmlessly lifted up as the fortress rises.\n\nThe fortress has four turrets with square bases, each one 20 feet on a side and 30 feet tall, with one turret on each corner. The turrets are connected to each other by stone walls that are each 80 feet long, creating an enclosed area. Each wall is 1 foot thick and is composed of panels that are 10 feet wide and 20 feet tall. Each panel is contiguous with two other panels or one other panel and a turret. You can place up to four stone doors in the fortress's outer wall.\n\nA small keep stands inside the enclosed area. The keep has a square base that is 50 feet on each side, and it has three floors with 10-foot-high ceilings. Each of the floors can be divided into as many rooms as you like, provided each room is at least 5 feet on each side. The floors of the keep are connected by stone staircases, its walls are 6 inches thick, and interior rooms can have stone doors or open archways as you choose. The keep is furnished and decorated however you like, and it contains sufficient food to serve a nine-course banquet for up to 100 people each day. Furnishings, food, and other objects created by this spell crumble to dust if removed from the fortress.\n\nA staff of one hundred invisible servants obeys any command given to them by creatures you designate when you cast the spell. Each servant functions as if created by the unseen servant spell.\n\nThe walls, turrets, and keep are all made of stone that can be damaged. Each 10-foot-by-10-foot section of stone has AC 15 and 30 hit points per inch of thickness. It is immune to poison and psychic damage. Reducing a section of stone to 0 hit points destroys it and might cause connected sections to buckle and collapse at the DM's discretion.\n\nAfter 7 days or when you cast this spell somewhere else, the fortress harmlessly crumbles and sinks back into the ground, leaving any creatures that were inside it safely on the ground.\n\nCasting this spell on the same spot once every 7 days for a year makes the fortress permanent."
  }),
  S({ source: 'XGE',
    key: "mind-spike",
    name: "Mind Spike",
    level: 2,
    school: "Divination",
    classes: ["sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "60 feet",
    components: "S",
    duration: "Concentration, up to 1 hour",
    desc: "You reach into the mind of one creature you can see within range. The target must make a Wisdom saving throw, taking 3d8 psychic damage on a failed save, or half as much damage on a successful one. On a failed save, you also always know the target's location until the spell ends, but only while the two of you are on the same plane of existence. While you have this knowledge, the target can't become hidden from you, and if it's invisible, it gains no benefit from that condition against you.\n\nAt Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
  }),
  S({ source: 'XGE',
    key: "mold-earth",
    name: "Mold Earth",
    level: 0,
    school: "Transmutation",
    classes: ["druid", "sorcerer", "wizard"],
    time: "1 action",
    range: "30 feet",
    components: "S",
    duration: "Instantaneous or 1 hour (see below)",
    desc: "You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:\n\n• If you target an area of loose earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn't involve enough force to cause damage.\n• You cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shaping patterns. The changes last for 1 hour.\n• If the dirt or stone you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for 1 hour.\n\nIf you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
  }),
  S({ source: 'XGE',
    key: "negative-energy-flood",
    name: "Negative Energy Flood",
    level: 5,
    school: "Necromancy",
    classes: ["warlock", "wizard"],
    time: "1 action",
    range: "60 feet",
    components: "V, M (a broken bone and a square of black silk)",
    duration: "Instantaneous",
    desc: "You send ribbons of negative energy at one creature you can see within range. Unless the target is undead, it must make a Constitution saving throw, taking 5d12 necrotic damage on a failed save, or half as much damage on a successful one. A target killed by this damage rises up as a zombie at the start of your next turn. The zombie pursues whatever creature it can see that is closest to it. Statistics for the zombie are in the Monster Manual.\n\nIf you target an undead with this spell, the target doesn't make a saving throw. Instead, roll 5d12. The target gains half the total as temporary hit points."
  }),
  S({ source: 'XGE',
    key: "power-word-pain",
    name: "Power Word Pain",
    level: 7,
    school: "Enchantment",
    classes: ["sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "60 feet",
    components: "V",
    duration: "Instantaneous",
    desc: "You speak a word of power that causes waves of intense pain to assail one creature you can see within range. If the target has 100 hit points or fewer, it is subject to crippling pain. Otherwise, the spell has no effect on it. A target is also unaffected if it is immune to being charmed.\n\nWhile the target is affected by crippling pain, any speed it has can be no higher than 10 feet. The target also has disadvantage on attack rolls, ability checks, and saving throws, other than Constitution saving throws. Finally, if the target tries to cast a spell, it must first succeed on a Constitution saving throw, or the casting fails and the spell is wasted.\n\nA target suffering this pain can make a Constitution saving throw at the end of each of its turns. On a successful save, the pain ends."
  }),
  S({ source: 'XGE',
    key: "primal-savagery",
    name: "Primal Savagery",
    level: 0,
    school: "Transmutation",
    classes: ["druid"],
    time: "1 action",
    range: "Self",
    components: "S",
    duration: "Instantaneous",
    desc: "You channel primal magic to cause your teeth or fingernails to sharpen, ready to deliver a corrosive attack. Make a melee spell attack against one creature within 5 feet of you. On a hit, the target takes 1d10 acid damage. After you make the attack, your teeth or fingernails return to normal.\n\nThe spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
  }),
  S({ source: 'XGE',
    key: "primordial-ward",
    name: "Primordial Ward",
    level: 6,
    school: "Abjuration",
    classes: ["druid"],
    time: "1 action",
    range: "Self",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    desc: "You have resistance to acid, cold, fire, lightning, and thunder damage for the spell's duration.\n\nWhen you take damage of one of those types, you can use your reaction to gain immunity to that type of damage, including against the triggering damage. If you do so, the resistances end, and you have the immunity until the end of your next turn, at which time the spell ends."
  }),
  S({ source: 'XGE',
    key: "psychic-scream",
    name: "Psychic Scream",
    level: 9,
    school: "Enchantment",
    classes: ["bard", "sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "90 feet",
    components: "S",
    duration: "Instantaneous",
    desc: "You unleash the power of your mind to blast the intellect of up to ten creatures of your choice that you can see within range. Creatures that have an Intelligence score of 2 or lower are unaffected.\n\nEach target must make an Intelligence saving throw. On a failed save, a target takes 14d6 psychic damage and is stunned. On a successful save, a target takes half as much damage and isn't stunned. If a target is killed by this damage, its head explodes, assuming it has one.\n\nA stunned target can make an Intelligence saving throw at the end of each of its turns. On a successful save, the stunning effect ends."
  }),
  S({ source: 'XGE',
    key: "pyrotechnics",
    name: "Pyrotechnics",
    level: 2,
    school: "Transmutation",
    classes: ["bard", "sorcerer", "wizard"],
    time: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    desc: "Choose an area of nonmagical flame that you can see and that fits within a 5-foot cube within range. You can extinguish the fire in that area, and you create either fireworks or smoke when you do so.\n\nFireworks. The target explodes with a dazzling display of colors. Each creature within 10 feet of the target must succeed on a Constitution saving throw or become blinded until the end of your next turn.\n\nSmoke. Thick black smoke spreads out from the target in a 20-foot radius, moving around corners. The area of the smoke is heavily obscured. The smoke persists for 1 minute or until a strong wind disperses it."
  }),
  S({ source: 'XGE',
    key: "scatter",
    name: "Scatter",
    level: 6,
    school: "Conjuration",
    classes: ["sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "30 feet",
    components: "V",
    duration: "Instantaneous",
    desc: "The air quivers around up to five creatures of your choice that you can see within range. An unwilling creature must succeed on a Wisdom saving throw to resist this spell. You teleport each affected target to an unoccupied space that you can see within 120 feet of you. That space must be on the ground or on a floor."
  }),
  S({ source: 'XGE',
    key: "shadow-blade",
    name: "Shadow Blade",
    level: 2,
    school: "Illusion",
    classes: ["sorcerer", "warlock", "wizard"],
    time: "1 bonus action",
    range: "Self",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    desc: "You weave together threads of shadow to create a sword of solidified gloom in your hand. This magic sword lasts until the spell ends. It counts as a simple melee weapon with which you are proficient. It deals 2d8 psychic damage on a hit and has the finesse, light, and thrown properties (range 20/60). In addition, when you use the sword to attack a target that is in dim light or darkness, you make the attack roll with advantage.\n\nIf you drop the weapon or throw it, it dissipates at the end of the turn. Thereafter, while the spell persists, you can use a bonus action to cause the sword to reappear in your hand.\n\nAt Higher Levels. When you cast this spell using a 3rd- or 4th-level spell slot, the damage increases to 3d8. When you cast it using a 5th- or 6th-level spell slot, the damage increases to 4d8. When you cast it using a spell slot of 7th level or higher, the damage increases to 5d8."
  }),
  S({ source: 'XGE',
    key: "shadow-of-moil",
    name: "Shadow of Moil",
    level: 4,
    school: "Necromancy",
    classes: ["warlock"],
    time: "1 action",
    range: "Self",
    components: "V, S, M (an undead eyeball encased in a gem worth at least 150 gp)",
    duration: "Concentration, up to 1 minute",
    desc: "Flame-like shadows wreathe your body until the spell ends, causing you to become heavily obscured to others. The shadows turn dim light within 10 feet of you into darkness, and bright light in the same area to dim light.\n\nUntil the spell ends, you have resistance to radiant damage. In addition, whenever a creature within 10 feet of you hits you with an attack, the shadows lash out at that creature, dealing it 2d8 necrotic damage."
  }),
  S({ source: 'XGE',
    key: "shape-water",
    name: "Shape Water",
    level: 0,
    school: "Transmutation",
    classes: ["druid", "sorcerer", "wizard"],
    time: "1 action",
    range: "30 feet",
    components: "S",
    duration: "Instantaneous or 1 hour (see below)",
    desc: "You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:\n\n• You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn't have enough force to cause damage.\n• You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour.\n• You change the water's color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour.\n• You freeze the water, provided that there are no creatures in it. The water unfreezes in 1 hour.\n\nIf you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
  }),
  S({ source: 'XGE',
    key: "sickening-radiance",
    name: "Sickening Radiance",
    level: 4,
    school: "Evocation",
    classes: ["sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Concentration, up to 10 minutes",
    desc: "Dim, greenish light spreads within a 30-foot-radius sphere centered on a point you choose within range. The light spreads around corners, and it lasts until the spell ends.\n\nWhen a creature moves into the spell's area for the first time on a turn or starts its turn there, that creature must succeed on a Constitution saving throw or take 4d10 radiant damage, and it suffers one level of exhaustion and emits a dim, greenish light in a 5-foot radius. This light makes it impossible for the creature to benefit from being invisible. The light and any levels of exhaustion caused by this spell go away when the spell ends."
  }),
  S({ source: 'XGE',
    key: "skill-empowerment",
    name: "Skill Empowerment",
    level: 5,
    school: "Transmutation",
    classes: ["bard", "sorcerer", "wizard"],
    time: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Concentration, up to 1 hour",
    desc: "Your magic deepens a creature's understanding of its own talent. You touch one willing creature and give it expertise in one skill of your choice; until the spell ends, the creature doubles its proficiency bonus for ability checks it makes that use the chosen skill.\n\nYou must choose a skill in which the target is proficient and that isn't already benefiting from an effect, such as Expertise, that doubles its proficiency bonus."
  }),
  S({ source: 'XGE',
    key: "skywrite",
    name: "Skywrite",
    level: 2,
    school: "Transmutation",
    classes: ["bard", "druid", "wizard"],
    time: "1 action",
    range: "Sight",
    components: "V, S",
    duration: "Concentration, up to 1 hour",
    desc: "You cause up to ten words to form in a part of the sky you can see. The words appear to be made of cloud and remain in place for the spell's duration. The words dissipate when the spell ends. A strong wind can disperse the clouds and end the spell early."
  }),
  S({ source: 'XGE',
    key: "snare",
    name: "Snare",
    level: 1,
    school: "Abjuration",
    classes: ["druid", "ranger", "wizard"],
    time: "1 minute",
    range: "Touch",
    components: "S, M (25 feet of rope, which the spell consumes)",
    duration: "8 hours",
    desc: "As you cast this spell, you use the rope to create a circle with a 5-foot radius on the ground or the floor. When you finish casting, the rope disappears and the circle becomes a magic trap.\n\nThis trap is nearly invisible, requiring a successful Intelligence (Investigation) check against your spell save DC to be discerned.\n\nThe trap triggers when a Small, Medium, or Large creature moves onto the ground or the floor in the spell's radius. That creature must succeed on a Dexterity saving throw or be magically hoisted into the air, leaving it hanging upside down 3 feet above the ground or the floor. The creature is restrained there until the spell ends.\n\nA restrained creature can make a Dexterity saving throw at the end of each of its turns, ending the effect on itself on a success. Alternatively, the creature or someone else who can reach it can use an action to make an Intelligence (Arcana) check against your spell save DC. On a success, the restrained effect ends.\n\nAfter the trap is triggered, the spell ends when no creature is restrained by it."
  }),
  S({ source: 'XGE',
    key: "snillocs-snowball-swarm",
    name: "Snilloc's Snowball Swarm",
    level: 2,
    school: "Evocation",
    classes: ["sorcerer", "wizard"],
    time: "1 action",
    range: "90 feet",
    components: "V, S, M (a piece of ice or a small white rock chip)",
    duration: "Instantaneous",
    desc: "A flurry of magic snowballs erupts from a point you choose within range. Each creature in a 5-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes 3d6 cold damage on a failed save, or half as much damage on a successful one.\n\nAt Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
  }),
  S({ source: 'XGE',
    key: "soul-cage",
    name: "Soul Cage",
    level: 6,
    school: "Necromancy",
    classes: ["warlock", "wizard"],
    time: "1 reaction, which you take when a humanoid you can see within 60 feet of you dies",
    range: "60 feet",
    components: "V, S, M (a tiny silver cage worth 100 gp)",
    duration: "8 hours",
    desc: "This spell snatches the soul of a humanoid as it dies and traps it inside the tiny cage you use for the material component. A stolen soul remains inside the cage until the spell ends or until you destroy the cage, which ends the spell. While you have a soul inside the cage, you can exploit it in any of the ways described below. You can use a trapped soul up to six times. Once you exploit a soul for the sixth time, it is released, and the spell ends. While a soul is trapped, the dead humanoid it came from can't be revived.\n\nSteal Life. You can use a bonus action to drain vigor from the soul and regain 2d8 hit points.\n\nQuery Soul. You ask the soul a question (no action required) and receive a brief telepathic answer, which you can understand regardless of the language used. The soul knows only what it knew in life, but it must answer you truthfully and to the best of its ability. The answer is no more than a sentence or two and might be cryptic.\n\nBorrow Experience. You can use a bonus action to bolster yourself with the soul's life experience, making your next attack roll, ability check, or saving throw with advantage. If you don't use this benefit before the start of your next turn, it is lost.\n\nEyes of the Dead. You can use an action to name a place the humanoid saw in life, which creates an invisible sensor somewhere in that place if it is on the plane of existence you're currently on. The sensor remains for as long as you concentrate, up to 10 minutes (as if you were concentrating on a spell). You receive visual and auditory information from the sensor as if you were in its space using your senses.\n\nA creature that can see the sensor (such as one using see invisibility or truesight) sees a translucent image of the tormented humanoid whose soul you caged."
  }),
  S({ source: 'XGE',
    key: "steel-wind-strike",
    name: "Steel Wind Strike",
    level: 5,
    school: "Conjuration",
    classes: ["ranger", "wizard"],
    time: "1 action",
    range: "30 feet",
    components: "S, M (a melee weapon worth at least 1 sp)",
    duration: "Instantaneous",
    desc: "You flourish the weapon used in the casting and then vanish to strike like the wind. Choose up to five creatures you can see within range. Make a melee spell attack against each target. On a hit, a target takes 6d10 force damage.\n\nYou can then teleport to an unoccupied space you can see within 5 feet of one of the targets you hit or missed."
  }),
  S({ source: 'XGE',
    key: "storm-sphere",
    name: "Storm Sphere",
    level: 4,
    school: "Evocation",
    classes: ["sorcerer", "wizard"],
    time: "1 action",
    range: "150 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    desc: "A 20-foot-radius sphere of whirling air springs into existence, centered on a point you choose within range. The sphere remains for the spell's duration. Each creature in the sphere when it appears or that ends its turn there must succeed on a Strength saving throw or take 2d6 bludgeoning damage. The sphere's space is difficult terrain.\n\nUntil the spell ends, you can use a bonus action on each of your turns to cause a bolt of lightning to leap from the center of the sphere toward one creature you choose within 60 feet of the center. Make a ranged spell attack. You have advantage on the attack roll if the target is in the sphere. On a hit, the target takes 4d6 lightning damage.\n\nCreatures within 30 feet of the sphere have disadvantage on Wisdom (Perception) checks made to listen.\n\nAt Higher Levels. When you cast this spell using a spell slot of 5th level or higher, the damage for each of its effects increases by 1d6 for each slot level above 4th."
  }),
  S({ source: 'XGE',
    key: "summon-greater-demon",
    name: "Summon Greater Demon",
    level: 4,
    school: "Conjuration",
    classes: ["warlock", "wizard"],
    time: "1 action",
    range: "60 feet",
    components: "V, S, M (a vial of blood from a humanoid killed within the past 24 hours)",
    duration: "Concentration, up to 1 hour",
    desc: "You utter foul words, summoning one demon from the chaos of the Abyss. You choose the demon's type, which must be one of challenge rating 5 or lower, such as a shadow demon or a barlgura. The demon appears in an unoccupied space you can see within range, and the demon disappears when it drops to 0 hit points or when the spell ends.\n\nRoll initiative for the demon, which has its own turns. When you summon it and on each of your turns thereafter, you can issue a verbal command to it (requiring no action on your part), telling it what it must do on its next turn. If you issue no command, it spends its turn attacking any creature within reach that has attacked it.\n\nAt the end of each of the demon's turns, it makes a Charisma saving throw. The demon has disadvantage on this saving throw if you say its true name. On a failed save, the demon continues to obey you. On a successful save, your control of the demon ends for the rest of the duration, and the demon spends its turns pursuing and attacking the nearest non-demons to the best of its ability. If you stop concentrating on the spell before it reaches its full duration, an uncontrolled demon doesn't disappear for 1d6 rounds if it still has hit points.\n\nAs part of casting the spell, you can form a circle on the ground with the blood used as a material component. The circle is large enough to encompass your space. While the spell lasts, the summoned demon can't cross the circle or harm it, and it can't target anyone within it. Using the material component in this manner consumes it when the spell ends.\n\nAt Higher Levels. When you cast this spell using a spell slot of 5th level or higher, the challenge rating increases by 1 for each slot level above 4th."
  }),
  S({ source: 'XGE',
    key: "summon-lesser-demons",
    name: "Summon Lesser Demons",
    level: 3,
    school: "Conjuration",
    classes: ["warlock", "wizard"],
    time: "1 action",
    range: "60 feet",
    components: "V, S, M (a vial of blood from a humanoid killed within the past 24 hours)",
    duration: "Concentration, up to 1 hour",
    desc: "You utter foul words, summoning demons from the chaos of the Abyss. Roll on the following table to determine what appears.\n\n1-2: Two demons of challenge rating 1 or lower\n3-4: Four demons of challenge rating 1/2 or lower\n5-6: Eight demons of challenge rating 1/4 or lower\n\nThe DM chooses the demons, such as manes or dretches, and you choose the unoccupied spaces you can see within range where they appear. A summoned demon disappears when it drops to 0 hit points or when the spell ends.\n\nThe demons are hostile to all creatures, including you. Roll initiative for the summoned demons as a group, which has its own turns. The demons pursue and attack the nearest non-demons to the best of their ability.\n\nAs part of casting the spell, you can form a circle on the ground with the blood used as a material component. The circle is large enough to encompass your space. While the spell lasts, the summoned demons can't cross the circle or harm it, and they can't target anyone within it. Using the material component in this manner consumes it when the spell ends.\n\nAt Higher Levels. When you cast this spell using a spell slot of 6th or 7th level, you summon twice as many demons. If you cast it using a spell slot of 8th or 9th level, you summon three times as many demons."
  }),
  S({ source: 'XGE',
    key: "synaptic-static",
    name: "Synaptic Static",
    level: 5,
    school: "Enchantment",
    classes: ["bard", "sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Instantaneous",
    desc: "You choose a point within range and cause psychic energy to explode there. Each creature in a 20-foot-radius sphere centered on that point must make an Intelligence saving throw. A creature with an Intelligence score of 2 or lower can't be affected by this spell. A target takes 8d6 psychic damage on a failed save, or half as much damage on a successful one.\n\nAfter a failed save, a target has muddled thoughts for 1 minute. During that time, it rolls a d6 and subtracts the number rolled from all its attack rolls and ability checks, as well as its Constitution saving throws to maintain concentration. The target can make an Intelligence saving throw at the end of each of its turns, ending the effect on itself on a success."
  }),
  S({ source: 'XGE',
    key: "temple-of-the-gods",
    name: "Temple of the Gods",
    level: 7,
    school: "Conjuration",
    classes: ["cleric"],
    time: "1 hour",
    range: "120 feet",
    components: "V, S, M (a holy symbol worth at least 5 gp)",
    duration: "24 hours",
    desc: "You cause a temple to shimmer into existence on ground you can see within range. The temple must fit within an unoccupied cube of space, up to 120 feet on each side. The temple remains until the spell ends. It is dedicated to whatever god, pantheon, or philosophy is represented by the holy symbol used in the casting.\n\nYou make all decisions about the temple's appearance. The interior is enclosed by a floor, walls, and a roof, with one door granting access to the interior and as many windows as you wish. Only you and any creatures you designate when you cast the spell can open or close the door.\n\nThe temple's interior is an open space with an idol or altar at one end. You decide whether the temple is illuminated and whether that illumination is bright light or dim light. The smell of burning incense fills the air within, and the temperature is mild.\n\nThe temple opposes types of creatures you choose when you cast this spell. Choose one or more of the following: celestials, elementals, fey, fiends, or undead. If a creature of the chosen type attempts to enter the temple, that creature must make a Charisma saving throw. On a failed save, it can't enter the temple for 24 hours. Even if the creature can enter the temple, the magic there hinders it; whenever it makes an attack roll, an ability check, or a saving throw inside the temple, it must roll a d4 and subtract the number rolled from the d20 roll.\n\nIn addition, the sensors created by divination spells can't appear inside the temple, and creatures within can't be targeted by divination spells.\n\nFinally, whenever any creature in the temple regains hit points from a spell of 1st level or higher, the creature regains additional hit points equal to your Wisdom modifier (minimum 1 hit point).\n\nThe temple is made from opaque magical force that extends into the Ethereal Plane, thus blocking ethereal travel into the temple's interior. Nothing can physically pass through the temple's exterior. It can't be dispelled by dispel magic, and antimagic field has no effect on it. A disintegrate spell destroys the temple instantly.\n\nCasting this spell on the same spot every day for a year makes this effect permanent."
  }),
  S({ source: 'XGE',
    key: "tensers-transformation",
    name: "Tenser's Transformation",
    level: 6,
    school: "Transmutation",
    classes: ["wizard"],
    time: "1 action",
    range: "Self",
    components: "V, S, M (a few hairs from a bull)",
    duration: "Concentration, up to 10 minutes",
    desc: "You endow yourself with endurance and martial prowess fueled by magic. Until the spell ends, you can't cast spells, and you gain the following benefits:\n\n• You gain 50 temporary hit points. If any of these remain when the spell ends, they are lost.\n• You have advantage on attack rolls that you make with simple and martial weapons.\n• When you hit a target with a weapon attack, that target takes an extra 2d12 force damage.\n• You have proficiency with all armor, shields, simple weapons, and martial weapons.\n• You have proficiency in Strength and Constitution saving throws.\n• You can attack twice, instead of once, when you take the Attack action on your turn. You ignore this benefit if you already have a feature, like Extra Attack, that gives you extra attacks.\n\nImmediately after the spell ends, you must succeed on a DC 15 Constitution saving throw or suffer one level of exhaustion."
  }),
  S({ source: 'XGE',
    key: "thunderclap",
    name: "Thunderclap",
    level: 0,
    school: "Evocation",
    classes: ["bard", "druid", "sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "5 feet",
    components: "S",
    duration: "Instantaneous",
    desc: "You create a burst of thunderous sound that can be heard up to 100 feet away. Each creature within range, other than you, must succeed on a Constitution saving throw or take 1d6 thunder damage.\n\nThe spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
  }),
  S({ source: 'XGE',
    key: "thunder-step",
    name: "Thunder Step",
    level: 3,
    school: "Conjuration",
    classes: ["sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "90 feet",
    components: "V",
    duration: "Instantaneous",
    desc: "You teleport yourself to an unoccupied space you can see within range. Immediately after you disappear, a thunderous boom sounds, and each creature within 10 feet of the space you left must make a Constitution saving throw, taking 3d10 thunder damage on a failed save, or half as much damage on a successful one. The thunder can be heard from up to 300 feet away.\n\nYou can bring along objects as long as their weight doesn't exceed what you can carry. You can also teleport one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell, and there must be an unoccupied space within 5 feet of your destination space for the creature to appear in; otherwise, the creature is left behind.\n\nAt Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d10 for each slot level above 3rd."
  }),
  S({ source: 'XGE',
    key: "tidal-wave",
    name: "Tidal Wave",
    level: 3,
    school: "Conjuration",
    classes: ["druid", "sorcerer", "wizard"],
    time: "1 action",
    range: "120 feet",
    components: "V, S, M (a drop of water)",
    duration: "Instantaneous",
    desc: "You conjure up a wave of water that crashes down on an area within range. The area can be up to 30 feet long, up to 10 feet wide, and up to 10 feet tall. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 4d8 bludgeoning damage and is knocked prone. On a successful save, a creature takes half as much damage and isn't knocked prone.\n\nThe water then spreads out across the ground in all directions, extinguishing unprotected flames in its area and within 30 feet of it, and then it vanishes."
  }),
  S({ source: 'XGE',
    key: "tiny-servant",
    name: "Tiny Servant",
    level: 3,
    school: "Transmutation",
    classes: ["wizard"],
    time: "1 minute",
    range: "Touch",
    components: "V, S",
    duration: "8 hours",
    desc: "You touch one Tiny, nonmagical object that isn't attached to another object or a surface and isn't being carried by another creature. The target animates and sprouts little arms and legs, becoming a creature under your control until the spell ends or the creature drops to 0 hit points. See the stat block for its statistics.\n\nAs a bonus action, you can mentally command the creature if it is within 120 feet of you. (If you control multiple creatures with this spell, you can command any or all of them at the same time, issuing the same command to each one.) You decide what action the creature will take and where it will move during its next turn, or you can issue a simple, general command, such as to fetch a key, stand watch, or stack some books. If you issue no commands, the servant does nothing other than defend itself against hostile creatures. Once given an order, the servant continues to follow that order until its task is complete.\n\nWhen the creature drops to 0 hit points, it reverts to its original form, and any remaining damage carries over to that form.\n\nAt Higher Levels. When you cast this spell using a spell slot of 4th level or higher, you can animate two additional objects for each slot level above 3rd."
  }),
  S({ source: 'XGE',
    key: "toll-the-dead",
    name: "Toll the Dead",
    level: 0,
    school: "Necromancy",
    classes: ["cleric", "warlock", "wizard"],
    time: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    desc: "You point at one creature you can see within range, and the sound of a dolorous bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d8 necrotic damage. If the target is missing any of its hit points, it instead takes 1d12 necrotic damage.\n\nThe spell's damage increases by one die when you reach 5th level (2d8 or 2d12), 11th level (3d8 or 3d12), and 17th level (4d8 or 4d12)."
  }),
  S({ source: 'XGE',
    key: "transmute-rock",
    name: "Transmute Rock",
    level: 5,
    school: "Transmutation",
    classes: ["druid", "wizard"],
    time: "1 action",
    range: "120 feet",
    components: "V, S, M (clay and water)",
    duration: "Until dispelled",
    desc: "You choose an area of stone or mud that you can see that fits within a 40-foot cube and is within range, and choose one of the following effects.\n\nTransmute Rock to Mud. Nonmagical rock of any sort in the area becomes an equal volume of thick, flowing mud that remains for the spell's duration.\n\nThe ground in the spell's area becomes muddy enough that creatures can sink into it. Each foot that a creature moves through the mud costs 4 feet of movement, and any creature on the ground when you cast the spell must make a Strength saving throw. A creature must also make the saving throw when it moves into the area for the first time on a turn or ends its turn there. On a failed save, a creature sinks into the mud and is restrained, though it can use an action to end the restrained condition on itself by pulling itself free of the mud.\n\nIf you cast the spell on a ceiling, the mud falls. Any creature under the mud when it falls must make a Dexterity saving throw. A creature takes 4d8 bludgeoning damage on a failed save, or half as much damage on a successful one.\n\nTransmute Mud to Rock. Nonmagical mud or quicksand in the area no more than 10 feet deep transforms into soft stone for the spell's duration. Any creature in the mud when it transforms must make a Dexterity saving throw. On a successful save, a creature is shunted safely to the surface in an unoccupied space. On a failed save, a creature becomes restrained by the rock. A restrained creature, or another creature within reach, can use an action to try to break the rock by succeeding on a DC 20 Strength check or by dealing damage to it. The rock has AC 15 and 25 hit points, and it is immune to poison and psychic damage."
  }),
  S({ source: 'XGE',
    key: "vitriolic-sphere",
    name: "Vitriolic Sphere",
    level: 4,
    school: "Evocation",
    classes: ["sorcerer", "wizard"],
    time: "1 action",
    range: "150 feet",
    components: "V, S, M (a drop of giant slug bile)",
    duration: "Instantaneous",
    desc: "You point at a location within range, and a glowing, 1-foot-diameter ball of emerald acid streaks there and explodes in a 20-foot-radius sphere. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 10d4 acid damage and another 5d4 acid damage at the end of its next turn. On a successful save, a creature takes half the initial damage and no damage at the end of its next turn.\n\nAt Higher Levels. When you cast this spell using a spell slot of 5th level or higher, the initial damage increases by 2d4 for each slot level above 4th."
  }),
  S({ source: 'XGE',
    key: "wall-of-light",
    name: "Wall of Light",
    level: 5,
    school: "Evocation",
    classes: ["sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "120 feet",
    components: "V, S, M (a hand mirror)",
    duration: "Concentration, up to 10 minutes",
    desc: "A shimmering wall of bright light appears at a point you choose within range. The wall appears in any orientation you choose: horizontally, vertically, or diagonally. It can be free floating, or it can rest on a solid surface. The wall can be up to 60 feet long, 10 feet high, and 5 feet thick. The wall blocks line of sight, but creatures and objects can pass through it. It emits bright light out to 120 feet and dim light for an additional 120 feet.\n\nWhen the wall appears, each creature in its area must make a Constitution saving throw. On a failed save, a creature takes 4d8 radiant damage, and it is blinded for 1 minute. On a successful save, it takes half as much damage and isn't blinded. A blinded creature can make a Constitution saving throw at the end of each of its turns, ending the effect on itself on a success.\n\nA creature that ends its turn in the wall's area takes 4d8 radiant damage.\n\nUntil the spell ends, you can use an action to launch a beam of radiance from the wall at one creature you can see within 60 feet of it. Make a ranged spell attack. On a hit, the target takes 4d8 radiant damage. Whether you hit or miss, reduce the length of the wall by 10 feet. If the wall's length drops to 0 feet, the spell ends.\n\nAt Higher Levels. When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
  }),
  S({ source: 'XGE',
    key: "wall-of-sand",
    name: "Wall of Sand",
    level: 3,
    school: "Evocation",
    classes: ["wizard"],
    time: "1 action",
    range: "90 feet",
    components: "V, S, M (a handful of sand)",
    duration: "Concentration, up to 10 minutes",
    desc: "You create a wall of swirling sand on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 10 feet thick, and it vanishes when the spell ends. It blocks line of sight but not movement. A creature is blinded while in the wall's space and must spend 3 feet of movement for every 1 foot it moves there."
  }),
  S({ source: 'XGE',
    key: "wall-of-water",
    name: "Wall of Water",
    level: 3,
    school: "Evocation",
    classes: ["sorcerer", "wizard", "druid"],
    time: "1 action",
    range: "60 feet",
    components: "V, S, M (a drop of water)",
    duration: "Concentration, up to 10 minutes",
    desc: "You create a wall of water on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 1 foot thick, or you can make a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall vanishes when the spell ends. The wall's space is difficult terrain.\n\nAny ranged weapon attack that enters the wall's space has disadvantage on the attack roll, and fire damage is halved if the fire effect passes through the wall to reach its target. Spells that deal cold damage that pass through the wall cause the area of the wall they pass through to freeze solid (at least a 5-foot-square section is frozen). Each 5-foot-square frozen section has AC 5 and 15 hit points. Reducing a frozen section to 0 hit points destroys it. When a section is destroyed, the wall's water doesn't fill it."
  }),
  S({ source: 'XGE',
    key: "warding-wind",
    name: "Warding Wind",
    level: 2,
    school: "Evocation",
    classes: ["bard", "cleric", "druid", "sorcerer"],
    time: "1 action",
    range: "Self",
    components: "V",
    duration: "Concentration, up to 10 minutes",
    desc: "A strong wind (20 miles per hour) blows around you in a 10-foot radius and moves with you, remaining centered on you. The wind lasts for the spell's duration.\n\nThe wind has the following effects:\n• It deafens you and other creatures in its area.\n• It extinguishes unprotected flames in its area that are torch-sized or smaller.\n• It hedges out vapor, gas, and fog that can be dispersed by strong wind.\n• The area is difficult terrain for creatures other than you.\n• The attack rolls of ranged weapon attacks have disadvantage if the attacks pass in or out of the wind."
  }),
  S({ source: 'XGE',
    key: "watery-sphere",
    name: "Watery Sphere",
    level: 4,
    school: "Conjuration",
    classes: ["druid", "sorcerer", "wizard"],
    time: "1 action",
    range: "90 feet",
    components: "V, S, M (a droplet of water)",
    duration: "Concentration, up to 1 minute",
    desc: "You conjure up a sphere of water with a 5-foot radius at a point you can see within range. The sphere can hover but no more than 10 feet off the ground. The sphere remains for the spell's duration.\n\nAny creature in the sphere's space must make a Strength saving throw. On a successful save, a creature is ejected from that space to the nearest unoccupied space of the creature's choice outside the sphere. A Huge or larger creature succeeds on the saving throw automatically, and a Large or smaller creature can choose to fail it. On a failed save, a creature is restrained by the sphere and is engulfed by the water. At the end of each of its turns, a restrained target can repeat the saving throw, ending the effect on itself on a success.\n\nThe sphere can restrain as many as four Medium or smaller creatures or one Large creature. If the sphere restrains a creature that causes it to exceed this capacity, a random creature that was already restrained by the sphere falls out of it and lands prone in a space within 5 feet of it.\n\nAs an action, you can move the sphere up to 30 feet in a straight line. If it moves over a pit, a cliff, or other drop-off, it safely descends until it is hovering 10 feet above the ground. Any creature restrained by the sphere moves with it. You can ram the sphere into creatures, forcing them to make the saving throw.\n\nWhen the spell ends, the sphere falls to the ground and extinguishes all normal flames within 30 feet of it. Any creature restrained by the sphere is knocked prone in the space where it falls. The water then vanishes."
  }),
  S({ source: 'XGE',
    key: "whirlwind",
    name: "Whirlwind",
    level: 7,
    school: "Evocation",
    classes: ["druid", "sorcerer", "wizard"],
    time: "1 action",
    range: "300 feet",
    components: "V, M (a piece of straw)",
    duration: "Concentration, up to 1 minute",
    desc: "A whirlwind howls down to a point that you can see on the ground within range. The whirlwind is a 10-foot-radius, 30-foot-high cylinder centered on that point. Until the spell ends, you can use your action to move the whirlwind up to 30 feet in any direction along the ground. The whirlwind sucks up any Medium or smaller objects that aren't secured to anything and that aren't worn or carried by anyone.\n\nA creature must make a Dexterity saving throw the first time on a turn that it enters the whirlwind or that the whirlwind enters its space, including when the whirlwind first appears. A creature takes 10d6 bludgeoning damage on a failed save, or half as much damage on a successful one. In addition, a Large or smaller creature that fails the save must succeed on a Strength saving throw or become restrained in the whirlwind until the spell ends. When a creature starts its turn restrained by the whirlwind, the creature is pulled 5 feet higher inside it, unless the creature is at the top. A restrained creature moves with the whirlwind and falls when the spell ends, unless the creature has some means to stay aloft.\n\nA restrained creature can use an action to make a Strength or Dexterity check against your spell save DC. If successful, the creature is no longer restrained by the whirlwind and is hurled 3d6 x 10 feet away from it in a random direction."
  }),
  S({ source: 'XGE',
    key: "word-of-radiance",
    name: "Word of Radiance",
    level: 0,
    school: "Evocation",
    classes: ["cleric"],
    time: "1 action",
    range: "5 feet",
    components: "V, M (a holy symbol)",
    duration: "Instantaneous",
    desc: "You utter a divine word, and burning radiance erupts from you. Each creature of your choice that you can see within range must succeed on a Constitution saving throw or take 1d6 radiant damage.\n\nThe spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
  }),
  S({ source: 'XGE',
    key: "wrath-of-nature",
    name: "Wrath of Nature",
    level: 5,
    school: "Evocation",
    classes: ["druid", "ranger"],
    time: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    desc: "You call out to the spirits of nature to rouse them against your enemies. Choose a point you can see within range. The spirits cause trees, rocks, and grasses in a 60-foot cube centered on that point to become animated until the spell ends.\n\nGrasses and Undergrowth. Any area of ground in the cube that is covered by grass or undergrowth is difficult terrain for your enemies.\n\nTrees. At the start of each of your turns, each of your enemies within 10 feet of any tree in the cube must succeed on a Dexterity saving throw or take 4d6 slashing damage from whipping branches.\n\nRoots and Vines. At the end of each of your turns, one creature of your choice that is on the ground in the cube must succeed on a Strength saving throw or become restrained until the spell ends. A restrained creature can use an action to make a Strength (Athletics) check against your spell save DC, ending the effect on itself on a success.\n\nRocks. As a bonus action on your turn, you can cause a loose rock in the cube to launch at a creature you can see in the cube. Make a ranged spell attack against the target. On a hit, the target takes 3d8 nonmagical bludgeoning damage, and it must succeed on a Strength saving throw or fall prone."
  }),
  S({ source: 'XGE',
    key: "zephyr-strike",
    name: "Zephyr Strike",
    level: 1,
    school: "Transmutation",
    classes: ["ranger"],
    time: "1 bonus action",
    range: "Self",
    components: "V",
    duration: "Concentration, up to 1 minute",
    desc: "You move like the wind. Until the spell ends, your movement doesn't provoke opportunity attacks.\n\nOnce before the spell ends, you can give yourself advantage on one weapon attack roll on your turn. That attack deals an extra 1d8 force damage on a hit. Whether you hit or miss, your walking speed increases by 30 feet until the end of that turn."
  }),
  S({ source: 'TCE',
    key: "blade-of-disaster",
    name: "Blade of Disaster",
    level: 9,
    school: "Conjuration",
    classes: ["sorcerer", "warlock", "wizard"],
    time: "1 bonus action",
    range: "60 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    desc: "You create a blade-shaped planar rift about 3 feet long in an unoccupied space you can see within range. The blade lasts for the duration. When you cast this spell, you can make up to two melee spell attacks with the blade, each one against a creature, loose object, or structure within 5 feet of the blade. On a hit, the target takes 4d12 force damage. This attack scores a critical hit if the number on the d20 is 18 or higher. On a critical hit, the blade deals an extra 8d12 force damage (for a total of 12d12 force damage).\n\nAs a bonus action on your turn, you can move the blade up to 30 feet to an unoccupied space you can see and then make up to two melee spell attacks with it again.\n\nThe blade can harmlessly pass through any barrier, including a wall of force."
  }),
  S({ source: 'TCE',
    key: "booming-blade",
    name: "Booming Blade",
    level: 0,
    school: "Evocation",
    classes: ["artificer", "sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "Self (5-foot radius)",
    components: "S, M (a melee weapon worth at least 1 sp)",
    duration: "1 round",
    desc: "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects and then becomes sheathed in booming energy until the start of your next turn. If the target willingly moves 5 feet or more before then, the target takes 1d8 thunder damage, and the spell ends.\n\nThis spell's damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d8 thunder damage to the target on a hit, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level (2d8 and 3d8) and again at 17th level (3d8 and 4d8)."
  }),
  S({ source: 'TCE',
    key: "dream-of-the-blue-veil",
    name: "Dream of the Blue Veil",
    level: 7,
    school: "Conjuration",
    classes: ["bard", "sorcerer", "warlock", "wizard"],
    time: "10 minutes",
    range: "20 feet",
    components: "V, S, M (a magic item or a willing creature from the destination world)",
    duration: "6 hours",
    desc: "You and up to eight willing creatures within range fall unconscious for the spell's duration and experience visions of another world on the Material Plane, such as Oerth, Toril, Krynn, or Eberron. If the spell reaches its full duration, the visions conclude with each of you encountering and pulling back a mysterious blue curtain. The spell then ends with you mentally and physically transported to the world that was in the visions.\n\nTo cast this spell, you must have a magic item that originated on the world you wish to reach, and you must be aware of the world's existence, even if you don't know the world's name. Your destination in the other world is a safe location within 1 mile of where the magic item was created. Alternatively, you can cast the spell if one of the affected creatures was born on the other world, which causes your destination to be a safe location within 1 mile of where that creature was born.\n\nThe spell ends early on a creature if that creature takes any damage, and the creature isn't transported. If you take any damage, the spell ends for you and all the other creatures, with none of you being transported."
  }),
  S({ source: 'TCE',
    key: "green-flame-blade",
    name: "Green-Flame Blade",
    level: 0,
    school: "Evocation",
    classes: ["artificer", "sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "Self (5-foot radius)",
    components: "S, M (a melee weapon worth at least 1 sp)",
    duration: "Instantaneous",
    desc: "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects, and you can cause green fire to leap from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes fire damage equal to your spellcasting ability modifier.\n\nThis spell's damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d8 fire damage to the target on a hit, and the fire damage to the second creature increases to 1d8 + your spellcasting ability modifier. Both damage rolls increase by 1d8 at 11th level (2d8 and 2d8) and 17th level (3d8 and 3d8)."
  }),
  S({ source: 'TCE',
    key: "intellect-fortress",
    name: "Intellect Fortress",
    level: 3,
    school: "Abjuration",
    classes: ["artificer", "bard", "sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "30 feet",
    components: "V",
    duration: "Concentration, up to 1 hour",
    desc: "For the duration, you or one willing creature you can see within range has resistance to psychic damage, as well as advantage on Intelligence, Wisdom, and Charisma saving throws.\n\nAt Higher Levels. When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd. The creatures must be within 30 feet of each other when you target them."
  }),
  S({ source: 'TCE',
    key: "lightning-lure",
    name: "Lightning Lure",
    level: 0,
    school: "Evocation",
    classes: ["artificer", "sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "Self (15-foot radius)",
    components: "V",
    duration: "Instantaneous",
    desc: "You create a lash of lightning energy that strikes at one creature of your choice that you can see within 15 feet of you. The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take 1d8 lightning damage if it is within 5 feet of you.\n\nThis spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
  }),
  S({ source: 'TCE',
    key: "mind-sliver",
    name: "Mind Sliver",
    level: 0,
    school: "Enchantment",
    classes: ["sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "60 feet",
    components: "V",
    duration: "1 round",
    desc: "You drive a disorienting spike of psychic energy into the mind of one creature you can see within range. The target must succeed on an Intelligence saving throw or take 1d6 psychic damage and subtract 1d4 from the next saving throw it makes before the end of your next turn.\n\nThis spell's damage increases by 1d6 when you reach certain levels: 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
  }),
  S({ source: 'TCE',
    key: "spirit-shroud",
    name: "Spirit Shroud",
    level: 3,
    school: "Necromancy",
    classes: ["cleric", "paladin", "warlock", "wizard"],
    time: "1 bonus action",
    range: "Self",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    desc: "You call forth spirits of the dead, which flit around you for the spell's duration. The spirits are intangible and invulnerable.\n\nUntil the spell ends, any attack you make deals 1d8 extra damage when you hit a creature within 10 feet of you. This damage is radiant, necrotic, or cold (your choice when you cast the spell). Any creature that takes this damage can't regain hit points until the start of your next turn.\n\nIn addition, any creature of your choice that you can see that starts its turn within 10 feet of you has its speed reduced by 10 feet until the start of your next turn.\n\nAt Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for every two slot levels above 3rd."
  }),
  S({ source: 'TCE',
    key: "summon-aberration",
    name: "Summon Aberration",
    level: 4,
    school: "Conjuration",
    classes: ["warlock", "wizard"],
    time: "1 action",
    range: "90 feet",
    components: "V, S, M (a pickled tentacle and an eyeball in a platinum-inlaid vial worth at least 400 gp)",
    duration: "Concentration, up to 1 hour",
    desc: "You call forth an aberrant spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Aberrant Spirit stat block. When you cast the spell, choose Beholderkin, Slaad, or Star Spawn. The creature resembles an aberration of that kind, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.\n\nThe creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger.\n\nAt Higher Levels. When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
  }),
  S({ source: 'TCE',
    key: "summon-beast",
    name: "Summon Beast",
    level: 2,
    school: "Conjuration",
    classes: ["druid", "ranger"],
    time: "1 action",
    range: "90 feet",
    components: "V, S, M (a feather, tuft of fur, and fish tail inside a gilded acorn worth at least 200 gp)",
    duration: "Concentration, up to 1 hour",
    desc: "You call forth a bestial spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Bestial Spirit stat block. When you cast the spell, choose an environment: Air, Land, or Water. The creature resembles an animal of your choice that is native to the chosen environment, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.\n\nThe creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger.\n\nAt Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, use the higher level wherever the spell's level appears in the stat block."
  }),
  S({ source: 'TCE',
    key: "summon-celestial",
    name: "Summon Celestial",
    level: 5,
    school: "Conjuration",
    classes: ["cleric", "paladin"],
    time: "1 action",
    range: "90 feet",
    components: "V, S, M (a golden reliquary worth at least 500 gp)",
    duration: "Concentration, up to 1 hour",
    desc: "You call forth a celestial spirit. It manifests in an angelic form in an unoccupied space that you can see within range. This corporeal form uses the Celestial Spirit stat block. When you cast the spell, choose Avenger or Defender. Your choice determines the creature's attack in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.\n\nThe creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger.\n\nAt Higher Levels. When you cast this spell using a spell slot of 6th level or higher, use the higher level wherever the spell's level appears in the stat block."
  }),
  S({ source: 'TCE',
    key: "summon-construct",
    name: "Summon Construct",
    level: 4,
    school: "Conjuration",
    classes: ["artificer", "wizard"],
    time: "1 action",
    range: "90 feet",
    components: "V, S, M (an ornate stone and metal lockbox worth at least 400 gp)",
    duration: "Concentration, up to 1 hour",
    desc: "You call forth the spirit of a construct. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Construct Spirit stat block. When you cast the spell, choose a material: Clay, Metal, or Stone. The creature resembles a golem or a modron (your choice) made of the chosen material, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.\n\nThe creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger.\n\nAt Higher Levels. When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
  }),
  S({ source: 'TCE',
    key: "summon-elemental",
    name: "Summon Elemental",
    level: 4,
    school: "Conjuration",
    classes: ["druid", "ranger", "wizard"],
    time: "1 action",
    range: "90 feet",
    components: "V, S, M (air, a pebble, ash, and water inside a gold-inlaid vial worth at least 400 gp)",
    duration: "Concentration, up to 1 hour",
    desc: "You call forth an elemental spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Elemental Spirit stat block. When you cast the spell, choose an element: Air, Earth, Fire, or Water. The creature resembles a bipedal form wreathed in the chosen element, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.\n\nThe creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger.\n\nAt Higher Levels. When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
  }),
  S({ source: 'TCE',
    key: "summon-fey",
    name: "Summon Fey",
    level: 3,
    school: "Conjuration",
    classes: ["druid", "ranger", "warlock", "wizard"],
    time: "1 action",
    range: "90 feet",
    components: "V, S, M (a gilded flower worth at least 300 gp)",
    duration: "Concentration, up to 1 hour",
    desc: "You call forth a fey spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Fey Spirit stat block. When you cast the spell, choose a mood: Fuming, Mirthful, or Tricksy. The creature resembles a fey creature of your choice marked by the chosen mood, which determines one of the traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.\n\nThe creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger.\n\nAt Higher Levels. When you cast this spell using a spell slot of 4th level or higher, use the higher level wherever the spell's level appears in the stat block."
  }),
  S({ source: 'TCE',
    key: "summon-fiend",
    name: "Summon Fiend",
    level: 6,
    school: "Conjuration",
    classes: ["warlock", "wizard"],
    time: "1 action",
    range: "90 feet",
    components: "V, S, M (humanoid blood inside a ruby vial worth at least 600 gp)",
    duration: "Concentration, up to 1 hour",
    desc: "You call forth a fiendish spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Fiendish Spirit stat block. When you cast the spell, choose Demon, Devil, or Yugoloth. The creature resembles a fiend of the chosen type, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.\n\nThe creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger.\n\nAt Higher Levels. When you cast this spell using a spell slot of 7th level or higher, use the higher level wherever the spell's level appears in the stat block."
  }),
  S({ source: 'TCE',
    key: "summon-shadowspawn",
    name: "Summon Shadowspawn",
    level: 3,
    school: "Conjuration",
    classes: ["warlock", "wizard"],
    time: "1 action",
    range: "90 feet",
    components: "V, S, M (tears inside a gem worth at least 300 gp)",
    duration: "Concentration, up to 1 hour",
    desc: "You call forth a shadowy spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Shadow Spirit stat block. When you cast the spell, choose an emotion: Fury, Despair, or Fear. The creature resembles a misshapen biped marked by the chosen emotion, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.\n\nThe creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger.\n\nAt Higher Levels. When you cast this spell using a spell slot of 4th level or higher, use the higher level wherever the spell's level appears in the stat block."
  }),
  S({ source: 'TCE',
    key: "summon-undead",
    name: "Summon Undead",
    level: 3,
    school: "Necromancy",
    classes: ["warlock", "wizard"],
    time: "1 action",
    range: "90 feet",
    components: "V, S, M (a gilded skull worth at least 300 gp)",
    duration: "Concentration, up to 1 hour",
    desc: "You call forth an undead spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Undead Spirit stat block. When you cast the spell, choose the creature's form: Ghostly, Putrid, or Skeletal. The spirit resembles an undead creature with the chosen form, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.\n\nThe creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger.\n\nAt Higher Levels. When you cast this spell using a spell slot of 4th level or higher, use the higher level wherever the spell's level appears in the stat block."
  }),
  S({ source: 'TCE',
    key: "sword-burst",
    name: "Sword Burst",
    level: 0,
    school: "Conjuration",
    classes: ["artificer", "sorcerer", "warlock", "wizard"],
    time: "1 action",
    range: "Self (5-foot radius)",
    components: "V",
    duration: "Instantaneous",
    desc: "You create a momentary circle of spectral blades that sweep around you. All other creatures within 5 feet of you must each succeed on a Dexterity saving throw or take 1d6 force damage.\n\nThis spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
  }),
  S({ source: 'TCE',
    key: "tashas-caustic-brew",
    name: "Tasha's Caustic Brew",
    level: 1,
    school: "Evocation",
    classes: ["artificer", "sorcerer", "wizard"],
    time: "1 action",
    range: "Self (30-foot line)",
    components: "V, S, M (a bit of rotten food)",
    duration: "Concentration, up to 1 minute",
    desc: "A stream of acid emanates from you in a line 30 feet long and 5 feet wide in a direction you choose. Each creature in the line must succeed on a Dexterity saving throw or be covered in acid for the spell's duration or until a creature uses its action to scrape or wash the acid off itself or another creature. A creature covered in the acid takes 2d4 acid damage at start of each of its turns.\n\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 2d4 for each slot level above 1st."
  }),
  S({ source: 'TCE',
    key: "tashas-mind-whip",
    name: "Tasha's Mind Whip",
    level: 2,
    school: "Enchantment",
    classes: ["sorcerer", "wizard"],
    time: "1 action",
    range: "90 feet",
    components: "V",
    duration: "1 round",
    desc: "You psychically lash out at one creature you can see within range. The target must make an Intelligence saving throw. On a failed save, the target takes 3d6 psychic damage, and it can't take a reaction until the end of its next turn. Moreover, on its next turn, it must choose whether it gets a move, an action, or a bonus action; it gets only one of the three. On a successful save, the target takes half as much damage and suffers none of the spell's other effects.\n\nAt Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd. The creatures must be within 30 feet of each other when you target them."
  }),
  S({ source: 'TCE',
    key: "tashas-otherworldly-guise",
    name: "Tasha's Otherworldly Guise",
    level: 6,
    school: "Transmutation",
    classes: ["sorcerer", "warlock", "wizard"],
    time: "1 bonus action",
    range: "Self",
    components: "V, S, M (an object engraved with a symbol of the Outer Planes, worth at least 500 gp)",
    duration: "Concentration, up to 1 minute",
    desc: "Uttering an incantation, you draw on the magic of the Lower Planes or Upper Planes (your choice) to transform yourself. You gain the following benefits until the spell ends:\n\n• You are immune to fire and poison damage (Lower Planes) or radiant and necrotic damage (Upper Planes).\n• You are immune to the poisoned condition (Lower Planes) or the charmed condition (Upper Planes).\n• Spectral wings appear on your back, giving you a flying speed of 40 feet.\n• You have a +2 bonus to AC.\n• All your weapon attacks are magical, and when you make a weapon attack, you can use your spellcasting ability modifier, instead of Strength or Dexterity, for the attack and damage rolls.\n• You can attack twice, instead of once, when you take the Attack action on your turn. You ignore this benefit if you already have a feature, like Extra Attack, that lets you attack more than once when you take the Attack action on your turn."
  })
]
  .filter((s) => !s.dup)

// De-duplicate by key (keeps first), then expose helpers.
const seen = new Set()
export const ALL_SPELLS = SPELLS.filter((s) => (seen.has(s.key) ? false : seen.add(s.key)))
export const getSpell = (key) => ALL_SPELLS.find((s) => s.key === key)
export const spellLevelName = (lvl) => (lvl === 0 ? 'Cantrip' : `Level ${lvl}`)
export const spellsForClass = (classKey) => ALL_SPELLS.filter((s) => s.classes.includes(classKey))
