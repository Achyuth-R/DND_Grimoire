import { ABILITIES, fmtMod } from '../../data/abilities.js'
import { getSpell } from '../../data/spells.js'
import { Section, skillName } from './shared.jsx'

const ALIGNMENTS = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil']

export default function ReviewStep({ char, set, d, errors, resetText, setResetText, showReset }) {
  return (
    <>
      <h3 style={{ marginTop: 0 }}>Review</h3>
      <div className="builder-grid">
        <div className="field">
          <label>Character Name</label>
          <input value={char.name} placeholder="e.g. Thorin Ironfist" onChange={(e) => set({ name: e.target.value })} />
        </div>
        <div className="field">
          <label>Player Name</label>
          <input value={char.playerName} placeholder="Your name" onChange={(e) => set({ playerName: e.target.value })} />
        </div>
        <div className="field">
          <label>Alignment</label>
          <select value={char.alignment} onChange={(e) => set({ alignment: e.target.value })}>
            {ALIGNMENTS.map((a) => <option key={a}>{a}</option>)}
          </select>
        </div>
        <div className="field">
          <label>Notes (optional)</label>
          <textarea rows="2" value={char.notes} placeholder="Backstory, goals, reminders…" onChange={(e) => set({ notes: e.target.value })} />
        </div>
      </div>

      {errors.length > 0 && (
        <div className="err-box">
          <b>Finish these before generating your sheet:</b>
          <ul>{errors.map((e) => <li key={e}>{e}</li>)}</ul>
        </div>
      )}

      <Section title="Summary">
        <div className="pill-row" style={{ marginTop: 0 }}>
          <span className="pill"><b>{d.ri?.sub?.name || d.race?.name}</b></span>
          <span className="pill"><b>{d.cls?.name} {char.level}</b>{d.sub ? ` · ${d.sub.name}` : ''}</span>
          <span className="pill"><b>{d.bg?.name}</b></span>
          <span className="pill"><b>HP</b> {d.maxHp}</span>
          <span className="pill"><b>AC</b> {d.ac}</span>
          <span className="pill"><b>Speed</b> {d.speed} ft</span>
          <span className="pill"><b>Initiative</b> {fmtMod(d.initiative)}</span>
          <span className="pill"><b>Prof.</b> +{d.pb}</span>
        </div>
        <div className="ability-grid" style={{ marginTop: 10 }}>
          {ABILITIES.map((a) => (
            <div className="ability-box" key={a.key}>
              <div className="ab-name">{a.name.slice(0, 3)}</div>
              <div className="ab-mod">{fmtMod(d.mods[a.key])}</div>
              <div className="ab-total">{d.scores[a.key]}{d.saves[a.key].proficient ? ' · save' : ''}</div>
            </div>
          ))}
        </div>
        <p className="feat-desc" style={{ marginTop: 12 }}>
          <b className="gold">Skills:</b> {d.skills.filter((s) => s.proficient).map((s) => `${s.name}${s.expert ? ' (expertise)' : ''}`).join(', ')}
          <br /><b className="gold">Languages:</b> {d.profs.languages.join(', ')}
          <br /><b className="gold">Tools:</b> {d.profs.tools.join(', ') || '—'}
          {d.feats.length > 0 && <><br /><b className="gold">Feats:</b> {d.feats.map((f) => `${f.feat.name} (${f.source})`).join(', ')}</>}
          {d.attacks.length > 0 && <><br /><b className="gold">Attacks:</b> {d.attacks.map((a) => `${a.name} ${fmtMod(a.bonus)} (${a.damage})`).join('; ')}</>}
          {d.spell && <><br /><b className="gold">Spells:</b> {(char.spells || []).map((k) => getSpell(k)?.name).join(', ') || '—'}</>}
          {d.expertise.size > 0 && <><br /><b className="gold">Expertise:</b> {[...d.expertise].map(skillName).join(', ')}</>}
        </p>
      </Section>

      {showReset && (
        <label className="inline-check">
          <input type="checkbox" checked={resetText} onChange={(e) => setResetText(e.target.checked)} />
          Refresh the sheet's auto-filled text (features, abilities, equipment) to match these changes. Your edits to those boxes will be replaced.
        </label>
      )}
    </>
  )
}
