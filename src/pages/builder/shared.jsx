import { useState } from 'react'
import { ABILITIES, SKILLS } from '../../data/abilities.js'
import { FEATS, meetsPrereq } from '../../data/featMechanics.js'
import { ALL_SPELLS, getSpell, spellLevelName } from '../../data/spells.js'
import { featsTaken } from '../../compute.js'

export const skillName = (k) => SKILLS.find((s) => s.key === k)?.name || k
export const abName = (k) => ABILITIES.find((a) => a.key === k)?.name || k
const ALL_SKILLS = SKILLS.map((s) => s.key)

export function Section({ title, hint, children }) {
  return (
    <div className="b-section">
      <h4 className="b-section-title">{title}</h4>
      {hint && <div className="hint" style={{ marginTop: -4, marginBottom: 10 }}>{hint}</div>}
      {children}
    </div>
  )
}

// Checkbox grid that allows up to `max` selections.
export function MultiPick({ options, value = [], max, onChange, columns }) {
  const toggle = (k) => {
    if (value.includes(k)) onChange(value.filter((x) => x !== k))
    else if (value.length < max) onChange([...value, k])
    else if (max === 1) onChange([k])
  }
  return (
    <div className="skill-pick" style={columns ? { gridTemplateColumns: `repeat(${columns}, 1fr)` } : undefined}>
      {options.map((o) => {
        const checked = value.includes(o.key) || !!o.locked
        const disabled = !!o.locked || (o.disabled && !value.includes(o.key)) || (!checked && value.length >= max && max !== 1)
        return (
          <label key={o.key} className={(checked ? 'checked' : '') + (disabled && !checked ? ' dim' : '')}>
            <input type="checkbox" checked={checked} disabled={disabled} onChange={() => toggle(o.key)} />
            <span>{o.label}</span>
            {o.sub && <span className="pick-sub">{o.sub}</span>}
          </label>
        )
      })}
    </div>
  )
}

// Skill picker: `from` is 'any' or a list; skills granted elsewhere are shown locked.
// `suggested` (optional) tags e.g. the class's own skill list while still allowing any skill.
export function SkillPicker({ from, value, max, taken, onChange, suggested }) {
  const keys = from === 'any' ? ALL_SKILLS : from || []
  const options = keys.map((k) => ({
    key: k, label: skillName(k),
    sub: SKILLS.find((s) => s.key === k)?.ability.toUpperCase() + (suggested?.includes(k) ? ' · class' : '') + (taken?.has(k) && !value.includes(k) ? ' · have' : ''),
    disabled: taken?.has(k) && !value.includes(k),
  }))
  return (
    <>
      <div className="hint" style={{ marginBottom: 8 }}><b className="gold">{value.length}/{max}</b> chosen</div>
      <MultiPick options={options} value={value} max={max} onChange={onChange} />
    </>
  )
}

// Choose `count` distinct abilities, each increased by `amount`. value = {key: amount}.
export function AbilityChoice({ count, amount, exclude = [], value = {}, onChange }) {
  const chosen = Object.keys(value)
  return (
    <MultiPick
      columns={6}
      options={ABILITIES.map((a) => ({ key: a.key, label: `${a.key.toUpperCase()} +${amount}`, disabled: exclude.includes(a.key) }))}
      value={chosen}
      max={count}
      onChange={(keys) => onChange(Object.fromEntries(keys.map((k) => [k, amount])))}
    />
  )
}

// Searchable spell list with a selection limit.
export function SpellChooser({ pool, value, max, onChange, label = 'spells', always = [] }) {
  const [q, setQ] = useState('')
  const [lvl, setLvl] = useState('all')
  const levels = [...new Set(pool.map((s) => s.level))].sort((a, b) => a - b)
  const shown = pool
    .filter((s) => lvl === 'all' || s.level === Number(lvl))
    .filter((s) => !q.trim() || s.name.toLowerCase().includes(q.toLowerCase()))
    .sort((a, b) => a.level - b.level || a.name.localeCompare(b.name))
  const count = value.filter((k) => pool.some((s) => s.key === k)).length
  const toggle = (k) => {
    if (value.includes(k)) onChange(value.filter((x) => x !== k))
    else if (count < max) onChange([...value, k])
  }
  return (
    <div>
      <div className="row-between" style={{ marginBottom: 8 }}>
        <div className="hint" style={{ margin: 0 }}><b className={count > max ? 'warn' : 'gold'}>{count}/{max}</b> {label} chosen</div>
        <div style={{ display: 'flex', gap: 8 }}>
          {levels.length > 1 && (
            <select className="filter-sel" value={lvl} onChange={(e) => setLvl(e.target.value)}>
              <option value="all">All levels</option>
              {levels.map((l) => <option key={l} value={l}>{spellLevelName(l)}</option>)}
            </select>
          )}
          <input className="b-search" placeholder="Search…" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
      </div>
      {always.length > 0 && (
        <div className="chip-row" style={{ marginBottom: 8 }}>
          {always.map((k) => <span key={k} className="chip gold" title="Always prepared — doesn't count against your limit">{getSpell(k)?.name || k} ✦</span>)}
        </div>
      )}
      <div className="spell-pick">
        {shown.map((s) => {
          const on = value.includes(s.key)
          return (
            <label key={s.key} className={on ? 'checked' : ''} title={s.desc}>
              <input type="checkbox" checked={on} disabled={!on && count >= max} onChange={() => toggle(s.key)} />
              <span className="sp-name">{s.name}</span>
              <span className="pick-sub">{spellLevelName(s.level)} · {s.school}{s.conc ? ' · C' : ''}{s.ritual ? ' · R' : ''}</span>
            </label>
          )
        })}
        {shown.length === 0 && <div className="hint">No spells match.</div>}
      </div>
    </div>
  )
}

const SPELL_LIST_ABILITY = { bard: 'cha', cleric: 'wis', druid: 'wis', sorcerer: 'cha', warlock: 'cha', wizard: 'int', artificer: 'int' }

// Pick a feat plus any sub-choices it requires. value = { key, ability, skills, expertise, spellList, spells, spellAbility, tool }.
// ignorePrereq: DM-granted feats may skip prerequisites.
export function FeatPicker({ char, d, value = {}, onChange, takenSkills, ignorePrereq = false }) {
  const otherFeats = featsTaken(char).map((f) => f.feat.key).filter((k) => k !== value.key)
  const options = FEATS.filter((f) => (f.repeatable || !otherFeats.includes(f.key)) && (ignorePrereq || meetsPrereq(f, char, d)))
  const feat = FEATS.find((f) => f.key === value.key)
  const set = (patch) => onChange({ ...value, ...patch })
  const profSkills = d.skills.filter((s) => s.proficient).map((s) => s.key)
  return (
    <div className="feat-pick">
      <div className="field" style={{ marginBottom: 8 }}>
        <select value={value.key || ''} onChange={(e) => onChange({ key: e.target.value })}>
          <option value="">— Choose a feat —</option>
          {options.map((f) => <option key={f.key} value={f.key}>{f.name}</option>)}
        </select>
      </div>
      {feat && (
        <>
          <p className="feat-desc">{feat.desc}</p>
          {feat.asi?.choose && (
            <div className="field">
              <label>Ability increase (+{feat.asi.amount})</label>
              <div className="radio-row">
                {feat.asi.choose.map((k) => (
                  <label key={k} className={value.ability === k ? 'checked' : ''}>
                    <input type="radio" checked={value.ability === k} onChange={() => set({ ability: k })} /> {k.toUpperCase()}
                  </label>
                ))}
              </div>
            </div>
          )}
          {feat.skillChoice && (
            <div className="field">
              <label>Skill proficienc{feat.skillChoice.count === 1 ? 'y' : 'ies'}</label>
              <SkillPicker from={feat.skillChoice.from} value={value.skills || []} max={feat.skillChoice.count} taken={takenSkills} onChange={(skills) => set({ skills })} />
            </div>
          )}
          {feat.expertiseChoice && (
            <div className="field">
              <label>Expertise</label>
              <MultiPick
                options={[...new Set([...profSkills, ...(value.skills || [])])].map((k) => ({ key: k, label: skillName(k) }))}
                value={value.expertise || []} max={feat.expertiseChoice} onChange={(expertise) => set({ expertise })}
              />
            </div>
          )}
          {feat.toolChoice && (
            <div className="field">
              <label>Tool proficiency ({feat.toolChoice.from})</label>
              <input value={value.tool || ''} placeholder="e.g. Tinker's tools" onChange={(e) => set({ tool: e.target.value })} />
            </div>
          )}
          {feat.spellChoice && (
            <div className="field">
              <label>Spell list</label>
              <select value={value.spellList || ''} onChange={(e) => set({ spellList: e.target.value, spells: [], spellAbility: SPELL_LIST_ABILITY[e.target.value] })}>
                <option value="">— Choose a class —</option>
                {feat.spellChoice.lists.map((l) => <option key={l} value={l}>{l[0].toUpperCase() + l.slice(1)}</option>)}
              </select>
              {value.spellList && (
                <div style={{ marginTop: 10 }}>
                  <SpellChooser
                    pool={ALL_SPELLS.filter((s) => s.classes.includes(value.spellList) && s.level === 0)}
                    value={value.spells || []} max={feat.spellChoice.cantrips} label="cantrips"
                    onChange={(spells) => set({ spells })}
                  />
                  <div style={{ height: 10 }} />
                  <SpellChooser
                    pool={ALL_SPELLS.filter((s) => s.classes.includes(value.spellList) && s.level === 1)}
                    value={value.spells || []} max={feat.spellChoice.level1} label="1st-level spells"
                    onChange={(spells) => set({ spells })}
                  />
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}
