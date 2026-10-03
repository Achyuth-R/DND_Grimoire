import { Link } from 'react-router-dom'
import { BACKGROUNDS, getBackground } from '../../data/backgrounds.js'
import { LANGUAGES, languageSlots } from '../../builderRules.js'
import { getFeat } from '../../data/featMechanics.js'
import { Section, MultiPick, skillName } from './shared.jsx'

// 2024-style background ability increases: +2/+1, +1/+1/+1, or none (when the race already gives increases).
function BackgroundAsi({ bg, char, set }) {
  const mode = char.bgAsiMode || ''
  const asi = char.bgAsi || {}
  const two = Object.keys(asi).find((k) => asi[k] === 2) || ''
  const one = Object.keys(asi).find((k) => asi[k] === 1) || ''
  const pick = (m) => set({ bgAsiMode: m, bgAsi: m === '111' ? Object.fromEntries(bg.asiFrom.map((k) => [k, 1])) : {} })
  const setPair = (a, b) => set({ bgAsi: Object.fromEntries([[a, 2], [b, 1]].filter(([k]) => k)) })
  const sel = (value, onPick, exclude) => (
    <select value={value} onChange={(e) => onPick(e.target.value)}>
      <option value="">— Ability —</option>
      {bg.asiFrom.filter((k) => k !== exclude).map((k) => <option key={k} value={k}>{k.toUpperCase()}</option>)}
    </select>
  )
  return (
    <>
      <div className="radio-row" style={{ marginBottom: 10 }}>
        {[['21', '+2 / +1'], ['111', '+1 / +1 / +1'], ['none', 'None — my race already gives increases']].map(([m, lbl]) => (
          <label key={m} className={mode === m ? 'checked' : ''}>
            <input type="radio" checked={mode === m} onChange={() => pick(m)} /> {lbl}
          </label>
        ))}
      </div>
      {mode === '21' && (
        <div className="asi-row">
          <span>+2</span>{sel(two, (v) => setPair(v, one === v ? '' : one), '')}
          <span>+1</span>{sel(one, (v) => setPair(two, v), two)}
        </div>
      )}
    </>
  )
}

export default function BackgroundStep({ char, set, d }) {
  const bg = getBackground(char.backgroundKey)
  const slots = languageSlots(char)
  const known = new Set(d.profs.languages.filter((l) => !(char.languages || []).includes(l)))
  return (
    <>
      <h3 style={{ marginTop: 0 }}>Background</h3>
      <div className="field" style={{ maxWidth: 480 }}>
        <label>Background</label>
        <select value={char.backgroundKey} onChange={(e) => set({ backgroundKey: e.target.value })}>
          {BACKGROUNDS.map((b) => <option key={b.key} value={b.key}>{b.icon} {b.name}</option>)}
        </select>
        <div className="hint"><Link className="gold" to={`/compendium/background/${char.backgroundKey}`}>Details →</Link></div>
      </div>

      {bg && (
        <div className="pill-row">
          <span className="pill"><b>Skills:</b> {bg.skills.map(skillName).join(', ')}</span>
          {bg.tools.length > 0 && <span className="pill"><b>Tools:</b> {bg.tools.join(', ')}</span>}
          {bg.languages > 0 && <span className="pill"><b>Languages:</b> {bg.languages} of your choice</span>}
        </div>
      )}

      {bg?.asiFrom && (
        <Section title="Ability Score Increases" hint={`This ${bg.source || ''} background raises ${bg.asiFrom.map((k) => k.toUpperCase()).join(', ')}. Choose "None" if your DM has you use your race's increases instead, so they don't stack.`}>
          <BackgroundAsi bg={bg} char={char} set={set} />
        </Section>
      )}

      {bg?.originFeat && (
        <Section title={`Origin Feat: ${getFeat(bg.originFeat)?.name}`}>
          <p className="feat-desc">{getFeat(bg.originFeat)?.desc}</p>
        </Section>
      )}

      {bg?.feature && (
        <Section title={`Feature: ${bg.feature.name}`}>
          <p className="feat-desc" style={{ whiteSpace: 'pre-wrap' }}>{bg.feature.desc}</p>
        </Section>
      )}

      <Section
        title="Languages"
        hint={slots
          ? `You know ${[...known].join(', ') || 'no languages yet'}. Choose ${slots} more (from your race, background, subclass, and feats).`
          : `You know ${[...known].join(', ')}. No additional languages to choose.`}
      >
        {slots > 0 && (
          <MultiPick
            options={LANGUAGES.filter((l) => !known.has(l)).map((l) => ({ key: l, label: l }))}
            value={char.languages || []} max={slots} onChange={(languages) => set({ languages })}
          />
        )}
      </Section>
    </>
  )
}
