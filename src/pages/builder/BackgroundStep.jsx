import { Link } from 'react-router-dom'
import { BACKGROUNDS, getBackground } from '../../data/backgrounds.js'
import { LANGUAGES, languageSlots } from '../../builderRules.js'
import { Section, MultiPick, skillName } from './shared.jsx'

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
