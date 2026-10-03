import { STARTING_EQUIPMENT, STARTING_GOLD, itemLabel, weaponsFor, getArmor } from '../../data/equipment.js'
import { getBackground } from '../../data/backgrounds.js'
import { armorProficient, weaponProficient } from '../../compute.js'
import { Section } from './shared.jsx'

export default function EquipmentStep({ char, set, d }) {
  const groups = STARTING_EQUIPMENT[char.classKey] || []
  const eq = char.equipment || { classKey: char.classKey, choices: {}, picks: {} }
  const setEq = (patch) => set({ equipment: { ...eq, ...patch } })
  const bg = getBackground(char.backgroundKey)
  const inv = d.inventory

  const pickSelect = (gi, oi, ii, n, it) => {
    const id = `${gi}-${oi}-${ii}-${n}`
    return (
      <select key={id} value={eq.picks?.[id] || ''} onChange={(e) => setEq({ picks: { ...eq.picks, [id]: e.target.value } })}>
        <option value="">— any {it.pick.replace('-', ' ')} weapon —</option>
        {weaponsFor(it.pick).map((w) => (
          <option key={w.key} value={w.key}>{w.name} ({w.damage} {w.type}){weaponProficient(w, d.profs.weapons) ? '' : ' — not proficient'}</option>
        ))}
      </select>
    )
  }

  return (
    <>
      <h3 style={{ marginTop: 0 }}>Equipment</h3>
      <div className="radio-row" style={{ marginBottom: 14 }}>
        <label className={!eq.gold ? 'checked' : ''}>
          <input type="radio" checked={!eq.gold} onChange={() => setEq({ gold: false })} /> Class starting equipment
        </label>
        <label className={eq.gold ? 'checked' : ''}>
          <input type="radio" checked={!!eq.gold} onChange={() => setEq({ gold: true })} /> Starting wealth instead ({STARTING_GOLD[char.classKey]})
        </label>
      </div>

      {!eq.gold && groups.map((g, gi) => (
        <Section key={gi} title={g.fixed ? 'You also get' : `Choice ${gi + 1}`}>
          {g.fixed ? (
            <div className="equip-items">
              {g.fixed.map((it, ii) => (
                <span key={ii} className="equip-item">
                  {it.pick ? Array.from({ length: it.qty }, (_, n) => pickSelect(gi, 0, ii, n, it)) : itemLabel(it)}
                </span>
              ))}
            </div>
          ) : (
            <div className="equip-options">
              {g.options.map((opt, oi) => {
                const on = eq.choices?.[gi] === oi
                return (
                  <label key={oi} className={'equip-option' + (on ? ' checked' : '')}>
                    <input type="radio" name={`eq-${gi}`} checked={on} onChange={() => setEq({ choices: { ...eq.choices, [gi]: oi } })} />
                    <span className="equip-items">
                      {opt.map((it, ii) => (
                        <span key={ii} className="equip-item">
                          {it.pick && on ? Array.from({ length: it.qty }, (_, n) => pickSelect(gi, oi, ii, n, it)) : itemLabel(it)}
                        </span>
                      ))}
                    </span>
                  </label>
                )
              })}
            </div>
          )}
        </Section>
      ))}

      {bg?.equipment && (
        <Section title={`From your background (${bg.name})`}>
          <p className="feat-desc">{bg.equipment}</p>
        </Section>
      )}

      {(inv.armor.length > 0 || inv.shield) && (
        <Section title="Wearing" hint={inv.bought ? 'Choose armor you plan to buy with your starting wealth.' : "Armor you're wearing sets your Armor Class."}>
          <div className="builder-grid">
            {inv.armor.length > 0 && (
              <div className="field">
                <label>Armor</label>
                <select value={char.equippedArmor || ''} onChange={(e) => set({ equippedArmor: e.target.value })}>
                  <option value="">None</option>
                  {inv.armor.map((k) => {
                    const a = getArmor(k)
                    return <option key={k} value={k}>{a.name} (AC {a.base}{a.dexCap === null ? ' + Dex' : a.dexCap ? ' + Dex (max 2)' : ''}){armorProficient(a, d.profs.armor) ? '' : ' — not proficient'}</option>
                  })}
                </select>
              </div>
            )}
            {inv.shield && (
              <div className="field">
                <label>Shield</label>
                <label className="inline-check"><input type="checkbox" checked={!!char.shield} onChange={(e) => set({ shield: e.target.checked })} /> Use shield (+2 AC)</label>
              </div>
            )}
          </div>
        </Section>
      )}

      <div className="pill-row">
        <span className="pill"><b>Armor Class:</b> {d.ac} <span className="muted">({d.acLabel})</span></span>
        <span className="pill"><b>Speed:</b> {d.speed} ft</span>
      </div>
      {d.acNotes.map((n) => <div key={n} className="hint warn">{n}</div>)}
    </>
  )
}
