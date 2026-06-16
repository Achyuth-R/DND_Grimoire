// Wizard — PHB base + traditions from PHB, XGE, SCAG/TCE, EGtW
const ASI = (level) => ({ level, name: 'Ability Score Improvement', desc: 'Increase one ability score by 2, or two ability scores by 1 each (max 20). You can forgo this to take a feat.' })

export default {
  key: 'wizard',
  name: 'Wizard',
  hitDie: 6,
  primary: ['int'],
  saves: ['int', 'wis'],
  icon: '🧙',
  color: '#2980b9',
  desc: `Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, and brute-force mind control. Their magic conjures monsters from other planes of existence, glimpses the future, or turns slain foes into zombies. Their mightiest spells change one substance into another, call meteors down from the sky, or open portals to other worlds.

Wild and enigmatic, varied in form and function, the power of magic draws students who seek to master its mysteries. Some aspire to become like the gods, shaping reality itself. Though the casting of a typical spell requires merely the utterance of a few strange words, fleeting gestures, and sometimes a pinch or clump of exotic materials, these surface components barely hint at the expertise attained after years of apprenticeship and countless hours of study.

Wizards live and die by their spells. Everything else is secondary. They learn new spells as they experiment and grow in experience. They can also learn them from other wizards, from ancient tomes or inscriptions, and from ancient creatures (such as the fey) that are steeped in magic.

You must have an Intelligence score of 13 or higher in order to multiclass in or out of this class.`,
  armor: [],
  weapons: ['Daggers', 'Darts', 'Slings', 'Quarterstaffs', 'Light crossbows'],
  tools: [],
  skillsChoose: 2,
  skillsFrom: ['arcana', 'history', 'insight', 'investigation', 'medicine', 'religion'],
  spellcaster: 'full',
  spellAbility: 'int',
  features: [
    { level: 1, name: 'Spellcasting', desc: `As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power.

Cantrips
At 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table.

Spellbook
At 1st level, you have a spellbook containing six 1st-level wizard spells of your choice. Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind.

Preparing and Casting Spells
The Wizard table shows how many spell slots you have to cast your wizard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.
You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.
For example, if you're a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your spellbook. If you prepare the 1st-level spell magic missile, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.
You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list.

Spellcasting Ability
Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.

Spell save DC = 8 + your proficiency bonus + your Intelligence modifier
Spell attack modifier = your proficiency bonus + your Intelligence modifier

Ritual Casting
You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don't need to have the spell prepared.

Spellcasting Focus
You can use an arcane focus as a spellcasting focus for your wizard spells.

Learning Spells of 1st Level and Higher
Each time you gain a wizard level, you can add two wizard spells of your choice to your spellbook for free. Each of these spells must be of a level for which you have spell slots, as shown on the Wizard table. On your adventures, you might find other spells that you can add to your spellbook (see the "Your Spellbook" sidebar).` },
    { level: 1, name: 'Arcane Recovery', desc: `You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.

For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots.` },
    { level: 2, name: 'Arcane Tradition', desc: `When you reach 2nd level, you choose an arcane tradition, shaping your practice of magic through one of eight schools, such as Evocation.

Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.` },
    { level: 3, name: 'Cantrip Formulas (Optional)', desc: `You have scribed a set of arcane formulas in your spellbook that you can use to formulate a cantrip in your mind. Whenever you finish a long rest and consult those formulas in your spellbook, you can replace one wizard cantrip you know with another cantrip from the wizard spell list.` },
    ASI(4),
    ASI(8),
    ASI(12),
    ASI(16),
    { level: 18, name: 'Spell Mastery', desc: `At 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal.

By spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels.` },
    ASI(19),
    { level: 20, name: 'Signature Spells', desc: `When you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don't count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can't do so again until you finish a short or long rest.

If you want to cast either spell at a higher level, you must expend a spell slot as normal.` }
  ],
  subclasses: [
    {
      key: 'abjuration', name: 'School of Abjuration', source: 'PHB',
      desc: `The School of Abjuration emphasizes magic that blocks, banishes, or protects. Detractors of this school say that its tradition is about denial, negation rather than positive assertion. You understand, however, that ending harmful effects, protecting the weak, and banishing evil influences is anything but a philosophical void. It is a proud and respected vocation.

Called abjurers, members of this school are sought when baleful spirits require exorcism, when important locations must be guarded against magical spying, and when portals to other planes of existence must be closed.`,
      features: [
        { level: 2, name: 'Abjuration Savant', desc: `Beginning when you select this school at 2nd level, the gold and time you must spend to copy an abjuration spell into your spellbook is halved.` },
        { level: 2, name: 'Arcane Ward', desc: `Starting at 2nd level, you can weave magic around yourself for protection. When you cast an abjuration spell of 1st level or higher, you can simultaneously use a strand of the spell's magic to create a magical ward on yourself that lasts until you finish a long rest. The ward has hit points equal to twice your wizard level + your Intelligence modifier. Whenever you take damage, the ward takes the damage instead. If this damage reduces the ward to 0 hit points, you take any remaining damage.

While the ward has 0 hit points, it can't absorb damage, but its magic remains. Whenever you cast an abjuration spell of 1st level or higher, the ward regains a number of hit points equal to twice the level of the spell.
Once you create the ward, you can't create it again until you finish a long rest.` },
        { level: 6, name: 'Projected Ward', desc: `Starting at 6th level, when a creature that you can see within 30 feet of you takes damage, you can use your reaction to cause your Arcane Ward to absorb that damage. If this damage reduces the ward to 0 hit points, the warded creature takes any remaining damage.` },
        { level: 10, name: 'Improved Abjuration', desc: `Beginning at 10th level, when you cast an abjuration spell that requires you to make an ability check as a part of casting that spell (as in counterspell and dispel magic), you add your proficiency bonus to that ability check.` },
        { level: 14, name: 'Spell Resistance', desc: `Starting at 14th level, you have advantage on saving throws against spells.

Furthermore, you have resistance against the damage of spells.` }
      ]
    },
    {
      key: 'conjuration', name: 'School of Conjuration', source: 'PHB',
      desc: `As a conjurer, you favor spells that produce objects and creatures out of thin air. You can conjure billowing clouds of killing fog or summon creatures from elsewhere to fight on your behalf. As your mastery grows, you learn spells of teleportation and can transport yourself over vast distances, even to other planes of existence, in an instant.`,
      features: [
        { level: 2, name: 'Conjuration Savant', desc: `Beginning when you select this school at 2nd level, the gold and time you must spend to copy a conjuration spell into your spellbook is halved.` },
        { level: 2, name: 'Minor Conjuration', desc: `Starting at 2nd level when you select this school, you can use your action to conjure up an inanimate object in your hand or on the ground in an unoccupied space that you can see within 10 feet of you. This object can be no larger than 3 feet on a side and weigh no more than 10 pounds, and its form must be that of a nonmagical object that you have seen. The object is visibly magical, radiating dim light out to 5 feet.

The object disappears after 1 hour, when you use this feature again, or if it takes or deals any damage.` },
        { level: 6, name: 'Benign Transposition', desc: `Starting at 6th level, you can use your action to teleport up to 30 feet to an unoccupied space that you can see. Alternatively, you can choose a space within range that is occupied by a Small or Medium creature. If that creature is willing, you both teleport, swapping places.

Once you use this feature, you can't use it again until you finish a long rest or you cast a conjuration spell of 1st level or higher.` },
        { level: 10, name: 'Focused Conjuration', desc: `Beginning at 10th level, while you are concentrating on a conjuration spell, your concentration can't be broken as a result of taking damage.` },
        { level: 14, name: 'Durable Summons', desc: `Starting at 14th level, any creature that you summon or create with a conjuration spell has 30 temporary hit points.` }
      ]
    },
    {
      key: 'divination', name: 'School of Divination', source: 'PHB',
      desc: `The counsel of a diviner is sought by royalty and commoners alike, for all seek a clearer understanding of the past, present, and future. As a diviner, you strive to part the veils of space, time, and consciousness so that you can see clearly. You work to master spells of discernment, remote viewing, supernatural knowledge, and foresight.`,
      features: [
        { level: 2, name: 'Divination Savant', desc: `Beginning when you select this school at 2nd level, the gold and time you must spend to copy a divination spell into your spellbook is halved.` },
        { level: 2, name: 'Portent', desc: `Starting at 2nd level when you choose this school, glimpses of the future begin to press in on your awareness. When you finish a long rest, roll two d20s and record the numbers rolled. You can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with one of these foretelling rolls. You must choose to do so before the roll, and you can replace a roll in this way only once per turn.

Each foretelling roll can be used only once. When you finish a long rest, you lose any unused foretelling rolls.` },
        { level: 6, name: 'Expert Divination', desc: `Beginning at 6th level, casting divination spells comes so easily to you that it expends only a fraction of your spellcasting efforts. When you cast a divination spell of 2nd level or higher using a spell slot, you regain one expended spell slot. The slot you regain must be of a level lower than the spell you cast and can't be higher than 5th level.` },
        { level: 10, name: 'The Third Eye', desc: `Starting at 10th level, you can use your action to increase your powers of perception. When you do so, choose one of the following benefits, which lasts until you are incapacitated or you take a short or long rest. You can't use the feature again until you finish a rest.
- Darkvision: You gain darkvision out to a range of 60 feet.
- Ethereal Sight: You can see into the Ethereal Plane within 60 feet of you.
- Greater Comprehension: You can read any language.
- See Invisibility: You can see invisible creatures and objects within 10 feet of you that are within line of sight.` },
        { level: 14, name: 'Greater Portent', desc: `Starting at 14th level, the visions in your dreams multiply and become more detailed. When you roll for your Portent feature, you roll three d20s instead of two.` }
      ]
    },
    {
      key: 'enchantment', name: 'School of Enchantment', source: 'PHB',
      desc: `As a member of the School of Enchantment, you have honed your ability to magically entrance and beguile other people and monsters. Some enchanters are peacemakers who bewitch the violent to lay down their arms and charm the cruel into showing mercy. Others are tyrants who magically bind the unwilling into their service. Most enchanters fall somewhere in between.`,
      features: [
        { level: 2, name: 'Enchantment Savant', desc: `Beginning when you select this school at 2nd level, the gold and time you must spend to copy an enchantment spell into your spellbook is halved.` },
        { level: 2, name: 'Hypnotic Gaze', desc: `Starting at 2nd level when you choose this school, your soft words and enchanting gaze can magically enthrall another creature. As an action, choose one creature that you can see within 5 feet of you. If the target can see or hear you, it must succeed on a Wisdom saving throw against your wizard spell save DC or be charmed by you until the end of your next turn. The charmed creature's speed drops to 0, and the creature is incapacitated and visibly dazed.

On subsequent turns, you can use your action to maintain this effect, extending its duration until the end of your next turn. However, the effect ends if you move more than 5 feet away from the creature, if the creature can neither see nor hear you, or if the creature takes damage.
Once the effect ends, or if the creature succeeds on its initial saving throw against this effect, you can't use this feature on that creature again until you finish a long rest.` },
        { level: 6, name: 'Instinctive Charm', desc: `Beginning at 6th level, when a creature you can see within 30 feet of you makes an attack roll against you, you can use your reaction to divert the attack, provided that another creature is within the attack's range. The attacker must make a Wisdom saving throw against your wizard spell save DC. On a failed save, the attacker must target the creature that is closest to it, not including you or itself. If multiple creatures are closest, the attacker chooses which one to target. On a successful save, you can't use this feature on the attacker again until you finish a long rest.

You must choose to use this feature before knowing whether the attack hits or misses. Creatures that can't be charmed are immune to this effect.` },
        { level: 10, name: 'Split Enchantment', desc: `Starting at 10th level, when you cast an enchantment spell of 1st level or higher that targets only one creature, you can have it target a second creature.` },
        { level: 14, name: 'Alter Memories', desc: `At 14th level, you gain the ability to make a creature unaware of your magical influence on it. When you cast an enchantment spell to charm one or more creatures, you can alter one creature's understanding so that it remains unaware of being charmed.

Additionally, once before the spell expires, you can use your action to try to make the chosen creature forget some of the time it spent charmed. The creature must succeed on an Intelligence saving throw against your wizard spell save DC or lose up to 1 hours of its memories. You can make the creature forget less time, and the amount of time can't exceed the duration of your enchantment spell.` }
      ]
    },
    {
      key: 'evocation', name: 'School of Evocation', source: 'PHB',
      desc: `You focus your study on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid. Some evokers find employment in military forces, serving as artillery to blast enemy armies from afar. Others use their spectacular power to protect the weak, while some seek their own gain as bandits, adventurers, or aspiring tyrants.`,
      features: [
        { level: 2, name: 'Evocation Savant', desc: `Beginning when you select this school at 2nd level, the gold and time you must spend to copy an evocation spell into your spellbook is halved.` },
        { level: 2, name: 'Sculpt Spells', desc: `Beginning at 2nd level, you can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell's level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save.` },
        { level: 6, name: 'Potent Cantrip', desc: `Starting at 6th level, your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw against your cantrip, the creature takes half the cantrip's damage (if any) but suffers no additional effect from the cantrip.` },
        { level: 10, name: 'Empowered Evocation', desc: `Beginning at 10th level, you can add your Intelligence modifier to one damage roll of any wizard evocation spell you cast.` },
        { level: 14, name: 'Overchannel', desc: `Starting at 14th level, you can increase the power of your simpler spells. When you cast a wizard spell of 1st through 5th level that deals damage, you can deal maximum damage with that spell.

The first time you do so, you suffer no adverse effect. If you use this feature again before you finish a long rest, you take 2d12 necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12. This damage ignores resistance and immunity.` }
      ]
    },
    {
      key: 'necromancy', name: 'School of Necromancy', source: 'PHB',
      desc: `The School of Necromancy explores the cosmic forces of life, death, and undeath. As you focus your studies in this tradition, you learn to manipulate the energy that animates all living things. As you progress, you learn to sap the life force from a creature as your magic destroys its body, transforming that vital energy into magical power you can manipulate.

Most people see necromancers as menacing, or even villainous, due to the close association with death. Not all necromancers are evil, but the forces they manipulate are considered taboo by many societies.`,
      features: [
        { level: 2, name: 'Necromancy Savant', desc: `Beginning when you select this school at 2nd level, the gold and time you must spend to copy a necromancy spell into your spellbook is halved.` },
        { level: 2, name: 'Grim Harvest', desc: `At 2nd level, you gain the ability to reap life energy from creatures you kill with your spells. Once per turn when you kill one or more creatures with a spell of 1st level or higher, you regain hit points equal to twice the spell's level, or three times its level if the spell belongs to the School of Necromancy. You don't gain this benefit for killing constructs or undead.` },
        { level: 6, name: 'Undead Thralls', desc: `At 6th level, you add the animate dead spell to your spellbook if it is not there already. When you cast animate dead, you can target one additional corpse or pile of bones, creating another zombie or skeleton, as appropriate.

Whenever you create an undead using a necromancy spell, it has additional benefits:
- The creature's hit point maximum is increased by an amount equal to your wizard level.
- The creature adds your proficiency bonus to its weapon damage rolls.` },
        { level: 10, name: 'Inured to Undeath', desc: `Beginning at 10th level, you have resistance to necrotic damage, and your hit point maximum can't be reduced. You have spent so much time dealing with undead and the forces that animate them that you have become inured to some of their worst effects.` },
        { level: 14, name: 'Command Undead', desc: `Starting at 14th level, you can use magic to bring undead under your control, even those created by other wizards. As an action, you can choose one undead that you can see within 60 feet of you. That creature must make a Charisma saving throw against your wizard spell save DC. If it succeeds, you can't use this feature on it again. If it fails, it becomes friendly to you and obeys your commands until you use this feature again.

Intelligent undead are harder to control in this way. If the target has an Intelligence of 8 or higher, it has advantage on the saving throw. If it fails the saving throw and has an Intelligence of 12 or higher, it can repeat the saving throw at the end of every hour until it succeeds and breaks free.` }
      ]
    },
    {
      key: 'transmutation', name: 'School of Transmutation', source: 'PHB',
      desc: `You are a student of spells that modify energy and matter. To you, the world is not a fixed thing, but eminently mutable, and you delight in being an agent of change. You wield the raw stuff of creation and learn to alter both physical forms and mental qualities. Your magic gives you the tools to become a smith on reality's forge.`,
      features: [
        { level: 2, name: 'Transmutation Savant', desc: `Beginning when you select this school at 2nd level, the gold and time you must spend to copy a transmutation spell into your spellbook is halved.` },
        { level: 2, name: 'Minor Alchemy', desc: `Starting at 2nd level when you select this school, you can temporarily alter the physical properties of one nonmagical object, changing it from one substance into another. You perform a special alchemical procedure on one object composed entirely of wood, stone (but not a gemstone), iron, copper, or silver, transforming it into a different one of those materials. For each 10 minutes you spend performing the procedure, you can transform up to 1 cubic foot of material. After 1 hour, or until you lose your concentration (as if you were casting a spell), the material reverts to its original substance.` },
        { level: 6, name: 'Transmuter\'s Stone', desc: `Starting at 6th level, you can spend 8 hours creating a transmuter's stone that stores transmutation magic. You can benefit from the stone yourself or give it to another creature. A creature carrying the stone gains a benefit of your choice as long as the stone is in the creature's possession. When you create the stone, choose the benefit from the following options:
- Darkvision out to a range of 60 feet
- An increase to speed of 10 feet while the creature is unencumbered
- Proficiency in Constitution saving throws
- Resistance to acid, cold, fire, lightning, or thunder damage (your choice whenever you choose this benefit)

Each time you cast a transmutation spell of 1st level or higher, you can change the effect of your stone if the stone is on your person.
If you create a new transmuter's stone, the previous one ceases to function.` },
        { level: 10, name: 'Shapechanger', desc: `At 10th level, you add the polymorph spell to your spellbook, if it is not there already. You can cast polymorph without expending a spell slot. When you do so, you can target only yourself and transform into a beast whose challenge rating is 1 or lower.

Once you cast polymorph in this way, you can't do so again until you finish a short or long rest, though you can still cast it normally using an available spell slot.` },
        { level: 14, name: 'Master Transmuter', desc: `Starting at 14th level, you can use your action to consume the reserve of transmutation magic stored within your transmuter's stone in a single burst. When you do so, choose one of the following effects. Your transmuter's stone is destroyed and can't be remade until you finish a long rest.

Major Transformation: You can transmute one nonmagical object—no larger than a 5-foot cube—into another nonmagical object of similar size and mass and of equal or lesser value. You must spend 10 minutes handling the object to transform it.
Panacea: You remove all curses, diseases, and poisons affecting a creature that you touch with the transmuter's stone. The creature also regains all its hit points.
Restore Life: You cast the raise dead spell on a creature you touch with the transmuter's stone, without expending a spell slot or needing to have the spell in your spellbook.
Restore Youth: You touch the transmuter's stone to a willing creature, and that creature's apparent age is reduced by 3d10 years, to a minimum of 13 years. This effect doesn't extend the creature's lifespan.` }
      ]
    },
    {
      key: 'war-magic', name: 'War Magic', source: 'XGE',
      desc: `A variety of magic that blends principles of evocation and abjuration, War Magic is taught in academies specializing in training battle wizards. War wizards learn to unleash devastating blasts of magic, but they also learn how to protect themselves from harm. In a conflict, their talents are often the difference between victory and defeat.`,
      features: [
        { level: 2, name: 'Arcane Deflection', desc: `At 2nd level, you have learned to weave your magic to fortify yourself against harm. When you are hit by an attack or you fail a saving throw, you can use your reaction to gain a +2 bonus to your AC against that attack or a +4 bonus to that saving throw.

When you use this feature, you can't cast spells other than cantrips until the end of your next turn.` },
        { level: 2, name: 'Tactical Wit', desc: `Starting at 2nd level, your keen ability to assess tactical situations allows you to act quickly in battle. You can add your Intelligence modifier to your initiative rolls.` },
        { level: 6, name: 'Power Surge', desc: `Starting at 6th level, you can store magical energy within yourself to later empower your damaging spells. In its stored form, this energy is called a power surge.

You can store a maximum number of power surges equal to your Intelligence modifier (minimum of one). Whenever you finish a long rest, your number of power surges resets to one. Whenever you successfully end a spell with dispel magic or counterspell, you gain one power surge, as you steal magic from the spell you foiled. If you end a short rest with no power surges, you gain one power surge.
Once per turn when you deal damage to a creature or object with a wizard spell, you can spend one power surge to deal extra force damage to that target. The extra damage equals half your wizard level.` },
        { level: 10, name: 'Durable Magic', desc: `Beginning at 10th level, the magic you channel helps ward off harm. While you maintain concentration on a spell, you have a +2 bonus to AC and all saving throws.` },
        { level: 14, name: 'Deflecting Shroud', desc: `At 14th level, your Arcane Deflection becomes infused with deadly magic. When you use your Arcane Deflection feature, you can cause magical energy to arc from you. Up to three creatures of your choice that you can see within 60 feet of you each take force damage equal to half your wizard level.` }
      ]
    },
    {
      key: 'bladesinging', name: 'Bladesinging', source: 'TCE',
      desc: `Bladesingers are elves who bravely defend their people and lands. They are elf wizards who master a school of sword play grounded in a tradition of arcane magic. In combat, a bladesinger uses a series of intricate, elegant maneuvers that fend off harm and allow the bladesinger to channel magic into devastating attacks and a cunning defense.`,
      features: [
        { level: 2, name: 'Training in War and Song', desc: `When you adopt this tradition at 2nd level, you gain proficiency with light armor, and you gain proficiency with one type of one-handed melee weapon of your choice.

You also gain proficiency in the Performance skill if you don't already have it.` },
        { level: 2, name: 'Bladesong', desc: `Starting at 2nd level, you can invoke a secret elven magic called the Bladesong, provided that you aren't wearing medium or heavy armor or using a shield. It graces you with supernatural speed, agility, and focus.

You can use a bonus action to start the Bladesong, which lasts for 1 minute. It ends early if you are incapacitated, if you don medium or heavy armor or a shield, or if you use two hands to make an attack with a weapon. You can also dismiss the Bladesong at any time you choose (no action required).

While your Bladesong is active, you gain the following benefits:
- You gain a bonus to your AC equal to your Intelligence modifier (minimum of +1).
- Your walking speed increases by 10 feet.
- You have advantage on Dexterity (Acrobatics) checks.
- You gain a bonus to any Constitution saving throw you make to maintain your concentration on a spell. The bonus equals your Intelligence modifier (minimum of +1).

You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses of it when you finish a long rest.` },
        { level: 6, name: 'Extra Attack', desc: `Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. Moreover, you can cast one of your cantrips in place of one of those attacks.` },
        { level: 10, name: 'Song of Defense', desc: `Beginning at 10th level, you can direct your magic to absorb damage while your Bladesong is active. When you take damage, you can use your reaction to expend one spell slot and reduce that damage to you by an amount equal to five times the spell slot's level.` },
        { level: 14, name: 'Song of Victory', desc: `Starting at 14th level, you can add your Intelligence modifier (minimum of +1) to the damage of your melee weapon attacks while your Bladesong is active.` }
      ]
    },
    {
      key: 'chronurgy', name: 'Chronurgy Magic', source: 'EGtW',
      desc: `Focusing on the manipulation of time, those who follow the Chronurgy tradition learn to alter the pace of reality to their liking. Using the ramping of anticipatory dunamis energy, these mages can bend the flow of time as adroitly as a skilled musician plays an instrument, lending themselves and their allies an advantage in the blink of an eye.`,
      features: [
        { level: 2, name: 'Chronal Shift', desc: `At 2nd level, you can magically exert limited control over the flow of time around a creature. As a reaction, after you or a creature you can see within 30 feet of you makes an attack roll, an ability check, or a saving throw, you can force the creature to reroll. You make this decision after you see whether the roll succeeds or fails. The target must use the result of the second roll.

You can use this ability twice, and you regain any expended uses when you finish a long rest.` },
        { level: 2, name: 'Temporal Awareness', desc: `Starting at 2nd level, you can add your Intelligence modifier to your initiative rolls.` },
        { level: 6, name: 'Momentary Stasis', desc: `Starting at 6th level, as an action, you can magically force a Large or smaller creature you can see within 60 feet of you to make a Constitution saving throw against your spell save DC. Unless the save succeeds, the creature is encased in a field of magical energy until the end of your next turn or until the creature takes any damage. While encased in this way, the creature is incapacitated and has a speed of 0.

You can use this feature a number of times equal to your Intelligence modifier (a minimum of once). You regain all expended uses when you finish a long rest.` },
        { level: 10, name: 'Arcane Abeyance', desc: `At 10th level, when you cast a spell using a spell slot of 4th level or lower, you can condense the spell's magic into a mote. The spell is frozen in time at the moment of casting and held within a gray bead for 1 hour. This bead is a Tiny object with AC 15 and 1 hit point, and it is immune to poison and psychic damage. When the duration ends, or if the bead is destroyed, it vanishes in a flash of light, and the spell is lost.

A creature holding the bead can use its action to release the spell within, whereupon the bead disappears. The spell uses your spell attack bonus and save DC, and the spell treats the creature who released it as the caster for all other purposes.

Once you create a bead with this feature, you can't do so again until you finish a short or long rest.` },
        { level: 14, name: 'Convergent Future', desc: `Starting at 14th level, you can peer through possible futures and magically pull one of them into events around you, ensuring a particular outcome. When you or a creature you can see within 60 feet of you makes an attack roll, an ability check, or a saving throw, you can use your reaction to ignore the die roll and decide whether the number rolled is the minimum needed to succeed or one less than that number (your choice).

When you use this feature, you gain one level of exhaustion. Only by finishing a long rest can you remove a level of exhaustion gained in this way.` }
      ]
    }
  ],
}
