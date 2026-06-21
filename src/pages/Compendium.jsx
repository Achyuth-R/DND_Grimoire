import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
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

const featPrereq = (d) => {
  const m = (d || '').match(/Prerequisite:\s*([^\n.]+)/i)
  return m ? m[1].trim() : null
}
const crBadgeStyle = (cr) => {
  const t = cr <= 4 ? ['rgba(108,192,112,0.14)', '#6cc070']
    : cr <= 10 ? ['rgba(224,179,65,0.14)', '#e0b341']
    : cr <= 16 ? ['rgba(224,138,77,0.16)', '#e08a4d']
    : ['rgba(224,112,112,0.16)', '#e07070']
  return { background: t[0], color: t[1], border: `1px solid ${t[1]}55` }
}

// Generic sortable table. Columns: {key,label,width,num,sortVal,render}. `to(row)` => detail route.
function SortableTable({ columns, rows, initial, rowKey, to }) {
  const nav = useNavigate()
  const [sort, setSort] = useState(initial)
  const col = columns.find((c) => c.key === sort.key)
  const sorted = col?.sortVal
    ? [...rows].sort((a, b) => {
        const x = col.sortVal(a), y = col.sortVal(b)
        const r = typeof x === 'number' && typeof y === 'number' ? x - y : String(x).localeCompare(String(y))
        return r * (sort.asc ? 1 : -1)
      })
    : rows
  const clickHead = (c) => {
    if (!c.sortVal) return
    setSort((s) => (s.key === c.key ? { key: c.key, asc: !s.asc } : { key: c.key, asc: true }))
  }
  return (
    <div className="cmp-table-wrap">
      <table className="cmp-table">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} className={c.num ? 'num' : ''} style={c.width ? { width: c.width } : undefined}
                  onClick={() => clickHead(c)} aria-sort={sort.key === c.key ? (sort.asc ? 'ascending' : 'descending') : undefined}>
                {c.label}{c.sortVal && sort.key === c.key ? <span className="sort-ind">{sort.asc ? ' ▲' : ' ▼'}</span> : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((r) => (
            <tr key={rowKey(r)} onClick={() => nav(to(r))} tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') nav(to(r)) }}>
              {columns.map((c) => <td key={c.key} className={c.num ? 'num' : ''}>{c.render(r)}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Dense clickable rows for name+description content (feats, items).
function RowList({ rows }) {
  const nav = useNavigate()
  return (
    <div className="cmp-rows">
      {rows.map((r) => (
        <div key={r.key} className="cmp-row" role="link" tabIndex={0}
             onClick={() => nav(r.to)} onKeyDown={(e) => { if (e.key === 'Enter') nav(r.to) }}>
          <div className="ic">{r.icon}</div>
          <div className="body">
            <h3>{r.name}{r.chip ? <span className="chip" style={{ marginLeft: 8 }}>{r.chip}</span> : null}</h3>
            <div className="preview">{r.preview}</div>
          </div>
          <span className="cmp-row-arrow">→</span>
        </div>
      ))}
    </div>
  )
}

// Inline expand/collapse list for short reference text. Keeps a link to the full detail page.
function AccordionList({ items, type, icon }) {
  const [open, setOpen] = useState(null)
  return (
    <div className="acc-list">
      {items.map((it, i) => (
        <div key={it.name} className={'acc-item' + (open === i ? ' open' : '')}>
          <button className="acc-head" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
            <span>{icon} {it.name}</span>
            <span className="chev">▾</span>
          </button>
          {open === i && (
            <div className="acc-body">
              {it.desc}
              <div>
                <Link className="detail-jump" to={`/compendium/${type}/${encodeURIComponent(it.name)}`}>Open full page →</Link>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

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

  const [featAsi, setFeatAsi] = useState('all')
  const [featPre, setFeatPre] = useState('all')

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
              <div className="chip-row">
                <span className="chip gold">{c.primary.map((p) => p.toUpperCase()).join('/')}</span>
                {c.subclasses?.length ? <span className="chip">{c.subclasses.length} subclasses</span> : null}
              </div>
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
                  <div className="sub">{s.className} · <span className="src-pill">{s.source}</span></div>
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
              <div className="chip-row">
                {Object.entries(r.asi || {})
                  .filter(([, v]) => typeof v === 'number')
                  .map(([k, v]) => <span key={k} className="chip gold">+{v} {k.toUpperCase()}</span>)}
                {Object.values(r.asi || {}).some((v) => typeof v !== 'number')
                  ? <span className="chip">+1 to others</span> : null}
              </div>
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
              {b.feature?.name ? <div className="chip-row"><span className="chip">✦ {b.feature.name}</span></div> : null}
            </Link>
          ))}
        </div>
      )}

      {tab === 'spells' && (() => {
        const list = ALL_SPELLS
          .filter((s) => match(s.name) || match(s.desc))
          .filter((s) => spellLevel === 'all' || s.level === Number(spellLevel))
          .filter((s) => spellClass === 'all' || s.classes.includes(spellClass))
        const columns = [
          { key: 'name', label: 'Name', width: '26%', sortVal: (s) => s.name, render: (s) => <span className="cmp-name">{s.name}</span> },
          { key: 'level', label: 'Level', width: '13%', sortVal: (s) => s.level, render: (s) => <span className="cmp-muted">{spellLevelName(s.level)}</span> },
          { key: 'school', label: 'School', width: '15%', sortVal: (s) => s.school, render: (s) => <span className="cmp-muted">{s.school}</span> },
          { key: 'time', label: 'Cast', width: '14%', sortVal: (s) => s.time, render: (s) => <span className="cmp-muted">{s.time}</span> },
          { key: 'range', label: 'Range', width: '12%', sortVal: (s) => s.range, render: (s) => <span className="cmp-muted">{s.range}</span> },
          { key: 'tags', label: 'Tags', render: (s) => (
            <span className="tag-cell">
              {s.conc ? <span className="chip tag-c" title="Concentration">C</span> : null}
              {s.ritual ? <span className="chip tag-r" title="Ritual">R</span> : null}
              <span className="src-pill">{s.source}</span>
            </span>
          ) },
        ]
        return (
          <>
            <div className="hint" style={{ marginBottom: 14 }}>{list.length} of {ALL_SPELLS.length} SRD spells. Click a column to sort.</div>
            <SortableTable columns={columns} rows={list} rowKey={(s) => s.key} initial={{ key: 'level', asc: true }} to={(s) => `/compendium/spell/${s.key}`} />
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
        const columns = [
          { key: 'name', label: 'Name', width: '28%', sortVal: (m) => m.name, render: (m) => <span className="cmp-name">{m.name}</span> },
          { key: 'cr', label: 'CR', width: '12%', sortVal: (m) => m.cr, render: (m) => <span className="cr-badge" style={crBadgeStyle(m.cr)}>CR {crLabel(m.cr)}</span> },
          { key: 'type', label: 'Type', width: '24%', sortVal: (m) => m.type, render: (m) => <span className="cmp-muted" style={{ textTransform: 'capitalize' }}>{m.type}</span> },
          { key: 'size', label: 'Size', width: '12%', sortVal: (m) => SIZES.indexOf(m.size), render: (m) => <span className="cmp-muted">{m.size}</span> },
          { key: 'ac', label: 'AC', width: '8%', num: true, sortVal: (m) => m.ac, render: (m) => m.ac },
          { key: 'hp', label: 'HP', width: '8%', num: true, sortVal: (m) => m.hp, render: (m) => m.hp },
        ]
        return (
          <>
            <div className="hint" style={{ marginBottom: 14 }}>{list.length} of {MONSTERS.length} monsters. Click a column to sort.</div>
            <SortableTable columns={columns} rows={list} rowKey={(m) => m.key} initial={{ key: 'cr', asc: true }} to={(m) => `/compendium/monster/${m.key}`} />
          </>
        )
      })()}

      {tab === 'feats' && (() => {
        const list = FEATS
          .filter((f) => match(f.name) || match(f.desc))
          .filter((f) => {
            if (featPre === 'yes') return featPrereq(f.desc)
            if (featPre === 'no') return !featPrereq(f.desc)
            return true
          })
          .filter((f) => {
            if (featAsi === 'all') return true
            const d = f.desc
            const hasAsi = d.match(/Increase your.*(Strength|Dexterity|Constitution|Intelligence|Wisdom|Charisma)/) || d.includes('ability score of your choice')
            if (featAsi === 'none') return !hasAsi
            if (d.includes('ability score of your choice')) return true
            const map = { str: 'Strength', dex: 'Dexterity', con: 'Constitution', int: 'Intelligence', wis: 'Wisdom', cha: 'Charisma' }
            return map[featAsi] && d.match(new RegExp(`Increase your.*${map[featAsi]}`))
          })
          .map((f) => {
            const pre = featPrereq(f.desc)
            const body = f.desc.replace(/^Prerequisite:[^\n]*\n?/i, '').replace(/\n+/g, ' ').trim()
            return { key: f.name, name: f.name, icon: '🏃', chip: pre ? `Prereq: ${pre}` : null, preview: body, to: `/compendium/feat/${encodeURIComponent(f.name)}` }
          })
        return (
          <>
            <div className="filter-row">
              <select className="filter-sel" value={featAsi} onChange={(e) => setFeatAsi(e.target.value)}>
                <option value="all">Any ASI</option>
                <option value="str">Strength</option>
                <option value="dex">Dexterity</option>
                <option value="con">Constitution</option>
                <option value="int">Intelligence</option>
                <option value="wis">Wisdom</option>
                <option value="cha">Charisma</option>
                <option value="none">No ASI</option>
              </select>
              <select className="filter-sel" value={featPre} onChange={(e) => setFeatPre(e.target.value)}>
                <option value="all">Any Prerequisite</option>
                <option value="yes">Has Prerequisite</option>
                <option value="no">No Prerequisite</option>
              </select>
            </div>
            <div className="hint" style={{ marginBottom: 14 }}>{list.length} feats.</div>
            <RowList rows={list} />
          </>
        )
      })()}

      {tab === 'items' && (() => {
        const list = ITEMS.filter((i) => match(i.name) || match(i.desc)).map((i, idx) => ({
          key: `${i.name}#${idx}`, name: i.name, icon: '⚔️', preview: (i.desc || '').replace(/[*_]/g, ''), to: `/compendium/item/${encodeURIComponent(i.name)}`,
        }))
        return (
          <>
            <div className="hint" style={{ marginBottom: 14 }}>{list.length} of {ITEMS.length} standard gear and magic items.</div>
            <RowList rows={list} />
          </>
        )
      })()}

      {tab === 'conditions' && (
        <AccordionList type="condition" icon="😵" items={CONDITIONS.filter((c) => match(c.name) || match(c.desc))} />
      )}

      {tab === 'deities' && (
        <AccordionList type="deity" icon="☀️" items={DEITIES.filter((d) => match(d.name) || match(d.desc))} />
      )}

      {tab === 'mechanics' && (
        <AccordionList type="mechanic" icon="⚙️" items={MECHANICS.filter((m) => match(m.name) || match(m.desc))} />
      )}

      {tab === 'hazards' && (
        <AccordionList type="hazard" icon="💀" items={HAZARDS.filter((h) => match(h.name) || match(h.desc))} />
      )}
    </div>
  )
}
