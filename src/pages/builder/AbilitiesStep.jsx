import { ABILITIES, abilityMod, fmtMod, STANDARD_ARRAY, POINT_BUY_COST } from '../../data/abilities.js'
import { scoreBonuses } from '../../compute.js'

const METHODS = [['standard', 'Standard Array'], ['pointbuy', 'Point Buy'], ['roll', 'Roll 4d6'], ['manual', 'Manual Entry']]
const roll4d6 = () => {
  const dice = Array.from({ length: 4 }, () => 1 + Math.floor(Math.random() * 6)).sort((a, b) => a - b)
  return dice[1] + dice[2] + dice[3]
}

// Dropdown assigning one value of a fixed pool (standard array or rolls) to an ability;
// it offers the current value plus whatever the other abilities haven't taken.
function poolSelect(abilityKey, pool, scores, onChange) {
  const remaining = [...pool]
  for (const a of ABILITIES) {
    if (a.key === abilityKey) continue
    const i = remaining.indexOf(scores[a.key])
    if (i >= 0) remaining.splice(i, 1)
  }
  const cur = scores[abilityKey]
  return (
    <select className="pool-select" value={remaining.includes(cur) ? cur : ''} onChange={(e) => onChange({ ...scores, [abilityKey]: Number(e.target.value) })}>
      <option value="">—</option>
      {[...new Set(remaining)].sort((x, y) => y - x).map((v) => <option key={v} value={v}>{v}</option>)}
    </select>
  )
}

export default function AbilitiesStep({ char, set, d }) {
  const method = char.scoreMethod || 'manual'
  const { race, level } = scoreBonuses(char)
  const pointsUsed = Object.values(char.scores).reduce((s, v) => s + (POINT_BUY_COST[v] ?? 99), 0)

  const choose = (m) => {
    if (m === method) return
    if (!window.confirm('Switching methods resets your base ability scores. Continue?')) return
    if (m === 'standard') set({ scoreMethod: m, scores: Object.fromEntries(ABILITIES.map((a, i) => [a.key, STANDARD_ARRAY[i]])) })
    else if (m === 'pointbuy') set({ scoreMethod: m, scores: Object.fromEntries(ABILITIES.map((a) => [a.key, 8])) })
    else if (m === 'roll') set({ scoreMethod: m, rolled: [], scores: Object.fromEntries(ABILITIES.map((a) => [a.key, 10])) })
    else set({ scoreMethod: m })
  }
  const stepPB = (k, dir) => {
    const v = char.scores[k] + dir
    if (v < 8 || v > 15) return
    const next = { ...char.scores, [k]: v }
    if (Object.values(next).reduce((s, x) => s + POINT_BUY_COST[x], 0) <= 27) set({ scores: next })
  }
  const doRoll = () => {
    const rolled = Array.from({ length: 6 }, roll4d6).sort((a, b) => b - a)
    set({ rolled, scores: Object.fromEntries(ABILITIES.map((a, i) => [a.key, rolled[i]])) })
  }
  const pool = { standard: STANDARD_ARRAY, roll: char.rolled || [] }[method]

  return (
    <>
      <h3 style={{ marginTop: 0 }}>Ability Scores</h3>
      <div className="method-tabs">
        {METHODS.map(([m, lbl]) => (
          <button key={m} className={'tab' + (method === m ? ' active' : '')} onClick={() => choose(m)}>{lbl}</button>
        ))}
      </div>

      {method === 'standard' && <div className="hint" style={{ marginBottom: 12 }}>Assign each of <b className="gold">{STANDARD_ARRAY.join(', ')}</b> to one ability.</div>}
      {method === 'pointbuy' && <div className="hint" style={{ marginBottom: 12 }}>Points remaining: <b className={pointsUsed > 27 ? 'warn' : 'gold'}>{27 - Math.min(pointsUsed, 27)}</b> / 27 — scores range 8–15.</div>}
      {method === 'roll' && (
        <div className="row-between" style={{ marginBottom: 12 }}>
          <div className="hint" style={{ margin: 0 }}>
            {char.rolled?.length ? <>Rolled <b className="gold">{char.rolled.join(', ')}</b> — assign each value to one ability.</> : 'Roll 4d6 six times, dropping the lowest die each time.'}
          </div>
          <button className="btn sm" onClick={doRoll}>🎲 {char.rolled?.length ? 'Reroll' : 'Roll'}</button>
        </div>
      )}
      {method === 'manual' && <div className="hint" style={{ marginBottom: 12 }}>Enter base scores between 3 and 18 (before racial and level bonuses).</div>}

      <div className="ability-grid">
        {ABILITIES.map((a) => {
          const base = char.scores[a.key]
          const bonus = (race[a.key] || 0) + (level[a.key] || 0)
          return (
            <div className="ability-box" key={a.key}>
              <div className="ab-name">{a.name.slice(0, 3)}</div>
              <div className="ab-mod">{fmtMod(abilityMod(d.scores[a.key]))}</div>
              {method === 'pointbuy' ? (
                <div className="score-stepper" style={{ justifyContent: 'center', marginTop: 6 }}>
                  <button onClick={() => stepPB(a.key, -1)} aria-label={`Lower ${a.name}`}>−</button>
                  <b style={{ width: 22, textAlign: 'center', fontSize: 18 }}>{base}</b>
                  <button onClick={() => stepPB(a.key, 1)} aria-label={`Raise ${a.name}`}>+</button>
                </div>
              ) : pool ? poolSelect(a.key, pool, char.scores, (scores) => set({ scores })) : (
                <input type="number" min="3" max="18" value={base} onChange={(e) => set({ scores: { ...char.scores, [a.key]: Math.max(1, Math.min(30, parseInt(e.target.value, 10) || 0)) } })} />
              )}
              <div className="ab-total">
                {d.scores[a.key]}
                {race[a.key] ? <span className="racial-tag"> ({fmtMod(race[a.key])} race)</span> : ''}
                {level[a.key] ? <span className="racial-tag"> ({fmtMod(level[a.key])} lvl)</span> : ''}
                {bonus && d.scores[a.key] === 20 && base + bonus > 20 ? <span className="warn"> max 20</span> : ''}
              </div>
            </div>
          )
        })}
      </div>
      <div className="hint" style={{ marginTop: 10 }}>The large number is the final modifier. Below each box: final score, with racial and level-up bonuses.</div>
    </>
  )
}
