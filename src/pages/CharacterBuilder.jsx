import { useEffect, useMemo, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getCharacter, upsertCharacter, newCharacter } from '../store.js'
import { CLASSES, getClass } from '../data/classes.js'
import { RACES, getRace } from '../data/races.js'
import { BACKGROUNDS, getBackground } from '../data/backgrounds.js'
import { ABILITIES, SKILLS, abilityMod, fmtMod, STANDARD_ARRAY, POINT_BUY_COST } from '../data/abilities.js'
import { effectiveScores } from '../compute.js'

const STEPS = ['Basics', 'Abilities', 'Proficiencies']
const ALIGNMENTS = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil']
const skillName = (k) => SKILLS.find((s) => s.key === k)?.name || k

export default function CharacterBuilder() {
  const { id } = useParams()
  const nav = useNavigate()
  const [char, setChar] = useState(() => (id ? getCharacter(id) || newCharacter() : newCharacter()))
  const [step, setStep] = useState(1)
  const [method, setMethod] = useState('manual')
  // Reload form when switching which character is being edited.
  useEffect(() => { setChar(id ? getCharacter(id) || newCharacter() : newCharacter()); setStep(1) }, [id])

  const cls = getClass(char.classKey)
  const race = getRace(char.raceKey)
  const bg = getBackground(char.backgroundKey)
  const eff = effectiveScores(char)

  const set = (patch) => setChar((c) => ({ ...c, ...patch }))

  const save = () => {
    const saved = { ...char, name: char.name.trim() || 'Unnamed Hero' }
    upsertCharacter(saved)
    nav(`/sheet/${saved.id}`)
  }

  return (
    <div className="container">
      <Link to="/characters" className="back-link">← Back to Characters</Link>
      <div className="section-title" style={{ marginTop: 0 }}><h2>🛠️ {id ? 'Edit' : 'Forge a'} Character</h2><div className="line" /></div>

      <div className="stepper">
        {STEPS.map((label, i) => {
          const n = i + 1
          return (
            <div key={label} className={'step-node' + (step === n ? ' current' : step > n ? ' done' : '')}>
              <div className="step-dot">{n}</div>
              <div className="step-label">{label}</div>
            </div>
          )
        })}
      </div>

      <div className="wizard-body">
        {step === 1 && <Basics char={char} set={set} cls={cls} race={race} bg={bg} />}
        {step === 2 && <Abilities char={char} set={set} eff={eff} method={method} setMethod={setMethod} />}
        {step === 3 && <Proficiencies char={char} set={set} cls={cls} bg={bg} />}
      </div>

      <div className="row-between" style={{ marginTop: 18 }}>
        <button className="btn ghost" onClick={() => (step === 1 ? nav('/characters') : setStep(step - 1))}>
          {step === 1 ? 'Cancel' : '← Back'}
        </button>
        {step < 3 ? (
          <button className="btn primary" onClick={() => setStep(step + 1)}>Next: {STEPS[step]} →</button>
        ) : (
          <button className="btn primary" onClick={save}>⚔️ Generate Sheet</button>
        )}
      </div>
    </div>
  )
}

function Basics({ char, set, cls, race, bg }) {
  const onClassChange = (key) => set({ classKey: key, subclassKey: '', skills: [], expertise: [] })
  const onRaceChange = (key) => set({ raceKey: key, subraceKey: getRace(key)?.subraces?.[0]?.key || '' })
  // Subclasses unlock at different levels per class (Cleric/Sorcerer/Warlock 1, Druid/Wizard 2, most others 3).
  const subLevel = cls?.subclasses?.length ? Math.min(...cls.subclasses.flatMap((s) => s.features.map((f) => f.level))) : 1
  const subUnlocked = char.level >= subLevel
  return (
    <>
      <h3 style={{ marginTop: 0 }}>The Basics</h3>
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
          <label>Level</label>
          <input type="number" min="1" max="20" value={char.level} onChange={(e) => set({ level: Math.max(1, Math.min(20, parseInt(e.target.value) || 1)) })} />
        </div>
        <div className="field">
          <label>Alignment</label>
          <select value={char.alignment} onChange={(e) => set({ alignment: e.target.value })}>
            {ALIGNMENTS.map((a) => <option key={a}>{a}</option>)}
          </select>
        </div>

        <div className="field">
          <label>Race</label>
          <select value={char.raceKey} onChange={(e) => onRaceChange(e.target.value)}>
            {RACES.map((r) => <option key={r.key} value={r.key}>{r.icon} {r.name}</option>)}
          </select>
          <div className="hint">{race?.desc} <Link className="gold" to={`/compendium/race/${char.raceKey}`}>Details →</Link></div>
        </div>
        {race?.subraces?.length > 0 && (
          <div className="field">
            <label>Subrace</label>
            <select value={char.subraceKey} onChange={(e) => set({ subraceKey: e.target.value })}>
              {race.subraces.map((s) => <option key={s.key} value={s.key}>{s.name}</option>)}
            </select>
          </div>
        )}

        <div className="field">
          <label>Class</label>
          <select value={char.classKey} onChange={(e) => onClassChange(e.target.value)}>
            {CLASSES.map((c) => <option key={c.key} value={c.key}>{c.icon} {c.name}</option>)}
          </select>
          <div className="hint">d{cls?.hitDie} Hit Die · Saves {cls?.saves.map((s) => s.toUpperCase()).join(', ')} <Link className="gold" to={`/compendium/class/${char.classKey}`}>Details →</Link></div>
        </div>
        {cls?.subclasses?.length > 0 && (
          <div className="field">
            <label>Subclass ({cls.subclasses.length} options)</label>
            <select value={char.subclassKey} onChange={(e) => set({ subclassKey: e.target.value })}>
              <option value="">— Choose —</option>
              {cls.subclasses.map((s) => <option key={s.key} value={s.key}>{s.name} ({s.source})</option>)}
            </select>
            <div className="hint">
              {subUnlocked
                ? <>Subclass features active at level {char.level}. <Link className="gold" to={`/compendium/class/${char.classKey}#${char.subclassKey || cls.subclasses[0].key}`}>Details →</Link></>
                : <span className="warn">Features unlock at level {subLevel} — you can still choose it now.</span>}
            </div>
          </div>
        )}

        <div className="field">
          <label>Background</label>
          <select value={char.backgroundKey} onChange={(e) => set({ backgroundKey: e.target.value })}>
            {BACKGROUNDS.map((b) => <option key={b.key} value={b.key}>{b.icon} {b.name}</option>)}
          </select>
          <div className="hint">Grants {bg?.skills.map(skillName).join(' & ')}. <Link className="gold" to={`/compendium/background/${char.backgroundKey}`}>Details →</Link></div>
        </div>
      </div>
      {subUnlocked && cls?.subclasses?.length > 0 && !char.subclassKey && (
        <div className="hint warn">Tip: pick a subclass to include its features on your sheet.</div>
      )}
    </>
  )
}

function Abilities({ char, set, eff, method, setMethod }) {
  const setScore = (k, v) => set({ scores: { ...char.scores, [k]: Math.max(1, Math.min(30, parseInt(v) || 0)) } })
  const pointBuyUsed = Object.values(char.scores).reduce((sum, v) => sum + (POINT_BUY_COST[v] ?? 99), 0)

  const applyStandard = () => {
    const sc = {}
    ABILITIES.forEach((a, i) => (sc[a.key] = STANDARD_ARRAY[i]))
    set({ scores: sc })
  }
  const resetPointBuy = () => set({ scores: { str: 8, dex: 8, con: 8, int: 8, wis: 8, cha: 8 } })
  const stepPB = (k, dir) => {
    const v = (char.scores[k] || 8) + dir
    if (v < 8 || v > 15) return
    const next = { ...char.scores, [k]: v }
    const used = Object.values(next).reduce((s, x) => s + (POINT_BUY_COST[x] ?? 99), 0)
    if (used <= 27) set({ scores: next })
  }

  const choose = (m) => {
    setMethod(m)
    if (m === 'standard') applyStandard()
    if (m === 'pointbuy') resetPointBuy()
  }

  return (
    <>
      <h3 style={{ marginTop: 0 }}>Ability Scores</h3>
      <div className="method-tabs">
        {[['standard', 'Standard Array'], ['pointbuy', 'Point Buy'], ['manual', 'Manual Entry']].map(([m, lbl]) => (
          <button key={m} className={'tab' + (method === m ? ' active' : '')} onClick={() => choose(m)}>{lbl}</button>
        ))}
      </div>

      {method === 'pointbuy' && (
        <div className="hint" style={{ marginBottom: 12 }}>Points remaining: <b className={pointBuyUsed > 27 ? 'warn' : 'gold'}>{27 - Math.min(pointBuyUsed, 27)}</b> / 27 — scores range 8–15.</div>
      )}
      {method === 'standard' && (
        <div className="hint" style={{ marginBottom: 12 }}>Standard array <b className="gold">{STANDARD_ARRAY.join(', ')}</b> assigned in order. Switch to Manual to rearrange.</div>
      )}

      <div className="ability-grid">
        {ABILITIES.map((a) => {
          const base = char.scores[a.key]
          const racial = eff[a.key] - base
          return (
            <div className="ability-box" key={a.key}>
              <div className="ab-name">{a.name.slice(0, 3)}</div>
              <div className="ab-mod">{fmtMod(abilityMod(eff[a.key]))}</div>
              {method === 'pointbuy' ? (
                <div className="score-stepper" style={{ justifyContent: 'center', marginTop: 6 }}>
                  <button onClick={() => stepPB(a.key, -1)}>−</button>
                  <b style={{ width: 22, textAlign: 'center', fontSize: 18 }}>{base}</b>
                  <button onClick={() => stepPB(a.key, 1)}>+</button>
                </div>
              ) : (
                <input type="number" value={base} onChange={(e) => setScore(a.key, e.target.value)} />
              )}
              <div className="ab-total">{eff[a.key]}{racial ? <span className="racial-tag"> ({fmtMod(racial)} race)</span> : ''}</div>
            </div>
          )
        })}
      </div>
      <div className="hint" style={{ marginTop: 10 }}>The large number is your final modifier including racial bonuses; the box value is the base score.</div>
    </>
  )
}

function Proficiencies({ char, set, cls, bg }) {
  const bonusFromRace = char.raceKey === 'half-elf' ? 2 : 0
  const totalChoices = (cls?.skillsChoose || 0) + bonusFromRace
  const openList = cls?.skillsFrom === 'any' || bonusFromRace > 0
  const options = openList ? SKILLS.map((s) => s.key) : cls?.skillsFrom || []
  const bgSkills = bg?.skills || []

  const toggleSkill = (key) => {
    const has = char.skills.includes(key)
    if (has) {
      set({ skills: char.skills.filter((s) => s !== key), expertise: (char.expertise || []).filter((s) => s !== key) })
    } else if (char.skills.length < totalChoices) {
      set({ skills: [...char.skills, key] })
    }
  }

  const getsExpertise = (char.classKey === 'rogue') || (char.classKey === 'bard' && char.level >= 3)
  const profForExpertise = useMemo(() => [...new Set([...char.skills, ...bgSkills])], [char.skills, bgSkills])
  const toggleExpertise = (key) => {
    const exp = char.expertise || []
    if (exp.includes(key)) set({ expertise: exp.filter((s) => s !== key) })
    else if (exp.length < 2) set({ expertise: [...exp, key] })
  }

  return (
    <>
      <h3 style={{ marginTop: 0 }}>Proficiencies</h3>
      <div className="hint" style={{ marginBottom: 14 }}>
        Choose <b className="gold">{totalChoices}</b> skill{totalChoices === 1 ? '' : 's'} from your class{bonusFromRace ? ` (+${bonusFromRace} from Half-Elf, any skill)` : ''} — {char.skills.length}/{totalChoices} selected.
        Background <b className="gold">{bg?.name}</b> grants {bgSkills.map(skillName).join(' & ')} automatically.
      </div>
      <div className="skill-pick">
        {SKILLS.map((s) => {
          const allowed = options.includes(s.key)
          const checked = char.skills.includes(s.key)
          const fromBg = bgSkills.includes(s.key)
          const disabled = !allowed || fromBg || (!checked && char.skills.length >= totalChoices)
          return (
            <label key={s.key} className={checked || fromBg ? 'checked' : ''} style={{ opacity: allowed || fromBg ? 1 : 0.4 }}>
              <input type="checkbox" disabled={disabled} checked={checked || fromBg} onChange={() => toggleSkill(s.key)} />
              {s.name}
              <span className="ab" style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--muted)' }}>{s.ability.toUpperCase()}{fromBg ? ' · bg' : ''}</span>
            </label>
          )
        })}
      </div>

      {getsExpertise && (
        <>
          <div className="section-title" style={{ marginTop: 24 }}><h2 style={{ fontSize: 18 }}>✦ Expertise</h2><div className="line" /></div>
          <div className="hint" style={{ marginBottom: 10 }}>Choose <b className="gold">2</b> proficient skills to double their bonus — {(char.expertise || []).length}/2 selected.</div>
          {profForExpertise.length === 0 ? (
            <div className="hint">Select some skills above first.</div>
          ) : (
            <div className="skill-pick">
              {profForExpertise.map((key) => {
                const exp = (char.expertise || []).includes(key)
                const disabled = !exp && (char.expertise || []).length >= 2
                return (
                  <label key={'exp-' + key} className={exp ? 'checked' : ''}>
                    <input type="checkbox" disabled={disabled} checked={exp} onChange={() => toggleExpertise(key)} />
                    {skillName(key)}
                  </label>
                )
              })}
            </div>
          )}
        </>
      )}

      <div className="field" style={{ marginTop: 22 }}>
        <label>Notes (optional)</label>
        <textarea rows="3" value={char.notes} placeholder="Backstory, goals, reminders…" onChange={(e) => set({ notes: e.target.value })} />
      </div>
    </>
  )
}
