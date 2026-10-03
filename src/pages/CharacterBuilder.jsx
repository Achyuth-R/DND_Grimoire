import { useEffect, useMemo, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getCharacter, upsertCharacter, newCharacter, onCharactersChanged } from '../store.js'
import { derive } from '../compute.js'
import { fmtMod } from '../data/abilities.js'
import { normalize, stepsFor, validateStep } from '../builderRules.js'
import RaceStep from './builder/RaceStep.jsx'
import ClassStep from './builder/ClassStep.jsx'
import BackgroundStep from './builder/BackgroundStep.jsx'
import AbilitiesStep from './builder/AbilitiesStep.jsx'
import LevelUpsStep from './builder/LevelUpsStep.jsx'
import EquipmentStep from './builder/EquipmentStep.jsx'
import SpellsStep from './builder/SpellsStep.jsx'
import ReviewStep from './builder/ReviewStep.jsx'

const STEP_COMPONENTS = {
  race: RaceStep, class: ClassStep, background: BackgroundStep, abilities: AbilitiesStep,
  levelups: LevelUpsStep, equipment: EquipmentStep, spells: SpellsStep, review: ReviewStep,
}

const load = (id) => {
  if (!id) return normalize(newCharacter())
  const c = getCharacter(id)
  return c ? normalize(c) : null
}

export default function CharacterBuilder() {
  const { id } = useParams()
  const nav = useNavigate()
  const [char, setChar] = useState(() => load(id))
  const [original, setOriginal] = useState(() => (id ? getCharacter(id) : null))
  const [stepKey, setStepKey] = useState('race')
  const [visited, setVisited] = useState(() => new Set(id ? ['race', 'class', 'background', 'abilities', 'levelups', 'equipment', 'spells', 'review'] : ['race']))
  const [resetText, setResetText] = useState(true)
  // Reload when switching which character is being edited (same component instance).
  useEffect(() => {
    setChar(load(id))
    setOriginal(id ? getCharacter(id) : null)
    setStepKey('race')
  }, [id])
  // A character opened by link on a new device may arrive from the shared store after first render.
  useEffect(() => onCharactersChanged(() => {
    if (!id) return
    setChar((prev) => prev || load(id))
    setOriginal((prev) => prev || getCharacter(id) || null)
  }), [id])

  const d = useMemo(() => (char ? derive(char) : null), [char])
  const steps = useMemo(() => (char ? stepsFor(char) : []), [char])
  const errorsByStep = useMemo(() => Object.fromEntries(steps.map((s) => [s.key, char ? validateStep(s.key, char) : []])), [steps, char])

  if (!char) {
    return (
      <div className="container">
        <div className="empty"><h2>Character not found</h2><Link to="/characters" className="btn">Back to Characters</Link></div>
      </div>
    )
  }

  const set = (patch) => setChar((c) => normalize({ ...c, ...patch }))
  const idx = Math.max(0, steps.findIndex((s) => s.key === stepKey))
  const current = steps[idx]
  const errors = errorsByStep[current.key] || []
  const go = (key) => { setStepKey(key); setVisited((v) => new Set([...v, key])); window.scrollTo(0, 0) }

  // Offer to refresh the sheet's auto-filled text when class/level/subclass changed on an existing character.
  const showReset = !!original && (original.classKey !== char.classKey || original.level !== char.level || original.subclassKey !== char.subclassKey)
    && !!(original.featuresText || original.abilitiesText || original.equipmentText)

  const save = () => {
    const saved = { ...char, name: (char.name || '').trim() || 'Unnamed Hero' }
    // Pre-fill blank attack rows from carried weapons.
    if (!(saved.attacks || []).some((a) => a.name || a.bonus || a.damage) && d.attacks.length) {
      saved.attacks = d.attacks.map((a) => ({ name: a.name, bonus: fmtMod(a.bonus), damage: a.damage }))
    }
    if (showReset && resetText) Object.assign(saved, { featuresText: null, abilitiesText: null, equipmentText: null })
    upsertCharacter(saved)
    nav(`/sheet/${saved.id}`)
  }

  const Step = STEP_COMPONENTS[current.key]
  return (
    <div className="container">
      <Link to="/characters" className="back-link">← Back to Characters</Link>
      <div className="section-title" style={{ marginTop: 0 }}><h2>🛠️ {id ? 'Edit' : 'Forge a'} Character</h2><div className="line" /></div>

      <div className="stepper">
        {steps.map((s, i) => {
          const bad = visited.has(s.key) && s.key !== current.key && (errorsByStep[s.key] || []).length > 0
          return (
            <button
              key={s.key} type="button"
              className={'step-node' + (i === idx ? ' current' : visited.has(s.key) ? ' done' : '') + (bad ? ' invalid' : '')}
              onClick={() => go(s.key)} title={bad ? errorsByStep[s.key].join('\n') : s.label}
            >
              <div className="step-dot">{bad ? '!' : i + 1}</div>
              <div className="step-label">{s.label}</div>
            </button>
          )
        })}
      </div>

      <div className="wizard-body">
        <Step char={char} set={set} d={d} errors={errors} resetText={resetText} setResetText={setResetText} showReset={showReset} />
      </div>

      {current.key !== 'review' && errors.length > 0 && (
        <div className="err-box">
          <ul>{errors.map((e) => <li key={e}>{e}</li>)}</ul>
        </div>
      )}

      <div className="row-between" style={{ marginTop: 18 }}>
        <button className="btn ghost" onClick={() => (idx === 0 ? nav('/characters') : go(steps[idx - 1].key))}>
          {idx === 0 ? 'Cancel' : '← Back'}
        </button>
        {idx < steps.length - 1 ? (
          <button className="btn primary" disabled={errors.length > 0} onClick={() => go(steps[idx + 1].key)}>Next: {steps[idx + 1].label} →</button>
        ) : (
          <button className="btn primary" disabled={errors.length > 0} onClick={save}>⚔️ Generate Sheet</button>
        )}
      </div>
    </div>
  )
}
