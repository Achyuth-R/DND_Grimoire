import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CLASSES, getClass } from '../../data/classes.js'
import { ALL_SPELLS } from '../../data/spells.js'
import { FIGHTING_STYLES } from '../../data/classMechanics.js'
import { expertiseAllowed } from '../../compute.js'
import { skillsTakenExcept } from '../../builderRules.js'
import { Section, SkillPicker, MultiPick } from './shared.jsx'

// Level box that lets the field be cleared while typing instead of snapping to 1.
function LevelInput({ value, onChange }) {
  const [text, setText] = useState(String(value))
  useEffect(() => setText(String(value)), [value])
  const commit = (t) => {
    const n = parseInt(t, 10)
    if (n >= 1 && n <= 20) onChange(n)
  }
  return (
    <input
      type="number" min="1" max="20" value={text}
      onChange={(e) => { setText(e.target.value); commit(e.target.value) }}
      onBlur={() => setText(String(value))}
    />
  )
}

export default function ClassStep({ char, set, d }) {
  const cls = getClass(char.classKey)
  const sub = d.sub
  const expCount = expertiseAllowed(char)
  const infusionCount = cls?.infusionsKnown?.[char.level - 1] || 0
  const fsActive = cls?.fightingStyle && char.level >= cls.fightingStyle.level

  return (
    <>
      <h3 style={{ marginTop: 0 }}>Class</h3>
      <div className="builder-grid">
        <div className="field">
          <label>Class</label>
          <select value={char.classKey} onChange={(e) => set({ classKey: e.target.value, subclassKey: '', skills: [], expertise: [], spells: [], infusions: [], fightingStyle: '' })}>
            {CLASSES.map((c) => <option key={c.key} value={c.key}>{c.icon} {c.name}</option>)}
          </select>
          <div className="hint">d{cls?.hitDie} Hit Die · Saves {cls?.saves?.map((s) => s.toUpperCase()).join(', ')} <Link className="gold" to={`/compendium/class/${char.classKey}`}>Details →</Link></div>
        </div>
        <div className="field">
          <label>Level</label>
          <LevelInput value={char.level} onChange={(level) => set({ level })} />
        </div>
        {cls?.subclasses?.length > 0 && (
          <div className="field">
            <label>Subclass ({cls.subclasses.length} options)</label>
            <select value={char.subclassKey} onChange={(e) => set({ subclassKey: e.target.value })}>
              <option value="">— Choose —</option>
              {cls.subclasses.map((s) => <option key={s.key} value={s.key}>{s.name} ({s.source})</option>)}
            </select>
            <div className="hint">
              {char.level >= cls.subclassLevel
                ? <>Required at level {cls.subclassLevel}. {char.subclassKey && <Link className="gold" to={`/compendium/class/${char.classKey}#${char.subclassKey}`}>Details →</Link>}</>
                : <span>Chosen at level {cls.subclassLevel}; its features won't apply until then.</span>}
            </div>
          </div>
        )}
      </div>

      <div className="pill-row">
        <span className="pill"><b>Armor:</b> {d.profs.armor.join(', ') || 'None'}</span>
        <span className="pill"><b>Weapons:</b> {d.profs.weapons.join(', ')}</span>
        {d.spell && <span className="pill"><b>Spellcasting:</b> {d.spell.ability.toUpperCase()} · DC {d.spell.dc}</span>}
      </div>

      <Section title="Class Skills" hint={`Choose ${cls.skillsChoose} skills. Skills tagged “class” are on the ${cls.name} list, but any skill is allowed. Skills you already have are locked.`}>
        <SkillPicker from="any" suggested={cls.skillsFrom === 'any' ? null : cls.skillsFrom} value={char.skills || []} max={cls.skillsChoose} taken={skillsTakenExcept(char, 'cls')} onChange={(skills) => set({ skills })} />
      </Section>

      {sub?.skillChoice && (
        <Section title={`${sub.name} Skills`} hint={sub.skillChoice.expertise ? 'You gain proficiency and double your proficiency bonus with these.' : undefined}>
          <SkillPicker
            from="any" suggested={sub.skillChoice.from === 'any' ? null : sub.skillChoice.from} value={char.subclassChoices?.skills || []} max={sub.skillChoice.count}
            taken={skillsTakenExcept(char, 'sub')}
            onChange={(skills) => set({ subclassChoices: { ...char.subclassChoices, skills } })}
          />
        </Section>
      )}

      {sub?.cantripChoice && (
        <Section title={`${sub.name} Cantrip`}>
          <div className="field" style={{ maxWidth: 420 }}>
            <select value={char.subclassChoices?.cantrip || ''} onChange={(e) => set({ subclassChoices: { ...char.subclassChoices, cantrip: e.target.value } })}>
              <option value="">— Choose a cantrip —</option>
              {ALL_SPELLS.filter((s) => s.level === 0 && s.classes.includes(sub.cantripChoice.list)).map((s) => <option key={s.key} value={s.key}>{s.name}</option>)}
            </select>
          </div>
        </Section>
      )}

      {expCount > 0 && (
        <Section title="Expertise" hint={`Choose ${expCount} of your proficiencies to double your proficiency bonus.`}>
          <MultiPick
            options={[
              ...d.skills.filter((s) => s.proficient).map((s) => ({ key: s.key, label: s.name })),
              ...(cls.expertiseTools ? [{ key: 'thieves-tools', label: "Thieves' tools" }] : []),
            ]}
            value={char.expertise || []} max={expCount} onChange={(expertise) => set({ expertise })}
          />
        </Section>
      )}

      {fsActive && (
        <Section title="Fighting Style">
          <div className="radio-row">
            {cls.fightingStyle.options.map((k) => (
              <label key={k} className={char.fightingStyle === k ? 'checked' : ''}>
                <input type="radio" checked={char.fightingStyle === k} onChange={() => set({ fightingStyle: k })} /> {FIGHTING_STYLES[k].name}
              </label>
            ))}
          </div>
          <div className="hint">The full text is in the class's Fighting Style feature. Archery and Defense are applied to your sheet automatically.</div>
        </Section>
      )}

      {infusionCount > 0 && (
        <Section title="Infusions Known" hint={`Choose ${infusionCount} artificer infusions. Infusions with a level prerequisite appear once you reach it.`}>
          <MultiPick
            options={cls.infusions.filter((i) => (i.prereqLevel || 0) <= char.level).map((i) => ({ key: i.key, label: i.name, sub: i.prereqLevel ? `${i.prereqLevel}th+` : '' }))}
            value={char.infusions || []} max={infusionCount} onChange={(infusions) => set({ infusions })}
          />
        </Section>
      )}

    </>
  )
}
