import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CLASSES, ALL_SUBCLASSES, getClass } from '../data/classes.js'
import { RACES } from '../data/races.js'
import { BACKGROUNDS } from '../data/backgrounds.js'
import { ALL_SPELLS, spellLevelName } from '../data/spells.js'
import { MONSTERS, crLabel } from '../data/monsters.js'
import { SKILLS } from '../data/abilities.js'
import { FEATS } from '../data/feats.js'
import { ITEMS } from '../data/items.js'
import { CONDITIONS } from '../data/conditions.js'
import { DEITIES } from '../data/deities.js'
import { MECHANICS } from '../data/mechanics.js'
import { HAZARDS } from '../data/hazards.js'

const skillName = (k) => SKILLS.find((s) => s.key === k)?.name || k

const TABS = [
  { key: 'classes', label: 'Classes' },
  { key: 'subclasses', label: 'Subclasses' },
  { key: 'races', label: 'Races' },
  { key: 'backgrounds', label: 'Backgrounds' },
  { key: 'feats', label: 'Feats' },
  { key: 'spells', label: 'Spells' },
  { key: 'items', label: 'Items & Gear' },
  { key: 'monsters', label: 'Bestiary' },
  { key: 'conditions', label: 'Conditions' },
  { key: 'deities', label: 'Deities' },
  { key: 'mechanics', label: 'Mechanics' },
  { key: 'hazards', label: 'Hazards' },
]
const SPELL_LEVELS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const CR_OPTIONS = [
  { value: 'all', label: 'All CRs' },
  { value: '0-4', label: 'CR 0-4 (Local Heroes)' },
  { value: '5-10', label: 'CR 5-10 (Heroes of Realm)' },
  { value: '11-16', label: 'CR 11-16 (Masters of Realm)' },
  { value: '17-30', label: 'CR 17+ (Masters of World)' }
]
const TYPES = ['Aberration', 'Beast', 'Celestial', 'Construct', 'Dragon', 'Elemental', 'Fey', 'Fiend', 'Giant', 'Humanoid', 'Monstrosity', 'Ooze', 'Plant', 'Undead']
const SIZES = ['Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Gargantuan']
const SOURCES = ['SRD', 'MM']

export default function Compendium() {
  const [params, setParams] = useSearchParams()
  const tab = params.get('tab') || 'classes'
  const [q, setQ] = useState('')
  const [spellLevel, setSpellLevel] = useState('all')
  const [spellClass, setSpellClass] = useState('all')
  
  const [monCr, setMonCr] = useState('all')
  const [monType, setMonType] = useState('all')
  const [monSize, setMonSize] = useState('all')
  const [monSource, setMonSource] = useState('all')

  const setTab = (t) => setParams({ tab: t })
  const match = (s) => (s || '').toLowerCase().includes(q.toLowerCase())

  return (
    <div className="container">
      <div className="section-title"><h2>📚 Compendium</h2><div className="line" /></div>
      <div className="tabs">
        {TABS.map((t) => (
          <button key={t.key} className={'tab' + (tab === t.key ? ' active' : '')} onClick={() => setTab(t.key)}>{t.label}</button>
        ))}
      </div>
      <input className="search" placeholder="Search…" value={q} onChange={(e) => setQ(e.target.value)} />

      {tab === 'spells' && (
        <div className="filter-row">
          <select className="filter-sel" value={spellLevel} onChange={(e) => setSpellLevel(e.target.value)}>
            <option value="all">All levels</option>
            {SPELL_LEVELS.map((l) => <option key={l} value={l}>{spellLevelName(l)}</option>)}
          </select>
          <select className="filter-sel" value={spellClass} onChange={(e) => setSpellClass(e.target.value)}>
            <option value="all">All classes</option>
            {CLASSES.filter((c) => c.spellcaster).map((c) => <option key={c.key} value={c.key}>{c.name}</option>)}
          </select>
        </div>
      )}

      {tab === 'monsters' && (
        <div className="filter-row">
          <select className="filter-sel" value={monCr} onChange={(e) => setMonCr(e.target.value)}>
            {CR_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          <select className="filter-sel" value={monType} onChange={(e) => setMonType(e.target.value)}>
            <option value="all">All Types</option>
            {TYPES.map((t) => <option key={t} value={t.toLowerCase()}>{t}</option>)}
          </select>
          <select className="filter-sel" value={monSize} onChange={(e) => setMonSize(e.target.value)}>
            <option value="all">All Sizes</option>
            {SIZES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <select className="filter-sel" value={monSource} onChange={(e) => setMonSource(e.target.value)}>
            <option value="all">All Books</option>
            {SOURCES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      )}

      {tab === 'classes' && (
        <div className="grid">
          {CLASSES.filter((c) => match(c.name) || match(c.desc)).map((c) => (
            <Link key={c.key} to={`/compendium/class/${c.key}`} className="card">
              <div className="stripe" style={{ background: c.color }} />
              <div className="icon">{c.icon}</div>
              <h3>{c.name}</h3>
              <div className="sub">d{c.hitDie} Hit Die · {c.spellcaster ? 'Spellcaster' : 'Martial'}</div>
            </Link>
          ))}
        </div>
      )}

      {tab === 'subclasses' && (
        <>
          <div className="hint" style={{ marginTop: -10, marginBottom: 14 }}>{ALL_SUBCLASSES.length} subclasses across all classes, from PHB, DMG, Xanathar's, and Tasha's.</div>
          <div className="grid">
            {ALL_SUBCLASSES
              .filter((s) => match(s.name) || match(s.desc) || match(s.className))
              .map((s) => (
                <Link key={s.classKey + s.key} to={`/compendium/class/${s.classKey}#${s.key}`} className="card">
                  <div className="stripe" style={{ background: s.classColor }} />
                  <div className="icon">{s.classIcon}</div>
                  <h3>{s.name}</h3>
                  <div className="sub">{s.className} · <span className="gold">{s.source}</span></div>
                </Link>
              ))}
          </div>
        </>
      )}

      {tab === 'races' && (
        <div className="grid">
          {RACES.filter((r) => match(r.name) || match(r.desc)).map((r) => (
            <Link key={r.key} to={`/compendium/race/${r.key}`} className="card">
              <div className="stripe" style={{ background: '#27ae60' }} />
              <div className="icon">{r.icon}</div>
              <h3>{r.name}</h3>
              <div className="sub">{r.size} · Speed {r.speed} ft{r.subraces.length ? ` · ${r.subraces.length} subraces` : ''}</div>
            </Link>
          ))}
        </div>
      )}

      {tab === 'backgrounds' && (
        <div className="grid">
          {BACKGROUNDS.filter((b) => match(b.name) || match(b.desc)).map((b) => (
            <Link key={b.key} to={`/compendium/background/${b.key}`} className="card">
              <div className="stripe" style={{ background: '#8e44ad' }} />
              <div className="icon">{b.icon}</div>
              <h3>{b.name}</h3>
              <div className="sub">{b.skills.map(skillName).join(', ')}</div>
            </Link>
          ))}
        </div>
      )}

      {tab === 'spells' && (() => {
        const list = ALL_SPELLS
          .filter((s) => match(s.name) || match(s.desc))
          .filter((s) => spellLevel === 'all' || s.level === Number(spellLevel))
          .filter((s) => spellClass === 'all' || s.classes.includes(spellClass))
          .sort((a, b) => a.level - b.level || a.name.localeCompare(b.name))
        return (
          <>
            <div className="hint" style={{ marginBottom: 14 }}>{list.length} of {ALL_SPELLS.length} SRD spells.</div>
            <div className="grid">
              {list.map((s) => (
                <Link key={s.key} to={`/compendium/spell/${s.key}`} className="card">
                  <div className="stripe" style={{ background: '#1565c0' }} />
                  <div className="sub" style={{ marginBottom: 4 }}>{spellLevelName(s.level)} · {s.school}</div>
                  <h3 style={{ margin: '0 0 6px' }}>{s.name}</h3>
                  <div className="sub">{s.classes.map((c) => getClass(c)?.name.slice(0, 4)).join(', ')}{s.conc ? ' · Conc.' : ''}{s.ritual ? ' · Ritual' : ''} · <span className="gold">{s.source}</span></div>
                </Link>
              ))}
            </div>
          </>
        )
      })()}

      {tab === 'monsters' && (() => {
        const checkCr = (cr) => {
          if (monCr === 'all') return true
          if (monCr === '0-4') return cr <= 4
          if (monCr === '5-10') return cr >= 5 && cr <= 10
          if (monCr === '11-16') return cr >= 11 && cr <= 16
          if (monCr === '17-30') return cr >= 17
          return true
        }

        const list = MONSTERS
          .filter((m) => match(m.name) || match(m.type))
          .filter((m) => checkCr(m.cr))
          .filter((m) => monType === 'all' || m.type.toLowerCase().includes(monType))
          .filter((m) => monSize === 'all' || m.size === monSize)
          .filter((m) => monSource === 'all' || (m.source || 'SRD') === monSource)
          .sort((a, b) => a.cr - b.cr || a.name.localeCompare(b.name))
        return (
          <>
            <div className="hint" style={{ marginBottom: 14 }}>{list.length} of {MONSTERS.length} monsters, sorted by challenge rating.</div>
            <div className="grid">
              {list.map((m) => (
                <Link key={m.key} to={`/compendium/monster/${m.key}`} className="card">
                  <div className="stripe" style={{ background: '#c0392b' }} />
                  <div className="sub" style={{ marginBottom: 4 }}>CR {crLabel(m.cr)} · {m.size}</div>
                  <h3 style={{ margin: '0 0 6px' }}>{m.name}</h3>
                  <div className="sub">{m.type} · AC {m.ac} · {m.hp} HP · <span className="gold">{m.source || 'SRD'}</span></div>
                </Link>
              ))}
            </div>
          </>
        )
      })()}

      {tab === 'feats' && (
        <>
          <div className="hint" style={{ marginBottom: 14 }}>{FEATS.length} feats from PHB, Xanathar's, and Tasha's.</div>
          <div className="grid">
            {FEATS.filter((f) => match(f.name) || match(f.desc)).map((f) => (
              <Link key={f.name} to={`/compendium/feat/${encodeURIComponent(f.name)}`} className="card">
                <div className="stripe" style={{ background: '#e67e22' }} />
                <div className="icon">🏃</div>
                <h3 style={{ margin: '0 0 6px' }}>{f.name}</h3>
                <div className="sub">{f.desc.slice(0, 80)}...</div>
              </Link>
            ))}
          </div>
        </>
      )}

      {tab === 'items' && (
        <>
          <div className="hint" style={{ marginBottom: 14 }}>{ITEMS.length} standard gear and magic items.</div>
          <div className="grid">
            {ITEMS.filter((i) => match(i.name) || match(i.desc)).map((i) => (
              <Link key={i.name} to={`/compendium/item/${encodeURIComponent(i.name)}`} className="card">
                <div className="stripe" style={{ background: '#f1c40f' }} />
                <div className="icon">⚔️</div>
                <h3 style={{ margin: '0 0 6px' }}>{i.name}</h3>
                <div className="sub">{i.desc.slice(0, 80)}...</div>
              </Link>
            ))}
          </div>
        </>
      )}

      {tab === 'conditions' && (
        <div className="grid">
          {CONDITIONS.filter((c) => match(c.name) || match(c.desc)).map((c) => (
            <Link key={c.name} to={`/compendium/condition/${encodeURIComponent(c.name)}`} className="card">
              <div className="stripe" style={{ background: '#e74c3c' }} />
              <div className="icon">😵</div>
              <h3 style={{ margin: '0 0 6px' }}>{c.name}</h3>
              <div className="sub">{c.desc.slice(0, 80)}...</div>
            </Link>
          ))}
        </div>
      )}

      {tab === 'deities' && (
        <div className="grid">
          {DEITIES.filter((d) => match(d.name) || match(d.desc)).map((d) => (
            <Link key={d.name} to={`/compendium/deity/${encodeURIComponent(d.name)}`} className="card">
              <div className="stripe" style={{ background: '#f39c12' }} />
              <div className="icon">☀️</div>
              <h3 style={{ margin: '0 0 6px' }}>{d.name}</h3>
              <div className="sub">{d.desc.slice(0, 80)}...</div>
            </Link>
          ))}
        </div>
      )}

      {tab === 'mechanics' && (
        <div className="grid">
          {MECHANICS.filter((m) => match(m.name) || match(m.desc)).map((m) => (
            <Link key={m.name} to={`/compendium/mechanic/${encodeURIComponent(m.name)}`} className="card">
              <div className="stripe" style={{ background: '#34495e' }} />
              <div className="icon">⚙️</div>
              <h3 style={{ margin: '0 0 6px' }}>{m.name}</h3>
              <div className="sub">{m.desc.slice(0, 80)}...</div>
            </Link>
          ))}
        </div>
      )}

      {tab === 'hazards' && (
        <div className="grid">
          {HAZARDS.filter((h) => match(h.name) || match(h.desc)).map((h) => (
            <Link key={h.name} to={`/compendium/hazard/${encodeURIComponent(h.name)}`} className="card">
              <div className="stripe" style={{ background: '#c0392b' }} />
              <div className="icon">💀</div>
              <h3 style={{ margin: '0 0 6px' }}>{h.name}</h3>
              <div className="sub">{h.desc.slice(0, 80)}...</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
