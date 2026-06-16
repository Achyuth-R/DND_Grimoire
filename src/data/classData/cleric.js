// Cleric — PHB base + domains from PHB, XGE, TCE
const ASI = (level) => ({ level, name: 'Ability Score Improvement', desc: 'Increase one ability score by 2, or two ability scores by 1 each (max 20). You can forgo this to take a feat.' })

export default {
  key: 'cleric',
  name: 'Cleric',
  hitDie: 8,
  primary: ['wis'],
  saves: ['wis', 'cha'],
  icon: '✨',
  color: '#f1c40f',
  desc: `Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. No ordinary priest, a cleric is imbued with divine magic.

Divine magic, as the name suggests, is the power of the gods, flowing from them into the world. Clerics are conduits for that power, manifesting it as miraculous effects. The gods don't grant this power to everyone who seeks it, but only to those chosen to fulfill a high calling.

Harnessing divine magic doesn't rely on study or training. A cleric might learn formulaic prayers and ancient rites, but the ability to cast cleric spells relies on devotion and an intuitive sense of a deity's wishes.

Clerics combine the helpful magic of healing and inspiring their allies with spells that harm and hinder foes. They can provoke awe and dread, lay curses of plague or poison, and even call down flames from heaven to consume their enemies. For those evildoers who will benefit most from a mace to the head, clerics depend on their combat training to let them wade into melee with the power of the gods on their side.

You must have a Wisdom score of 13 or higher in order to multiclass in or out of this class.`,
  armor: ['Light armor', 'Medium armor', 'Shields'],
  weapons: ['Simple weapons'],
  tools: [],
  skillsChoose: 2,
  skillsFrom: ['history', 'insight', 'medicine', 'persuasion', 'religion'],
  spellcaster: 'full',
  spellAbility: 'wis',
  features: [
    { level: 1, name: 'Spellcasting', desc: `As a conduit for divine power, you can cast cleric spells.

Cantrips
At 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table.

Preparing and Casting Spells
The Cleric table shows how many spell slots you have to cast your cleric spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.
You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots.
For example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.
You can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.

Spellcasting Ability
Wisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.

Spell save DC = 8 + your proficiency bonus + your Wisdom modifier
Spell attack modifier = your proficiency bonus + your Wisdom modifier

Ritual Casting
You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared.

Spellcasting Focus
You can use a holy symbol (see "Equipment") as a spellcasting focus for your cleric spells.` },
    { level: 1, name: 'Divine Domain', desc: `Choose one domain related to your deity. Each domain is detailed in their own feature, and your choice grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.

Domain Spells
Each domain has a list of spells—its domain spells—that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you.` },
    { level: 2, name: 'Channel Divinity', desc: `At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.

When you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.

Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.

Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.` },
    { level: 2, name: 'Channel Divinity: Turn Undead', desc: `As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.

A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.` },
    ASI(4),
    { level: 5, name: 'Destroy Undead', desc: `Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating (CR) is at or below a certain threshold, as shown in the Destroy Undead table.

Cleric Level 5th: Destroys undead of CR 1/2 or lower
Cleric Level 8th: Destroys undead of CR 1 or lower
Cleric Level 11th: Destroys undead of CR 2 or lower
Cleric Level 14th: Destroys undead of CR 3 or lower
Cleric Level 17th: Destroys undead of CR 4 or lower` },
    ASI(8),
    { level: 10, name: 'Divine Intervention', desc: `Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.

Imploring your deity's aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The DM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate.

If your deity intervenes, you can't use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.

At 20th level, your call for intervention succeeds automatically, no roll required.` },
    ASI(12),
    ASI(16),
    ASI(19),
  ],
  subclasses: [
    {
      key: 'knowledge', name: 'Knowledge Domain', source: 'PHB',
      desc: `The gods of knowledge - including Oghma, Boccob, Gilean, Aureon, and Thoth - value learning and understanding above all. Some teach that knowledge is to be gathered and shared in libraries and universities, or promote the practical knowledge of craft and invention. Some deities hoard knowledge and keep its secrets to themselves. And some promise their followers that they will gain tremendous power if they unlock the secrets of the multiverse. Followers of these gods study esoteric lore, collect old tomes, delve into the secret places of the earth, and learn all they can. Some gods of knowledge promote the practical knowledge of craft and invention, including smith deities like Gond, Reorx, Onatar, Moradin, Hephaestus, and Goibhniu.`,
      features: [
        { level: 1, name: 'Blessings of Knowledge', desc: `At 1st level, you learn two languages of your choice. You also become proficient in your choice of two of the following skills: Arcana, History, Nature, or Religion.

Your proficiency bonus is doubled for any ability check you make that uses either of those skills.` },
        { level: 2, name: 'Channel Divinity: Knowledge of the Ages', desc: `Starting at 2nd level, you can use your Channel Divinity to tap into a divine well of knowledge. As an action, you choose one skill or tool. For 10 minutes, you have proficiency with the chosen skill or tool.` },
        { level: 6, name: 'Channel Divinity: Read Thoughts', desc: `At 6th level, you can use your Channel Divinity to read a creature's thoughts. You can then use your access to the creature's mind to command it.

As an action, choose one creature that you can see within 60 feet of you. That creature must make a Wisdom saving throw. If the creature succeeds on the saving throw, you can't use this feature on it again until you finish a long rest.

If the creature fails its save, you can read its surface thoughts (those foremost in its mind, reflecting its current emotions and what it is actively thinking about) when it is within 60 feet of you. This effect lasts for 1 minute.

During that time, you can use your action to end this effect and cast the suggestion spell on the creature without expending a spell slot. The target automatically fails its saving throw against the spell.` },
        { level: 8, name: 'Potent Spellcasting', desc: `Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.` },
        { level: 17, name: 'Visions of the Past', desc: `Starting at 17th level, you can call up visions of the past that relate to an object you hold or your immediate surroundings. You spend at least 1 minute in meditation and prayer, then receive dreamlike, shadowy glimpses of recent events. You can meditate in this way for a number of minutes equal to your Wisdom score and must maintain concentration during that time, as if you were casting a spell.

Once you use this feature, you can't use it again until you finish a short or long rest.

Object Reading. Holding an object as you meditate, you can see visions of the object's previous owner. After meditating for 1 minute, you learn how the owner acquired and lost the object, as well as the most recent significant event involving the object and that owner. If the object was owned by another creature in the recent past (within a number of days equal to your Wisdom score), you can spend 1 additional minute for each owner to learn the same information about that creature.

Area Reading. As you meditate, you see visions of recent events in your immediate vicinity (a room, street, tunnel, clearing, or the like, up to a 50-foot cube), going back a number of days equal to your Wisdom score. For each minute you meditate, you learn about one significant event, beginning with the most recent. Significant events typically involve powerful emotions, such as battles and betrayals, marriages and murders, births and funerals. However, they might also include more mundane events that are nevertheless important in your current situation.` },
      ],
    },
    {
      key: 'life', name: 'Life Domain', source: 'PHB',
      desc: `The Life domain focuses on the vibrant positive energy - one of the fundamental forces of the universe - that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities (such as Chauntea, Arawai, and Demeter), sun gods (such as Lathander, Pelor, and Re-Horakhty), gods of healing or endurance (such as Ilmater, Mishakal, Apollo, and Diancecht), and gods of home and community (such as Hestia, Hathor, and Boldrci).`,
      features: [
        { level: 1, name: 'Bonus Proficiency', desc: `When you choose this domain at 1st level, you gain proficiency with heavy armor.` },
        { level: 1, name: 'Disciple of Life', desc: `Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level.` },
        { level: 2, name: 'Channel Divinity: Preserve Life', desc: `Starting at 2nd level, you can use your Channel Divinity to heal the badly injured.

As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can't use this feature on an undead or a construct.` },
        { level: 6, name: 'Blessed Healer', desc: `Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell's level.` },
        { level: 8, name: 'Divine Strike', desc: `At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8.` },
        { level: 17, name: 'Supreme Healing', desc: `Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points to a creature, you restore 12.` },
      ],
    },
    {
      key: 'light', name: 'Light Domain', source: 'PHB',
      desc: `Gods of light - including Helm, Lathander, Pholtus, Branchala, the Silver Flame, Belenus, Apollo, and Re-Horakhty - promote the ideals of rebirth and renewal, truth, vigilance, and beauty, often using the symbol of the sun. Some of these gods are portrayed as the sun itself or as a charioteer who guides the sun across the sky. Others are tireless sentinels whose eyes pierce every shadow and see through every deception. Some are deities of beauty and artistry, who teach that art is a vehicle for the soul's improvement. Clerics of a god of light are enlightened souls infused with radiance and the power of their gods' discerning vision, charged with chasing away lies and burning away darkness.`,
      features: [
        { level: 1, name: 'Bonus Cantrip', desc: `When you choose this domain at 1st level, you gain the light cantrip if you don't already know it.` },
        { level: 1, name: 'Warding Flare', desc: `Also at 1st level, you can interpose divine light between yourself and an attacking enemy. When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker hits or misses. An attacker that can't be blinded is immune to this feature.

You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.` },
        { level: 2, name: 'Channel Divinity: Radiance of the Dawn', desc: `Starting at 2nd level, you can use your Channel Divinity to harness sunlight, banishing darkness and dealing radiant damage to your foes.

As an action, you present your holy symbol, and any magical darkness within 30 feet of you is dispelled. Additionally, each hostile creature within 30 feet of you must make a Constitution saving throw. A creature takes radiant damage equal to 2d10 + your cleric level on a failed saving throw, and half as much damage on a successful one. A creature that has total cover from you is not affected.` },
        { level: 6, name: 'Improved Flare', desc: `Starting at 6th level, you can also use your Warding Flare feature when a creature that you can see within 30 feet of you attacks a creature other than you.` },
        { level: 8, name: 'Potent Spellcasting', desc: `Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.` },
        { level: 17, name: 'Corona of Light', desc: `Starting at 17th level, you can use your action to activate an aura of sunlight that lasts for 1 minute or until you dismiss it using another action. You emit bright light in a 60-foot radius and dim light 30 feet beyond that. Your enemies in the bright light have disadvantage on saving throws against any spell that deals fire or radiant damage.` },
      ],
    },
    {
      key: 'nature', name: 'Nature Domain', source: 'PHB',
      desc: `Gods of nature are as varied as the natural world itself; from inscrutable gods of the deep forests (such as Silvanus, Obad-Hai, Chislev, Balinor, and Pan) to friendly deities associated with particular springs and groves (such as Eldath). Druids revere nature as a whole and might serve one of these deities, practicing mysterious rites and reciting all-but-forgotten prayers in their own secret tongue. But many of these gods have clerics as well, champions who take a more active role in advancing the interests of a particular nature god. These clerics might hunt the evil monstrosities that despoil the woodlands, bless the harvest of the faithful, or wither the crops of those who anger their gods.`,
      features: [
        { level: 1, name: 'Acolyte of Nature', desc: `At 1st level, you learn one druid cantrip of your choice. You also gain proficiency in one of the following skills of your choice: Animal Handling, Nature, or Survival.` },
        { level: 1, name: 'Bonus Proficiency', desc: `Also at 1st level, you gain proficiency with heavy armor.` },
        { level: 2, name: 'Channel Divinity: Charm Animals and Plants', desc: `Starting at 2nd level, you can use your Channel Divinity to charm animals and plants.

As an action, you present your holy symbol and invoke the name of your deity. Each beast or plant creature that can see you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is charmed by you for 1 minute or until it takes damage. While it is charmed by you, it is friendly to you and other creatures you designate.` },
        { level: 6, name: 'Dampen Elements', desc: `Starting at 6th level, when you or a creature within 30 feet of you takes acid, cold, fire, lightning, or thunder damage, you can use your reaction to grant resistance to the creature against that instance of the damage.` },
        { level: 8, name: 'Divine Strike', desc: `At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 cold, fire, or lightning damage (your choice) to the target. When you reach 14th level, the extra damage increases to 2d8.` },
        { level: 17, name: 'Master of Nature', desc: `Starting at 17th level, you gain the ability to command animals and plant creatures. While creatures are charmed by your Charm Animals and Plants feature, you can take a bonus action on your turn to verbally command what each of those creatures will do on its next turn.` },
      ],
    },
    {
      key: 'tempest', name: 'Tempest Domain', source: 'PHB',
      desc: `Gods whose portfolios include the Tempest domain - including Talos, Umberlee, Kord, Zeboim, the Devourer, Zeus, and Thor - govern storms, sea, and, sky. They include gods of lightning and thunder, gods of earthquakes, some fire gods, and certain gods of violence, physical strength, and courage. In some pantheons, a god of this domain rules over other deities and is known for swift justice delivered by thunderbolts. In the pantheons of seafaring people, gods of this domain are ocean deities and the patrons of sailors. Tempest gods send their clerics to inspire fear in the common folk, either to keep those folk on the path of righteousness or to encourage them to offer sacrifices of propitiation to ward off divine wrath.`,
      features: [
        { level: 1, name: 'Bonus Proficiencies', desc: `At 1st level, you gain proficiency with martial weapons and heavy armor.` },
        { level: 1, name: 'Wrath of the Storm', desc: `Also at 1st level, you can thunderously rebuke attackers. When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw. The creature takes 2d8 lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a successful one.

You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.` },
        { level: 2, name: 'Channel Divinity: Destructive Wrath', desc: `Starting at 2nd level, you can use your Channel Divinity to wield the power of the storm with unchecked ferocity.

When you roll lightning or thunder damage, you can use your Channel Divinity to deal maximum damage, instead of rolling.` },
        { level: 6, name: 'Thunderbolt Strike', desc: `Starting at 6th level, when you deal lightning damage to a creature that is Large or smaller, you can also push it up to 10 feet away from you.` },
        { level: 8, name: 'Divine Strike', desc: `At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 thunder damage to the target. When you reach 14th level, the extra damage increases to 2d8.` },
        { level: 17, name: 'Stormborn', desc: `At 17th level, you have a flying speed equal to your current walking speed whenever you are not underground or indoors.` },
      ],
    },
    {
      key: 'trickery', name: 'Trickery Domain', source: 'PHB',
      desc: `Gods of trickery - such as Tymora, Beshaba, Olidammara, the Traveler, Garl Glittergold, and Loki - are mischief-makers and instigators who stand as a constant challenge to the accepted order among both gods and mortals. They're patrons of thieves, scoundrels, gamblers, rebels, and liberators. Their clerics are a disruptive force in the world, puncturing pride, mocking tyrants, stealing from the rich, freeing captives, and flouting hollow traditions. They prefer subterfuge, pranks, deception, and theft rather than direct confrontation.`,
      features: [
        { level: 1, name: 'Blessing of the Trickster', desc: `Starting when you choose this domain at 1st level, you can use your action to touch a willing creature other than yourself to give it advantage on Dexterity (Stealth) checks. This blessing lasts for 1 hour or until you use this feature again.` },
        { level: 2, name: 'Channel Divinity: Invoke Duplicity', desc: `Starting at 2nd level, you can use your Channel Divinity to create an illusory duplicate of yourself.

As an action, you create a perfect illusion of yourself that lasts for 1 minute, or until you lose your concentration (as if you were concentrating on a spell). The illusion appears in an unoccupied space that you can see within 30 feet of you. As a bonus action on your turn, you can move the illusion up to 30 feet to a space you can see, but it must remain within 120 feet of you.

For the duration, you can cast spells as though you were in the illusion's space, but you must use your own senses. Additionally, when both you and your illusion are within 5 feet of a creature that can see the illusion, you have advantage on attack rolls against that creature, given how distracting the illusion is to the target.` },
        { level: 6, name: 'Channel Divinity: Cloak of Shadows', desc: `Starting at 6th level, you can use your Channel Divinity to vanish.

As an action, you become invisible until the end of your next turn. You become visible if you attack or cast a spell.` },
        { level: 8, name: 'Divine Strike', desc: `At 8th level, you gain the ability to infuse your weapon strikes with poison - a gift from your deity. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 poison damage to the target. When you reach 14th level, the extra damage increases to 2d8.` },
        { level: 17, name: 'Improved Duplicity', desc: `At 17th level, you can create up to four duplicates of yourself, instead of one, when you use Invoke Duplicity. As a bonus action on your turn, you can move any number of them up to 30 feet, to a maximum range of 120 feet.` },
      ],
    },
    {
      key: 'war', name: 'War Domain', source: 'PHB',
      desc: `War has many manifestations. It can make heroes of ordinary people. It can be desperate and horrific, with acts of cruelty and cowardice eclipsing instances of excellence and courage. In either case, the gods of war watch over warriors and reward them for their great deeds. The clerics of such gods excel in battle, inspiring others to fight the good fight or offering acts of violence as prayers. Gods of war include champions of honor and chivalry (such as Torm, Heironeous, and Kiri-Jolith) as well as gods of destruction and pillage (such as Erythnul, the Fury, Gruumsh, and Ares) and gods of conquest and domination (such as Bane, Hextor, and Maglubiyet). Other war gods (such as Tempus, Nike, and Nuada) take a more neutral stance, promoting war in all its manifestations and supporting warriors in any circumstance.`,
      features: [
        { level: 1, name: 'Bonus Proficiencies', desc: `At 1st level, you gain proficiency with martial weapons and heavy armor.` },
        { level: 1, name: 'War Priest', desc: `From 1st level, your god delivers bolts of inspiration to you while you are engaged in battle. When you use the Attack action, you can make one weapon attack as a bonus action.

You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.` },
        { level: 2, name: 'Channel Divinity: Guided Strike', desc: `Starting at 2nd level, you can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.` },
        { level: 6, name: 'Channel Divinity: War God\'s Blessing', desc: `At 6th level, when a creature within 30 feet of you makes an attack roll, you can use your reaction to grant that creature a +10 bonus to the roll, using your Channel Divinity. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.` },
        { level: 8, name: 'Divine Strike', desc: `At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 damage of the same type dealt by the weapon to the target. When you reach 14th level, the extra damage increases to 2d8.` },
        { level: 17, name: 'Avatar of Battle', desc: `At 17th level, you gain resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.` },
      ],
    },
    {
      key: 'forge', name: 'Forge Domain', source: 'XGE',
      desc: `The gods of the forge are patrons of artisans who work with metal, from a humble blacksmith who keeps a village in horseshoes and plow blades to the mighty elf artisan whose diamond-tipped arrows of mithral have felled demon lords. The gods of the forge teach that, with patience and hard work, even the most intractable metal can be transformed from a lump of ore to a beautifully wrought object. Clerics of these deities search for objects lost to the forces of darkness, liberate mines overrun by orcs, and uncover rare and wondrous materials necessary to create potent magic items. Followers of these gods take great pride in their work, and they are willing to craft and use heavy armor and powerful weapons to protect them. Deities of this domain include Gond, Reorx, Onatar, Moradin, Hephaestus, and Goibhniu.`,
      features: [
        { level: 1, name: 'Bonus Proficiencies', desc: `When you choose this domain at 1st level, you gain proficiency with heavy armor and smith's tools.` },
        { level: 1, name: 'Blessing of the Forge', desc: `At 1st level, you gain the ability to imbue magic into a weapon or armor. At the end of a long rest, you can touch one nonmagical object that is a suit of armor or a simple or martial weapon. Until the end of your next long rest or until you die, the object becomes a magic item, granting a +1 bonus to AC if it's armor or a +1 bonus to attack and damage rolls if it's a weapon.

Once you use this feature, you can't use it again until you finish a long rest.` },
        { level: 2, name: 'Channel Divinity: Artisan\'s Blessing', desc: `Starting at 2nd level, you can use your Channel Divinity to create simple items.

You conduct an hour-long ritual that crafts a nonmagical item that must include some metal: a simple or martial weapon, a suit of armor, ten pieces of ammunition, a set of tools, or another metal object (see chapter 5, "Equipment," in the Player's Handbook for examples of these items). The creation is completed at the end of the hour, coalescing in an unoccupied space of your choice on a surface within 5 feet of you.

The thing you create can be something that is worth no more than 100 gp. As part of this ritual, you must lay out metal, which can include coins, with a value equal to the creation. The metal irretrievably coalesces and transforms into the creation at the ritual's end, magically forming even nonmetal parts of the creation.

The ritual can create a duplicate of a nonmagical item that contains metal, such as a key, if you possess the original during the ritual.` },
        { level: 6, name: 'Soul of the Forge', desc: `Starting at 6th level, your mastery of the forge grants you special abilities:
- You gain resistance to fire damage.
- While wearing heavy armor, you gain a +1 bonus to AC.` },
        { level: 8, name: 'Divine Strike', desc: `At 8th level, you gain the ability to infuse your weapon strikes with the fiery power of the forge. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 fire damage to the target. When you reach 14th level, the extra damage increases to 2d8.` },
        { level: 17, name: 'Saint of Forge and Fire', desc: `At 17th level, your blessed affinity with fire and metal becomes more powerful:
- You gain immunity to fire damage.
- While wearing heavy armor, you have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.` },
      ],
    },
    {
      key: 'grave', name: 'Grave Domain', source: 'XGE',
      desc: `Gods of the grave watch over the line between life and death. To these deities, death and the afterlife are a foundational part of the multiverse's workings. To resist death, or to desecrate the dead's rest, is an abomination. Deities of the grave include Kelemvor, Wee Jas, the ancestral spirits of the Undying Court, Hades, Anubis, and Osiris. These deities teach their followers to respect the dead and pay them due homage. Followers of these deities seek to put restless spirits to rest, destroy the undead wherever they find them, and ease the suffering of dying creatures. Their magic also allows them to stave off a creature's death, though they refuse to use such magic to extend a creature's lifespan beyond its mortal limits.`,
      features: [
        { level: 1, name: 'Circle of Mortality', desc: `At 1st level, you gain the ability to manipulate the line between life and death. When you would normally roll one or more dice to restore hit points with a spell to a creature at 0 hit points, you instead use the highest number possible for each die.

In addition, you learn the spare the dying cantrip, which doesn't count against the number of cleric cantrips you know. For you, it has a range of 30 feet, and you can cast it as a bonus action.` },
        { level: 1, name: 'Eyes of the Grave', desc: `At 1st level, you gain the ability to occasionally sense the presence of the undead, whose existence is an insult to the natural cycle of life. As an action, you can open your awareness to magically detect undead. Until the end of your next turn, you know the location of any undead within 60 feet of you that isn't behind total cover and that isn't protected from divination magic. This sense doesn't tell you anything about a creature's capabilities or identity.

You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest.` },
        { level: 2, name: 'Channel Divinity: Path to the Grave', desc: `Starting at 2nd level, you can use your Channel Divinity to mark another creature's life force for termination.

As an action, you choose one creature you can see within 30 feet of you, cursing it until the end of your next turn. The next time you or an ally of yours hits the cursed creature with an attack, the creature has vulnerability to all of that attack's damage, and then the curse ends.` },
        { level: 6, name: 'Sentinel at Death\'s Door', desc: `At 6th level, you gain the ability to impede death's progress. As a reaction when you or a creature you can see within 30 feet of you suffers a critical hit, you can turn that hit into a normal hit. Any effects triggered by a critical hit are canceled.

You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest.` },
        { level: 8, name: 'Potent Spellcasting', desc: `Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.` },
        { level: 17, name: 'Keeper of Souls', desc: `Starting at 17th level, you can seize a trace of vitality from a parting soul and use it to heal the living. When an enemy you can see dies within 60 feet of you, you or one creature of your choice that is within 60 feet of you regains hit points equal to the enemy's number of Hit Dice. You can use this feature only once per turn. If you do so, you can't use it again until the start of your next turn.` },
      ],
    },
    {
      key: 'order', name: 'Order Domain', source: 'TCE',
      desc: `The Order Domain represents discipline, as well as devotion to the laws that govern a society, an institution, or a philosophy. Clerics of Order meditate on logic and justice as they serve their gods, examples of which appear in the Order Deities table.

Clerics of Order believe that well-crafted laws establish legitimate hierarchies, and those selected by law to lead must be obeyed. Those who obey must do so to the best of their ability, and if those who lead fail to protect the law, they must be replaced. In this manner, law weaves a web of obligations that create order and security in a chaotic multiverse.`,
      features: [
        { level: 1, name: 'Bonus Proficiencies', desc: `When you choose this domain at 1st level, you gain proficiency with heavy armor. You also gain proficiency in the Intimidation or Persuasion skill (your choice).` },
        { level: 1, name: 'Voice of Authority', desc: `Starting at 1st level, you can invoke the power of law to embolden an ally to attack. If you cast a spell with a spell slot of 1st level or higher and target an ally with the spell, that ally can use their reaction immediately after the spell to make one weapon attack against a creature of your choice that you can see.

If the spell targets more than one ally, you choose the ally who can make the attack.` },
        { level: 2, name: 'Channel Divinity: Order\'s Demand', desc: `Starting at 2nd level, you can use your Channel Divinity to exert an intimidating presence over others.

As an action, you present your holy symbol, and each creature of your choice that can see or hear you within 30 feet of you must succeed on a Wisdom saving throw or be charmed by you until the end of your next turn or until the charmed creature takes any damage. You can also cause any of the charmed creatures to drop what they are holding when they fail the saving throw.` },
        { level: 6, name: 'Embodiment of the Law', desc: `At 6th level, you become remarkably adept at channeling magical energy to compel others.

If you cast a spell of the enchantment school using a spell slot of 1st level or higher, you can change the spell's casting time to 1 bonus action for this casting, provided the spell's casting time is normally 1 action.

You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.` },
        { level: 8, name: 'Divine Strike', desc: `At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 psychic damage to the target. When you reach 14th level, the extra damage increases to 2d8.` },
        { level: 17, name: 'Order\'s Wrath', desc: `Starting at 17th level, enemies you designate for destruction wilt under the combined efforts of you and your allies. If you deal your Divine Strike damage to a creature on your turn, you can curse that creature until the start of your next turn. The next time one of your allies hits the cursed creature with an attack, the target also takes 2d8 psychic damage, and the curse ends. You can curse a creature in this way only once per turn.` },
      ],
    },
    {
      key: 'peace', name: 'Peace Domain', source: 'TCE',
      desc: `The balm of peace thrives at the heart of healthy communities, between friendly nations, and in the souls of the kindhearted. The gods of peace inspire people of all sorts to resolve conflict and to stand up against those forces that try to prevent peace from flourishing. See the Peace Deities table for a list of some of the gods associated with this domain.

Clerics of the Peace Domain preside over the signing of treaties, and they are often asked to arbitrate in disputes. These clerics' blessings draw people together and help them shoulder one another's burdens, and the clerics' magic aids those who are driven to fight for the way of peace.`,
      features: [
        { level: 1, name: 'Implement of Peace', desc: `When you choose this domain at 1st level, you gain proficiency in the Insight, Performance, or Persuasion skill (your choice).` },
        { level: 1, name: 'Emboldening Bond', desc: `Starting at 1st level, you can forge an empowering bond among people who are at peace with one another. As an action, you can choose a number of willing creatures within 30 feet of you (this can include yourself) equal to your proficiency bonus. You create a magical bond among them for 10 minutes or until you use this feature again. While any bonded creature is within 30 feet of another, the creature can roll a d4 and add the number rolled to an attack roll, an ability check, or a saving throw it makes. Each creature can add the d4 no more than once per turn.

You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.` },
        { level: 2, name: 'Channel Divinity: Balm of Peace', desc: `Starting at 2nd level, you can use your Channel Divinity to make your very presence a soothing balm. As an action, you can move up to your speed, without provoking opportunity attacks, and when you move within 5 feet of any other creature during this action, you can restore a number of hit points to that creature equal to 2d6 + your Wisdom modifier (minimum of 1 hit point). A creature can receive this healing only once whenever you take this action.` },
        { level: 6, name: 'Protective Bond', desc: `Beginning at 6th level, the bond you forge between people helps them protect each other. When a creature affected by your Emboldening Bond feature is about to take damage, a second bonded creature within 30 feet of the first can use its reaction to teleport to an unoccupied space within 5 feet of the first creature. The second creature then takes all the damage instead.` },
        { level: 8, name: 'Potent Spellcasting', desc: `At 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.` },
        { level: 17, name: 'Expansive Bond', desc: `At 17th level, the benefits of your Emboldening Bond and Protective Bond features now work when the creatures are within 60 feet of each other. Moreover, when a creature uses Protective Bond to take someone else's damage, the creature has resistance to that damage.` },
      ],
    },
    {
      key: 'twilight', name: 'Twilight Domain', source: 'TCE',
      desc: `The twilit transition from light into darkness often brings calm and even joy, as the day's labors end and the hours of rest begin. The darkness can also bring terrors, but the gods of twilight guard against the horrors of the night.

Clerics who serve these deities-examples of which appear on the Twilight Deities table-bring comfort to those who seek rest and protect them by venturing into the encroaching darkness to ensure that the dark is a comfort, not a terror.`,
      features: [
        { level: 1, name: 'Bonus Proficiencies', desc: `When you choose this domain at 1st level, you gain proficiency with martial weapons and heavy armor.` },
        { level: 1, name: 'Eyes of Night', desc: `Starting at 1st level, you can see through the deepest gloom. You have darkvision out to a range of 300 feet. In that radius, you can see in dim light as if it were bright light and in darkness as if it were dim light.

As an action, you can magically share the darkvision of this feature with willing creatures you can see within 10 feet of you, up to a number of creatures equal to your Wisdom modifier (minimum of one creature). The shared darkvision lasts for 1 hour. Once you share it, you can't do so again until you finish a long rest, unless you expend a spell slot of any level to share it again.` },
        { level: 1, name: 'Vigilant Blessing', desc: `At 1st level, the night has taught you to be vigilant. As an action, you give one creature you touch (including possibly yourself) advantage on the next initiative roll the creature makes. This benefit ends immediately after the roll or if you use this feature again.` },
        { level: 2, name: 'Channel Divinity: Twilight Sanctuary', desc: `At 2nd level, you can use your Channel Divinity to refresh your allies with soothing twilight.

As an action, you present your holy symbol, and a sphere of twilight emanates from you. The sphere is centered on you, has a 30-foot radius, and is filled with dim light. The sphere moves with you, and it lasts for 1 minute or until you are incapacitated or die. Whenever a creature (including you) ends its turn in the sphere, you can grant that creature one of these benefits:
- You grant it temporary hit points equal to 1d6 + your cleric level.
- You end one effect on it causing it to be charmed or frightened.` },
        { level: 6, name: 'Steps of Night', desc: `Starting at 6th level, you can draw on the mystical power of night to rise into the air. As a bonus action when you are in dim light or darkness, you can magically give yourself a flying speed equal to your walking speed for 1 minute. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.` },
        { level: 8, name: 'Divine Strike', desc: `At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8.` },
        { level: 17, name: 'Twilight Shroud', desc: `At 17th level, the twilight that you summon offers a protecting embrace: you and your allies have half cover while in the sphere created by your Twilight Sanctuary.` },
      ],
    },
  ],
}
