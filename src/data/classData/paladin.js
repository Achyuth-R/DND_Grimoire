// Paladin — PHB base + oaths from PHB, DMG, XGE, TCE
const ASI = (level) => ({ level, name: 'Ability Score Improvement', desc: 'Increase one ability score by 2, or two ability scores by 1 each (max 20). You can forgo this to take a feat.' })

export default {
  key: 'paladin',
  name: 'Paladin',
  hitDie: 10,
  primary: ['str', 'cha'],
  saves: ['wis', 'cha'],
  icon: '🛡️',
  color: '#f39c12',
  desc: `A paladin is a holy warrior bound to a sacred oath. Whether sworn before a god's altar and the witness of a priest, in a sacred glade before nature spirits and fey beings, or in a moment of desperation and grief with the dead as the only witness, a paladin's oath is a powerful bond. It is a source of power that turns a devout warrior into a blessed champion.

A paladin swears to uphold justice and righteousness, to stand with the good things of the world against the encroaching darkness, and to hunt the forces of evil wherever they lurk. Different paladins focus on various aspects of the cause of righteousness, but all are bound by the oaths that grant them power to do their sacred work. Although many paladins are devoted to gods of good, a paladin's power comes as much from a commitment to justice itself as it does from a god.

Paladins train for years to learn the skills of combat, mastering a variety of weapons and armor. Even so, their martial skills are secondary to the magical power they wield: power to heal the sick and injured, to smite the wicked and the undead, and to protect the innocent and those who join them in the fight for justice.

You must have a Strength score and a Charisma score of 13 or higher in order to multiclass in or out of this class.`,
  armor: ['All armor', 'Shields'],
  weapons: ['Simple weapons', 'Martial weapons'],
  tools: [],
  skillsChoose: 2,
  skillsFrom: ['athletics', 'insight', 'intimidation', 'medicine', 'persuasion', 'religion'],
  spellcaster: 'half',
  spellAbility: 'cha',
  features: [
    { level: 1, name: 'Divine Sense', desc: `The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell.

You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.` },
    { level: 1, name: 'Lay on Hands', desc: `Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5.

As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.

Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.

This feature has no effect on undead and constructs.` },
    { level: 2, name: 'Fighting Style', desc: `At 2nd level, you adopt a style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.

Defense: While you are wearing armor, you gain a +1 bonus to AC.
Dueling: When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.
Great Weapon Fighting: When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.
Protection: When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.` },
    { level: 2, name: 'Spellcasting', desc: `By 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does.

Preparing and Casting Spells
The Paladin table shows how many spell slots you have to cast your paladin spells. To cast one of your paladin spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.
You prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.
For example, if you are a 5th-level paladin, you have four 1st-level and two 2nd-level spell slots. With a Charisma of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.
You can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.

Spellcasting Ability
Charisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one.

Spell save DC = 8 + your proficiency bonus + your Charisma modifier
Spell attack modifier = your proficiency bonus + your Charisma modifier

Spellcasting Focus
You can use a holy symbol as a spellcasting focus for your paladin spells.` },
    { level: 2, name: 'Divine Smite', desc: `Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend, to a maximum of 6d8.` },
    { level: 3, name: 'Divine Health', desc: `By 3rd level, the divine magic flowing through you makes you immune to disease.` },
    { level: 3, name: 'Sacred Oath', desc: `When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose an oath, such as the Oath of Devotion. Your choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature.

Oath Spells
Each oath has a list of associated spells. You gain access to these spells at the levels specified in the oath description. Once you gain access to an oath spell, you always have it prepared. Oath spells don't count against the number of spells you can prepare each day.
If you gain an oath spell that doesn't appear on the paladin spell list, the spell is nonetheless a paladin spell for you.

Channel Divinity
Your oath allows you to channel divine energy to fuel magical effects. Each Channel Divinity option provided by your oath explains how to use it. When you use your Channel Divinity, you choose which option to use. You must then finish a short or long rest to use your Channel Divinity again.
Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your paladin spell save DC.` },
    ASI(4),
    { level: 5, name: 'Extra Attack', desc: `Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.` },
    { level: 6, name: 'Aura of Protection', desc: `Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.

At 18th level, the range of this aura increases to 30 feet.` },
    ASI(8),
    { level: 10, name: 'Aura of Courage', desc: `Starting at 10th level, you and friendly creatures within 10 feet of you can't be frightened while you are conscious.

At 18th level, the range of this aura increases to 30 feet.` },
    { level: 11, name: 'Improved Divine Smite', desc: `By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage.` },
    ASI(12),
    { level: 14, name: 'Cleansing Touch', desc: `Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch.

You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest.` },
    ASI(16),
    { level: 18, name: 'Aura Improvements', desc: `At 18th level, the range of your Aura of Protection and Aura of Courage increases to 30 feet.` },
    ASI(19),
  ],
  subclasses: [
    {
      key: 'devotion', name: 'Oath of Devotion', source: 'PHB',
      desc: `The Oath of Devotion binds a paladin to the loftiest ideals of justice, virtue, and order. Sometimes called cavaliers, white knights, or holy warriors, these paladins meet the ideal of the knight in shining armor, acting with honor in pursuit of justice and the greater good. They hold themselves to the highest standards of conduct, and some, for better or worse, hold the rest of the world to the same standards. Many who swear this oath are devoted to gods of law and good and use their gods' tenets as the measure of their devotion. They hold angels—the perfect servants of good—as their ideals, and incorporate images of angelic wings into their helmets or coats of arms.`,
      features: [
        { level: 3, name: 'Channel Divinity', desc: `When you take this oath at 3rd level, you gain the following two Channel Divinity options.

Sacred Weapon. As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier to attack rolls made with that weapon (with a minimum bonus of +1). The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becomes magical for the duration.
You can end this effect on your turn as part of any other action. If you are no longer holding or carrying this weapon, or if you fall unconscious, this effect ends.

Turn the Unholy. As an action, you present your holy symbol and speak a prayer censuring fiends and undead, using your Channel Divinity. Each fiend or undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage.
A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.` },
        { level: 7, name: 'Aura of Devotion', desc: `Starting at 7th level, you and friendly creatures within 10 feet of you can't be charmed while you are conscious.

At 18th level, the range of this aura increases to 30 feet.` },
        { level: 15, name: 'Purity of Spirit', desc: `Beginning at 15th level, you are always under the effects of a protection from evil and good spell.` },
        { level: 20, name: 'Holy Nimbus', desc: `At 20th level, as an action, you can emanate an aura of sunlight. For 1 minute, bright light shines from you in a 30-foot radius, and dim light shines 30 feet beyond that.

Whenever an enemy creature starts its turn in the bright light, the creature takes 10 radiant damage.

In addition, for the duration, you have advantage on saving throws against spells cast by fiends or undead.

Once you use this feature, you can't use it again until you finish a long rest.` }
      ]
    },
    {
      key: 'ancients', name: 'Oath of the Ancients', source: 'PHB',
      desc: `The Oath of the Ancients is as old as the race of elves and the rituals of the druids. Sometimes called fey knights, green knights, or horned knights, paladins who swear this oath cast their lot with the side of the light in the cosmic struggle against darkness because they love the beautiful and life-giving things of the world, not necessarily because they believe in principles of honor, courage, and justice. They adorn their armor and clothing with images of growing things—leaves, antlers, or flowers—to reflect their commitment to preserving life and light in the world.`,
      features: [
        { level: 3, name: 'Channel Divinity', desc: `When you take this oath at 3rd level, you gain the following two Channel Divinity options.

Nature's Wrath. You can use your Channel Divinity to invoke primeval forces to ensnare a foe. As an action, you can cause spectral vines to spring up and reach for a creature within 10 feet of you that you can see. The creature must succeed on a Strength or Dexterity saving throw (its choice) or be restrained. While restrained by the vines, the creature repeats the saving throw at the end of each of its turns. On a success, it frees itself and the vines vanish.

Turn the Faithless. You can use your Channel Divinity to utter ancient words that are painful for fey and fiends to hear. As an action, you present your holy symbol, and each fey or fiend within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage.
A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.
If the creature's true form is concealed by an illusion, shapeshifting, or other magic, that form is revealed while it is turned.` },
        { level: 7, name: 'Aura of Warding', desc: `Beginning at 7th level, ancient magic lies so heavily upon you that it forms an eldritch ward. You and friendly creatures within 10 feet of you have resistance to damage from spells.

At 18th level, the range of this aura increases to 30 feet.` },
        { level: 15, name: 'Undying Sentinel', desc: `Starting at 15th level, when you are reduced to 0 hit points and are not killed outright, you can choose to drop to 1 hit point instead. Once you use this ability, you can't use it again until you finish a long rest.

Additionally, you suffer none of the drawbacks of old age, and you can't be aged magically.` },
        { level: 20, name: 'Elder Champion', desc: `At 20th level, you can assume the form of an ancient force of nature, taking on an appearance you choose. For example, your skin might turn green or take on a bark-like texture, your hair might become leafy or moss-like, or you might grow mighty antlers or a lion-like mane.
Using your action, you undergo a transformation. For 1 minute, you gain the following benefits:
- At the start of each of your turns, you regain 10 hit points.
- Whenever you cast a paladin spell that has a casting time of 1 action, you can cast it using a bonus action instead.
- Enemy creatures within 10 feet of you have disadvantage on saving throws against your paladin spells and Channel Divinity options.

Once you use this feature, you can't use it again until you finish a long rest.` }
      ]
    },
    {
      key: 'vengeance', name: 'Oath of Vengeance', source: 'PHB',
      desc: `The Oath of Vengeance is a solemn commitment to punish those who have committed a grievous sin. When evil forces slaughter helpless villagers, when an entire people turns against the will of the gods, when a thieves' guild grows too violent and powerful, when a dragon rampages through the countryside—at times like these, paladins arise and swear an Oath of Vengeance to set right that which has gone wrong. To these paladins—sometimes called avengers or dark knights—their own purity is not as important as delivering justice.`,
      features: [
        { level: 3, name: 'Channel Divinity', desc: `When you take this oath at 3rd level, you gain the following two Channel Divinity options.

Abjure Enemy. As an action, you present your holy symbol and speak a prayer of denunciation, using your Channel Divinity. Choose one creature within 60 feet of you that you can see. That creature must make a Wisdom saving throw, unless it is immune to being frightened. Fiends and undead have disadvantage on this saving throw.
On a failed save, the creature is frightened for 1 minute or until it takes any damage. While frightened, the creature's speed is 0, and it can't benefit from any bonus to its speed.
On a successful save, the creature's speed is halved for 1 minute or until the creature takes any damage.

Vow of Enmity. As a bonus action, you can utter a vow of enmity against a creature you can see within 10 feet of you, using your Channel Divinity. You gain advantage on attack rolls against the creature for 1 minute or until it drops to 0 hit points or falls unconscious.` },
        { level: 7, name: 'Relentless Avenger', desc: `By 7th level, your supernatural focus helps you close off a foe's retreat. When you hit a creature with an opportunity attack, you can move up to half your speed immediately after the attack and as part of the same reaction. This movement doesn't provoke opportunity attacks.` },
        { level: 15, name: 'Soul of Vengeance', desc: `Starting at 15th level, the authority with which you speak your Vow of Enmity gives you greater power over your foe. When a creature under the effect of your Vow of Enmity makes an attack, you can use your reaction to make a melee weapon attack against that creature if it is within range.` },
        { level: 20, name: 'Avenging Angel', desc: `At 20th level, you can assume the form of an angelic avenger. Using your action, you undergo a transformation. For 1 hour, you gain the following benefits:
- Wings sprout from your back and grant you a flying speed of 60 feet.
- You emanate an aura of menace in a 30-foot radius. The first time any enemy creature enters the aura or starts its turn there during a battle, the creature must succeed on a Wisdom saving throw or become frightened of you for 1 minute or until it takes any damage. Attack rolls against the frightened creature have advantage.

Once you use this feature, you can't use it again until you finish a long rest.` }
      ]
    },
    {
      key: 'oathbreaker', name: 'Oathbreaker', source: 'DMG',
      desc: `An Oathbreaker is a paladin who breaks their sacred oaths to pursue some dark ambition or serve an evil power. Whatever light burned in the paladin's heart been extinguished. Only darkness remains.

A paladin must be evil and at least 3rd level to become an Oathbreaker. The paladin replaces the features specific to his or her Sacred Oath with Oathbreaker features.`,
      features: [
        { level: 3, name: 'Channel Divinity', desc: `When you become an Oathbreaker at 3rd level, you gain the following two Channel Divinity options.

Control Undead. As an action, you target one undead creature you can see within 30 feet of you. The target must make a Wisdom saving throw. On a failed save, the target must obey your commands for the next 24 hours, or until you use this Channel Divinity option again. An undead whose challenge rating is equal to or greater than your paladin level is immune to this effect.

Dreadful Aspect. As an action, you channel the darkest emotions and focus them into a burst of magical menace. Each creature of your choice within 30 feet of you must make a Wisdom saving throw if it can see you. On a failed save, the target is frightened of you for 1 minute. If a creature frightened by this effect ends its turn more than 30 feet away from you, it can attempt another Wisdom saving throw to end the effect on it.` },
        { level: 7, name: 'Aura of Hate', desc: `Starting at 7th level you, as well any fiends and undead within 10 feet of you, gain a bonus to melee weapon damage rolls equal to your Charisma modifier (minimum of +1). A creature can benefit from this feature from only one paladin at a time.

At 18th level, the range of this aura increases to 30 feet.` },
        { level: 15, name: 'Supernatural Resistance', desc: `At 15th level, you gain resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons.` },
        { level: 20, name: 'Dread Lord', desc: `At 20th level, you can, as an action, surround yourself with an aura of gloom that lasts for 1 minute. The aura reduces any bright light in a 30-foot radius around you to dim light. Whenever an enemy that is frightened by you starts its turn in the aura, it takes 4d10 psychic damage. Additionally, you and creatures you choose in the aura are draped in deeper shadow. Creatures that rely on sight have disadvantage on attack rolls against creatures draped in this shadow.

While the aura lasts, you can use a bonus action on your turn to cause the shadows in the aura to attack one creature. You make a melee spell attack against the target. If the attack hits, the target takes necrotic damage equal to 3d10 + your Charisma modifier.

After activating the aura, you can't do so again until you finish a long rest.` }
      ]
    },
    {
      key: 'conquest', name: 'Oath of Conquest', source: 'XGE',
      desc: `The Oath of Conquest calls to paladins who seek glory in battle and the subjugation of their enemies. It isn't enough for these paladins to establish order. They must crush the forces of chaos. Sometimes called knight tyrants or iron mongers, those who swear this oath gather into grim orders that serve gods or philosophies of war and well-ordered might.

Some of these paladins go so far as to consort with the powers of the Nine Hells, valuing the rule of law over the balm of mercy. The archdevil Bel, warlord of Avernus, counts many of these paladins - called hell knights - as his most ardent supporters. Hell knights cover their armor with trophies taken from fallen enemies, a grim warning to any who dare oppose them and the decrees of their lords.`,
      features: [
        { level: 3, name: 'Channel Divinity', desc: `When you take this oath at 3rd level, you gain the following two Channel Divinity options.

Conquering Presence. You can use your Channel Divinity to exude a terrifying presence. As an action, you force each creature of your choice that you can see within 30 feet of you to make a Wisdom saving throw. On a failed save, a creature becomes frightened of you for 1 minute. The frightened creature can repeat this saving throw at the end of each of its turns, ending the effect on itself on a success.

Guided Strike. You can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.` },
        { level: 7, name: 'Aura of Conquest', desc: `Starting at 7th level, you constantly emanate a menacing aura while you're not incapacitated. The aura extends 10 feet from you in every direction, but not through total cover.

If a creature is frightened of you, its speed is reduced to 0 while in the aura, and that creature takes psychic damage equal to half your paladin level if it starts its turn there.

At 18th level, the range of this aura increases to 30 feet.` },
        { level: 15, name: 'Scornful Rebuke', desc: `Starting at 15th level, those who dare to strike you are magically punished for their audacity. Whenever a creature hits you with an attack, that creature takes psychic damage equal to your Charisma modifier (minimum of 1) if you're not incapacitated.` },
        { level: 20, name: 'Invincible Conqueror', desc: `At 20th level, you gain the ability to harness extraordinary martial prowess. As an action, you can magically become an avatar of conquest, gaining the following benefits for 1 minute:
- You have resistance to all damage.
- When you take the Attack action on your turn, you can make one additional attack as part of that action.
- Your melee weapon attacks score a critical hit on a roll of 19 or 20 on the d20.

Once you use this feature, you can't use it again until you finish a long rest.` }
      ]
    },
    {
      key: 'redemption', name: 'Oath of Redemption', source: 'XGE',
      desc: `The Oath of Redemption sets a paladin on a difficult path, one that requires a holy warrior to use violence only as a last resort. Paladins who dedicate themselves to this oath believe that any person can be redeemed and that the path of benevolence and justice is one that anyone can walk. These paladins face evil creatures in the hope of turning them to the light, and they slay them only when such a deed will clearly save other lives. Paladins who follow this path are known as redeemers.`,
      features: [
        { level: 3, name: 'Channel Divinity', desc: `When you take this oath at 3rd level, you gain the following two Channel Divinity options.

Emissary of Peace. You can use your Channel Divinity to augment your presence with divine power. As a bonus action, you grant yourself a +5 bonus to Charisma (Persuasion) checks for the next 10 minutes.

Rebuke the Violent. You can use your Channel Divinity to rebuke those who use violence. Immediately after an attacker within 30 feet of you deals damage with an attack against a creature other than you, you can use your reaction to force the attacker to make a Wisdom saving throw. On a failed save, the attacker takes radiant damage equal to the damage it just dealt. On a successful save, it takes half as much damage.` },
        { level: 7, name: 'Aura of the Guardian', desc: `Starting at 7th level, you can shield others from harm at the cost of your own health. When a creature within 10 feet of you takes damage, you can use your reaction to magically take that damage, instead of that creature taking it. This feature doesn't transfer any other effects that might accompany the damage, and this damage can't be reduced in any way.

At 18th level, the range of this aura increases to 30 feet.` },
        { level: 15, name: 'Protective Spirit', desc: `Starting at 15th level, a holy presence mends your wounds in battle. You regain hit points equal to 1d6 + half your paladin level if you end your turn in combat with fewer than half of your hit points remaining and you aren't incapacitated.` },
        { level: 20, name: 'Emissary of Redemption', desc: `At 20th level, you become an avatar of peace, which gives you two benefits:
- You have resistance to all damage dealt by other creatures (their attacks, spells, and other effects).
- Whenever a creature hits you with an attack, it takes radiant damage equal to half the damage you take from the attack.

If you attack a creature, cast a spell on it, or deal damage to it by any means but this feature, neither benefit works against that creature until you finish a long rest.` }
      ]
    },
    {
      key: 'glory', name: 'Oath of Glory', source: 'TCE',
      desc: `Paladins who take the Oath of Glory believe they and their companions are destined to achieve glory through deeds of heroism. They train diligently and encourage their companions so they're all ready when destiny calls.`,
      features: [
        { level: 3, name: 'Channel Divinity', desc: `When you take this oath at 3rd level, you gain the following two Channel Divinity options.

Peerless Athlete. As a bonus action, you can use your Channel Divinity to augment your athleticism. For the next 10 minutes, you have advantage on Strength (Athletics) and Dexterity (Acrobatics) checks; you can carry, push, drag, and lift twice as much weight as normal; and the distance of your long and high jumps increases by 10 feet (this extra distance costs movement as normal).

Inspiring Smite. Immediately after you deal damage to a creature with your Divine Smite feature, you can use your Channel Divinity as a bonus action and distribute temporary hit points to creatures of your choice within 30 feet of you, which can include you. The total number of temporary hit points equals 2d8 + your level in this class, divided among the chosen creatures however you like.` },
        { level: 7, name: 'Aura of Alacrity', desc: `At 7th level, you emanate an aura that fills you and your companions with supernatural speed. Your walking speed increases by 10 feet. In addition, if you aren't incapacitated, the walking speed of any ally who starts their turn within 10 feet of you increases by 10 feet until the end of that turn.

When you reach 18th level in this class, the range of the aura increases to 30 feet.` },
        { level: 15, name: 'Glorious Defense', desc: `Starting at 15th level, you can turn defense into a sudden strike. When you or another creature you can see within 10 feet of you is hit by an attack roll, you can use your reaction to grant a bonus to the target's AC against that attack, potentially causing it to miss. The bonus equals your Charisma modifier (minimum of +1). If the attack misses, you can make one weapon attack against the attacker as part of this reaction, provided the attacker is within your weapon's range.

You can use this feature a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a long rest.` },
        { level: 20, name: 'Living Myth', desc: `At 20th level, you can empower yourself with the legends - whether true or exaggerated - of your great deeds. As a bonus action, you gain the following benefits for 10 minutes:
- You are blessed with an otherworldly presence, gaining advantage on all Charisma checks.
- Once on each of your turns when you make a weapon attack and miss, you can cause that attack to hit instead.
- If you fail a saving throw, you can use your reaction to succeed instead.

Once you use this feature, you can't use it again until you finish a long rest.` }
      ]
    },
    {
      key: 'watchers', name: 'Oath of the Watchers', source: 'TCE',
      desc: `The Oath of the Watchers binds paladins to protect mortal realms from the predations of extraplanar creatures, many of which can lay waste to mortal soldiers. Thus, the Watchers hone their minds, spirits, and bodies to be the ultimate weapons against such threats.

Paladins who follow the Watchers' oath are ever vigilant in spotting the influence of extraplanar forces, often establishing a network of spies and informants to gather information on suspected cults. To a Watcher, keeping a healthy suspicion and awareness about one's surroundings is as natural as wearing armor in battle.`,
      features: [
        { level: 3, name: 'Channel Divinity', desc: `When you take this oath at 3rd level, you gain the following two Channel Divinity options.

Watcher's Will. You can use your Channel Divinity to invest your presence with the warding power of your faith. As an action, you can choose a number of creatures you can see within 30 feet of you, up to a number equal to your Charisma modifier (minimum of one creature). For 1 minute, you and the chosen creatures have advantage on Intelligence, Wisdom, and Charisma saving throws.

Abjure the Extraplanar. You can use your Channel Divinity to castigate unworldly beings. As an action, you present your holy symbol and each elemental, fey, fiend, or aberration within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage.
A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.` },
        { level: 7, name: 'Aura of the Sentinel', desc: `At 7th level, you emit an aura of alertness while you aren't incapacitated. When you and any creatures of your choice within 10 feet of you roll initiative, you all gain a bonus to initiative equal to your proficiency bonus.

At 18th level, the range of this aura increases to 30 feet.` },
        { level: 15, name: 'Vigilant Rebuke', desc: `At 15th level, you've learned how to chastise anyone who dares wield beguilements against you and your wards. Whenever you or a creature you can see within 30 feet of you succeeds on an Intelligence, a Wisdom, or a Charisma saving throw, you can use your reaction to deal 2d8 + your Charisma modifier force damage to the creature that forced the saving throw.` },
        { level: 20, name: 'Mortal Bulwark', desc: `At 20th level, you manifest a spark of divine power in defense of the mortal realms. As a bonus action, you gain the following benefits for 1 minute:
- You gain truesight with a range of 120 feet.
- You have advantage on attack rolls against elementals, fey, fiends, and aberrations.
- When you hit a creature with an attack roll and deal damage to it, you can also force it to make a Charisma saving throw against your spell save DC. On a failed save, the creature is magically banished to its native plane of existence if it's not currently there. On a successful save, the creature can't be banished by this feature for 24 hours.

Once you use this bonus action, you can't use it again until you finish a long rest, unless you expend a 5th-level spell slot to use it again.` }
      ]
    }
  ]
}
