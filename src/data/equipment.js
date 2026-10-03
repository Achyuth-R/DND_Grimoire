// Mundane armor, weapons and starting equipment (PHB ch. 5, TCE for the artificer).

// category: light | medium | heavy. dexCap: null = full Dex, 0 = no Dex.
export const ARMOR = [
  { key: 'padded', name: 'Padded', category: 'light', base: 11, dexCap: null, stealthDis: true },
  { key: 'leather', name: 'Leather', category: 'light', base: 11, dexCap: null },
  { key: 'studded-leather', name: 'Studded leather', category: 'light', base: 12, dexCap: null },
  { key: 'hide', name: 'Hide', category: 'medium', base: 12, dexCap: 2 },
  { key: 'chain-shirt', name: 'Chain shirt', category: 'medium', base: 13, dexCap: 2 },
  { key: 'scale-mail', name: 'Scale mail', category: 'medium', base: 14, dexCap: 2, stealthDis: true },
  { key: 'breastplate', name: 'Breastplate', category: 'medium', base: 14, dexCap: 2 },
  { key: 'half-plate', name: 'Half plate', category: 'medium', base: 15, dexCap: 2, stealthDis: true },
  { key: 'ring-mail', name: 'Ring mail', category: 'heavy', base: 14, dexCap: 0, stealthDis: true },
  { key: 'chain-mail', name: 'Chain mail', category: 'heavy', base: 16, dexCap: 0, strReq: 13, stealthDis: true },
  { key: 'splint', name: 'Splint', category: 'heavy', base: 17, dexCap: 0, strReq: 15, stealthDis: true },
  { key: 'plate', name: 'Plate', category: 'heavy', base: 18, dexCap: 0, strReq: 15, stealthDis: true },
]
export const SHIELD = { key: 'shield', name: 'Shield', bonus: 2 }

// category: simple | martial; kind: melee | ranged.
const W = (key, name, category, kind, damage, type, props = [], range = null) => ({ key, name, category, kind, damage, type, props, range })
export const WEAPONS = [
  W('club', 'Club', 'simple', 'melee', '1d4', 'bludgeoning', ['light']),
  W('dagger', 'Dagger', 'simple', 'melee', '1d4', 'piercing', ['finesse', 'light', 'thrown'], '20/60'),
  W('greatclub', 'Greatclub', 'simple', 'melee', '1d8', 'bludgeoning', ['two-handed']),
  W('handaxe', 'Handaxe', 'simple', 'melee', '1d6', 'slashing', ['light', 'thrown'], '20/60'),
  W('javelin', 'Javelin', 'simple', 'melee', '1d6', 'piercing', ['thrown'], '30/120'),
  W('light-hammer', 'Light hammer', 'simple', 'melee', '1d4', 'bludgeoning', ['light', 'thrown'], '20/60'),
  W('mace', 'Mace', 'simple', 'melee', '1d6', 'bludgeoning'),
  W('quarterstaff', 'Quarterstaff', 'simple', 'melee', '1d6', 'bludgeoning', ['versatile (1d8)']),
  W('sickle', 'Sickle', 'simple', 'melee', '1d4', 'slashing', ['light']),
  W('spear', 'Spear', 'simple', 'melee', '1d6', 'piercing', ['thrown', 'versatile (1d8)'], '20/60'),
  W('light-crossbow', 'Light crossbow', 'simple', 'ranged', '1d8', 'piercing', ['ammunition', 'loading', 'two-handed'], '80/320'),
  W('dart', 'Dart', 'simple', 'ranged', '1d4', 'piercing', ['finesse', 'thrown'], '20/60'),
  W('shortbow', 'Shortbow', 'simple', 'ranged', '1d6', 'piercing', ['ammunition', 'two-handed'], '80/320'),
  W('sling', 'Sling', 'simple', 'ranged', '1d4', 'bludgeoning', ['ammunition'], '30/120'),
  W('battleaxe', 'Battleaxe', 'martial', 'melee', '1d8', 'slashing', ['versatile (1d10)']),
  W('flail', 'Flail', 'martial', 'melee', '1d8', 'bludgeoning'),
  W('glaive', 'Glaive', 'martial', 'melee', '1d10', 'slashing', ['heavy', 'reach', 'two-handed']),
  W('greataxe', 'Greataxe', 'martial', 'melee', '1d12', 'slashing', ['heavy', 'two-handed']),
  W('greatsword', 'Greatsword', 'martial', 'melee', '2d6', 'slashing', ['heavy', 'two-handed']),
  W('halberd', 'Halberd', 'martial', 'melee', '1d10', 'slashing', ['heavy', 'reach', 'two-handed']),
  W('lance', 'Lance', 'martial', 'melee', '1d12', 'piercing', ['reach', 'special']),
  W('longsword', 'Longsword', 'martial', 'melee', '1d8', 'slashing', ['versatile (1d10)']),
  W('maul', 'Maul', 'martial', 'melee', '2d6', 'bludgeoning', ['heavy', 'two-handed']),
  W('morningstar', 'Morningstar', 'martial', 'melee', '1d8', 'piercing'),
  W('pike', 'Pike', 'martial', 'melee', '1d10', 'piercing', ['heavy', 'reach', 'two-handed']),
  W('rapier', 'Rapier', 'martial', 'melee', '1d8', 'piercing', ['finesse']),
  W('scimitar', 'Scimitar', 'martial', 'melee', '1d6', 'slashing', ['finesse', 'light']),
  W('shortsword', 'Shortsword', 'martial', 'melee', '1d6', 'piercing', ['finesse', 'light']),
  W('trident', 'Trident', 'martial', 'melee', '1d6', 'piercing', ['thrown', 'versatile (1d8)'], '20/60'),
  W('war-pick', 'War pick', 'martial', 'melee', '1d8', 'piercing'),
  W('warhammer', 'Warhammer', 'martial', 'melee', '1d8', 'bludgeoning', ['versatile (1d10)']),
  W('whip', 'Whip', 'martial', 'melee', '1d4', 'slashing', ['finesse', 'reach']),
  W('blowgun', 'Blowgun', 'martial', 'ranged', '1', 'piercing', ['ammunition', 'loading'], '25/100'),
  W('hand-crossbow', 'Hand crossbow', 'martial', 'ranged', '1d6', 'piercing', ['ammunition', 'light', 'loading'], '30/120'),
  W('heavy-crossbow', 'Heavy crossbow', 'martial', 'ranged', '1d10', 'piercing', ['ammunition', 'heavy', 'loading', 'two-handed'], '100/400'),
  W('longbow', 'Longbow', 'martial', 'ranged', '1d8', 'piercing', ['ammunition', 'heavy', 'two-handed'], '150/600'),
]

export const getArmor = (key) => ARMOR.find((a) => a.key === key)
export const getWeapon = (key) => WEAPONS.find((w) => w.key === key)

// Weapons matching a "pick any" slot in starting equipment.
export const weaponsFor = (pick) => WEAPONS.filter((w) => {
  if (pick === 'simple') return w.category === 'simple'
  if (pick === 'simple-melee') return w.category === 'simple' && w.kind === 'melee'
  if (pick === 'martial') return w.category === 'martial'
  if (pick === 'martial-melee') return w.category === 'martial' && w.kind === 'melee'
  return false
})

// Starting equipment. Each entry is either { fixed: [items] } or { options: [[items], [items], ...] }.
// Item forms: { weapon, qty }, { armor }, { shield: true }, { pick: 'simple'|'martial'|..., qty }, { gear: 'text' }.
const w = (weapon, qty = 1) => ({ weapon, qty })
const a = (armor) => ({ armor })
const g = (gear) => ({ gear })
const pick = (p, qty = 1) => ({ pick: p, qty })
const shield = { shield: true }

export const STARTING_EQUIPMENT = {
  barbarian: [
    { options: [[w('greataxe')], [pick('martial-melee')]] },
    { options: [[w('handaxe', 2)], [pick('simple')]] },
    { fixed: [g("An explorer's pack"), w('javelin', 4)] },
  ],
  bard: [
    { options: [[w('rapier')], [w('longsword')], [pick('simple')]] },
    { options: [[g("A diplomat's pack")], [g("An entertainer's pack")]] },
    { options: [[g('A lute')], [g('Any other musical instrument')]] },
    { fixed: [a('leather'), w('dagger')] },
  ],
  cleric: [
    { options: [[w('mace')], [w('warhammer')]] },
    { options: [[a('scale-mail')], [a('leather')], [a('chain-mail')]] },
    { options: [[w('light-crossbow'), g('20 bolts')], [pick('simple')]] },
    { options: [[g("A priest's pack")], [g("An explorer's pack")]] },
    { fixed: [shield, g('A holy symbol')] },
  ],
  druid: [
    { options: [[shield], [pick('simple')]] },
    { options: [[w('scimitar')], [pick('simple-melee')]] },
    { fixed: [a('leather'), g("An explorer's pack"), g('A druidic focus')] },
  ],
  fighter: [
    { options: [[a('chain-mail')], [a('leather'), w('longbow'), g('20 arrows')]] },
    { options: [[pick('martial'), shield], [pick('martial', 2)]] },
    { options: [[w('light-crossbow'), g('20 bolts')], [w('handaxe', 2)]] },
    { options: [[g("A dungeoneer's pack")], [g("An explorer's pack")]] },
  ],
  monk: [
    { options: [[w('shortsword')], [pick('simple')]] },
    { options: [[g("A dungeoneer's pack")], [g("An explorer's pack")]] },
    { fixed: [w('dart', 10)] },
  ],
  paladin: [
    { options: [[pick('martial'), shield], [pick('martial', 2)]] },
    { options: [[w('javelin', 5)], [pick('simple-melee')]] },
    { options: [[g("A priest's pack")], [g("An explorer's pack")]] },
    { fixed: [a('chain-mail'), g('A holy symbol')] },
  ],
  ranger: [
    { options: [[a('scale-mail')], [a('leather')]] },
    { options: [[w('shortsword', 2)], [pick('simple-melee', 2)]] },
    { options: [[g("A dungeoneer's pack")], [g("An explorer's pack")]] },
    { fixed: [w('longbow'), g('A quiver of 20 arrows')] },
  ],
  rogue: [
    { options: [[w('rapier')], [w('shortsword')]] },
    { options: [[w('shortbow'), g('A quiver of 20 arrows')], [w('shortsword')]] },
    { options: [[g("A burglar's pack")], [g("A dungeoneer's pack")], [g("An explorer's pack")]] },
    { fixed: [a('leather'), w('dagger', 2), g("Thieves' tools")] },
  ],
  sorcerer: [
    { options: [[w('light-crossbow'), g('20 bolts')], [pick('simple')]] },
    { options: [[g('A component pouch')], [g('An arcane focus')]] },
    { options: [[g("A dungeoneer's pack")], [g("An explorer's pack")]] },
    { fixed: [w('dagger', 2)] },
  ],
  warlock: [
    { options: [[w('light-crossbow'), g('20 bolts')], [pick('simple')]] },
    { options: [[g('A component pouch')], [g('An arcane focus')]] },
    { options: [[g("A scholar's pack")], [g("A dungeoneer's pack")]] },
    { fixed: [a('leather'), pick('simple'), w('dagger', 2)] },
  ],
  wizard: [
    { options: [[w('quarterstaff')], [w('dagger')]] },
    { options: [[g('A component pouch')], [g('An arcane focus')]] },
    { options: [[g("A scholar's pack")], [g("An explorer's pack")]] },
    { fixed: [g('A spellbook')] },
  ],
  artificer: [
    { fixed: [pick('simple', 2)] },
    { fixed: [w('light-crossbow'), g('20 bolts')] },
    { options: [[a('studded-leather')], [a('scale-mail')]] },
    { fixed: [g("Thieves' tools"), g("A dungeoneer's pack")] },
  ],
}

// Alternative starting wealth (PHB "Starting Wealth by Class", TCE for the artificer).
export const STARTING_GOLD = {
  barbarian: '2d4 × 10 gp', bard: '5d4 × 10 gp', cleric: '5d4 × 10 gp', druid: '2d4 × 10 gp',
  fighter: '5d4 × 10 gp', monk: '5d4 gp', paladin: '5d4 × 10 gp', ranger: '5d4 × 10 gp',
  rogue: '4d4 × 10 gp', sorcerer: '3d4 × 10 gp', warlock: '4d4 × 10 gp', wizard: '4d4 × 10 gp',
  artificer: '5d4 × 10 gp',
}

// Human-readable label for one starting-equipment item.
export function itemLabel(it) {
  if (it.weapon) return `${it.qty > 1 ? it.qty + ' × ' : ''}${getWeapon(it.weapon)?.name}`
  if (it.armor) return `${getArmor(it.armor)?.name} armor`
  if (it.shield) return 'Shield'
  if (it.pick) return `${it.qty > 1 ? it.qty + ' × ' : ''}any ${it.pick.replace('-', ' ')} weapon`
  return it.gear
}
