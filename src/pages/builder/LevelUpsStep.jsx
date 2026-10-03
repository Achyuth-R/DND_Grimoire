import { ABILITIES } from '../../data/abilities.js'
import { getClass } from '../../data/classes.js'
import { earnedAsiLevels } from '../../compute.js'
import { skillsTakenExcept } from '../../builderRules.js'
import { Section, FeatPicker } from './shared.jsx'

// ASI as two ability selects: same ability twice = +2, different = +1/+1.
function AsiPicker({ asi = {}, onChange }) {
  const picks = Object.entries(asi).flatMap(([k, v]) => Array(v).fill(k))
  const [a = '', b = ''] = picks
  const update = (x, y) => {
    const out = {}
    for (const k of [x, y]) if (k) out[k] = (out[k] || 0) + 1
    onChange(out)
  }
  const sel = (value, onPick) => (
    <select value={value} onChange={(e) => onPick(e.target.value)}>
      <option value="">— Ability —</option>
      {ABILITIES.map((ab) => <option key={ab.key} value={ab.key}>{ab.name} +1</option>)}
    </select>
  )
  return (
    <div className="asi-row">
      {sel(a, (v) => update(v, b))}
      {sel(b, (v) => update(a, v))}
      <span className="hint" style={{ margin: 0 }}>Pick the same ability twice for +2.</span>
    </div>
  )
}

export default function LevelUpsStep({ char, set, d }) {
  const cls = getClass(char.classKey)
  const levels = earnedAsiLevels(char)
  const setLu = (lvl, patch) => set({ levelUps: { ...char.levelUps, [lvl]: { ...(char.levelUps?.[lvl] || {}), ...patch } } })

  if (!levels.length) {
    return (
      <>
        <h3 style={{ marginTop: 0 }}>Level-ups</h3>
        <p className="hint">No Ability Score Improvements yet. The {cls?.name} gains its first at level {cls?.asiLevels?.[0]}.</p>
      </>
    )
  }

  return (
    <>
      <h3 style={{ marginTop: 0 }}>Level-ups</h3>
      <div className="hint" style={{ marginBottom: 12 }}>
        At each of these levels, increase one ability score by 2 or two scores by 1 (max 20), or take a feat instead.
      </div>
      {levels.map((lvl) => {
        const lu = char.levelUps?.[lvl] || {}
        return (
          <Section key={lvl} title={`Level ${lvl}`}>
            <div className="radio-row" style={{ marginBottom: 10 }}>
              {[['asi', 'Ability Score Improvement'], ['feat', 'Feat']].map(([k, lbl]) => (
                <label key={k} className={lu.type === k ? 'checked' : ''}>
                  <input type="radio" checked={lu.type === k} onChange={() => setLu(lvl, { type: k })} /> {lbl}
                </label>
              ))}
            </div>
            {lu.type === 'asi' && <AsiPicker asi={lu.asi} onChange={(asi) => setLu(lvl, { asi })} />}
            {lu.type === 'feat' && (
              <FeatPicker char={char} d={d} value={lu.feat} takenSkills={skillsTakenExcept(char, 'feat')} onChange={(feat) => setLu(lvl, { feat })} />
            )}
          </Section>
        )
      })}
    </>
  )
}
