// Structured class/subclass mechanics consumed by compute.js and the builder.
// Descriptive text lives in classData/*.js; this file only holds rules facts
// (PHB, XGE, TCE tables). Spells are referenced by name and resolved in compute.js.

// Expand {level: value} breakpoints into a 20-entry array (index 0 = level 1).
const byLevel = (breaks) => {
  const out = []
  let cur = 0
  for (let l = 1; l <= 20; l++) {
    if (breaks[l] !== undefined) cur = breaks[l]
    out.push(cur)
  }
  return out
}
// Subclass spell table: { classLevel: [spell names] }.
const spellsAt = (o) => o

const STD_ASI = [4, 8, 12, 16, 19]

export const FIGHTING_STYLES = {
  archery: { name: 'Archery', attackBonus: { ranged: 2 } },
  defense: { name: 'Defense', acArmored: 1 },
  dueling: { name: 'Dueling' },
  'great-weapon-fighting': { name: 'Great Weapon Fighting' },
  protection: { name: 'Protection' },
  'two-weapon-fighting': { name: 'Two-Weapon Fighting' },
}

export const CLASS_MECHANICS = {
  artificer: {
    asiLevels: STD_ASI,
    subclassLevel: 3,
    casting: { type: 'halfUp', ability: 'int', startLevel: 1, list: 'artificer', prepared: 'half', cantrips: byLevel({ 1: 2, 10: 3, 14: 4 }) },
    infusionsKnown: byLevel({ 2: 4, 6: 6, 10: 8, 14: 10, 18: 12 }),
    infusedItems: byLevel({ 2: 2, 6: 3, 10: 4, 14: 5, 18: 6 }),
    subclasses: {
      alchemist: { tools: ["Alchemist's supplies"], alwaysPrepared: spellsAt({ 3: ['Healing Word', 'Ray of Sickness'], 5: ['Flaming Sphere', "Melf's Acid Arrow"], 9: ['Gaseous Form', 'Mass Healing Word'], 13: ['Blight', 'Death Ward'], 17: ['Cloudkill', 'Raise Dead'] }) },
      armorer: { armor: ['Heavy armor'], tools: ["Smith's tools"], alwaysPrepared: spellsAt({ 3: ['Magic Missile', 'Thunderwave'], 5: ['Mirror Image', 'Shatter'], 9: ['Hypnotic Pattern', 'Lightning Bolt'], 13: ['Fire Shield', 'Greater Invisibility'], 17: ['Passwall', 'Wall of Force'] }) },
      artillerist: { tools: ["Woodcarver's tools"], alwaysPrepared: spellsAt({ 3: ['Shield', 'Thunderwave'], 5: ['Scorching Ray', 'Shatter'], 9: ['Fireball', 'Wind Wall'], 13: ['Ice Storm', 'Wall of Fire'], 17: ['Cone of Cold', 'Wall of Force'] }) },
      'battle-smith': { weapons: ['Martial weapons'], tools: ["Smith's tools"], alwaysPrepared: spellsAt({ 3: ['Heroism', 'Shield'], 5: ['Branding Smite', 'Warding Bond'], 9: ['Aura of Vitality', 'Conjure Barrage'], 13: ['Aura of Purity', 'Fire Shield'], 17: ['Banishing Smite', 'Mass Cure Wounds'] }) },
    },
  },
  barbarian: {
    asiLevels: STD_ASI,
    subclassLevel: 3,
    unarmoredAC: { abilities: ['dex', 'con'], shieldOk: true },
    speedBonus: [{ level: 5, amount: 10, noHeavyArmor: true }],
    subclasses: {},
  },
  bard: {
    asiLevels: STD_ASI,
    subclassLevel: 3,
    casting: { type: 'full', ability: 'cha', startLevel: 1, list: 'bard', prepared: null, cantrips: byLevel({ 1: 2, 4: 3, 10: 4 }), known: [4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 15, 16, 18, 19, 19, 20, 22, 22, 22] },
    expertise: [{ level: 3, count: 2 }, { level: 10, count: 2 }],
    jackOfAllTrades: 2,
    subclasses: {
      lore: { skillChoice: { count: 3, from: 'any' } },
      valor: { armor: ['Medium armor', 'Shields'], weapons: ['Martial weapons'] },
      swords: { armor: ['Medium armor'], weapons: ['Scimitar'] },
    },
  },
  cleric: {
    asiLevels: STD_ASI,
    subclassLevel: 1,
    casting: { type: 'full', ability: 'wis', startLevel: 1, list: 'cleric', prepared: 'level', cantrips: byLevel({ 1: 3, 4: 4, 10: 5 }) },
    subclasses: {
      knowledge: { skillChoice: { count: 2, from: ['arcana', 'history', 'nature', 'religion'], expertise: true }, languageChoice: 2, alwaysPrepared: spellsAt({ 1: ['Command', 'Identify'], 3: ['Augury', 'Suggestion'], 5: ['Nondetection', 'Speak with Dead'], 7: ['Arcane Eye', 'Confusion'], 9: ['Legend Lore', 'Scrying'] }) },
      life: { armor: ['Heavy armor'], alwaysPrepared: spellsAt({ 1: ['Bless', 'Cure Wounds'], 3: ['Lesser Restoration', 'Spiritual Weapon'], 5: ['Beacon of Hope', 'Revivify'], 7: ['Death Ward', 'Guardian of Faith'], 9: ['Mass Cure Wounds', 'Raise Dead'] }) },
      light: { bonusCantrips: ['Light'], alwaysPrepared: spellsAt({ 1: ['Burning Hands', 'Faerie Fire'], 3: ['Flaming Sphere', 'Scorching Ray'], 5: ['Daylight', 'Fireball'], 7: ['Guardian of Faith', 'Wall of Fire'], 9: ['Flame Strike', 'Scrying'] }) },
      nature: { armor: ['Heavy armor'], skillChoice: { count: 1, from: ['animal-handling', 'nature', 'survival'] }, cantripChoice: { count: 1, list: 'druid' }, alwaysPrepared: spellsAt({ 1: ['Animal Friendship', 'Speak with Animals'], 3: ['Barkskin', 'Spike Growth'], 5: ['Plant Growth', 'Wind Wall'], 7: ['Dominate Beast', 'Grasping Vine'], 9: ['Insect Plague', 'Tree Stride'] }) },
      tempest: { armor: ['Heavy armor'], weapons: ['Martial weapons'], alwaysPrepared: spellsAt({ 1: ['Fog Cloud', 'Thunderwave'], 3: ['Gust of Wind', 'Shatter'], 5: ['Call Lightning', 'Sleet Storm'], 7: ['Control Water', 'Ice Storm'], 9: ['Destructive Wave', 'Insect Plague'] }) },
      trickery: { alwaysPrepared: spellsAt({ 1: ['Charm Person', 'Disguise Self'], 3: ['Mirror Image', 'Pass without Trace'], 5: ['Blink', 'Dispel Magic'], 7: ['Dimension Door', 'Polymorph'], 9: ['Dominate Person', 'Modify Memory'] }) },
      war: { armor: ['Heavy armor'], weapons: ['Martial weapons'], alwaysPrepared: spellsAt({ 1: ['Divine Favor', 'Shield of Faith'], 3: ['Magic Weapon', 'Spiritual Weapon'], 5: ["Crusader's Mantle", 'Spirit Guardians'], 7: ['Freedom of Movement', 'Stoneskin'], 9: ['Flame Strike', 'Hold Monster'] }) },
      forge: { armor: ['Heavy armor'], tools: ["Smith's tools"], alwaysPrepared: spellsAt({ 1: ['Identify', 'Searing Smite'], 3: ['Heat Metal', 'Magic Weapon'], 5: ['Elemental Weapon', 'Protection from Energy'], 7: ['Fabricate', 'Wall of Fire'], 9: ['Animate Objects', 'Creation'] }) },
      grave: { bonusCantrips: ['Spare the Dying'], alwaysPrepared: spellsAt({ 1: ['Bane', 'False Life'], 3: ['Gentle Repose', 'Ray of Enfeeblement'], 5: ['Revivify', 'Vampiric Touch'], 7: ['Blight', 'Death Ward'], 9: ['Antilife Shell', 'Raise Dead'] }) },
      order: { armor: ['Heavy armor'], skillChoice: { count: 1, from: ['intimidation', 'persuasion'] }, alwaysPrepared: spellsAt({ 1: ['Command', 'Heroism'], 3: ['Hold Person', 'Zone of Truth'], 5: ['Mass Healing Word', 'Slow'], 7: ['Compulsion', 'Locate Creature'], 9: ['Commune', 'Dominate Person'] }) },
      peace: { skillChoice: { count: 1, from: ['insight', 'performance', 'persuasion'] }, alwaysPrepared: spellsAt({ 1: ['Heroism', 'Sanctuary'], 3: ['Aid', 'Warding Bond'], 5: ['Beacon of Hope', 'Sending'], 7: ['Aura of Purity', "Otiluke's Resilient Sphere"], 9: ['Greater Restoration', "Rary's Telepathic Bond"] }) },
      twilight: { armor: ['Heavy armor'], weapons: ['Martial weapons'], darkvision: 300, alwaysPrepared: spellsAt({ 1: ['Faerie Fire', 'Sleep'], 3: ['Moonbeam', 'See Invisibility'], 5: ['Aura of Vitality', "Leomund's Tiny Hut"], 7: ['Aura of Life', 'Greater Invisibility'], 9: ['Circle of Power', 'Mislead'] }) },
    },
  },
  druid: {
    asiLevels: STD_ASI,
    subclassLevel: 2,
    casting: { type: 'full', ability: 'wis', startLevel: 1, list: 'druid', prepared: 'level', cantrips: byLevel({ 1: 2, 4: 3, 10: 4 }) },
    subclasses: {
      land: { cantripChoice: { count: 1, list: 'druid' } },
      spores: { bonusCantrips: ['Chill Touch'], alwaysPrepared: spellsAt({ 3: ['Blindness/Deafness', 'Gentle Repose'], 5: ['Animate Dead', 'Gaseous Form'], 7: ['Blight', 'Confusion'], 9: ['Cloudkill', 'Contagion'] }) },
      stars: { bonusCantrips: ['Guidance'], alwaysPrepared: spellsAt({ 2: ['Guiding Bolt'] }) },
      wildfire: { alwaysPrepared: spellsAt({ 2: ['Burning Hands', 'Cure Wounds'], 3: ['Flaming Sphere', 'Scorching Ray'], 5: ['Plant Growth', 'Revivify'], 7: ['Aura of Life', 'Fire Shield'], 9: ['Flame Strike', 'Mass Cure Wounds'] }) },
    },
  },
  fighter: {
    asiLevels: [4, 6, 8, 12, 14, 16, 19],
    subclassLevel: 3,
    fightingStyle: { level: 1, options: ['archery', 'defense', 'dueling', 'great-weapon-fighting', 'protection', 'two-weapon-fighting'] },
    subclasses: {
      'eldritch-knight': { casting: { type: 'third', ability: 'int', startLevel: 3, list: 'wizard', prepared: null, cantrips: byLevel({ 3: 2, 10: 3 }), known: [0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13] } },
      'battle-master': { toolChoice: { count: 1, from: "One type of artisan's tools" } },
      'arcane-archer': { skillChoice: { count: 1, from: ['arcana', 'nature'] } },
      cavalier: { skillChoice: { count: 1, from: ['animal-handling', 'history', 'insight', 'performance', 'persuasion'] } },
      samurai: { skillChoice: { count: 1, from: ['history', 'insight', 'performance', 'persuasion'] } },
      'rune-knight': { tools: ["Smith's tools"], languages: ['Giant'] },
    },
  },
  monk: {
    asiLevels: STD_ASI,
    subclassLevel: 3,
    unarmoredAC: { abilities: ['dex', 'wis'], shieldOk: false },
    speedBonus: [{ level: 2, amount: 10, unarmored: true }, { level: 6, amount: 15, unarmored: true }, { level: 10, amount: 20, unarmored: true }, { level: 14, amount: 25, unarmored: true }, { level: 18, amount: 30, unarmored: true }],
    subclasses: {
      'drunken-master': { skills: ['performance'], tools: ["Brewer's supplies"] },
      kensei: { toolChoice: { count: 1, from: "Calligrapher's supplies or painter's supplies" } },
      mercy: { skills: ['insight', 'medicine'], tools: ['Herbalism kit'] },
    },
  },
  paladin: {
    asiLevels: STD_ASI,
    subclassLevel: 3,
    casting: { type: 'half', ability: 'cha', startLevel: 2, list: 'paladin', prepared: 'half' },
    fightingStyle: { level: 2, options: ['defense', 'dueling', 'great-weapon-fighting', 'protection'] },
    subclasses: {
      devotion: { alwaysPrepared: spellsAt({ 3: ['Protection from Evil and Good', 'Sanctuary'], 5: ['Lesser Restoration', 'Zone of Truth'], 9: ['Beacon of Hope', 'Dispel Magic'], 13: ['Freedom of Movement', 'Guardian of Faith'], 17: ['Commune', 'Flame Strike'] }) },
      ancients: { alwaysPrepared: spellsAt({ 3: ['Ensnaring Strike', 'Speak with Animals'], 5: ['Misty Step', 'Moonbeam'], 9: ['Plant Growth', 'Protection from Energy'], 13: ['Ice Storm', 'Stoneskin'], 17: ['Commune with Nature', 'Tree Stride'] }) },
      vengeance: { alwaysPrepared: spellsAt({ 3: ['Bane', "Hunter's Mark"], 5: ['Hold Person', 'Misty Step'], 9: ['Haste', 'Protection from Energy'], 13: ['Banishment', 'Dimension Door'], 17: ['Hold Monster', 'Scrying'] }) },
      oathbreaker: { alwaysPrepared: spellsAt({ 3: ['Hellish Rebuke', 'Inflict Wounds'], 5: ['Crown of Madness', 'Darkness'], 9: ['Animate Dead', 'Bestow Curse'], 13: ['Blight', 'Confusion'], 17: ['Contagion', 'Dominate Person'] }) },
      conquest: { alwaysPrepared: spellsAt({ 3: ['Armor of Agathys', 'Command'], 5: ['Hold Person', 'Spiritual Weapon'], 9: ['Bestow Curse', 'Fear'], 13: ['Dominate Beast', 'Stoneskin'], 17: ['Cloudkill', 'Dominate Person'] }) },
      redemption: { alwaysPrepared: spellsAt({ 3: ['Sanctuary', 'Sleep'], 5: ['Calm Emotions', 'Hold Person'], 9: ['Counterspell', 'Hypnotic Pattern'], 13: ["Otiluke's Resilient Sphere", 'Stoneskin'], 17: ['Hold Monster', 'Wall of Force'] }) },
      glory: { alwaysPrepared: spellsAt({ 3: ['Guiding Bolt', 'Heroism'], 5: ['Enhance Ability', 'Magic Weapon'], 9: ['Haste', 'Protection from Energy'], 13: ['Compulsion', 'Freedom of Movement'], 17: ['Commune', 'Flame Strike'] }) },
      watchers: { alwaysPrepared: spellsAt({ 3: ['Alarm', 'Detect Magic'], 5: ['Moonbeam', 'See Invisibility'], 9: ['Counterspell', 'Nondetection'], 13: ['Aura of Purity', 'Banishment'], 17: ['Hold Monster', 'Scrying'] }) },
    },
  },
  ranger: {
    asiLevels: STD_ASI,
    subclassLevel: 3,
    casting: { type: 'half', ability: 'wis', startLevel: 2, list: 'ranger', prepared: null, known: [0, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11] },
    fightingStyle: { level: 2, options: ['archery', 'defense', 'dueling', 'two-weapon-fighting'] },
    subclasses: {
      'gloom-stalker': { alwaysPrepared: spellsAt({ 3: ['Disguise Self'], 5: ['Rope Trick'], 9: ['Fear'], 13: ['Greater Invisibility'], 17: ['Seeming'] }) },
      'horizon-walker': { alwaysPrepared: spellsAt({ 3: ['Protection from Evil and Good'], 5: ['Misty Step'], 9: ['Haste'], 13: ['Banishment'], 17: ['Teleportation Circle'] }) },
      'fey-wanderer': { skillChoice: { count: 1, from: ['deception', 'performance', 'persuasion'] }, alwaysPrepared: spellsAt({ 3: ['Charm Person'], 5: ['Misty Step'], 9: ['Dispel Magic'], 13: ['Dimension Door'], 17: ['Mislead'] }) },
      swarmkeeper: { bonusCantrips: ['Mage Hand'], alwaysPrepared: spellsAt({ 3: ['Faerie Fire'], 5: ['Web'], 9: ['Gaseous Form'], 13: ['Arcane Eye'], 17: ['Insect Plague'] }) },
    },
  },
  rogue: {
    asiLevels: [4, 8, 10, 12, 16, 19],
    subclassLevel: 3,
    expertise: [{ level: 1, count: 2 }, { level: 6, count: 2 }],
    expertiseTools: ["Thieves' tools"],
    subclasses: {
      'arcane-trickster': { bonusCantrips: ['Mage Hand'], casting: { type: 'third', ability: 'int', startLevel: 3, list: 'wizard', prepared: null, cantrips: byLevel({ 3: 2, 10: 3 }), known: [0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13] } },
      assassin: { tools: ['Disguise kit', "Poisoner's kit"] },
      mastermind: { tools: ['Disguise kit', 'Forgery kit', 'One type of gaming set'], languageChoice: 2 },
      scout: { skills: ['nature', 'survival'], expertiseSkills: ['nature', 'survival'] },
    },
  },
  sorcerer: {
    asiLevels: STD_ASI,
    subclassLevel: 1,
    casting: { type: 'full', ability: 'cha', startLevel: 1, list: 'sorcerer', prepared: null, cantrips: byLevel({ 1: 4, 4: 5, 10: 6 }), known: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15] },
    subclasses: {
      draconic: { hpPerLevel: 1, unarmoredAC: { base: 13, abilities: ['dex'], shieldOk: true }, ancestryChoice: true },
      'divine-soul': { extraLists: ['cleric'] },
      'clockwork-soul': { alwaysPrepared: spellsAt({ 1: ['Alarm', 'Protection from Evil and Good'], 3: ['Aid', 'Lesser Restoration'], 5: ['Dispel Magic', 'Protection from Energy'], 7: ['Freedom of Movement', 'Summon Construct'], 9: ['Greater Restoration', 'Wall of Force'] }) },
    },
  },
  warlock: {
    asiLevels: STD_ASI,
    subclassLevel: 1,
    casting: { type: 'pact', ability: 'cha', startLevel: 1, list: 'warlock', prepared: null, cantrips: byLevel({ 1: 2, 4: 3, 10: 4 }), known: [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15] },
    subclasses: {
      archfey: { expandedList: ['Faerie Fire', 'Sleep', 'Calm Emotions', 'Phantasmal Force', 'Blink', 'Plant Growth', 'Dominate Beast', 'Greater Invisibility', 'Dominate Person', 'Seeming'] },
      fiend: { expandedList: ['Burning Hands', 'Command', 'Blindness/Deafness', 'Scorching Ray', 'Fireball', 'Stinking Cloud', 'Fire Shield', 'Wall of Fire', 'Flame Strike', 'Hallow'] },
      'great-old-one': { expandedList: ['Dissonant Whispers', "Tasha's Hideous Laughter", 'Detect Thoughts', 'Phantasmal Force', 'Clairvoyance', 'Sending', 'Dominate Beast', "Evard's Black Tentacles", 'Dominate Person', 'Telekinesis'] },
      celestial: { bonusCantrips: ['Light', 'Sacred Flame'], expandedList: ['Cure Wounds', 'Guiding Bolt', 'Flaming Sphere', 'Lesser Restoration', 'Daylight', 'Revivify', 'Guardian of Faith', 'Wall of Fire', 'Flame Strike', 'Greater Restoration'] },
      hexblade: { armor: ['Medium armor', 'Shields'], weapons: ['Martial weapons'], expandedList: ['Shield', 'Wrathful Smite', 'Blur', 'Branding Smite', 'Blink', 'Elemental Weapon', 'Phantasmal Killer', 'Staggering Smite', 'Banishing Smite', 'Cone of Cold'] },
      fathomless: { expandedList: ['Create or Destroy Water', 'Thunderwave', 'Gust of Wind', 'Silence', 'Lightning Bolt', 'Sleet Storm', 'Control Water', 'Summon Elemental', "Bigby's Hand", 'Cone of Cold'] },
    },
  },
  wizard: {
    asiLevels: STD_ASI,
    subclassLevel: 2,
    casting: { type: 'full', ability: 'int', startLevel: 1, list: 'wizard', prepared: 'level', cantrips: byLevel({ 1: 3, 4: 4, 10: 5 }) },
    subclasses: {
      bladesinging: { armor: ['Light armor'], weapons: ['One type of one-handed melee weapon'], skills: ['performance'] },
    },
  },
}

// Ranged weapons, used by the Archery fighting style.
export const isRangedAttack = (weapon) => weapon?.kind === 'ranged'
