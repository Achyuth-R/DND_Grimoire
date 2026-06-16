import { useEffect, useState } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { getClass } from '../data/classes.js'
import { getRace } from '../data/races.js'
import { getBackground } from '../data/backgrounds.js'
import { getSpell, spellLevelName } from '../data/spells.js'
import { getMonster, crLabel, abilityModStr } from '../data/monsters.js'
import { ABILITIES, SKILLS } from '../data/abilities.js'

const skillName = (k) => SKILLS.find((s) => s.key === k)?.name || k
const abName = (k) => ABILITIES.find((a) => a.key === k)?.name || k
const asiText = (asi) => Object.entries(asi).map(([k, v]) => `${abName(k)} +${v}`).join(', ')

function Feature({ f }) {
  return (
    <div className="feature">
      <h4><span className="lvl">Lvl {f.level}</span>{f.name}{f.sub ? <span className="muted"> · {f.sub}</span> : null}</h4>
      <p style={{ whiteSpace: 'pre-wrap' }}>{f.desc}</p>
    </div>
  )
}

function ClassDetail({ c }) {
  const { hash } = useLocation()
  // Selected subclass is driven by the URL hash (set by subclass cards) and local clicks.
  const hashKey = hash ? hash.slice(1) : ''
  const initial = c.subclasses.find((s) => s.key === hashKey)?.key || c.subclasses[0]?.key
  const [selected, setSelected] = useState(initial)

  useEffect(() => {
    const fromHash = c.subclasses.find((s) => s.key === hashKey)?.key
    if (fromHash) {
      setSelected(fromHash)
      document.getElementById('subclasses')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      setSelected(c.subclasses[0]?.key)
      window.scrollTo(0, 0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [c.key, hashKey])

  const sub = c.subclasses.find((s) => s.key === selected) || c.subclasses[0]

  return (
    <div className="container">
      <Link to="/compendium?tab=classes" className="back-link">← Back to Compendium</Link>
      <div className="detail-head">
        <div className="big-icon">{c.icon}</div>
        <div>
          <h1>{c.name}</h1>
          <div className="tag" style={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>{c.desc}</div>
        </div>
      </div>
      <div className="pill-row">
        <span className="pill"><b>Hit Die:</b> d{c.hitDie}</span>
        <span className="pill"><b>Primary:</b> {c.primary.map(abName).join(', ')}</span>
        <span className="pill"><b>Saves:</b> {c.saves.map(abName).join(', ')}</span>
        <span className="pill"><b>Caster:</b> {c.spellcaster ? `${c.spellcaster} (${abName(c.spellAbility)})` : 'None'}</span>
      </div>

      <div className="panel">
        <h3>Proficiencies</h3>
        <p><b className="gold">Armor:</b> {c.armor.length ? c.armor.join(', ') : 'None'}</p>
        <p><b className="gold">Weapons:</b> {c.weapons.join(', ')}</p>
        <p><b className="gold">Tools:</b> {c.tools.length ? c.tools.join(', ') : 'None'}</p>
        <p><b className="gold">Skills:</b> Choose {c.skillsChoose} from {c.skillsFrom === 'any' ? 'any skill' : c.skillsFrom.map(skillName).join(', ')}</p>
      </div>

      <div className="section-title"><h2>Class Features</h2><div className="line" /></div>
      {c.features.map((f, i) => <Feature key={i} f={f} />)}

      <div className="section-title" id="subclasses"><h2>Subclasses</h2><div className="line" /></div>
      <div className="hint" style={{ marginBottom: 12 }}>{c.subclasses.length} subclasses available for the {c.name}. Choose one to read its features.</div>
      <div className="subclass-layout">
        <aside className="subclass-list">
          {c.subclasses.map((s) => (
            <button
              key={s.key}
              className={'subclass-item' + (s.key === selected ? ' active' : '')}
              onClick={() => setSelected(s.key)}
            >
              <span className="sc-name">{s.name}</span>
              <span className="sc-src">{s.source}</span>
            </button>
          ))}
        </aside>
        <div className="subclass-pane">
          {sub && (
            <div className="panel" id={sub.key} style={{ marginTop: 0 }}>
              <div className="row-between">
                <h3 style={{ margin: 0 }}>{sub.name}</h3>
                <span className="pill"><b>{sub.source}</b></span>
              </div>
              <p className="muted" style={{ whiteSpace: 'pre-wrap' }}>{sub.desc}</p>
              {sub.features.map((f, i) => <Feature key={i} f={f} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function CompendiumDetail() {
  const { type, key } = useParams()
  const { hash } = useLocation()
  useEffect(() => {
    if (type !== 'class' && !hash) window.scrollTo(0, 0)
  }, [type, key, hash])

  if (type === 'class') {
    const c = getClass(key)
    if (!c) return <NotFound />
    return <ClassDetail c={c} key={c.key} />
  }

  if (type === 'race') {
    const r = getRace(key)
    if (!r) return <NotFound />
    return (
      <div className="container">
        <Link to="/compendium?tab=races" className="back-link">← Back to Compendium</Link>
        <div className="detail-head">
          <div className="big-icon">{r.icon}</div>
          <div>
            <h1>{r.name}</h1>
            <div className="tag" style={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>{r.desc}</div>
          </div>
        </div>
        <div className="pill-row">
          <span className="pill"><b>Ability Scores:</b> {asiText(r.asi)}{r.asiChoice ? `, +${r.asiChoice.amount} to ${r.asiChoice.count} of choice` : ''}</span>
          <span className="pill"><b>Size:</b> {r.size}</span>
          <span className="pill"><b>Speed:</b> {r.speed} ft</span>
          <span className="pill"><b>Languages:</b> {r.languages.join(', ')}</span>
        </div>
        <p className="muted" style={{ whiteSpace: 'pre-wrap' }}>{r.age}</p>

        <div className="section-title"><h2>Traits</h2><div className="line" /></div>
        {r.traits.map((t, i) => (
          <div className="feature" key={i}><h4>{t.name}</h4><p style={{ whiteSpace: 'pre-wrap' }}>{t.desc}</p></div>
        ))}

        {r.subraces.length > 0 && (
          <>
            <div className="section-title"><h2>Subraces</h2><div className="line" /></div>
            {r.subraces.map((s) => (
              <div className="panel" key={s.key}>
                <h3>{s.name}</h3>
                <div className="pill-row"><span className="pill"><b>Ability:</b> {asiText(s.asi)}</span></div>
                {s.traits.map((t, i) => (
                  <div className="feature" key={i}><h4>{t.name}</h4><p style={{ whiteSpace: 'pre-wrap' }}>{t.desc}</p></div>
                ))}
              </div>
            ))}
          </>
        )}
      </div>
    )
  }

  if (type === 'background') {
    const b = getBackground(key)
    if (!b) return <NotFound />
    return (
      <div className="container">
        <Link to="/compendium?tab=backgrounds" className="back-link">← Back to Compendium</Link>
        <div className="detail-head">
          <div className="big-icon">{b.icon}</div>
          <div>
            <h1>{b.name}</h1>
            <div className="tag" style={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>{b.desc}</div>
          </div>
        </div>
        <div className="pill-row">
          <span className="pill"><b>Skills:</b> {b.skills.map(skillName).join(', ')}</span>
          <span className="pill"><b>Tools:</b> {b.tools.length ? b.tools.join(', ') : 'None'}</span>
          <span className="pill"><b>Languages:</b> {b.languages || 'None'}</span>
        </div>
        <div className="panel">
          <h3>Feature: {b.feature.name}</h3>
          <p className="muted">{b.feature.desc}</p>
        </div>
        <div className="panel">
          <h3>Equipment</h3>
          <p className="muted">{b.equipment}</p>
        </div>
      </div>
    )
  }

  if (type === 'spell') {
    const s = getSpell(key)
    if (!s) return <NotFound />
    return (
      <div className="container">
        <Link to="/compendium?tab=spells" className="back-link">← Back to Compendium</Link>
        <div className="detail-head">
          <div className="big-icon">✨</div>
          <div>
            <h1 style={{ display: 'inline-block', marginRight: '12px' }}>{s.name}</h1>
            <span className="pill"><b>{s.source}</b></span>
            <div className="tag" style={{ marginTop: '8px' }}>{spellLevelName(s.level)} · {s.school}{s.ritual ? ' (ritual)' : ''}</div>
          </div>
        </div>
        <div className="pill-row">
          <span className="pill"><b>Casting Time:</b> {s.time}</span>
          <span className="pill"><b>Range:</b> {s.range}</span>
          <span className="pill"><b>Components:</b> {s.components}</span>
          <span className="pill"><b>Duration:</b> {s.conc ? 'Concentration, ' : ''}{s.duration}</span>
        </div>
        <div className="panel">
          <p style={{ whiteSpace: 'pre-wrap' }}>{s.desc}</p>
        </div>
        <div className="pill-row">
          {s.classes.map((c) => (
            <Link key={c} to={`/compendium/class/${c}`} className="pill"><b>{getClass(c)?.name}</b></Link>
          ))}
        </div>
      </div>
    )
  }

  if (type === 'monster') {
    const m = getMonster(key)
    if (!m) return <NotFound />
    return (
      <div className="container">
        <Link to="/compendium?tab=monsters" className="back-link">← Back to Compendium</Link>
        <div className="detail-head">
          <div className="big-icon">🐉</div>
          <div>
            <h1 style={{ display: 'inline-block', marginRight: '12px' }}>{m.name}</h1>
            <span className="pill"><b>{m.source || 'SRD'}</b></span>
            <div className="tag" style={{ marginTop: '8px' }}>{m.size} {m.type}, {m.alignment}</div>
          </div>
        </div>
        <div className="panel statblock">
          <p><b className="gold">Armor Class</b> {m.ac}</p>
          <p><b className="gold">Hit Points</b> {m.hp} ({m.hpDice})</p>
          <p><b className="gold">Speed</b> {m.speed}</p>
          <hr className="rule" />
          <div className="sb-scores">
            {ABILITIES.map((a) => (
              <div className="sb-score" key={a.key}>
                <div className="ab">{a.key.toUpperCase()}</div>
                <div className="val">{abilityModStr(m.scores[a.key])}</div>
              </div>
            ))}
          </div>
          <hr className="rule" />
          {m.skills && <p><b className="gold">Skills</b> {m.skills}</p>}
          <p><b className="gold">Senses</b> {m.senses}</p>
          <p><b className="gold">Languages</b> {m.languages}</p>
          <p><b className="gold">Challenge</b> {crLabel(m.cr)} ({m.xp} XP)</p>
          {m.traits.length > 0 && <hr className="rule" />}
          {m.traits.map((t, i) => (
            <p key={i} style={{ whiteSpace: 'pre-wrap' }}><b><i>{t.name}.</i></b> {t.desc}</p>
          ))}
          <div className="section-title"><h2 style={{ fontSize: 18 }}>Actions</h2><div className="line" /></div>
          {m.actions.map((a, i) => (
            <p key={i} style={{ whiteSpace: 'pre-wrap' }}><b><i>{a.name}.</i></b> {a.desc}</p>
          ))}
        </div>
      </div>
    )
  }

  return <NotFound />
}

function NotFound() {
  return (
    <div className="container">
      <div className="empty">
        <h2>Not found</h2>
        <Link to="/compendium" className="btn">Back to Compendium</Link>
      </div>
    </div>
  )
}
