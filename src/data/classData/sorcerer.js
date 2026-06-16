// Sorcerer — PHB base + origins from PHB, XGE, TCE
const ASI = (level) => ({ level, name: 'Ability Score Improvement', desc: 'Increase one ability score by 2, or two ability scores by 1 each (max 20). You can forgo this to take a feat.' })

export default {
  key: 'sorcerer',
  name: 'Sorcerer',
  hitDie: 6,
  primary: ['cha'],
  saves: ['con', 'cha'],
  icon: '🔥',
  color: '#e74c3c',
  desc: `Sorcerers carry a magical birthright conferred upon them by an exotic bloodline, some otherworldly influence, or exposure to unknown cosmic forces. One can't study sorcery as one learns a language, any more than one can learn to live a legendary life. No one chooses sorcery; the power chooses the sorcerer.

Magic is a part of every sorcerer, suffusing body, mind, and spirit with a latent power that waits to be tapped. Some sorcerers wield magic that springs from an ancient bloodline infused with the magic of dragons. Others carry a raw, undirected magic within them, a chaotic storm that manifests in unexpected ways.

The appearance of sorcerous powers is wildly unpredictable. Some draconic bloodlines produce exactly one sorcerer in every generation, but in other lines of descent every individual is a sorcerer. Most of the time, the talents of sorcery appear as apparent flukes. Some sorcerers can't name the origin of their power, while others trace it to strange events in their own lives. The touch of a demon, the blessing of a dryad at a baby's birth, or a taste of the water from a mysterious spring might spark the gift of sorcery. So too might the gift of a deity of magic, exposure to the elemental forces of the Inner Planes or the maddening chaos of Limbo, or a glimpse into the inner workings of reality.

You must have a Charisma score of 13 or higher in order to multiclass in or out of this class.`,
  armor: [],
  weapons: ['Daggers', 'Darts', 'Slings', 'Quarterstaffs', 'Light crossbows'],
  tools: [],
  skillsChoose: 2,
  skillsFrom: ['arcana', 'deception', 'insight', 'intimidation', 'persuasion', 'religion'],
  spellcaster: 'full',
  spellAbility: 'cha',
  features: [
    { level: 1, name: 'Spellcasting', desc: `An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This fount of magic, whatever its origin, fuels your spells.

Cantrips
At 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn additional sorcerer cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Sorcerer table.

Spell Slots
The Sorcerer table shows how many spell slots you have to cast your sorcerer spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.
For example, if you know the 1st-level spell burning hands and have a 1st-level and a 2nd-level spell slot available, you can cast burning hands using either slot.

Spells Known of 1st Level and Higher
You know two 1st-level spells of your choice from the sorcerer spell list.
The Spells Known column of the Sorcerer table shows when you learn more sorcerer spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.
Additionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots.

Spellcasting Ability
Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one.

Spell save DC = 8 + your proficiency bonus + your Charisma modifier
Spell attack modifier = your proficiency bonus + your Charisma modifier

Spellcasting Focus
You can use an arcane focus as a spellcasting focus for your sorcerer spells.` },
    { level: 1, name: 'Sorcerous Origin', desc: `Choose a sorcerous origin, which describes the source of your innate magical power, such as Draconic Bloodline. Your choice grants you features at 1st level and again at 6th, 14th, and 18th level.` },
    { level: 2, name: 'Font of Magic', desc: `At 2nd level, you tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.

Sorcery Points
You have 2 sorcery points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer table. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest.

Flexible Casting
You can use your sorcery points to gain additional spell slots, or sacrifice spell slots to gain additional sorcery points. You learn other ways to use your sorcery points as you reach higher levels.
Creating Spell Slots. You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th. Any spell slot you create with this feature vanishes when you finish a long rest.
Converting a Spell Slot to Sorcery Points. As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot's level.` },
    { level: 3, name: 'Metamagic', desc: `At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level. You can use only one Metamagic option on a spell when you cast it, unless otherwise noted.

Careful Spell: When you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell's full force. To do so, you spend 1 sorcery point and choose a number of those creatures up to your Charisma modifier (minimum of one creature). A chosen creature automatically succeeds on its saving throw against the spell.
Distant Spell: When you cast a spell that has a range of 5 feet or greater, you can spend 1 sorcery point to double the range of the spell. When you cast a spell that has a range of touch, you can spend 1 sorcery point to make the range of the spell 30 feet.
Empowered Spell: When you roll damage for a spell, you can spend 1 sorcery point to reroll a number of the damage dice up to your Charisma modifier (minimum of one). You must use the new rolls. You can use Empowered Spell even if you have already used a different Metamagic option during the casting of the spell.
Extended Spell: When you cast a spell that has a duration of 1 minute or longer, you can spend 1 sorcery point to double its duration, to a maximum duration of 24 hours.
Heightened Spell: When you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw made against the spell.
Quickened Spell: When you cast a spell that has a casting time of 1 action, you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting.
Seeking Spell (Optional): If you make an attack roll for a spell and miss, you can spend 2 sorcery points to reroll the d20, and you must use the new roll. You can use Seeking Spell even if you have already used a different Metamagic option during the casting of the spell.
Subtle Spell: When you cast a spell, you can spend 1 sorcery point to cast it without any somatic or verbal components.
Transmuted Spell (Optional): When you cast a spell that deals a type of damage from the following list, you can spend 1 sorcery point to change that damage type to one of the other listed types: acid, cold, fire, lightning, poison, thunder.
Twinned Spell: When you cast a spell that targets only one creature and doesn't have a range of self, you can spend a number of sorcery points equal to the spell's level to target a second creature in range with the same spell (1 sorcery point if the spell is a cantrip). To be eligible, a spell must be incapable of targeting more than one creature at the spell's current level.` },
    ASI(4),
    { level: 5, name: 'Magical Guidance (Optional)', desc: `You can tap into your inner spark of magic to try to turn failure into success. When you make an ability check and fail, you can spend 1 sorcery point to reroll the d20, and you must use the new roll, potentially turning the failure into a success.` },
    ASI(8),
    ASI(12),
    ASI(16),
    ASI(19),
    { level: 20, name: 'Sorcerous Restoration', desc: `At 20th level, you regain 4 expended sorcery points whenever you finish a short rest.` }
  ],
  subclasses: [
    {
      key: 'draconic', name: 'Draconic Bloodline', source: 'PHB',
      desc: `Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors. Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times who made a bargain with a dragon or who might even have claimed a dragon parent. Some of these bloodlines are well established in the world, but most are obscure. Any given sorcerer could be the first of a new bloodline, as a result of a pact or some other exceptional circumstance.`,
      features: [
        { level: 1, name: 'Dragon Ancestor', desc: `At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.

Black: Acid
Blue: Lightning
Brass: Fire
Bronze: Lightning
Copper: Acid
Gold: Fire
Green: Poison
Red: Fire
Silver: Cold
White: Cold

You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.` },
        { level: 1, name: 'Draconic Resilience', desc: `As magic flows through your body, it causes physical traits of your dragon ancestors to emerge. At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class.

Additionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren't wearing armor, your AC equals 13 + your Dexterity modifier.` },
        { level: 6, name: 'Elemental Affinity', desc: `Starting at 6th level, when you cast a spell that deals damage of the type associated with your draconic ancestry, you can add your Charisma modifier to one damage roll of that spell. At the same time, you can spend 1 sorcery point to gain resistance to that damage type for 1 hour.` },
        { level: 14, name: 'Dragon Wings', desc: `At 14th level, you gain the ability to sprout a pair of dragon wings from your back, gaining a flying speed equal to your current speed. You can create these wings as a bonus action on your turn. They last until you dismiss them as a bonus action on your turn.

You can't manifest your wings while wearing armor unless the armor is made to accommodate them, and clothing not made to accommodate your wings might be destroyed when you manifest them.` },
        { level: 18, name: 'Draconic Presence', desc: `Beginning at 18th level, you can channel the dread presence of your dragon ancestor, causing those around you to become awestruck or frightened. As an action, you can spend 5 sorcery points to draw on this power and exude an aura of awe or fear (your choice) to a distance of 60 feet. For 1 minute or until you lose your concentration (as if you were casting a spell), each hostile creature that starts its turn in this aura must succeed on a Wisdom saving throw or be charmed (if you chose awe) or frightened (if you chose fear) until the aura ends. A creature that succeeds on this saving throw is immune to your aura for 24 hours.` }
      ]
    },
    {
      key: 'wild-magic', name: 'Wild Magic', source: 'PHB',
      desc: `Your innate magic comes from the wild forces of chaos that underlie the order of creation. You might have endured exposure to some form of raw magic, perhaps through a planar portal leading to Limbo, the Elemental Planes, or the mysterious Far Realm. Perhaps you were blessed by a powerful fey creature or marked by a demon. Or your magic could be a fluke of your birth, with no apparent cause or reason. However it came to be, this chaotic magic churns within you, waiting for any outlet.`,
      features: [
        { level: 1, name: 'Wild Magic Surge', desc: `Starting when you choose this origin at 1st level, your spellcasting can unleash surges of untamed magic. Once per turn, the DM can have you roll a d20 immediately after you cast a sorcerer spell of 1st level or higher. If you roll a 1, roll on the Wild Magic Surge table to create a magical effect. If that effect is a spell, it is too wild to be affected by your Metamagic, and if it normally requires concentration, it doesn't require concentration in this case; the spell lasts for its full duration.` },
        { level: 1, name: 'Tides of Chaos', desc: `Starting at 1st level, you can manipulate the forces of chance and chaos to gain advantage on one attack roll, ability check, or saving throw. Once you do so, you must finish a long rest before you can use this feature again.

Any time before you regain the use of this feature, the DM can have you roll on the Wild Magic Surge table immediately after you cast a sorcerer spell of 1st level or higher. You then regain the use of this feature.` },
        { level: 6, name: 'Bend Luck', desc: `Starting at 6th level, you have the ability to twist fate using your wild magic. When another creature you can see makes an attack roll, an ability check, or a saving throw, you can use your reaction and spend 2 sorcery points to roll 1d4 and apply the number rolled as a bonus or penalty (your choice) to the creature's roll. You can do so after the creature rolls but before any effects of the roll occur.` },
        { level: 14, name: 'Controlled Chaos', desc: `At 14th level, you gain a modicum of control over the surges of your wild magic. Whenever you roll on the Wild Magic Surge table, you can roll twice and use either number.` },
        { level: 18, name: 'Spell Bombardment', desc: `Beginning at 18th level, the harmful energy of your spells intensifies. When you roll damage for a spell and roll the highest number possible on any of the dice, choose one of those dice, roll it again and add that roll to the damage. You can use the feature only once per turn.` }
      ]
    },
    {
      key: 'divine-soul', name: 'Divine Soul', source: 'XGE',
      desc: `Sometimes the spark of magic that fuels a sorcerer comes from a divine source that glimmers within the soul. Having such a blessed soul is a sign that your innate magic might come from a distant but powerful familial connection to a divine being. Perhaps your ancestor was an angel, transformed into a mortal and sent to fight in a god's name. Or your birth might align with an ancient prophecy, marking you as a servant of the gods or a chosen vessel of divine magic.`,
      features: [
        { level: 1, name: 'Divine Magic', desc: `Your link to the divine allows you to learn spells from the cleric class. When your Spellcasting feature lets you learn or replace a sorcerer cantrip or a sorcerer spell of 1st level or higher, you can choose the new spell from the cleric spell list or the sorcerer spell list. You must otherwise obey all the restrictions for selecting the spell, and it becomes a sorcerer spell for you.

In addition, choose an affinity for the source of your divine power: good, evil, law, chaos, or neutrality. You learn an additional spell based on that affinity, as shown below. It is a sorcerer spell for you, but it doesn't count against your number of sorcerer spells known. If you later replace this spell, you must replace it with a spell from the cleric spell list.
Good: cure wounds
Evil: inflict wounds
Law: bless
Chaos: bane
Neutrality: protection from evil and good` },
        { level: 1, name: 'Favored by the Gods', desc: `Starting at 1st level, divine power guards your destiny. If you fail a saving throw or miss with an attack roll, you can roll 2d4 and add it to the total, possibly changing the outcome. Once you use this feature, you can't use it again until you finish a short or long rest.` },
        { level: 6, name: 'Empowered Healing', desc: `Starting at 6th level, the divine energy coursing through you can empower healing spells. Whenever you or an ally within 5 feet of you rolls dice to determine the number of hit points a spell restores, you can spend 1 sorcery point to reroll any number of those dice once, provided you aren't incapacitated. You can use this feature only once per turn.` },
        { level: 14, name: 'Otherworldly Wings', desc: `Starting at 14th level, you can use a bonus action to manifest a pair of spectral wings from your back. While the wings are present, you have a flying speed of 30 feet. The wings last until you're incapacitated, you die, or you dismiss them as a bonus action.
The affinity you chose for your Divine Magic feature determines the appearance of the spectral wings: eagle wings for good or law, bat wings for evil or chaos, and dragonfly wings for neutrality.` },
        { level: 18, name: 'Unearthly Recovery', desc: `At 18th level, you gain the ability to overcome grievous injuries. As a bonus action when you have fewer than half of your hit points remaining, you can regain a number of hit points equal to half your hit point maximum.

Once you use this feature, you can't use it again until you finish a long rest.` }
      ]
    },
    {
      key: 'shadow', name: 'Shadow Magic', source: 'XGE',
      desc: `You are a creature of shadow, for your innate magic comes from the Shadowfell itself. You might trace your lineage to an entity from that place, or perhaps you were exposed to its fell energy and transformed by it.

The power of shadow magic casts a strange pall over your physical presence. The spark of life that sustains you is muffled, as if it struggles to remain viable against the dark energy that imbues your soul.`,
      features: [
        { level: 1, name: 'Eyes of the Dark', desc: `Starting at 1st level, you have darkvision with a range of 120 feet.

When you reach 3rd level in this class, you learn the darkness spell, which doesn't count against your number of sorcerer spells known. In addition, you can cast it by spending 2 sorcery points or by expending a spell slot. If you cast it with sorcery points, you can see through the darkness created by the spell.` },
        { level: 1, name: 'Strength of the Grave', desc: `Starting at 1st level, your existence in a twilight state between life and death makes you difficult to defeat. When damage reduces you to 0 hit points, you can make a Charisma saving throw (DC 5 + the damage taken). On a success, you instead drop to 1 hit point. You can't use this feature if you are reduced to 0 hit points by radiant damage or by a critical hit.

After the saving throw succeeds, you can't use this feature again until you finish a long rest.` },
        { level: 6, name: 'Hound of Ill Omen', desc: `At 6th level, you gain the ability to call forth a howling creature of darkness to harass your foes. As a bonus action, you can spend 3 sorcery points to magically summon a hound of ill omen to target one creature you can see within 120 feet of you. The hound uses the dire wolf's statistics, with the following changes:
- The hound is size Medium, not Large, and it counts as a monstrosity, not a beast.
- It appears with a number of temporary hit points equal to half your sorcerer level.
- It can move through other creatures and objects as if they were difficult terrain. The hound takes 5 force damage if it ends its turn inside an object.
- At the start of its turn, the hound automatically knows its target's location. If the target was hidden, it is no longer hidden from the hound.

The hound appears in an unoccupied space of your choice within 30 feet of the target. Roll initiative for the hound. On its turn, it can move only toward its target by the most direct route, and it can use its action only to attack its target. The hound can make opportunity attacks, but only against its target. Additionally, while the hound is within 5 feet of the target, the target has disadvantage on saving throws against any spell you cast. The hound disappears if it is reduced to 0 hit points, if its target is reduced to 0 hit points, or after 5 minutes.` },
        { level: 14, name: 'Shadow Walk', desc: `At 14th level, you gain the ability to step from one shadow into another. When you are in dim light or darkness, as a bonus action, you can magically teleport up to 120 feet to an unoccupied space you can see that is also in dim light or darkness.` },
        { level: 18, name: 'Umbral Form', desc: `Starting at 18th level, you can spend 6 sorcery points as a bonus action to magically transform yourself into a shadowy form. In this form, you have resistance to all damage except force and radiant damage, and you can move through other creatures and objects as if they were difficult terrain. You take 1d10 force damage if you end your turn inside an object.

You remain in this form for 1 minute. It ends early if you are incapacitated, if you die, or if you dismiss it as a bonus action.` }
      ]
    },
    {
      key: 'storm', name: 'Storm Sorcery', source: 'XGE',
      desc: `Your innate magic comes from the power of elemental air. Many with this power can trace their magic back to a near-death experience caused by the Great Rain, but perhaps you were born during a howling gale so powerful that folk still tell stories of it, or your lineage might include the influence of potent air magic linked to the djinn. Whatever the case, the magic of the storm permeates your being.

Storm sorcerers are invaluable members of a ship's crew. Their magic allows them to exert control over wind and weather in their immediate area. Their abilities also prove useful in repelling attacks by sahuagin, pirates, and other waterborne threats.`,
      features: [
        { level: 1, name: 'Wind Speaker', desc: `The arcane magic you command is infused with elemental air. You can speak, read, and write Primordial. Knowing this language allows you to understand and be understood by those who speak its dialects: Aquan, Auran, Ignan, and Terran.` },
        { level: 1, name: 'Tempestuous Magic', desc: `Starting at 1st level, you can use a bonus action on your turn to cause whirling gusts of elemental air to briefly surround you, immediately before or after you cast a spell of 1st level or higher. Doing so allows you to fly up to 10 feet without provoking opportunity attacks.` },
        { level: 6, name: 'Heart of the Storm', desc: `At 6th level, you gain resistance to lightning and thunder damage. In addition, whenever you start casting a spell of 1st level or higher that deals lightning or thunder damage, stormy magic erupts from you. This eruption causes creatures of your choice that you can see within 10 feet of you to take lightning or thunder damage (choose each time this ability activates) equal to half your sorcerer level.` },
        { level: 6, name: 'Storm Guide', desc: `At 6th level, you gain the ability to subtly control the weather around you.

If it is raining, you can use an action to cause the rain to stop falling in a 20-foot-radius sphere centered on you. You can end this effect as a bonus action.
If it is windy, you can use a bonus action each round to choose the direction that the wind blows in a 100-foot-radius sphere centered on you. The wind blows in that direction until the end of your next turn. This feature doesn't alter the speed of the wind.` },
        { level: 14, name: 'Storm\'s Fury', desc: `Starting at 14th level, when you are hit by a melee attack, you can use your reaction to deal lightning damage to the attacker. The damage equals your sorcerer level. The attacker must also make a Strength saving throw against your sorcerer spell save DC. On a failed save, the attacker is pushed in a straight line up to 20 feet away from you.` },
        { level: 18, name: 'Wind Soul', desc: `At 18th level, you gain immunity to lightning and thunder damage.

You also gain a magical flying speed of 60 feet. As an action, you can reduce your flying speed to 30 feet for 1 hour and choose a number of creatures within 30 feet of you equal to 3 + your Charisma modifier. The chosen creatures gain a magical flying speed of 30 feet for 1 hour. Once you reduce your flying speed in this way, you can't do so again until you finish a short or long rest.` }
      ]
    },
    {
      key: 'clockwork-soul', name: 'Clockwork Soul', source: 'TCE',
      desc: `The cosmic force of order has suffused you with magic. That power arises from Mechanus or a realm like it—a plane of clockwork predictability. You, or someone from your lineage, might have become embroiled in the machinations of the modrons, the orderly beings who inhabit Mechanus. Perhaps your ancestor even made a bargain with the Inevitables, the beings who enforce the laws of the multiverse. Whatever its origin within you, the power of order can seem strange to others, but for you, it is part of a vast and glorious system.`,
      features: [
        { level: 1, name: 'Clockwork Magic', desc: `You learn additional spells when you reach certain levels in this class, as shown on the Clockwork Spells table. Each of these spells counts as a sorcerer spell for you, but it doesn't count against the number of sorcerer spells you know.
1st: alarm, protection from evil and good
3rd: aid, lesser restoration
5th: dispel magic, protection from energy
7th: freedom of movement, summon construct
9th: greater restoration, wall of force

Whenever you gain a sorcerer level, you can replace one spell you gained from this feature with another abjuration or transmutation spell from the sorcerer, warlock, or wizard spell list. The new spell must be the same level as the spell you replace.` },
        { level: 1, name: 'Restore Balance', desc: `Starting at 1st level, your connection to the plane of absolute order allows you to equalize chaotic moments. When a creature you can see within 60 feet of you is about to roll a d20 with advantage or disadvantage, you can use your reaction to prevent the roll from being affected by advantage and disadvantage.

You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.` },
        { level: 6, name: 'Bastion of Law', desc: `Starting at 6th level, you can tap into the grand equation of the multiverse to imbue a creature with a shimmering shield of order. As an action, you can expend 1 to 5 sorcery points to create a magical ward around yourself or another creature you can see within 30 feet of you. The ward lasts until you finish a long rest or until you use this feature again.

The ward is represented by a number of d8s equal to the number of sorcery points spent to create it. When the warded creature takes damage, it can expend a number of those dice, roll them, and reduce the damage taken by the total rolled on those dice.` },
        { level: 14, name: 'Trance of Order', desc: `Starting at 14th level, you gain the ability to align your consciousness to the endless calculations of Mechanus. As a bonus action, you can enter this state for 1 minute. For the duration, attack rolls against you can't benefit from advantage, and whenever you make an attack roll, an ability check, or a saving throw, you can treat a roll of 9 or lower on the d20 as a 10.

Once you use this bonus action, you can't use it again until you finish a long rest, unless you spend 5 sorcery points to use it again.` },
        { level: 18, name: 'Clockwork Cavalcade', desc: `At 18th level, you summon spirits of order to expunge disorder around you. As an action, you summon the spirits in a 30-foot cube originating from you. The spirits look like modrons or other constructs of your choice. The spirits are intangible and invulnerable, and they create the following effects within the cube before vanishing:
- The spirits restore up to 100 hit points, divided as you choose among any number of creatures of your choice in the cube.
- Any damaged objects entirely in the cube are repaired instantly.
- Every spell of 6th level or lower ends on creatures and objects of your choice in the cube.

Once you use this action, you can't use it again until you finish a long rest, unless you spend 7 sorcery points to use it again.` }
      ]
    }
  ],
}
