// Fighter — PHB base + archetypes from PHB, XGE, TCE
const ASI = (level) => ({ level, name: 'Ability Score Improvement', desc: 'Increase one ability score by 2, or two ability scores by 1 each (max 20). You can forgo this to take a feat. Fighters gain extra ASIs at 6th and 14th level.' })

export default {
  key: 'fighter',
  name: 'Fighter',
  hitDie: 10,
  primary: ['str', 'dex'],
  saves: ['str', 'con'],
  icon: '⚔️',
  color: '#7f8c8d',
  desc: `Knights on horseback, conquering commanders, champion gladiators, elite foot soldiers, and hardened mercenaries - as fighters, they all share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. And they are well acquainted with death, both meting it out and staring it defiantly in the face.

Fighters learn the basics of all combat styles. Every fighter can swing an axe, fence with a rapier, wield a longsword or a greatsword, use a bow, and even trap foes in a net with some degree of skill. Likewise, a fighter is adept with shields and every form of armor. Beyond that basic degree of familiarity, each fighter specializes in a certain style of combat. Some concentrate on archery, some on fighting with two weapons at once, and some on augmenting their martial skills with magic. This combination of broad general ability and extensive specialization makes fighters superior combatants on battlefields and in dungeons alike.

Not every member of the city watch, the village militia, or the queen's army is a fighter. Most of these troops are relatively untrained soldiers with only the most basic combat knowledge. Veteran soldiers, military officers, trained bodyguards, dedicated knights, and similar figures are fighters.

You must have a Strength or Dexterity score of 13 or higher in order to multiclass in or out of this class.`,
  armor: ['All armor', 'Shields'],
  weapons: ['Simple weapons', 'Martial weapons'],
  tools: [],
  skillsChoose: 2,
  skillsFrom: ['acrobatics', 'animal-handling', 'athletics', 'history', 'insight', 'intimidation', 'perception', 'survival'],
  spellcaster: false,
  features: [
    { level: 1, name: 'Fighting Style', desc: `You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.

Archery: You gain a +2 bonus to attack rolls you make with ranged weapons.
Defense: While you are wearing armor, you gain a +1 bonus to AC.
Dueling: When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.
Great Weapon Fighting: When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.
Protection: When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.
Two-Weapon Fighting: When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.` },
    { level: 1, name: 'Second Wind', desc: `You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level.

Once you use this feature, you must finish a short or long rest before you can use it again.` },
    { level: 2, name: 'Action Surge', desc: `Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action.

Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn.` },
    { level: 3, name: 'Martial Archetype', desc: `At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques. Your archetype grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level.` },
    ASI(4),
    { level: 5, name: 'Extra Attack', desc: `Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.

The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class.` },
    ASI(6),
    ASI(8),
    { level: 9, name: 'Indomitable', desc: `Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest.

You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level.` },
    ASI(12),
    ASI(14),
    ASI(16),
    ASI(19),
  ],
  subclasses: [
    {
      key: 'champion', name: 'Champion', source: 'PHB',
      desc: `The archetypal Champion focuses on the development of raw physical power honed to deadly perfection. Those who model themselves on this archetype combine rigorous training with physical excellence to deal devastating blows.`,
      features: [
        { level: 3, name: 'Improved Critical', desc: `Beginning when you choose this archetype at 3rd level, your weapon attacks score a critical hit on a roll of 19 or 20.` },
        { level: 7, name: 'Remarkable Athlete', desc: `Starting at 7th level, you can add half your proficiency bonus (round up) to any Strength, Dexterity, or Constitution check you make that doesn't already use your proficiency bonus.

In addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier.` },
        { level: 10, name: 'Additional Fighting Style', desc: `At 10th level, you can choose a second option from the Fighting Style class feature.` },
        { level: 15, name: 'Superior Critical', desc: `Starting at 15th level, your weapon attacks score a critical hit on a roll of 18-20.` },
        { level: 18, name: 'Survivor', desc: `At 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don't gain this benefit if you have 0 hit points.` }
      ]
    },
    {
      key: 'battle-master', name: 'Battle Master', source: 'PHB',
      desc: `Those who emulate the archetypal Battle Master employ martial techniques passed down through generations. To a Battle Master, combat is an academic field, sometimes including subjects beyond battle such as weaponsmithing and calligraphy. Not every fighter absorbs the lessons of history, theory, and artistry that are reflected in the Battle Master archetype, but those who do are well-rounded fighters of great skill and knowledge.`,
      features: [
        { level: 3, name: 'Combat Superiority', desc: `When you choose this archetype at 3rd level, you learn maneuvers that are fueled by special dice called superiority dice.

Maneuvers. You learn three maneuvers of your choice. Many maneuvers enhance an attack in some way. You can use only one maneuver per attack. You learn two additional maneuvers of your choice at 7th, 10th, and 15th level. Each time you learn new maneuvers, you can also replace one maneuver you know with a different one.

Superiority Dice. You have four superiority dice, which are d8s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a short or long rest. You gain another superiority die at 7th level and one more at 15th level.

Saving Throws. Some of your maneuvers require your target to make a saving throw to resist the maneuver's effects. The saving throw DC is calculated as follows:
Maneuver save DC = 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice)` },
        { level: 3, name: 'Student of War', desc: `At 3rd level, you gain proficiency with one type of artisan's tools of your choice.` },
        { level: 7, name: 'Know Your Enemy', desc: `Starting at 7th level, if you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice:
- Strength score
- Dexterity score
- Constitution score
- Armor Class
- Current hit points
- Total class levels (if any)
- Fighter class levels (if any)` },
        { level: 10, name: 'Improved Combat Superiority', desc: `At 10th level, your superiority dice turn into d10s. At 18th level, they turn into d12s.` },
        { level: 15, name: 'Relentless', desc: `Starting at 15th level, when you roll initiative and have no superiority dice remaining, you regain one superiority die.` }
      ]
    },
    {
      key: 'eldritch-knight', name: 'Eldritch Knight', source: 'PHB',
      desc: `The archetypal Eldritch Knight combines the martial mastery common to all fighters with a careful study of magic. Eldritch Knights use magical techniques similar to those practiced by wizards. They focus their study on two of the eight schools of magic: abjuration and evocation. Abjuration spells grant an Eldritch Knight additional protection in battle, and evocation spells deal damage to many foes at once, extending the fighter's reach in combat. These knights learn a comparatively small number of spells, committing them to memory instead of keeping them in a spellbook.`,
      features: [
        { level: 3, name: 'Spellcasting', desc: `When you reach 3rd level, you augment your martial prowess with the ability to cast spells. See chapter 10 for the general rules of spellcasting and chapter 11 for the wizard spell list.

Cantrips. You learn two cantrips of your choice from the wizard spell list. You learn an additional wizard cantrip of your choice at 10th level.

Spell Slots. The Eldritch Knight Spellcasting table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.

Spells Known of 1st-Level and Higher. You know three 1st-level wizard spells of your choice, two of which you must choose from the abjuration and evocation spells on the wizard spell list. The Spells Known column of the Eldritch Knight Spellcasting table shows when you learn more wizard spells of 1st level or higher. Each of these spells must be an abjuration or evocation spell of your choice, and must be of a level for which you have spell slots. The spells you learn at 8th, 14th, and 20th level can come from any school of magic.
Whenever you gain a level in this class, you can replace one of the wizard spells you know with another spell of your choice from the wizard spell list. The new spell must be of a level for which you have spell slots, and it must be an abjuration or evocation spell, unless you're replacing the spell you gained at 3rd, 8th, 14th, or 20th level from any school of magic.

Spellcasting Ability. Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.
Spell save DC = 8 + your proficiency bonus + your Intelligence modifier
Spell attack modifier = your proficiency bonus + your Intelligence modifier` },
        { level: 3, name: 'Weapon Bond', desc: `At 3rd level, you learn a ritual that creates a magical bond between yourself and one weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest. The weapon must be within your reach throughout the ritual, at the conclusion of which you touch the weapon and forge the bond.

Once you have bonded a weapon to yourself, you can't be disarmed of that weapon unless you are incapacitated. If it is on the same plane of existence, you can summon that weapon as a bonus action on your turn, causing it to teleport instantly to your hand.

You can have up to two bonded weapons, but can summon only one at a time with your bonus action. If you attempt to bond with a third weapon, you must break the bond with one of the other two.` },
        { level: 7, name: 'War Magic', desc: `Beginning at 7th level, when you use your action to cast a cantrip, you can make one weapon attack as a bonus action.` },
        { level: 10, name: 'Eldritch Strike', desc: `At 10th level, you learn how to make your weapon strikes undercut a creature's resistance to your spells. When you hit a creature with a weapon attack, that creature has disadvantage on the next saving throw it makes against a spell you cast before the end of your next turn.` },
        { level: 15, name: 'Arcane Charge', desc: `At 15th level, you gain the ability to teleport up to 30 feet to an unoccupied space you can see when you use your Action Surge. You can teleport before or after the additional action.` },
        { level: 18, name: 'Improved War Magic', desc: `Starting at 18th level, when you use your action to cast a spell, you can make one weapon attack as a bonus action.` }
      ]
    },
    {
      key: 'arcane-archer', name: 'Arcane Archer', source: 'XGE',
      desc: `An Arcane Archer studies a unique elven method of archery that weaves magic into attacks to produce supernatural effects. Arcane Archers are some of their most elite warriors among the elves. They stand watch over the fringes of elven domains, keeping a keen eye out for trespassers and using magic-infused arrows to defeat monsters and invaders before they can reach elven settlements. Over the centuries, the methods of these elf archers have been learned by members of other races who can also balance arcane aptitude with archery.`,
      features: [
        { level: 3, name: 'Arcane Archer Lore', desc: `At 3rd level, you learn magical theory or some of the secrets of nature - typical for practitioners of this elven martial tradition. You choose to gain proficiency in either the Arcana or the Nature skill, and you choose to learn either the prestidigitation or the druidcraft cantrip.` },
        { level: 3, name: 'Arcane Shot', desc: `At 3rd level, you learn to unleash special magical effects with some of your shots. When you gain this feature, you learn two Arcane Shot options of your choice.

Once per turn when you fire an arrow from a shortbow or longbow as part of the Attack action, you can apply one of your Arcane Shot options to that arrow. You decide to use the option when the arrow hits a creature, unless the option doesn't involve an attack roll. You have two uses of this ability, and you regain all expended uses of it when you finish a short or long rest.

You gain an additional Arcane Shot option of your choice when you reach certain levels in this class: 7th, 10th, 15th, and 18th level. Each option also improves when you become an 18th-level fighter.` },
        { level: 7, name: 'Magic Arrow', desc: `At 7th level, you gain the ability to infuse arrows with magic. Whenever you fire a nonmagical arrow from a shortbow or longbow, you can make it magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage. The magic fades from the arrow immediately after it hits or misses its target.` },
        { level: 7, name: 'Curving Shot', desc: `At 7th level, you learn how to direct an errant arrow toward a new target. When you make an attack roll with a magic arrow and miss, you can use a bonus action to reroll the attack roll against a different target within 60 feet of the original target.` },
        { level: 15, name: 'Ever-Ready Shot', desc: `Starting at 15th level, your magical archery is available whenever battle starts. If you roll initiative and have no uses of Arcane Shot remaining, you regain one use of it.` }
      ]
    },
    {
      key: 'cavalier', name: 'Cavalier', source: 'XGE',
      desc: `The archetypal Cavalier excels at mounted combat. Usually born to the nobility and raised at court, a Cavalier is equally at home leading a cavalry charge or exchanging repartee at a state dinner. Cavaliers also learn how to guard those in their charge from harm, often serving as the protectors of their superiors and of the weak. Compelled to right wrongs or earn prestige, many of these fighters leave their lives of comfort to embark on glorious adventure.`,
      features: [
        { level: 3, name: 'Bonus Proficiency', desc: `When you choose this archetype at 3rd level, you gain proficiency in one of the following skills of your choice: Animal Handling, History, Insight, Performance, or Persuasion. Alternatively, you learn one language of your choice.` },
        { level: 3, name: 'Born to the Saddle', desc: `Starting at 3rd level, your mastery as a rider becomes apparent. You have advantage on saving throws made to avoid falling off your mount. If you fall off your mount and descend no more than 10 feet, you can land on your feet if you're not incapacitated.

Finally, mounting or dismounting a creature costs you only 5 feet of movement, rather than half your speed.` },
        { level: 3, name: 'Unwavering Mark', desc: `Starting at 3rd level, you can menace your foes, foiling their attacks and punishing them for harming others. When you hit a creature with a melee weapon attack, you can mark the creature until the end of your next turn. This effect ends early if you are incapacitated or you die, or if someone else marks the creature.

While it is within 5 feet of you, a creature marked by you has disadvantage on any attack roll that doesn't target you.

In addition, if a creature marked by you deals damage to anyone other than you, you can make a special melee weapon attack against the marked creature as a bonus action on your next turn. You have advantage on the attack roll, and if it hits, the attack's weapon deals extra damage to the target equal to half your fighter level.

Regardless of the number of creatures you mark, you can make this special attack a number of times equal to your Strength modifier (a minimum of once), and you regain all expended uses of it when you finish a long rest.` },
        { level: 7, name: 'Warding Maneuver', desc: `At 7th level, you learn to fend off strikes directed at you, your mount, or other creatures nearby. If you or a creature you can see within 5 feet of you is hit by an attack, you can roll 1d8 as a reaction if you're wielding a melee weapon or a shield. Roll the die, and add the number rolled to the target's AC against that attack. If the attack still hits, the target has resistance against the attack's damage.

You can use this feature a number of times equal to your Constitution modifier (a minimum of once), and you regain all expended uses of it when you finish a long rest.` },
        { level: 10, name: 'Hold the Line', desc: `At 10th level, you become a master of locking down your enemies. Creatures provoke an opportunity attack from you when they move 5 feet or more while within your reach, and if you hit a creature with an opportunity attack, the creature's speed is reduced to 0 until the end of the current turn.` },
        { level: 15, name: 'Ferocious Charger', desc: `Starting at 15th level, you can run down your foes, whether you're mounted or not. If you move at least 10 feet in a straight line right before attacking a creature and you hit it with the attack, that target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier) or be knocked prone. You can use this feature only once on each of your turns.` },
        { level: 18, name: 'Vigilant Defender', desc: `Starting at 18th level, you respond to danger with extraordinary vigilance. In combat, you get a special reaction that you can take once on every creature's turn, except your turn. You can use this special reaction only to make an opportunity attack, and you can't use it on the same turn that you take your normal reaction.` }
      ]
    },
    {
      key: 'samurai', name: 'Samurai', source: 'XGE',
      desc: `The Samurai is a fighter who draws on an implacable fighting spirit to overcome enemies. A Samurai's resolve is nearly unbreakable, and the enemies in a Samurai's path have two choices: yield or die fighting.`,
      features: [
        { level: 3, name: 'Bonus Proficiency', desc: `When you choose this archetype at 3rd level, you gain proficiency in one of the following skills of your choice: History, Insight, Performance, or Persuasion. Alternatively, you learn one language of your choice.` },
        { level: 3, name: 'Fighting Spirit', desc: `Starting at 3rd level, your resolve in battle can shield you and help you strike true. As a bonus action on your turn, you can give yourself advantage on weapon attack rolls until the end of the current turn.

When you do so, you also gain 5 temporary hit points. The number of temporary hit points increases when you reach certain levels in this class, increasing to 10 at 10th level and 15 at 15th level.

You can use this feature three times, and you regain all expended uses of it when you finish a long rest.` },
        { level: 7, name: 'Elegant Courtier', desc: `Starting at 7th level, your discipline and attention to detail allow you to excel in social situations. Whenever you make a Charisma (Persuasion) check, you gain a bonus to the check equal to your Wisdom modifier.

Your mastery of elegant manners also grants you proficiency in Wisdom saving throws. If you already have this proficiency, you instead gain proficiency in Intelligence or Charisma saving throws (your choice).` },
        { level: 10, name: 'Tireless Spirit', desc: `Starting at 10th level, when you roll initiative and have no uses of Fighting Spirit remaining, you regain one use.` },
        { level: 15, name: 'Rapid Strike', desc: `Starting at 15th level, you learn to trade accuracy for swift strikes. If you take the Attack action on your turn and have advantage on an attack roll against one of the targets, you can forgo the advantage for that roll to make an additional weapon attack against that target, as part of the same action. You can do so no more than once per turn.` },
        { level: 18, name: 'Strength Before Death', desc: `Starting at 18th level, your fighting spirit can delay the grasp of death. If you take damage that reduces you to 0 hit points and doesn't kill you outright, you can use your reaction to delay falling unconscious, and you can immediately take an extra turn, interrupting the current turn. While you have 0 hit points during that extra turn, taking damage causes death saving throw failures as normal, and three death saving throw failures can still kill you. When the extra turn ends, you fall unconscious if you still have 0 hit points.

Once you use this feature, you can't use it again until you finish a long rest.` }
      ]
    },
    {
      key: 'echo-knight', name: 'Echo Knight', source: 'TCE',
      desc: `A mysterious and feared frontline warrior of the Kryn Dynasty, the Echo Knight has mastered the art of using dunamis to summon the fading shades of unrealized timelines to embody their echo. By surrounding themselves with echoes of their own might, they charge into battle as a cycling swarm of shadows and strikes.`,
      features: [
        { level: 3, name: 'Manifest Echo', desc: `At 3rd level, you can use a bonus action to magically manifest an echo of yourself in an unoccupied space you can see within 15 feet of you. This echo is a magical, translucent, gray image of you that lasts until it is destroyed, until you dismiss it as a bonus action, until you manifest another echo, or until you're incapacitated.

Your echo has AC 14 + your proficiency bonus, 1 hit point, and immunity to all conditions. If it has to make a saving throw, it uses your saving throw bonus for the roll. It is the same size as you, and it occupies its space. On your turn, you can mentally command the echo to move up to 30 feet in any direction (no action required). If your echo is ever more than 30 feet from you at the end of your turn, it is destroyed.

You can use the echo in the following ways:
- As a bonus action, you can teleport, magically swapping places with your echo at a cost of 15 feet of your movement, regardless of the distance between the two of you.
- When you take the Attack action on your turn, any attack you make with that action can originate from your space or the echo's space. You make this choice for each attack.
- When a creature that you can see within 5 feet of your echo moves at least 5 feet away from it, you can use your reaction to make an opportunity attack against that creature as if you were in the echo's space.` },
        { level: 3, name: 'Unleash Incarnation', desc: `At 3rd level, you can heighten your echo's fury. Whenever you take the Attack action, you can make one additional melee attack from the echo's position.

You can use this feature a number of times equal to your Constitution modifier (a minimum of once). You regain all expended uses when you finish a long rest.` },
        { level: 7, name: 'Echo Avatar', desc: `Starting at 7th level, you can temporarily transfer your consciousness to your echo. As an action, you can see through your echo's eyes and hear through its ears. During this time, you are deafened and blinded. You can sustain this effect for up to 10 minutes, and you can end it at any time (requires no action). While your echo is being used in this way, it can be up to 1,000 feet away from you without being destroyed.` },
        { level: 10, name: 'Shadow Martyr', desc: `Starting at 10th level, you can make your echo throw itself in front of an attack directed at another creature that you can see. Before the attack roll is made, you can use your reaction to teleport the echo to an unoccupied space within 5 feet of the targeted creature. The attack roll that triggered the reaction is instead made against your echo.

Once you use this feature, you can't use it again until you finish a short or long rest.` },
        { level: 15, name: 'Reclaim Potential', desc: `By 15th level, you've learned to absorb the fleeting magic of your echo. When an echo of yours is destroyed by taking damage, you can gain a number of temporary hit points equal to 2d6 + your Constitution modifier, provided you don't already have temporary hit points.

You can use this feature a number of times equal to your Constitution modifier (a minimum of once). You regain all expended uses when you finish a long rest.` },
        { level: 18, name: 'Legion of One', desc: `At 18th level, you can use a bonus action to create two echoes with your Manifest Echo feature, and these echoes can co-exist. If you try to create a third echo, the previous two echoes are destroyed. Anything you can do from one echo's position can be done from the other's instead.

In addition, when you roll initiative and have no uses of your Unleash Incarnation feature left, you regain one use of that feature.` }
      ]
    },
    {
      key: 'psi-warrior', name: 'Psi Warrior', source: 'TCE',
      desc: `Awake to the psionic power within, a Psi Warrior is a fighter who augments their physical might with psi-infused weapon strikes, telekinetic lashes, and barriers of mental force. Many githyanki train to become such warriors, as do some of the most disciplined high elves. In the world of Eberron, many young kalashtar dream of becoming Psi Warriors.

As a Psi Warrior, you might have honed your psionic abilities through solo discipline, unlocked it under the tutelage of a master, or refined it at an academy dedicated to wielding the mind's power as a weapon.`,
      features: [
        { level: 3, name: 'Psionic Power', desc: `You harbor a wellspring of psionic energy within yourself. This energy is represented by your Psionic Energy dice, which are each a d6. You have a number of these dice equal to twice your proficiency bonus, and they fuel various psionic powers you have, which are detailed below.

Some of your powers expend the Psionic Energy die they use, as specified in a power's description, and you can't use a power if it requires you to use a die when your dice are all expended. You regain all your expended Psionic Energy dice when you finish a long rest. In addition, as a bonus action, you can regain one expended Psionic Energy die, but you can't do so again until you finish a short or long rest.

When you reach certain levels in this class, the size of your Psionic Energy dice increases: at 5th level (d8), 11th level (d10), and 17th level (d12).

The powers below use your Psionic Energy dice.
Protective Field. When you or another creature you can see within 30 feet of you takes damage, you can use your reaction to expend one Psionic Energy die, roll the die, and reduce the damage taken by the number rolled plus your Intelligence modifier (minimum reduction of 1), as you create a momentary shield of telekinetic force.
Psionic Strike. You can propel your weapons with psionic force. Once on each of your turns, immediately after you hit a target within 30 feet of you with an attack and deal damage to it with a weapon, you can expend one Psionic Energy die, rolling it and dealing force damage to the target equal to the number rolled plus your Intelligence modifier.
Telekinetic Movement. You can move an object or a creature with your mind. As an action, you target one loose object that is Large or smaller or one willing creature, other than yourself. If you can see the target and it is within 30 feet of you, you can move it up to 30 feet to an unoccupied space you can see. Alternatively, if it is a Tiny object, you can move it to or from your hand. Either way, you can move the target horizontally, vertically, or both. Once you take this action, you can't do so again until you finish a short or long rest, unless you expend a Psionic Energy die to take it again.` },
        { level: 7, name: 'Telekinetic Practitioner', desc: `At 7th level, you learn to move things with your mind. You can cast the telekinesis spell, requiring no components, and your spellcasting ability for the spell is Intelligence. On each of your turns while you concentrate on the spell, including the turn when you cast it, you can make one attack with a weapon as a bonus action.

Once you cast the spell with this feature, you can't do so again until you finish a long rest, unless you expend a Psionic Energy die to cast it again.` },
        { level: 10, name: 'Guarded Mind', desc: `At 10th level, the psionic energy flowing through you has bolstered your mind. You have resistance to psychic damage. Moreover, if you start your turn charmed or frightened, you can expend a Psionic Energy die and replace it with a d8; if you do so, you are no longer charmed or frightened.` },
        { level: 15, name: 'Bulwark of Force', desc: `At 15th level, you can shield yourself and others with telekinetic force. As a bonus action, you can choose creatures, which can include you, that you can see within 30 feet of you, up to a number of creatures equal to your Intelligence modifier (minimum of one creature). Each of the chosen creatures is protected by half cover for 1 minute or until you're incapacitated.

Once you take this bonus action, you can't do so again until you finish a long rest, unless you expend a Psionic Energy die to take it again.` },
        { level: 18, name: 'Telekinetic Master', desc: `At 18th level, your ability to move creatures and objects with your mind is matched by few. You can cast the telekinesis spell, requiring no components, and your spellcasting ability for the spell is Intelligence. On each of your turns while you concentrate on the spell, including the turn when you cast it, you can make one attack with a weapon as a bonus action.

Once you cast the spell with this feature, you can't do so again until you finish a long rest, unless you expend a Psionic Energy die to cast it again.` }
      ]
    },
    {
      key: 'rune-knight', name: 'Rune Knight', source: 'TCE',
      desc: `Rune Knights enhance their martial prowess using the supernatural power of runes, an ancient practice that originated with giants. Rune magic is exceedingly rare, and its secrets are fiercely guarded. Some Rune Knights learn these secrets from giants, while others learn them from scholars who have translated giant runes. You might have found a giant's ancient inscription or studied alongside a giant artisan.`,
      features: [
        { level: 3, name: 'Bonus Proficiencies', desc: `When you choose this archetype at 3rd level, you gain proficiency with smith's tools, and you learn to speak, read, and write Giant.` },
        { level: 3, name: 'Rune Carver', desc: `At 3rd level, you can use magic runes to enhance your gear. You learn two runes of your choice, from among the runes described below. Each time you gain a level in this class, you can replace one rune you know with a different one from this feature. When you reach certain levels in this class, you learn additional runes: one additional rune at 7th level, 10th level, and 15th level.

Whenever you finish a long rest, you can touch a number of objects equal to the number of runes you know, and magically inscribe one rune onto each of the objects. To be eligible, an object must be a weapon, a suit of armor, a shield, a piece of jewelry, or something else you can wear or hold in a hand. Your rune remains on an object until you finish a long rest, and an object can bear only one of your runes at a time.

The following runes are available to you when you learn a rune. If a rune has a level requirement, you must be at least that level in this class to learn the rune. If a rune requires a saving throw, your Rune Magic save DC equals 8 + your proficiency bonus + your Constitution modifier.` },
        { level: 3, name: 'Giant\'s Might', desc: `At 3rd level, you have learned how to imbue yourself with the might of giants. As a bonus action, you magically gain the following benefits, which last for 1 minute:
- If you are smaller than Large, you become Large, along with anything you are wearing. If you lack the room to become Large, your size doesn't change.
- You have advantage on Strength checks and Strength saving throws.
- Once on each of your turns, one of your attacks with a weapon or an unarmed strike can deal an extra 1d6 damage to a target on a hit.

You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses of it when you finish a long rest.` },
        { level: 7, name: 'Runic Shield', desc: `At 7th level, you learn to invoke your rune magic to protect your allies. When another creature you can see within 60 feet of you is hit by an attack roll, you can use your reaction to force the attacker to reroll the d20 and use the new roll.

You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.` },
        { level: 10, name: 'Great Stature', desc: `By 10th level, the magic of your runes permanently alters you. When you gain this feature, roll 3d4. You grow a number of inches in height equal to the roll.

Moreover, the extra damage you deal with your Giant's Might feature increases to 1d8.` },
        { level: 15, name: 'Master of Runes', desc: `At 15th level, you can invoke each rune you know from your Rune Carver feature twice, rather than once, and you regain all expended uses when you finish a short or long rest.` },
        { level: 18, name: 'Runic Juggernaut', desc: `At 18th level, you learn how to amplify your rune-powered transformation. As a result, the extra damage you deal with the Giant's Might feature increases to 1d10. Moreover, when you use that feature, your size can increase to Huge, and while you are that size, your reach increases by 5 feet.` }
      ]
    }
  ]
}
