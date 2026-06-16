// Warlock — PHB base + patrons from PHB, XGE, TCE
const ASI = (level) => ({ level, name: 'Ability Score Improvement', desc: 'Increase one ability score by 2, or two ability scores by 1 each (max 20). You can forgo this to take a feat.' })

export default {
  key: 'warlock',
  name: 'Warlock',
  hitDie: 8,
  primary: ['cha'],
  saves: ['wis', 'cha'],
  icon: '👁️',
  color: '#8e44ad',
  desc: `With a pseudodragon curled on his shoulder, a young elf in golden robes smiles warmly, weaving a magical charm into his honeyed words and bending the palace sentinel to his will.

As flames spring to life in her hands, a wizened human whispers the secret name of her demonic patron, infusing her spell with fiendish magic.

Shifting his gaze between a battered tome and the odd alignment of the stars overhead, a wild-eyed tiefling chants the mystic ritual that will open a doorway to a distant world.

Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular. Drawing on the ancient knowledge of beings such as fey nobles, demons, devils, hags, and alien entities of the Far Realm, warlocks piece together arcane secrets to bolster their own power.

You must have a Charisma score of 13 or higher in order to multiclass in or out of this class.`,
  armor: ['Light armor'],
  weapons: ['Simple weapons'],
  tools: [],
  skillsChoose: 2,
  skillsFrom: ['arcana', 'deception', 'history', 'intimidation', 'investigation', 'nature', 'religion'],
  spellcaster: 'pact',
  spellAbility: 'cha',
  features: [
    { level: 1, name: 'Otherworldly Patron', desc: `At 1st level, you have struck a bargain with an otherworldly being of your choice, such as the Fiend. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level.` },
    { level: 1, name: 'Pact Magic', desc: `Your arcane research and the magic bestowed on you by your patron have given you facility with spells.

Cantrips
You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table.

Spell Slots
The Warlock table shows how many spell slots you have. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.
For example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell thunderwave, you must spend one of those slots, and you cast it as a 3rd-level spell.

Spells Known of 1st Level and Higher
At 1st level, you know two 1st-level spells of your choice from the warlock spell list.
The Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level and higher. A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level.
Additionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots.

Spellcasting Ability
Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one.

Spell save DC = 8 + your proficiency bonus + your Charisma modifier
Spell attack modifier = your proficiency bonus + your Charisma modifier

Spellcasting Focus
You can use an arcane focus as a spellcasting focus for your warlock spells.` },
    { level: 2, name: 'Eldritch Invocations', desc: `In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.

At 2nd level, you gain two eldritch invocations of your choice. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.

Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level.` },
    { level: 3, name: 'Pact Boon', desc: `At 3rd level, your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice.

Pact of the Chain
You learn the find familiar spell and can cast it as a ritual. The spell doesn't count against your number of spells known.
When you cast the spell, you can choose one of the normal forms for your familiar or one of the following special forms: imp, pseudodragon, quasit, or sprite.
Additionally, when you take the Attack action, you can forgo one of your own attacks to allow your familiar to make one attack of its own with its reaction.

Pact of the Blade
You can use your action to create a pact weapon in your empty hand. You can choose the form that this melee weapon takes each time you create it. You are proficient with it while you wield it. This weapon counts as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.
Your pact weapon disappears if it is more than 5 feet away from you for 1 minute or more. It also disappears if you use this feature again, if you dismiss the weapon (no action required), or if you die.
You can transform one magic weapon into your pact weapon by performing a special ritual while you hold the weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest. You can then dismiss the weapon, shunting it into an extradimensional space, and it appears whenever you create your pact weapon thereafter. You can't affect an artifact or a sentient weapon in this way. The weapon ceases being your pact weapon if you die, if you perform the 1-hour ritual on a different weapon, or if you use a 1-hour ritual to break your bond to it. The weapon appears at your feet if it is in the extradimensional space when the bond breaks.

Pact of the Tome
Your patron gives you a grimoire called a Book of Shadows. When you gain this feature, choose three cantrips from any class's spell list (the three needn't be from the same list). While the book is on your person, you can cast those cantrips at will. They don't count against your number of cantrips known. If they don't appear on the warlock spell list, they are nonetheless warlock spells for you.
If you lose your Book of Shadows, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and it destroys the previous book. The book turns to ash when you die.

Pact of the Talisman (Optional)
Your patron gives you an amulet, a talisman that can aid the wearer when the need is great. When the wearer fails an ability check, they can add a d4 to the roll, potentially turning the roll into a success. This benefit can be used a number of times equal to your proficiency bonus, and all expended uses are restored when you finish a long rest.
If you lose the talisman, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and it destroys the previous amulet. The talisman turns to ash when you die.` },
    ASI(4),
    ASI(8),
    { level: 11, name: 'Mystic Arcanum (6th level)', desc: `At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th-level spell from the warlock spell list as this arcanum.

You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.

At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th-level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest.` },
    ASI(12),
    { level: 13, name: 'Mystic Arcanum (7th level)', desc: `At 13th level, you choose one 7th-level warlock spell to be your arcanum.` },
    { level: 15, name: 'Mystic Arcanum (8th level)', desc: `At 15th level, you choose one 8th-level warlock spell to be your arcanum.` },
    ASI(16),
    { level: 17, name: 'Mystic Arcanum (9th level)', desc: `At 17th level, you choose one 9th-level warlock spell to be your arcanum.` },
    ASI(19),
    { level: 20, name: 'Eldritch Master', desc: `At 20th level, you can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature. Once you use this feature, you must finish a long rest before you can use it again.` }
  ],
  subclasses: [
    {
      key: 'archfey', name: 'The Archfey', source: 'PHB',
      desc: `Your patron is a lord or lady of the fey, a creature of legend who holds secrets that were forgotten before the mortal races were born. This being's motivations are often inscrutable, and sometimes whimsical, and might involve a striving for greater magical power or the settling of age-old grudges. Beings of this sort include the Prince of Frost; the Queen of Air and Darkness, ruler of the Gloaming Court; Titania of the Summer Court; her consort Oberon, the Green Lord; Hyrsam, the Prince of Fools; and ancient hags.`,
      features: [
        { level: 1, name: 'Expanded Spell List', desc: `The Archfey lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.
1st: faerie fire, sleep
2nd: calm emotions, phantasmal force
3rd: blink, plant growth
4th: dominate beast, greater invisibility
5th: dominate person, seeming` },
        { level: 1, name: 'Fey Presence', desc: `Starting at 1st level, your patron bestows upon you the ability to project the beguiling and fearsome presence of the fey. As an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. The creatures that fail their saving throws are all charmed or frightened by you (your choice) until the end of your next turn.

Once you use this feature, you can't use it again until you finish a short or long rest.` },
        { level: 6, name: 'Misty Escape', desc: `Starting at 6th level, you can vanish in a puff of mist in response to harm. When you take damage, you can use your reaction to turn invisible and teleport up to 60 feet to an unoccupied space you can see. You remain invisible until the start of your next turn or until you attack or cast a spell.

Once you use this feature, you can't use it again until you finish a short or long rest.` },
        { level: 10, name: 'Beguiling Defenses', desc: `Beginning at 10th level, your patron teaches you how to turn the mind-affecting magic of your enemies against them. You are immune to being charmed, and when another creature attempts to charm you, you can use your reaction to attempt to turn the charm back on that creature. The creature must succeed on a Wisdom saving throw against your warlock spell save DC or be charmed by you for 1 minute or until the creature takes any damage.` },
        { level: 14, name: 'Dark Delirium', desc: `Starting at 14th level, you can plunge a creature into an illusory realm. As an action, choose a creature that you can see within 60 feet of you. It must make a Wisdom saving throw against your warlock spell save DC. On a failed save, it is charmed or frightened by you (your choice) for 1 minute or until your concentration is broken (as if you are concentrating on a spell). This effect ends early if the creature takes any damage.

Until this illusion ends, the creature thinks it is lost in a misty realm, the appearance of which you choose. The creature can see and hear only itself, you, and the illusion.

You must finish a short or long rest before you can use this feature again.` }
      ]
    },
    {
      key: 'fiend', name: 'The Fiend', source: 'PHB',
      desc: `You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even if you strive against those aims. Such beings desire the corruption or destruction of all things, ultimately including you. Fiends powerful enough to forge a pact include demon lords such as Demogorgon, Orcus, Fraz'Urb-luu, and Baphomet; archdevils such as Asmodeus, Dispater, Mephistopheles, and Belial; pit fiends and balors that are especially mighty; and ultroloths and other lords of the yugoloths.`,
      features: [
        { level: 1, name: 'Expanded Spell List', desc: `The Fiend lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.
1st: burning hands, command
2nd: blindness/deafness, scorching ray
3rd: fireball, stinking cloud
4th: fire shield, wall of fire
5th: flame strike, hallow` },
        { level: 1, name: 'Dark One\'s Blessing', desc: `Starting at 1st level, when you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1).` },
        { level: 6, name: 'Dark One\'s Own Luck', desc: `Starting at 6th level, you can call on your patron to alter fate in your favor. When you make an ability check or a saving throw, you can use this feature to add a d10 to your roll. You can do so after seeing the initial roll but before any of the roll's effects occur.

Once you use this feature, you can't use it again until you finish a short or long rest.` },
        { level: 10, name: 'Fiendish Resilience', desc: `Starting at 10th level, you can choose one damage type when you finish a short or long rest. You gain resistance to that damage type until you choose a different one with this feature. Damage from magical weapons or silver weapons ignores this resistance.` },
        { level: 14, name: 'Hurl Through Hell', desc: `Starting at 14th level, when you hit a creature with an attack, you can use this feature to instantly transport the target through the lower planes. The creature disappears and hurtles through a nightmare landscape.

At the end of your next turn, the target returns to the space it previously occupied, or the nearest unoccupied space. If the target is not a fiend, it takes 10d10 psychic damage as it reels from its horrific experience.

Once you use this feature, you can't use it again until you finish a long rest.` }
      ]
    },
    {
      key: 'great-old-one', name: 'The Great Old One', source: 'PHB',
      desc: `Your patron is a mysterious entity whose nature is utterly foreign to the fabric of reality. It might come from the Far Realm, the space beyond reality, or it could be one of the elder gods known only in legends. Its motives are incomprehensible to mortals, and its knowledge so immense and ancient that even the greatest libraries pale in comparison to the vast secrets it holds. The Great Old One might be unaware of your existence or entirely indifferent to you, but the secrets you have learned allow you to draw your magic from it.

Entities of this type include Ghaunadaur, called That Which Lurks; Tharizdun, the Chained God; Dendar, the Night Serpent; Zargon, the Returner; Great Cthulhu; and other unfathomable beings.`,
      features: [
        { level: 1, name: 'Expanded Spell List', desc: `The Great Old One lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.
1st: dissonant whispers, tasha's hideous laughter
2nd: detect thoughts, phantasmal force
3rd: clairvoyance, sending
4th: dominate beast, evard's black tentacles
5th: dominate person, telekinesis` },
        { level: 1, name: 'Awakened Mind', desc: `Starting at 1st level, your alien knowledge gives you the ability to touch the minds of other creatures. You can telepathically speak to any creature you can see within 30 feet of you. You don't need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language.` },
        { level: 6, name: 'Entropic Ward', desc: `At 6th level, you learn to magically ward yourself against attack and to turn an enemy's failed strike into good luck for yourself. When a creature makes an attack roll against you, you can use your reaction to impose disadvantage on that roll. If the attack misses you, your next attack roll against the creature has advantage if you make it before the end of your next turn.

Once you use this feature, you can't use it again until you finish a short or long rest.` },
        { level: 10, name: 'Thought Shield', desc: `Starting at 10th level, your thoughts can't be read by telepathy or other means unless you allow it. You also have resistance to psychic damage, and whenever a creature deals psychic damage to you, that creature takes the same amount of damage that you do.` },
        { level: 14, name: 'Create Thrall', desc: `At 14th level, you gain the ability to infect a humanoid's mind with the alien magic of your patron. You can use your action to touch an incapacitated humanoid. That creature is then charmed by you until a remove curse spell is cast on it, the charmed condition is removed from it, or you use this feature again.

You can communicate telepathically with the charmed creature as long as the two of you are on the same plane of existence.` }
      ]
    },
    {
      key: 'celestial', name: 'The Celestial', source: 'XGE',
      desc: `Your patron is a powerful being of the Upper Planes. You have bound yourself to an ancient empyrean, solar, ki-rin, unicorn, or other entity that resides in the planes of everlasting bliss. Your pact with that being allows you to experience the barest touch of the holy light that illuminates the multiverse.

Being connected to such power can cause changes in your behavior and beliefs. You might find yourself driven to annihilate the undead, to defeat fiends, and to protect the innocent. At times, your heart might also be filled with a longing for the celestial realm of your patron, a desire to wander that paradise for the rest of your days.`,
      features: [
        { level: 1, name: 'Expanded Spell List', desc: `The Celestial lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.
1st: cure wounds, guiding bolt
2nd: flaming sphere, lesser restoration
3rd: daylight, revivify
4th: guardian of faith, wall of fire
5th: flame strike, greater restoration` },
        { level: 1, name: 'Bonus Cantrips', desc: `At 1st level, you learn the light and sacred flame cantrips. They count as warlock cantrips for you, but they don't count against your number of cantrips known.` },
        { level: 1, name: 'Healing Light', desc: `At 1st level, you gain the ability to channel celestial energy to heal wounds. You have a pool of d6s that you spend to fuel this healing. The number of dice in the pool equals 1 + your warlock level.

As a bonus action, you can heal one creature you can see within 60 feet of you, spending dice from the pool. The maximum number of dice you can spend at once equals your Charisma modifier (minimum of one die). Roll the dice you spend, add them together, and restore a number of hit points equal to the total.

Your pool regains all expended dice when you finish a long rest.` },
        { level: 6, name: 'Radiant Soul', desc: `Starting at 6th level, your link to the Celestial allows you to serve as a conduit for radiant energy. You have resistance to radiant damage, and when you cast a spell that deals radiant or fire damage, you can add your Charisma modifier to one radiant or fire damage roll of that spell against one of its targets.` },
        { level: 10, name: 'Celestial Resilience', desc: `Starting at 10th level, you gain temporary hit points whenever you finish a short or long rest. These temporary hit points equal your warlock level + your Charisma modifier. Additionally, choose up to five creatures you can see at the end of the rest. Those creatures each gain temporary hit points equal to half your warlock level + your Charisma modifier.` },
        { level: 14, name: 'Searing Vengeance', desc: `Starting at 14th level, the radiant energy you channel allows you to resist death. When you have to make a death saving throw at the start of your turn, you can instead spring back to your feet with a burst of radiant energy. You regain hit points equal to half your hit point maximum, and then you can stand up if you so choose. Each creature of your choice that is within 30 feet of you takes radiant damage equal to 2d8 + your Charisma modifier, and it is blinded until the end of the current turn.

Once you use this feature, you can't use it again until you finish a long rest.` }
      ]
    },
    {
      key: 'hexblade', name: 'The Hexblade', source: 'XGE',
      desc: `You have made your pact with a mysterious entity from the Shadowfell—a force that manifests in sentient magic weapons carved from the stuff of shadow. The mighty sword Blackrazor is the most notable of these weapons, which have been spread across the multiverse over the ages. The shadowy force behind these weapons can offer power to warlocks who form pacts with it. Many hexblade warlocks create weapons that emulate those formed in the Shadowfell. Others forgo such arms, content to weave the dark magic of that plane into their spellcasting.

Because the Raven Queen is known to have forged the first of these weapons, many sages speculate that she and the force are one and that the weapons, along with hexblade warlocks, are tools she uses to manipulate events on the Material Plane to her inscrutable ends.`,
      features: [
        { level: 1, name: 'Expanded Spell List', desc: `The Hexblade lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.
1st: shield, wrathful smite
2nd: blur, branding smite
3rd: blink, elemental weapon
4th: phantasmal killer, staggering smite
5th: banishing smite, cone of cold` },
        { level: 1, name: 'Hexblade\'s Curse', desc: `Starting at 1st level, you gain the ability to place a baleful curse on someone. As a bonus action, choose one creature you can see within 30 feet of you. The target is cursed for 1 minute. The curse ends early if the target dies, you die, or you are incapacitated. Until the curse ends, you gain the following benefits:

- You gain a bonus to damage rolls against the cursed target. The bonus equals your proficiency bonus.
- Any attack roll you make against the cursed target is a critical hit on a roll of 19 or 20 on the d20.
- If the cursed target dies, you regain hit points equal to your warlock level + your Charisma modifier (minimum of 1 hit point).

You can't use this feature again until you finish a short or long rest.` },
        { level: 1, name: 'Hex Warrior', desc: `At 1st level, you acquire the training necessary to effectively arm yourself for battle. You gain proficiency with medium armor, shields, and martial weapons.

Whenever you finish a long rest, you can touch one weapon that you are proficient with and that lacks the two-handed property. When you attack with that weapon, you can use your Charisma modifier, instead of Strength or Dexterity, for the attack and damage rolls. This benefit lasts until you finish a long rest. If you later gain the Pact of the Blade feature, this benefit extends to every pact weapon you conjure with that feature, no matter the weapon's type.` },
        { level: 6, name: 'Accursed Specter', desc: `Starting at 6th level, you can curse the soul of a person you slay, temporarily binding it to your service. When you slay a humanoid, you can cause its spirit to rise from its corpse as a specter, the statistics for which are in the Monster Manual. When the specter appears, it gains temporary hit points equal to half your warlock level. Roll initiative for the specter, which has its own turns. It obeys your verbal commands, and it gains a special bonus to its attack rolls equal to your Charisma modifier (minimum of +0).

The specter remains in your service until the end of your next long rest, at which point it vanishes to the afterlife.

Once you bind a specter with this feature, you can't use the feature again until you finish a long rest.` },
        { level: 10, name: 'Armor of Hexes', desc: `At 10th level, your hex grows more powerful. If the target cursed by your Hexblade's Curse hits you with an attack roll, you can use your reaction to roll a d6. On a 4 or higher, the attack instead misses you, regardless of its roll.` },
        { level: 14, name: 'Master of Hexes', desc: `Starting at 14th level, you can spread your Hexblade's Curse from a slain creature to another creature. When the creature cursed by your Hexblade's Curse dies, you can apply the curse to a different creature you can see within 30 feet of you, provided you aren't incapacitated. When you apply the curse in this way, you don't regain hit points from the death of the previously cursed creature.` }
      ]
    },
    {
      key: 'fathomless', name: 'The Fathomless', source: 'TCE',
      desc: `You have plunged into a pact with the deeps. An entity of the ocean, the Elemental Plane of Water, or another otherworldly sea now allows you to draw on its thalassic power. Is it merely using you to learn about terrestrial realms, or does it want you to open cosmic floodgates and drown the world?`,
      features: [
        { level: 1, name: 'Expanded Spell List', desc: `The Fathomless lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.
1st: create or destroy water, thunderwave
2nd: gust of wind, silence
3rd: lightning bolt, sleet storm
4th: control water, summon elemental (water only)
5th: bigby's hand (appears as a tentacle), cone of cold` },
        { level: 1, name: 'Tentacle of the Deeps', desc: `You can magically summon a spectral tentacle that strikes at your foes. As a bonus action, you create a 10-foot-long tentacle at a point you can see within 60 feet of you. The tentacle lasts for 1 minute or until you use this feature to create another tentacle.

When you create the tentacle, you can make a melee spell attack against one creature within 10 feet of it. On a hit, the target takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn. When you reach 10th level in this class, the damage increases to 2d8.

As a bonus action on your turn, you can move the tentacle up to 30 feet and repeat the attack.

You can summon the tentacle a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.` },
        { level: 1, name: 'Gift of the Sea', desc: `You gain a swimming speed of 40 feet, and you can breathe underwater.` },
        { level: 6, name: 'Oceanic Soul', desc: `You are now even more at home in the depths. You gain resistance to cold damage. In addition, when you are fully submerged, any creature that is also fully submerged can understand your speech, and you can understand theirs.` },
        { level: 6, name: 'Guardian Coil', desc: `Your Tentacle of the Deeps can defend you and others, interposing itself between them and harm. When you or a creature you can see takes damage while within 10 feet of the tentacle, you can use your reaction to choose one of those creatures and reduce the damage to that creature by 1d8. When you reach 10th level in this class, the damage reduced by the tentacle increases to 2d8.` },
        { level: 10, name: 'Grasping Tentacles', desc: `You learn the Evard's black tentacles spell. It counts as a warlock spell for you, but it doesn't count against the number of spells you know. You can also cast it once without a spell slot, and you regain the ability to do so when you finish a long rest.

Whenever you cast this spell, your patron's magic bolsters you, granting you a number of temporary hit points equal to your warlock level. Moreover, damage can't break your concentration on this spell.` },
        { level: 14, name: 'Fathomless Plunge', desc: `You can magically open temporary conduits to watery destinations. As an action, you can teleport yourself and up to five other willing creatures that you can see within 30 feet of you. Amid a whirl of tentacles, you all vanish and then reappear up to 1 mile away in a body of water you've seen (pond size or larger) or within 1 mile of you (your choice).

Once you use this feature, you can't use it again until you finish a short or long rest.` }
      ]
    },
    {
      key: 'genie', name: 'The Genie', source: 'TCE',
      desc: `You have made a pact with one of the rarest kinds of genie, a noble genie. Such entities rule vast fiefs on the Elemental Planes and have great influence over lesser genies and elemental creatures. Noble genies are varied in their motivations, but most are arrogant and wield power that rivals that of lesser deities. They delight in turning the table on mortals, who often bind genies into servitude, and readily enter into pacts that expand their reach.`,
      features: [
        { level: 1, name: 'Expanded Spell List', desc: `The Genie lets you choose from an expanded list of spells when you learn a warlock spell. The Genie Spells table shows the genie spells that are added to the warlock spell list for you, along with the spells associated in the table with your patron's kind: dao, djinni, efreeti, or marid.

1st: detect evil and good
2nd: phantasmal force
3rd: create food and water
4th: phantasmal killer
5th: creation
9th: wish

Dao Spells
1st: sanctuary, 2nd: spike growth, 3rd: meld into stone, 4th: stone shape, 5th: wall of stone
Djinni Spells
1st: thunderwave, 2nd: gust of wind, 3rd: wind wall, 4th: greater invisibility, 5th: seeming
Efreeti Spells
1st: burning hands, 2nd: scorching ray, 3rd: fireball, 4th: fire shield, 5th: flame strike
Marid Spells
1st: fog cloud, 2nd: blur, 3rd: sleet storm, 4th: control water, 5th: cone of cold` },
        { level: 1, name: 'Genie\'s Vessel', desc: `Your patron gifts you a magical vessel that grants you a measure of the genie's power. The vessel is a Tiny object, and you can use it as a spellcasting focus for your warlock spells. You decide what the object is, or you can determine what it is randomly by rolling on the Genie's Vessel table.

While you are touching the vessel, you can use it in the following ways:
- Bottled Respite. As an action, you can magically vanish and enter your vessel, which remains in the space you left. The interior of the vessel is an extradimensional space in the shape of a 20-foot-radius cylinder, 20 feet high, and resembles your vessel. The interior is appointed with cushions and tables and is a comfortable temperature. While inside, you can hear the area around your vessel as if you were in its space. You can remain inside the vessel up to a number of hours equal to twice your proficiency bonus. You exit the vessel early if you use a bonus action to leave, if you die, or if the vessel is destroyed. When you exit the vessel, you appear in the unoccupied space closest to it. Any objects left in the vessel remain there until carried out, and if the vessel is destroyed, every object stored there harmlessly appears in the unoccupied spaces closest to the vessel's former space. Once you enter the vessel, you can't enter again until you finish a long rest.
- Genie's Wrath. Once during each of your turns when you hit with an attack roll, you can deal extra damage to the target equal to your proficiency bonus. The type of this damage is determined by your patron: bludgeoning (dao), thunder (djinni), fire (efreeti), or cold (marid).

The vessel's AC equals your spell save DC. Its hit points equal your warlock level plus your proficiency bonus, and it is immune to poison and psychic damage.
If the vessel is destroyed or you lose it, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and the previous vessel is destroyed if it still exists. The vessel vanishes in a flare of elemental magic when you die.` },
        { level: 6, name: 'Elemental Gift', desc: `You begin to take on characteristics of your patron's kind. You now have resistance to a damage type determined by your patron's kind: bludgeoning (dao), thunder (djinni), fire (efreeti), or cold (marid).

In addition, as a bonus action, you can give yourself a flying speed of 30 feet that lasts for 10 minutes, during which you can hover. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.` },
        { level: 10, name: 'Sanctuary Vessel', desc: `When you enter your Genie's Vessel via the Bottled Respite feature, you can now choose up to five willing creatures that you can see within 30 feet of you, and the chosen creatures are drawn into the vessel with you.

As a bonus action, you can eject any number of creatures from the vessel, and everyone is ejected if you leave or die or if the vessel is destroyed.

In addition, anyone (including you) who remains within the vessel for at least 10 minutes gains the benefit of a short rest, and anyone can add your proficiency bonus to the number of hit points they regain if they spend any Hit Dice as part of a short rest there.` },
        { level: 14, name: 'Limited Magic', desc: `You can entreat your patron to grant you a small wish. As an action, you can speak your desire to your Genie's Vessel, requesting the effect of one spell that is 6th level or lower and has a casting time of 1 action. The spell can be from any class's spell list, and you don't need to meet the requirements in that spell, including costly components; the spell simply takes effect as part of this action.

Once you use this feature, you can't use it again until you finish 1d4 long rests.` }
      ]
    }
  ],
}
