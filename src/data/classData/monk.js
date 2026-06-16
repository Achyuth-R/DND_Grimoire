// Monk — PHB base + traditions from PHB, XGE, TCE
const ASI = (level) => ({ level, name: 'Ability Score Improvement', desc: 'Increase one ability score by 2, or two ability scores by 1 each (max 20). You can forgo this to take a feat.' })

export default {
  key: 'monk',
  name: 'Monk',
  hitDie: 8,
  primary: ['dex', 'wis'],
  saves: ['str', 'dex'],
  icon: '👊',
  color: '#16a085',
  desc: `Monks are united in their ability to magically harness the energy that flows in their bodies. Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, this energy infuses all that a monk does.

Monks make careful study of a magical energy that most monastic traditions call ki. This energy is an element of the magic that suffuses the multiverse - specifically, the element that flows through living bodies. Monks harness this power within themselves to create magical effects and exceed their bodies' physical capabilities, and some of their special attacks can hinder the flow of ki in their opponents. Using this energy, monks channel uncanny speed and strength into their unarmed strikes. As they gain experience, their martial training and their mastery of ki gives them more power over their bodies and the bodies of their foes.

You must have a Dexterity score and a Wisdom score of 13 or higher in order to multiclass in or out of this class.`,
  armor: [],
  weapons: ['Simple weapons', 'Shortswords'],
  tools: ["One type of artisan's tools or one musical instrument"],
  skillsChoose: 2,
  skillsFrom: ['acrobatics', 'athletics', 'history', 'insight', 'religion', 'stealth'],
  spellcaster: false,
  features: [
    { level: 1, name: 'Unarmored Defense', desc: `Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.` },
    { level: 1, name: 'Martial Arts', desc: `At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don't have the two-handed or heavy property.

You gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield:
- You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.
- You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table (d6 at 5th, d8 at 11th, d10 at 17th level).
- When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn.

Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon in chapter 5.` },
    { level: 2, name: 'Ki', desc: `Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table.

You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.

When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.

Some of your ki features require your target to make a saving throw to resist the feature's effects. The saving throw DC is calculated as follows:
Ki save DC = 8 + your proficiency bonus + your Wisdom modifier

Flurry of Blows
Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action.

Patient Defense
You can spend 1 ki point to take the Dodge action as a bonus action on your turn.

Step of the Wind
You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn.` },
    { level: 2, name: 'Unarmored Movement', desc: `Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in the Monk table (up to +30 feet at 18th level).

At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.` },
    { level: 3, name: 'Monastic Tradition', desc: `When you reach 3rd level, you commit yourself to a monastic tradition. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level.` },
    { level: 3, name: 'Deflect Missiles', desc: `Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.

If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack, which has a normal range of 20 feet and a long range of 60 feet.` },
    { level: 4, name: 'Slow Fall', desc: `Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level.` },
    ASI(4),
    { level: 5, name: 'Extra Attack', desc: `Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.` },
    { level: 5, name: 'Stunning Strike', desc: `Starting at 5th level, you can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.` },
    { level: 6, name: 'Ki-Empowered Strikes', desc: `Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.` },
    { level: 7, name: 'Evasion', desc: `At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon's lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.` },
    { level: 7, name: 'Stillness of Mind', desc: `Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened.` },
    ASI(8),
    { level: 10, name: 'Purity of Body', desc: `At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison.` },
    ASI(12),
    { level: 13, name: 'Tongue of the Sun and Moon', desc: `Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say.` },
    { level: 14, name: 'Diamond Soul', desc: `Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws.

Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.` },
    ASI(16),
    { level: 18, name: 'Empty Body', desc: `Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.

Additionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can't take any other creatures with you.` },
    ASI(19),
    { level: 20, name: 'Perfect Self', desc: `At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points.` },
  ],
  subclasses: [
    {
      key: 'open-hand', name: 'Way of the Open Hand', source: 'PHB',
      desc: `Monks of the Way of the Open Hand are the ultimate masters of martial arts combat, whether armed or unarmed. They learn techniques to push and trip their opponents, manipulate ki to heal damage to their bodies, and practice advanced meditation that can protect them from harm.`,
      features: [
        { level: 3, name: 'Open Hand Technique', desc: `Starting when you choose this tradition at 3rd level, you can manipulate your enemy's ki when you harness your own. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of the following effects on that target:
- It must succeed on a Dexterity saving throw or be knocked prone.
- It must make a Strength saving throw. If it fails, you can push it up to 15 feet away from you.
- It can't take reactions until the end of your next turn.` },
        { level: 6, name: 'Wholeness of Body', desc: `At 6th level, you gain the ability to heal yourself. As an action, you can regain hit points equal to three times your monk level. You must finish a long rest before you can use this feature again.` },
        { level: 11, name: 'Tranquility', desc: `Beginning at 11th level, you can enter a special meditation that surrounds you with an aura of peace. At the end of a long rest, you gain the effect of a sanctuary spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals 8 + your Wisdom modifier + your proficiency bonus.` },
        { level: 17, name: 'Quivering Palm', desc: `At 17th level, you gain the ability to set up lethal vibrations in someone's body. When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which last for a number of days equal to your monk level. The vibrations are harmless unless you use your action to end them. To do so, you and the target must be on the same plane of existence. When you use this action, the creature must make a Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes 10d12 necrotic damage.

You can have only one creature under the effect of this feature at a time. You can choose to end the vibrations harmlessly without using an action.` }
      ]
    },
    {
      key: 'shadow', name: 'Way of Shadow', source: 'PHB',
      desc: `Monks of the Way of Shadow follow a tradition that values stealth and subterfuge. These monks might be called ninjas or shadowdancers, and they serve as spies and assassins. Sometimes the members of a ninja monastery are family members, forming a clan sworn to secrecy about their arts and missions. Other monasteries are more like thieves' guilds, hiring out their services to nobles, rich merchants, or anyone else who can pay their fees. Regardless of their methods, the heads of these monasteries expect the unquestioning obedience of their students.`,
      features: [
        { level: 3, name: 'Shadow Arts', desc: `Starting when you choose this tradition at 3rd level, you can use your ki to duplicate the effects of certain spells. As an action, you can spend 2 ki points to cast darkness, darkvision, pass without trace, or silence, without providing material components. Additionally, you gain the minor illusion cantrip if you don't already know it.` },
        { level: 6, name: 'Shadow Step', desc: `At 6th level, you gain the ability to step from one shadow into another. When you are in dim light or darkness, as a bonus action you can teleport up to 60 feet to an unoccupied space you can see that is also in dim light or darkness. You then have advantage on the first melee attack you make before the end of the turn.` },
        { level: 11, name: 'Cloak of Shadows', desc: `By 11th level, you have learned to become one with the shadows. When you are in dim light or darkness, you can use your action to become invisible. You remain invisible until you make an attack, cast a spell, or are in an area of bright light.` },
        { level: 17, name: 'Opportunist', desc: `At 17th level, you can exploit a creature's momentary distraction when it is hit by an attack. Whenever a creature within 5 feet of you is hit by an attack made by a creature other than you, you can use your reaction to make a melee attack against that creature.` }
      ]
    },
    {
      key: 'four-elements', name: 'Way of the Four Elements', source: 'PHB',
      desc: `You follow a monastic tradition that teaches you to harness the elements. When you focus your ki, you can align yourself with the forces of creation and bend the four elements to your will, using them as an extension of your body. Some members of this tradition dedicate themselves to a single element, but others weave the elements together.

Many monks of this tradition tattoo their bodies with representations of their ki powers, commonly imagined as coiling dragons, but also as phoenixes, fish, plants, mountains, and cresting waves.`,
      features: [
        { level: 3, name: 'Disciple of the Elements', desc: `When you choose this tradition at 3rd level, you learn magical disciplines that harness the power of the four elements. A discipline requires you to spend ki points each time you use it.

You know the Elemental Attunement discipline and one other elemental discipline of your choice, which are detailed in the "Elemental Disciplines" section below. You learn one additional elemental discipline of your choice at 6th, 11th, and 17th level.
Whenever you learn a new elemental discipline, you can also replace one elemental discipline that you already know with a different discipline.

Casting Elemental Spells. Some elemental disciplines allow you to cast spells. To cast one of these spells, you use its casting time and other rules, but you don't need to provide material components for it.
Once you reach 5th level in this class, you can spend additional ki points to increase the level of an elemental discipline spell that you cast, provided that the spell has an enhanced effect at a higher level, as burning hands does. The spell's level increases by 1 for each additional ki point you spend. For example, if you are a 5th-level monk and use Sweeping Cinder Strike to cast burning hands, you can spend 3 ki points to cast it as a 2nd-level spell (the discipline's base cost of 2 ki points plus 1).
The maximum number of ki points you can spend to cast a spell in this way (including its base ki point cost and any additional ki points you spend to increase its level) is determined by your monk level, as shown in the Spells and Ki Points table.

Spells and Ki Points
Monk Level | Maximum Ki Points for a Spell
5th-8th | 3
9th-12th | 4
13th-16th | 5
17th-20th | 6` },
        { level: 6, name: 'Additional Elemental Discipline', desc: `You learn one additional elemental discipline of your choice.` },
        { level: 11, name: 'Additional Elemental Discipline', desc: `You learn one additional elemental discipline of your choice.` },
        { level: 17, name: 'Additional Elemental Discipline', desc: `You learn one additional elemental discipline of your choice.` }
      ]
    },
    {
      key: 'drunken-master', name: 'Way of the Drunken Master', source: 'XGE',
      desc: `The Way of the Drunken Master teaches its students to move with the jerky, unpredictable movements of a drunkard. A drunken master sways, tottering on unsteady feet, to present what seems like an incompetent combatant who proves frustrating to engage. The drunken master's erratic stumbles conceal a carefully executed dance of blocks, parries, advances, attacks, and retreats.

A drunken master often enjoys playing the fool to bring gladness to the despondent or to demonstrate humility to the arrogant, but when battle is joined, the drunken master can be a maddening, masterful foe.`,
      features: [
        { level: 3, name: 'Bonus Proficiencies', desc: `When you choose this tradition at 3rd level, you gain proficiency in the Performance skill if you don't already have it. Your martial arts technique mixes combat training with the precision of a dancer and the antics of a jester. You also gain proficiency with brewer's supplies if you don't already have it.` },
        { level: 3, name: 'Drunken Technique', desc: `At 3rd level, you learn how to twist and turn quickly as part of your Flurry of Blows. Whenever you use Flurry of Blows, you gain the benefit of the Disengage action, and your walking speed increases by 10 feet until the end of the current turn.` },
        { level: 6, name: 'Tipsy Sway', desc: `Starting at 6th level, you can move in sudden, swaying ways. You gain the following benefits.
Leap to Your Feet. When you're prone, you can stand up by spending 5 feet of movement, rather than half your speed.
Redirect Attack. When a creature misses you with a melee attack roll, you can spend 1 ki point as a reaction to cause that attack to hit one creature of your choice, other than the attacker, that you can see within 5 feet of you.` },
        { level: 11, name: 'Drunkard\'s Luck', desc: `Starting at 11th level, you always seem to get a lucky bounce at the right moment. When you make an ability check, an attack roll, or a saving throw and have disadvantage on the roll, you can spend 2 ki points to cancel the disadvantage for that roll.` },
        { level: 17, name: 'Intoxicated Frenzy', desc: `At 17th level, you gain the ability to make an overwhelming number of attacks against a group of enemies. When you use your Flurry of Blows, you can make up to three additional attacks with it (up to a total of five Flurry of Blows attacks), provided that each Flurry of Blows attack targets a different creature this turn.` }
      ]
    },
    {
      key: 'kensei', name: 'Way of the Kensei', source: 'XGE',
      desc: `Monks of the Way of the Kensei train relentlessly with their weapons, to the point that the weapon becomes like an extension of the body. Founded on a mastery of sword fighting, the tradition has expanded to include many different weapons.

A kensei sees a weapon much in the same way a calligrapher or a painter regards a pen or brush. Whatever the weapon, the kensei views it as a tool used to express the beauty and precision of the martial arts. That such mastery makes a kensei a peerless warrior is but a side effect of intense devotion, practice, and study.`,
      features: [
        { level: 3, name: 'Path of the Kensei', desc: `When you choose this tradition at 3rd level, your special martial arts training leads you to master the use of certain weapons. This path also includes instruction in the deft strokes of calligraphy or painting. You gain the following benefits.

Kensei Weapons. Choose two types of weapons to be your kensei weapons: one melee weapon and one ranged weapon. Each of these weapons can be any simple or martial weapon that lacks the heavy and special properties. The longbow is also a valid choice. You gain proficiency with these weapons if you don't already have it. Weapons of the chosen types are monk weapons for you. Many of this tradition's features work only with your kensei weapons. When you reach 6th, 11th, and 17th level in this class, you can choose another type of weapon - either melee or ranged - to be a kensei weapon for you, following the criteria above.

Agile Parry. If you make an unarmed strike as part of the Attack action on your turn and are holding a kensei weapon, you can use it to defend yourself if it is a melee weapon. You gain a +2 bonus to AC until the start of your next turn, while the weapon is in your hand and you aren't incapacitated.

Kensei Shot. You can use a bonus action on your turn to make your ranged attacks with a kensei weapon more deadly. When you do so, any target you hit with a ranged attack using a kensei weapon takes an extra 1d4 damage of the weapon's type. You retain this benefit until the end of the current turn.

Way of the Brush. You gain proficiency with your choice of calligrapher's supplies or painter's supplies.` },
        { level: 6, name: 'One with the Blade', desc: `At 6th level, you extend your ki into your kensei weapons, granting you the following benefits.

Magic Kensei Weapons. Your attacks with your kensei weapons count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.

Deft Strike. When you hit a target with a kensei weapon, you can spend 1 ki point to cause the weapon to deal extra damage to the target equal to your Martial Arts die. You can use this feature only once on each of your turns.` },
        { level: 11, name: 'Sharpen the Blade', desc: `At 11th level, you gain the ability to augment your weapons further with your ki. As a bonus action, you can expend up to 3 ki points to grant one kensei weapon you touch a bonus to attack and damage rolls when you attack with it. The bonus equals the number of ki points you spent. This bonus lasts for 1 minute or until you use this feature again. This feature has no effect on a magic weapon that already has a bonus to attack and damage rolls.` },
        { level: 17, name: 'Unerring Accuracy', desc: `At 17th level, your mastery of weapons grants you extraordinary accuracy. If you miss with an attack roll using a monk weapon on your turn, you can reroll it. You can use this feature only once on each of your turns.` }
      ]
    },
    {
      key: 'sun-soul', name: 'Way of the Sun Soul', source: 'XGE',
      desc: `Monks of the Way of the Sun Soul learn to channel their own life energy into searing bolts of light. They teach that meditation can unlock the ability to unleash the indomitable light shed by the soul of every living creature.`,
      features: [
        { level: 3, name: 'Radiant Sun Bolt', desc: `Starting when you choose this tradition at 3rd level, you can hurl searing bolts of magical radiance.

You gain a new attack option that you can use with the Attack action. This special attack is a ranged spell attack with a range of 30 feet. You are proficient with it, and you add your Dexterity modifier to its attack and damage rolls. Its damage is radiant, and its damage die is a d4. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.

When you take the Attack action on your turn and use this special attack as part of it, you can spend 1 ki point to make the special attack twice as a bonus action.

When you gain the Extra Attack feature, this special attack can be used for any of the attacks you make as part of the Attack action.` },
        { level: 6, name: 'Searing Arc Strike', desc: `At 6th level, you gain the ability to channel your ki into searing waves of energy. Immediately after you take the Attack action on your turn, you can spend 2 ki points to cast the burning hands spell as a bonus action.

You can spend additional ki points to cast burning hands as a higher-level spell. Each additional ki point you spend increases the spell's level by 1. The maximum number of ki points (2 plus any additional points) that you can spend on the spell equals half your monk level.` },
        { level: 11, name: 'Searing Sunburst', desc: `At 11th level, you gain the ability to create an orb of light that erupts into a devastating explosion. As an action, you magically create an orb and hurl it at a point you choose within 150 feet, where it erupts into a sphere of radiant light for a brief but deadly instant.

Each creature in that 20-foot-radius sphere must succeed on a Constitution saving throw or take 2d6 radiant damage. A creature doesn't need to make the save if the creature is behind total cover that is opaque.

You can increase the sphere's damage by spending ki points. Each point you spend, to a maximum of 3, increases the damage by 2d6.` },
        { level: 17, name: 'Sun Shield', desc: `At 17th level, you become wreathed in a luminous, magical aura. You shed bright light in a 30-foot radius and dim light for an additional 30 feet. You can extinguish or restore the light as a bonus action.

If a creature hits you with a melee attack while this light shines, you can use your reaction to deal radiant damage to the creature. The radiant damage equals 5 + your Wisdom modifier.` }
      ]
    },
    {
      key: 'astral-self', name: 'Way of the Astral Self', source: 'TCE',
      desc: `A monk who follows the Way of the Astral Self believes their body is an illusion. They see their ki as a representation of their true form, an astral self. This astral self has the capacity to be a force of order or disorder, with some monasteries training students to use their power to protect the weak and other instructing aspirants in how to manifest their true selves in service to the mighty.`,
      features: [
        { level: 3, name: 'Arms of the Astral Self', desc: `At 3rd level, your mastery of your ki allows you to summon a portion of your astral self. As a bonus action, you can spend 1 ki point to summon the arms of your astral self. When you do so, each creature of your choice that you can see within 10 feet of you must succeed on a Dexterity saving throw or take force damage equal to two rolls of your Martial Arts die.

For 10 minutes, these spectral arms hover near your shoulders or surround your mundane arms (your choice). You determine the arms' appearance, and they vanish early if you are incapacitated or die.

While the spectral arms are present, you gain the following benefits:
- You can use your Wisdom modifier in place of your Strength modifier when making Strength checks and Strength saving throws.
- You can use the spectral arms to make unarmed strikes.
- When you make an unarmed strike with the arms on your turn, your reach for it is 5 feet greater than normal.
- The unarmed strikes you make with the arms can use your Wisdom modifier in place of your Strength or Dexterity modifier for the attack and damage rolls, and their damage type is force.` },
        { level: 6, name: 'Visage of the Astral Self', desc: `At 6th level, you can summon the visage of your astral self. As a bonus action, or as part of the bonus action you take to activate Arms of the Astral Self, you can spend 1 ki point to summon this visage for 10 minutes. It vanishes early if you are incapacitated or die.

The spectral visage covers your face like a helmet or mask. You determine its appearance.
While the spectral visage is present, you gain the following benefits.
Astral Sight. You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet.
Wisdom of the Spirit. You have advantage on Wisdom (Insight) and Charisma (Intimidation) checks.
Word of the Spirit. When you speak, you can direct your words to a creature of your choice that you can see within 60 feet of you, making it so only that creature can hear you. Alternatively, you can amplify your voice so that all creatures within 600 feet can hear you.` },
        { level: 11, name: 'Body of the Astral Self', desc: `At 11th level, when you have both your astral arms and visage summoned, you can cause the body of your astral self to appear (no action required). This spectral body covers your physical form like a suit of armor, connecting with the arms and visage. You determine its appearance.

While the spectral body is present, you gain the following benefits.
Deflect Energy. When you take acid, cold, fire, force, lightning, or thunder damage, you can use your reaction to deflect it. When you do so, the damage you take is reduced by 1d10 + your Wisdom modifier (minimum reduction of 1).
Empowered Arms. Once on each of your turns when you hit a target with the Arms of the Astral Self, you can deal extra force damage to the target equal to your Martial Arts die.` },
        { level: 17, name: 'Awakened Astral Self', desc: `At 17th level, your connection to your astral self is complete, allowing you to unleash its full potential. As a bonus action, you can spend 5 ki points to summon the arms, visage, and body of your astral self and awaken it for 10 minutes. This awakening ends early if you are incapacitated or die.

While your astral self is awakened, you gain the following benefits.
Armor of the Spirit. You gain a +2 bonus to Armor Class.
Astral Barrage. Whenever you use the Extra Attack feature to attack twice, you can instead attack three times if all the attacks are made with your astral arms.` }
      ]
    },
    {
      key: 'mercy', name: 'Way of Mercy', source: 'TCE',
      desc: `Monks of the Way of Mercy learn to manipulate the life force of others to bring aid to those in need. They are wandering physicians to the poor and hurt. However, to those beyond their help, they bring a swift end as an act of mercy.

Those who follow the Way of Mercy might be members of a religious order, administering to the needy and making grim choices rooted in reality rather than idealism. Some might be gentle-voiced healers, beloved by their communities, while others might be masked bringers of macabre mercies.

The walkers of this way usually don robes with deep cowls, and they often conceal their faces with masks, presenting themselves as the faceless bringers of life and death.`,
      features: [
        { level: 3, name: 'Implements of Mercy', desc: `At 3rd level, you gain proficiency in the Insight and Medicine skills, and you gain proficiency with the herbalism kit.

You also gain a special mask, which you often wear when using the features of this subclass. You determine its appearance, or generate it randomly by rolling on the Merciful Mask table.
Merciful Mask
d6 | Mask Appearance
1 | Raven
2 | Blank and white
3 | Crying visage
4 | Laughing visage
5 | Skull
6 | Butterfly` },
        { level: 3, name: 'Hand of Healing', desc: `At 3rd level, your mystical touch can mend wounds. As an action, you can spend 1 ki point to touch a creature and restore a number of hit points equal to a roll of your Martial Arts die + your Wisdom modifier.

When you use your Flurry of Blows, you can replace one of the unarmed strikes with a use of this feature without spending a ki point for the healing.` },
        { level: 3, name: 'Hand of Harm', desc: `At 3rd level, you use your ki to inflict wounds. When you hit a creature with an unarmed strike, you can spend 1 ki point to deal extra necrotic damage equal to one roll of your Martial Arts die + your Wisdom modifier. You can use this feature only once per turn.` },
        { level: 6, name: 'Physician\'s Touch', desc: `At 6th level, you can administer even greater cures with a touch, and if you feel it's necessary, you can use your knowledge to cause harm.

When you use Hand of Healing on a creature, you can also end one disease or one of the following conditions affecting the creature: blinded, deafened, paralyzed, poisoned, or stunned.

When you use Hand of Harm on a creature, you can subject that creature to the poisoned condition until the end of your next turn.` },
        { level: 11, name: 'Flurry of Healing and Harm', desc: `At 11th level, you can now mete out a flurry of comfort and hurt. When you use Flurry of Blows, you can now replace each of the unarmed strikes with a use of your Hand of Healing, without spending ki points for the healing.

In addition, when you make an unarmed strike with Flurry of Blows, you can use Hand of Harm with that strike without spending the ki point for Hand of Harm. You can still use Hand of Harm only once per turn.` },
        { level: 17, name: 'Hand of Ultimate Mercy', desc: `At 17th level, your mastery of life energy opens the door to the ultimate mercy. As an action, you can touch the corpse of a creature that died within the past 24 hours and expend 5 ki points. The creature then returns to life, regaining a number of hit points equal to 4d10 + your Wisdom modifier. If the creature died while subject to any of the following conditions, it revives with them removed: blinded, deafened, paralyzed, poisoned, and stunned.

Once you use this feature, you can't use it again until you finish a long rest.` }
      ]
    }
  ]
}
