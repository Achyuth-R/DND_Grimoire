// D&D 5e SRD race data (open license).
export const RACES = [
  {
    key: 'dwarf',
    name: 'Dwarf',
    icon: '⛏️',
    asi: { con: 2 },
    speed: 25,
    size: 'Medium',
    age: 'Dwarves mature at the same rate as humans but are considered young until 50; they live about 350 years.',
    desc: 'Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, the echoing of picks and hammers in deep mines and blazing forges, a commitment to clan and tradition, and a burning hatred of goblins and orcs – these common threads unite all dwarves.',
    traits: [
      { name: 'Darkvision', desc: 'Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.' },
      { name: 'Dwarven Resilience', desc: 'You have advantage on saving throws against poison, and you have resistance against poison damage.' },
      { name: 'Dwarven Combat Training', desc: 'You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.' },
      { name: 'Tool Proficiency', desc: 'You gain proficiency with the artisan\'s tools of your choice: smith\'s tools, brewer\'s supplies, or mason\'s tools.' },
      { name: 'Stonecunning', desc: 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.' },
    ],
    languages: ['Common', 'Dwarvish'],
    subraces: [
      { key: 'hill', name: 'Hill Dwarf', asi: { wis: 1 }, traits: [{ name: 'Dwarven Toughness', desc: 'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.' }] },
      { key: 'mountain', name: 'Mountain Dwarf', asi: { str: 2 }, traits: [{ name: 'Dwarven Armor Training', desc: 'You have proficiency with light and medium armor.' }] },
    ],
  },
  {
    key: 'elf',
    name: 'Elf',
    icon: '🏹',
    asi: { dex: 2 },
    speed: 30,
    size: 'Medium',
    age: 'Elves reach physical maturity around 25 but the elven understanding of adulthood goes beyond that; they can live to be 750.',
    desc: 'Elves are a magical people of otherworldly grace, living in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze.',
    traits: [
      { name: 'Darkvision', desc: 'Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.' },
      { name: 'Keen Senses', desc: 'You have proficiency in the Perception skill.' },
      { name: 'Fey Ancestry', desc: 'You have advantage on saving throws against being charmed, and magic can\'t put you to sleep.' },
      { name: 'Trance', desc: 'Elves don\'t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.' },
    ],
    languages: ['Common', 'Elvish'],
    subraces: [
      { 
        key: 'high', name: 'High Elf', asi: { int: 1 }, 
        traits: [
          { name: 'Elf Weapon Training', desc: 'You have proficiency with the longsword, shortsword, shortbow, and longbow.' },
          { name: 'Cantrip', desc: 'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.' },
          { name: 'Extra Language', desc: 'You can speak, read, and write one extra language of your choice.' }
        ] 
      },
      { 
        key: 'wood', name: 'Wood Elf', asi: { wis: 1 }, 
        traits: [
          { name: 'Elf Weapon Training', desc: 'You have proficiency with the longsword, shortsword, shortbow, and longbow.' },
          { name: 'Fleet of Foot', desc: 'Your base walking speed increases to 35 feet.' },
          { name: 'Mask of the Wild', desc: 'You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.' }
        ] 
      },
    ],
  },
  {
    key: 'halfling',
    name: 'Halfling',
    icon: '🥧',
    asi: { dex: 2 },
    speed: 25,
    size: 'Small',
    age: 'A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.',
    desc: 'The comforts of home are the goals of most halflings\' lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies.',
    traits: [
      { name: 'Lucky', desc: 'When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.' },
      { name: 'Brave', desc: 'You have advantage on saving throws against being frightened.' },
      { name: 'Halfling Nimbleness', desc: 'You can move through the space of any creature that is of a size larger than yours.' },
    ],
    languages: ['Common', 'Halfling'],
    subraces: [
      { key: 'lightfoot', name: 'Lightfoot Halfling', asi: { cha: 1 }, traits: [{ name: 'Naturally Stealthy', desc: 'You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.' }] },
      { key: 'stout', name: 'Stout Halfling', asi: { con: 1 }, traits: [{ name: 'Stout Resilience', desc: 'You have advantage on saving throws against poison, and you have resistance against poison damage.' }] },
    ],
  },
  {
    key: 'human',
    name: 'Human',
    icon: '👤',
    asi: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 },
    speed: 30,
    size: 'Medium',
    age: 'Humans reach adulthood in their late teens and live less than a century.',
    desc: 'Humans are the most adaptable and ambitious people among the common races. They have widely varying tastes, morals, and customs in the many different lands where they have settled.',
    traits: [],
    languages: ['Common', 'One extra language of your choice'],
    subraces: [],
  },
  {
    key: 'dragonborn',
    name: 'Dragonborn',
    icon: '🐲',
    asi: { str: 2, cha: 1 },
    speed: 30,
    size: 'Medium',
    age: 'Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.',
    desc: 'Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail.',
    traits: [
      { name: 'Draconic Ancestry', desc: 'You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type.' },
      { name: 'Breath Weapon', desc: 'You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one.' },
      { name: 'Damage Resistance', desc: 'You have resistance to the damage type associated with your draconic ancestry.' },
    ],
    languages: ['Common', 'Draconic'],
    subraces: [],
  },
  {
    key: 'gnome',
    name: 'Gnome',
    icon: '⚙️',
    asi: { int: 2 },
    speed: 25,
    size: 'Small',
    age: 'Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.',
    desc: 'A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their close-knit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter.',
    traits: [
      { name: 'Darkvision', desc: 'Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.' },
      { name: 'Gnome Cunning', desc: 'You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.' },
    ],
    languages: ['Common', 'Gnomish'],
    subraces: [
      { key: 'forest', name: 'Forest Gnome', asi: { dex: 1 }, traits: [
        { name: 'Natural Illusionist', desc: 'You know the minor illusion cantrip. Intelligence is your spellcasting ability for it.' },
        { name: 'Speak with Small Beasts', desc: 'Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts.' }
      ] },
      { key: 'rock', name: 'Rock Gnome', asi: { con: 1 }, traits: [
        { name: 'Artificer\'s Lore', desc: 'Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.' },
        { name: 'Tinker', desc: 'You have proficiency with artisan\'s tools (tinker\'s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours, or when you use your action to dismantle it.' }
      ] },
    ],
  },
  {
    key: 'half-elf',
    name: 'Half-Elf',
    icon: '🤝',
    asi: { cha: 2, other: 'Two other ability scores of your choice increase by 1' },
    speed: 30,
    size: 'Medium',
    age: 'Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.',
    desc: 'Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves.',
    traits: [
      { name: 'Darkvision', desc: 'Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.' },
      { name: 'Fey Ancestry', desc: 'You have advantage on saving throws against being charmed, and magic can\'t put you to sleep.' },
      { name: 'Skill Versatility', desc: 'You gain proficiency in two skills of your choice.' },
    ],
    languages: ['Common', 'Elvish', 'One extra language of your choice'],
    subraces: [],
  },
  {
    key: 'half-orc',
    name: 'Half-Orc',
    icon: '🪓',
    asi: { str: 2, con: 1 },
    speed: 30,
    size: 'Medium',
    age: 'Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.',
    desc: 'Half-orcs\' grayish pigmentation, sloping foreheads, jutting jaws, prominent teeth, and towering builds make their orcish heritage plain for all to see.',
    traits: [
      { name: 'Darkvision', desc: 'Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.' },
      { name: 'Menacing', desc: 'You gain proficiency in the Intimidation skill.' },
      { name: 'Relentless Endurance', desc: 'When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can\'t use this feature again until you finish a long rest.' },
      { name: 'Savage Attacks', desc: 'When you score a critical hit with a melee weapon attack, you can roll one of the weapon\'s damage dice one additional time and add it to the extra damage of the critical hit.' },
    ],
    languages: ['Common', 'Orc'],
    subraces: [],
  },
  {
    key: 'tiefling',
    name: 'Tiefling',
    icon: '😈',
    asi: { int: 1, cha: 2 },
    speed: 30,
    size: 'Medium',
    age: 'Tieflings mature at the same rate as humans but live a few years longer.',
    desc: 'To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling.',
    traits: [
      { name: 'Darkvision', desc: 'Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.' },
      { name: 'Hellish Resistance', desc: 'You have resistance to fire damage.' },
      { name: 'Infernal Legacy', desc: 'You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.' },
    ],
    languages: ['Common', 'Infernal'],
    subraces: [],
  }
];

export const getRace = (key) => RACES.find(r => r.key === key)
