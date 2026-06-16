// Ranger — PHB base + archetypes from PHB, XGE, TCE, FTD
const ASI = (level) => ({ level, name: 'Ability Score Improvement', desc: 'Increase one ability score by 2, or two ability scores by 1 each (max 20). You can forgo this to take a feat.' })

export default {
  key: 'ranger',
  name: 'Ranger',
  hitDie: 10,
  primary: ['dex', 'wis'],
  saves: ['str', 'dex'],
  icon: '🏹',
  color: '#2e8b57',
  desc: `Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization—humanoid raiders, rampaging beasts and monstrosities, terrible giants, and deadly dragons. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Rangers focus their combat training on techniques that are particularly useful against their specific favored foes.

Thanks to their familiarity with the wilds, rangers acquire the ability to cast spells that harness nature's power, much as a druid does. Their spells, like their combat abilities, emphasize speed, stealth, and the hunt. A ranger's talents and abilities are honed with deadly focus on the grim task of protecting the borderlands.

You must have a Dexterity score and a Wisdom score of 13 or higher in order to multiclass in or out of this class.`,
  armor: ['Light armor', 'Medium armor', 'Shields'],
  weapons: ['Simple weapons', 'Martial weapons'],
  tools: [],
  skillsChoose: 3,
  skillsFrom: ['animal-handling', 'athletics', 'insight', 'investigation', 'nature', 'perception', 'stealth', 'survival'],
  spellcaster: 'half',
  spellAbility: 'wis',
  features: [
    { level: 1, name: 'Favored Enemy', desc: `Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.

Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.
You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.
When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.

You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures.` },
    { level: 1, name: 'Favored Foe (Optional)', desc: `This 1st-level feature replaces the Favored Enemy feature and works with the Foe Slayer feature. You gain no benefit from the replaced feature and don't qualify for anything in the game that requires it.

When you hit a creature with an attack roll, you can call on your mystical bond with nature to mark the target as your favored enemy for 1 minute or until you lose your concentration (as if you were concentrating on a spell).
The first time on each of your turns that you hit the favored enemy and deal damage to it, including when you mark it, you can increase that damage by 1d4.

You can use this feature to mark a favored enemy a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.
This feature's extra damage increases when you reach certain levels in this class: to 1d6 at 6th level and to 1d8 at 14th level.` },
    { level: 1, name: 'Natural Explorer', desc: `You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in.

While traveling for an hour or more in your favored terrain, you gain the following benefits:
- Difficult terrain doesn't slow your group's travel.
- Your group can't become lost except by magical means.
- Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.
- If you are traveling alone, you can move stealthily at a normal pace.
- When you forage, you find twice as much food as you normally would.
- While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.

You choose additional favored terrain types at 6th and 10th level.` },
    { level: 1, name: 'Deft Explorer (Optional)', desc: `This 1st-level feature replaces the Natural Explorer feature. You gain no benefit from the replaced feature and don't qualify for anything in the game that requires it.

You are an unsurpassed explorer and survivor, both in the wilderness and in dealing with others on your travels. You gain the Canny benefit below, and you gain an additional benefit when you reach 6th level and 10th level in this class.

Canny (1st Level)
Choose one of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses the chosen skill.
You can also speak, read, and write two additional languages of your choice.

Roving (6th Level)
Your walking speed increases by 5, and you gain a climbing speed and a swimming speed equal to your walking speed.

Tireless (10th Level)
As an action, you can give yourself a number of temporary hit points equal to 1d8 + your Wisdom modifier (minimum of 1 temporary hit point). You can use this action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.
In addition, whenever you finish a short rest, your exhaustion level, if any, is decreased by 1.` },
    { level: 2, name: 'Fighting Style', desc: `At 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.

Archery. You gain a +2 bonus to attack rolls you make with ranged weapons.
Blind Fighting (Optional). You have blindsight with a range of 10 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're blinded or in darkness. Moreover, you can see an invisible creature within that range, unless the creature successfully hides from you.
Defense. While you are wearing armor, you gain a +1 bonus to AC.
Druidic Warrior (Optional). You learn two cantrips of your choice from the druid spell list. They count as ranger spells for you, and Wisdom is your spellcasting ability for them. Whenever you gain a level in this class, you can replace one of these cantrips with another cantrip from the druid spell list.
Dueling. When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.
Thrown Weapon Fighting (Optional). You can draw a weapon that has the thrown property as part of the attack you make with the weapon. In addition, when you hit with a ranged attack using a thrown weapon, you gain a +2 bonus to the damage roll.
Two-Weapon Fighting. When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.` },
    { level: 2, name: 'Spellcasting', desc: `By 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does.

Spell Slots
The Ranger table shows how many spell slots you have to cast your ranger spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.
For example, if you know the 1st-level spell animal friendship and have a 1st-level and a 2nd-level spell slot available, you can cast animal friendship using either slot.

Spells Known of 1st Level and Higher
You know two 1st-level spells of your choice from the ranger spell list.
The Spells Known column of the Ranger table shows when you learn more ranger spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 5th level in this class, you can learn one new spell of 1st or 2nd level.
Additionally, when you gain a level in this class, you can choose one of the ranger spells you know and replace it with another spell from the ranger spell list, which also must be of a level for which you have spell slots.

Spellcasting Ability
Wisdom is your spellcasting ability for your ranger spells, since your magic draws on your attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a ranger spell you cast and when making an attack roll with one.

Spell save DC = 8 + your proficiency bonus + your Wisdom modifier
Spell attack modifier = your proficiency bonus + your Wisdom modifier

Spellcasting Focus (Optional)
You can use a druidic focus as a spellcasting focus for your ranger spells.` },
    { level: 3, name: 'Ranger Archetype', desc: `At 3rd level, you choose an archetype that you strive to emulate, such as the Hunter archetype. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level.` },
    { level: 3, name: 'Primeval Awareness', desc: `Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn't reveal the creatures' location or number.` },
    { level: 3, name: 'Primal Awareness (Optional)', desc: `This 3rd-level feature replaces the Primeval Awareness feature. You gain no benefit from the replaced feature and don't qualify for anything in the game that requires it.

You can focus your awareness through the interconnections of nature: you learn additional spells when you reach certain levels in this class if you don't already know them, as shown in the Primal Awareness Spells table. These spells don't count against the number of ranger spells you know.

3rd: speak with animals
5th: beast sense
9th: speak with plants
13th: locate creature
17th: commune with nature

You can cast each of these spells once without expending a spell slot. Once you cast a spell in this way, you can't do so again until you finish a long rest.` },
    ASI(4),
    { level: 5, name: 'Extra Attack', desc: `Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.` },
    ASI(8),
    { level: 8, name: 'Land\'s Stride', desc: `Starting at 8th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.

In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell.` },
    { level: 10, name: 'Hide in Plain Sight', desc: `Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.
Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit.` },
    { level: 10, name: 'Nature\'s Veil (Optional)', desc: `This 10th-level feature replaces the Hide in Plain Sight feature. You gain no benefit from the replaced feature and don't qualify for anything in the game that requires it.

You draw on the powers of nature to hide yourself from view briefly. As a bonus action, you can magically become invisible, along with any equipment you are wearing or carrying, until the start of your next turn.
You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.` },
    ASI(12),
    { level: 14, name: 'Vanish', desc: `Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can't be tracked by nonmagical means, unless you choose to leave a trail.` },
    ASI(16),
    { level: 18, name: 'Feral Senses', desc: `At 18th level, you gain preternatural senses that help you fight creatures you can't see. When you attack a creature you can't see, your inability to see it doesn't impose disadvantage on your attack rolls against it.

You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn't hidden from you and you aren't blinded or deafened.` },
    ASI(19),
    { level: 20, name: 'Foe Slayer', desc: `At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied.` }
  ],
  subclasses: [
    {
      key: 'hunter', name: 'Hunter', source: 'PHB',
      desc: `Emulating the Hunter archetype means accepting your place as a bulwark between civilization and the terrors of the wilderness. As you walk the Hunter's path, you learn specialized techniques for fighting the threats you face, from rampaging ogres and hordes of orcs to towering giants and terrifying dragons.`,
      features: [
        { level: 3, name: 'Hunter\'s Prey', desc: `At 3rd level, you gain one of the following features of your choice.

Colossus Slayer. Your tenacity can wear down the most potent foes. When you hit a creature with a weapon attack, the creature takes an extra 1d8 damage if it's below its hit point maximum. You can deal this extra damage only once per turn.

Giant Killer. When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack, provided that you can see the creature.

Horde Breaker. Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon.` },
        { level: 7, name: 'Defensive Tactics', desc: `At 7th level, you gain one of the following features of your choice.

Escape the Horde. Opportunity attacks against you are made with disadvantage.

Multiattack Defense. When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn.

Steel Will. You have advantage on saving throws against being frightened.` },
        { level: 11, name: 'Multiattack', desc: `At 11th level, you gain one of the following features of your choice.

Volley. You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon's range. You must have ammunition for each target, as normal, and you make a separate attack roll for each target.

Whirlwind Attack. You can use your action to make a melee attack against any number of creatures within 5 feet of you, with a separate attack roll for each target.` },
        { level: 15, name: 'Superior Hunter\'s Defense', desc: `At 15th level, you gain one of the following features of your choice.

Evasion. When you are subjected to an effect, such as a red dragon's fiery breath or a lightning bolt spell, that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.

Stand Against the Tide. When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the same attack against another creature (other than itself) of your choice.

Uncanny Dodge. When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.` }
      ],
    },
    {
      key: 'beast-master', name: 'Beast Master', source: 'PHB',
      desc: `The Beast Master archetype embodies a friendship between the civilized races and the beasts of the world. United in focus, beast and ranger work as one to fight the monstrous foes that threaten civilization and the wilderness alike. Emulating the Beast Master archetype means committing yourself to this ideal, working in partnership with an animal as its companion and friend.`,
      features: [
        { level: 3, name: 'Ranger\'s Companion', desc: `At 3rd level, you gain a beast companion that accompanies you on your adventures and is trained to fight alongside you. Choose a beast that is no larger than Medium and that has a challenge rating of 1/4 or lower (appendix D presents statistics for the hawk, mastiff, and panther as examples). Add your proficiency bonus to the beast's AC, attack rolls, and damage rolls, as well as to any saving throws and skills it is proficient in. Its hit point maximum equals the hit point number in its stat block or four times your ranger level, whichever is higher. Like any creature, it can spend Hit Dice during a short rest to regain hit points.

The beast obeys your commands as best as it can. It takes its turn on your initiative. On your turn, you can verbally command the beast where to move (no action required by you). You can use your action to verbally command it to take the Attack, Dash, Disengage, or Help action. If you don't issue a command, the beast takes the Dodge action. Once you have the Extra Attack feature, you can make one weapon attack yourself when you command the beast to take the Attack action.

If you are incapacitated or absent, the beast acts on its own, focusing on protecting you and itself. The beast never requires your command to use its reaction, such as when making an opportunity attack.

If the beast dies, you can obtain a new companion by spending 8 hours magically bonding with a beast that isn't hostile to you and that meets the requirements.` },
        { level: 3, name: 'Primal Companion (Optional)', desc: `This 3rd-level feature replaces the Ranger's Companion feature. You gain no benefit from the replaced feature and don't qualify for anything in the game that requires it.

You magically summon a primal beast, which draws strength from your bond with nature. The beast is friendly to you and your companions and obeys your commands. Choose its stat block-Beast of the Land, Beast of the Sea, or Beast of the Sky-which uses your proficiency bonus (PB) in several places. You also determine the kind of animal the beast is, choosing a kind appropriate for the stat block. Whatever kind you choose, the beast bears primal markings, indicating its mystical origin.

In combat, the beast acts during your turn. It can move and use its reaction on its own, but the only action it takes is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. You can also sacrifice one of your attacks when you take the Attack action to command the beast to take the Attack action. If you are incapacitated, the beast can take any action of its choice, not just Dodge.

If the beast has died within the last hour, you can use your action to touch it and expend a spell slot of 1st level or higher. The beast returns to life after 1 minute with all its hit points restored.
When you finish a long rest, you can summon a different primal beast. The new beast appears in an unoccupied space within 5 feet of you, and you choose its stat block and appearance. If you already have a beast from this feature, it vanishes when the new beast appears. The beast also vanishes if you die.` },
        { level: 7, name: 'Exceptional Training', desc: `Beginning at 7th level, on any of your turns when your beast companion doesn't attack, you can use a bonus action to command the beast to take the Dash, Disengage, or Help action on its turn.

In addition, the beast's attacks now count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.` },
        { level: 11, name: 'Bestial Fury', desc: `Starting at 11th level, when you command your beast companion to take the Attack action, the beast can make two attacks, or it can take the Multiattack action if it has that action.` },
        { level: 15, name: 'Share Spells', desc: `Beginning at 15th level, when you cast a spell targeting yourself, you can also affect your beast companion with the spell if the beast is within 30 feet of you.` }
      ],
    },
    {
      key: 'gloom-stalker', name: 'Gloom Stalker', source: 'XGE',
      desc: `Gloom Stalkers are at home in the darkest places: deep under the earth, in gloomy alleyways, in primeval forests, and wherever else the light dims. Most folk enter such places with trepidation, but a Gloom Stalker ventures boldly into the darkness, seeking to ambush threats before they can reach the broader world. Such rangers are often found in the Underdark, but they will go any place where evil lurks in the shadows.`,
      features: [
        { level: 3, name: 'Gloom Stalker Magic', desc: `Starting at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Gloom Stalker Spells table. The spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.

3rd: disguise self
5th: rope trick
9th: fear
13th: greater invisibility
17th: seeming` },
        { level: 3, name: 'Dread Ambusher', desc: `At 3rd level, you master the art of the ambush. You can give yourself a bonus to your initiative rolls equal to your Wisdom modifier.

At the start of your first turn of each combat, your walking speed increases by 10 feet, which lasts until the end of that turn. If you take the Attack action on that turn, you can make one additional weapon attack as part of that action. If that attack hits, the target takes an extra 1d8 damage of the weapon's damage type.` },
        { level: 3, name: 'Umbral Sight', desc: `At 3rd level, you gain darkvision out to a range of 60 feet. If you already have darkvision from your race, its range increases by 30 feet.

You are also adept at evading creatures that rely on darkvision. While in darkness, you are invisible to any creature that relies on darkvision to see you in that darkness.` },
        { level: 7, name: 'Iron Mind', desc: `By 7th level, you have honed your ability to resist the mind-altering powers of your prey. You gain proficiency in Wisdom saving throws. If you already have this proficiency, you instead gain proficiency in Intelligence or Charisma saving throws (your choice).` },
        { level: 11, name: 'Stalker\'s Flurry', desc: `At 11th level, you learn to attack with such unexpected speed that you can turn a miss into another strike. Once on each of your turns when you miss with a weapon attack, you can make another weapon attack as part of the same action.` },
        { level: 15, name: 'Shadowy Dodge', desc: `Starting at 15th level, you can dodge in unforeseen ways, with wisps of supernatural shadow around you. Whenever a creature makes an attack roll against you and doesn't have advantage on the roll, you can use your reaction to impose disadvantage on it. You must choose to use this feature before knowing the outcome of the attack roll.` }
      ],
    },
    {
      key: 'horizon-walker', name: 'Horizon Walker', source: 'XGE',
      desc: `Horizon Walkers guard the world against threats that originate from other planes or that seek to ravage the mortal realm with otherworldly magic. They seek out planar portals and keep watch over them, venturing to the Inner Planes and the Outer Planes as needed to pursue their foes. These rangers are also friends to any forces in the multiverse—especially benevolent dragons, fey, and elementals—that work to preserve life and the order of the planes.`,
      features: [
        { level: 3, name: 'Horizon Walker Magic', desc: `Starting at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Horizon Walker Spells table. The spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.

3rd: protection from evil and good
5th: misty step
9th: haste
13th: banishment
17th: teleportation circle` },
        { level: 3, name: 'Detect Portal', desc: `At 3rd level, you gain the ability to magically sense the presence of a planar portal. As an action, you detect the distance and direction to the closest planar portal within 1 mile of you.

Once you use this feature, you can't use it again until you finish a short or long rest.

See the "Planar Travel" section in chapter 2 of the Dungeon Master's Guide for examples of planar portals.` },
        { level: 3, name: 'Planar Warrior', desc: `At 3rd level, you learn to draw on the energy of the multiverse to augment your attacks.

As a bonus action, choose one creature you can see within 30 feet of you. The next time you hit that creature on this turn with a weapon attack, all damage dealt by the attack becomes force damage, and the creature takes an extra 1d8 force damage from the attack. When you reach 11th level in this class, the extra damage increases to 2d8.` },
        { level: 7, name: 'Ethereal Step', desc: `At 7th level, you learn to step through the Ethereal Plane. As a bonus action, you can cast the etherealness spell with this feature, without expending a spell slot, but the spell ends at the end of the current turn.

Once you use this feature, you can't use it again until you finish a short or long rest.` },
        { level: 11, name: 'Distant Strike', desc: `At 11th level, you gain the ability to pass between the planes in the blink of an eye. When you take the Attack action, you can teleport up to 10 feet before each attack to an unoccupied space you can see.

If you attack at least two different creatures with the action, you can make one additional attack with it against a third creature.` },
        { level: 15, name: 'Spectral Defense', desc: `At 15th level, your ability to move between planes enables you to slip through the planar boundaries to lessen the harm done to you during battle. When you take damage from an attack, you can use your reaction to give yourself resistance to all of that attack's damage on this turn.` }
      ],
    },
    {
      key: 'fey-wanderer', name: 'Fey Wanderer', source: 'TCE',
      desc: `A fey mystic who uses mirthful magic and a joyful spirit to combat the direst of foes. The Fey Wanderer's magic brings the vibrant energy and spontaneous nature of the Feywild into the material plane.`,
      features: [
        { level: 3, name: 'Fey Wanderer Magic', desc: `Starting at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Fey Wanderer Spells table. The spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.

3rd: charm person
5th: misty step
9th: dispel magic
13th: dimension door
17th: mislead` },
        { level: 3, name: 'Dreadful Strikes', desc: `At 3rd level, you can augment your weapon strikes with mind-scarring magic, drawn from the gloomy hollows of the Feywild. When you hit a creature with a weapon, you can deal an extra 1d4 psychic damage to the target, which can take this extra damage only once per turn.

The extra damage increases to 1d6 when you reach 11th level in this class.` },
        { level: 3, name: 'Otherworldly Glamour', desc: `At 3rd level, your fey qualities give you a supernatural charm. As a result, whenever you make a Charisma check, you gain a bonus to the check equal to your Wisdom modifier (minimum of +1).

In addition, you gain proficiency in one of the following skills of your choice: Deception, Performance, or Persuasion.` },
        { level: 7, name: 'Beguiling Twist', desc: `Starting at 7th level, the magic of the Feywild guards your mind. You have advantage on saving throws against being charmed or frightened.

In addition, whenever you or a creature you can see within 120 feet of you succeeds on a saving throw against being charmed or frightened, you can use your reaction to force a different creature you can see within 120 feet of you to make a Wisdom saving throw against your spell save DC. If the save fails, the target is charmed or frightened by you (your choice) for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a successful save.` },
        { level: 11, name: 'Fey Reinforcements', desc: `At 11th level, the royal courts of the Feywild have blessed you with the assistance of fey beings: you know the summon fey spell. It doesn't count against the number of ranger spells you know, and you can cast it without a material component. You can also cast it once without a spell slot, and you regain the ability to do so when you finish a long rest.

Whenever you start casting the spell, you can modify it so that it doesn't require concentration. If you do so, the spell's duration becomes 1 minute for that casting.` },
        { level: 15, name: 'Misty Wanderer', desc: `At 15th level, you can slip in and out of the Feywild to move in a blink of an eye: you can cast misty step without expending a spell slot. You can do so a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a long rest.

In addition, whenever you cast misty step, you can bring along one willing creature you can see within 5 feet of you. That creature teleports to an unoccupied space of your choice within 5 feet of your destination space.` }
      ],
    },
    {
      key: 'swarmkeeper', name: 'Swarmkeeper', source: 'TCE',
      desc: `Feeling a deep connection to the environment around them, some rangers reach out through their magical connection to the world and bond with a swarm of nature spirits. The swarm becomes a potent force in battle, as well as helpful company for the ranger. Some Swarmkeepers are outcasts or hermits, keeping to themselves and their attendant swarms rather than dealing with the discomfort of others. Other Swarmkeepers enjoy building vibrant communities that work for the mutual benefit of all those they consider part of their swarm.`,
      features: [
        { level: 3, name: 'Swarmkeeper Magic', desc: `Starting at 3rd level, you learn the mage hand cantrip if you don't already know it. When you cast it, the hand takes the form of your swarming nature spirits.
You also learn an additional spell of 1st level or higher when you reach certain levels in this class, as shown in the Swarmkeeper Spells table. Each spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.

3rd: faerie fire, mage hand
5th: web
9th: gaseous form
13th: arcane eye
17th: insect plague` },
        { level: 3, name: 'Gathered Swarm', desc: `At 3rd level, a swarm of intangible nature spirits has bonded itself to you and can assist you in battle. Until you die, the swarm remains in your space, crawling on you or flying and skittering immediately around you. You determine its appearance, or you generate its appearance by rolling on the Swarm Appearance table.

Once on each of your turns, you can cause the swarm to assist you in one of the following ways, immediately after you hit a creature with an attack:
- The attack's target takes 1d6 piercing damage from the swarm.
- The attack's target must succeed on a Strength saving throw against your spell save DC or be moved by the swarm up to 15 feet horizontally in a direction of your choice.
- You are moved by the swarm 5 feet horizontally in a direction of your choice.` },
        { level: 7, name: 'Writhing Tide', desc: `At 7th level, you can condense part of your swarm into a focused mass that lifts you up. As a bonus action, you gain a flying speed of 10 feet and can hover. This effect lasts for 1 minute or until you are incapacitated.

You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.` },
        { level: 11, name: 'Mighty Swarm', desc: `At 11th level, your Gathered Swarm grows mightier in the following ways:
- The damage of Gathered Swarm increases to 1d8.
- If a creature fails its saving throw against being moved by Gathered Swarm, you can also cause the swarm to knock the creature prone.
- When you are moved by Gathered Swarm, it gives you half cover until the start of your next turn.` },
        { level: 15, name: 'Swarming Dispersal', desc: `At 15th level, you can discorporate into your swarm, avoiding danger. When you take damage, you can use your reaction to give yourself resistance to that damage. You vanish into your swarm and then teleport to an unoccupied space that you can see within 30 feet of you, where you reappear with the swarm.

You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.` }
      ],
    },
    {
      key: 'drakewarden', name: 'Drakewarden', source: 'FTD',
      desc: `Drakewardens are rangers who use their magical connection with nature to form an enduring bond with a minor dragon, a drake. This bond allows the ranger to summon the drake to their side and to share in the awe-inspiring power wielded by dragons.

Consider how your ranger gained their bond with the drake. The Drakewarden Origin table offers some examples.`,
      features: [
        { level: 3, name: 'Draconic Gift', desc: `At 3rd level, the bond you share with your drake creates a connection to dragonkind, granting you understanding and empowering your presence. You gain the following benefits:
- Thaumaturgy. You learn the thaumaturgy cantrip, which is a ranger spell for you.
- Tongue of Dragons. You learn to speak, read, and write Draconic or one other language of your choice.` },
        { level: 3, name: 'Drake Companion', desc: `At 3rd level, as an action, you can magically summon the drake that is bound to you. It appears in an unoccupied space of your choice within 30 feet of you.
The drake is friendly to you and your companions, and it obeys your commands. See its game statistics in the accompanying Drake Companion stat block, which uses your proficiency bonus (PB) in several places. Whenever you summon the drake, choose a damage type listed in its Draconic Essence trait. You can determine the cosmetic characteristics of the drake, such as its color, its scale pattern, or any visible effect of its Draconic Essence; your choice has no effect on its game statistics.

In combat, the drake shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are incapacitated, the drake can take any action of its choice, not just Dodge.

The drake remains until it is reduced to 0 hit points, until you use this feature to summon the drake again, or until you die. Anything the drake was wearing or carrying is left behind when the drake vanishes.
Once you summon the drake, you can't do so again until you finish a long rest, unless you expend a spell slot of 1st level or higher to summon it.` },
        { level: 7, name: 'Bond of Fang and Scale', desc: `At 7th level, the bond you share with your drake intensifies, protecting you and stoking the drake's fury. When you summon your drake, it grows wings on its back and gains a flying speed equal to its walking speed.
In addition, while your drake is summoned, you and the drake gain the following benefits:
- Drake Mount. The drake grows to Medium size. Reflecting your special bond, you can use the drake as a mount if your size is Medium or smaller. While you are riding your drake, it can't use the flying speed of this feature.
- Magic Fang. The drake's Bite attack deals an extra 1d6 damage of the type chosen for its Draconic Essence.
- Resistance. You gain resistance to the damage type chosen for the drake's Draconic Essence.` },
        { level: 11, name: 'Drake\'s Breath', desc: `At 11th level, as an action, you can exhale a 30-foot cone of damaging breath or cause your drake to exhale it. Choose acid, cold, fire, lightning, or poison damage (your choice doesn't have to match your drake's Draconic Essence). Each creature in the cone must make a Dexterity saving throw against your spell save DC, taking 8d6 damage on a failed save, or half as much damage on a successful one.
This damage increases to 10d6 when you reach 15th level in this class.

Once you use this feature, you can't do so again until you finish a long rest, unless you expend a spell slot of 3rd level or higher to use it again.` },
        { level: 15, name: 'Perfected Bond', desc: `At 15th level, your bond to your drake reaches the pinnacle of its power. While your drake is summoned, you and the drake gain the following benefits:
- Empowered Bite. The drake's Bite attack deals an extra 1d6 damage of the type chosen for its Draconic Essence (for a total of 2d6 extra damage).
- Large Drake. The drake grows to Large size. When you ride your drake, it is no longer prohibited from using the flying speed of Bond of Fang and Scale.
- Reflexive Resistance. When either you or the drake takes damage while you're within 30 feet of each other, you can use your reaction to give yourself or the drake resistance to that instance of damage. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.` }
      ]
    }
  ],
}
