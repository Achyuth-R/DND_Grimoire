import { Link } from 'react-router-dom'
import { RACES } from '../../data/races.js'
import { ALL_SPELLS, getSpell } from '../../data/spells.js'
import { raceInfo } from '../../compute.js'
import { DRAGON_ANCESTRY, skillsTakenExcept } from '../../builderRules.js'
import { Section, SkillPicker, AbilityChoice, FeatPicker, skillName } from './shared.jsx'

export default function RaceStep({ char, set, d }) {
  const ri = raceInfo(char)
  const rc = char.raceChoices || {}
  const setRc = (patch) => set({ raceChoices: { ...rc, ...patch } })
  const fixedAsi = Object.entries(ri?.sub?.replacesParentAsi ? {} : ri?.race.asi || {})
  const subAsi = Object.entries(ri?.sub?.asi || {})

  return (
    <>
      <h3 style={{ marginTop: 0 }}>Race</h3>
      <div className="builder-grid">
        <div className="field">
          <label>Race</label>
          <select value={char.raceKey} onChange={(e) => set({ raceKey: e.target.value, subraceKey: '', raceChoices: {} })}>
            {RACES.map((r) => <option key={r.key} value={r.key}>{r.icon} {r.name}</option>)}
          </select>
          <div className="hint">{ri?.race.desc} <Link className="gold" to={`/compendium/race/${char.raceKey}`}>Details →</Link></div>
        </div>
        {ri?.race.subraces.length > 0 && (
          <div className="field">
            <label>Subrace</label>
            <select value={char.subraceKey} onChange={(e) => set({ subraceKey: e.target.value, raceChoices: {} })}>
              {ri.race.subraces.map((s) => <option key={s.key} value={s.key}>{s.name}</option>)}
            </select>
          </div>
        )}
      </div>

      <div className="pill-row">
        <span className="pill"><b>Size:</b> {d.size}</span>
        <span className="pill"><b>Speed:</b> {ri?.speed} ft</span>
        {d.darkvision > 0 && <span className="pill"><b>Darkvision:</b> {d.darkvision} ft</span>}
        {[...fixedAsi, ...subAsi].length > 0 && (
          <span className="pill"><b>Ability:</b> {[...fixedAsi, ...subAsi].map(([k, v]) => `${k.toUpperCase()} +${v}`).join(', ')}</span>
        )}
        {ri?.skills.length > 0 && <span className="pill"><b>Skills:</b> {ri.skills.map(skillName).join(', ')}</span>}
      </div>

      {ri?.asiChoice && (
        <Section title="Ability Score Increase" hint={`Choose ${ri.asiChoice.count} different abilit${ri.asiChoice.count === 1 ? 'y' : 'ies'} to increase by ${ri.asiChoice.amount}.`}>
          <AbilityChoice {...ri.asiChoice} value={rc.asi} onChange={(asi) => setRc({ asi })} />
        </Section>
      )}

      {ri?.skillChoice && (
        <Section title="Racial Skills" hint={`Choose ${ri.skillChoice.count} skill proficienc${ri.skillChoice.count === 1 ? 'y' : 'ies'}.`}>
          <SkillPicker from={ri.skillChoice.from} value={rc.skills || []} max={ri.skillChoice.count} taken={skillsTakenExcept(char, 'race')} onChange={(skills) => setRc({ skills })} />
        </Section>
      )}

      {ri?.variableTrait && (
        <Section title="Variable Trait" hint="You gain either darkvision with a range of 60 feet or proficiency in one skill of your choice.">
          <div className="radio-row">
            {[['darkvision', 'Darkvision (60 ft)'], ['skill', 'Skill proficiency']].map(([k, lbl]) => (
              <label key={k} className={rc.variable === k ? 'checked' : ''}>
                <input type="radio" checked={rc.variable === k} onChange={() => setRc({ variable: k })} /> {lbl}
              </label>
            ))}
          </div>
          {rc.variable === 'skill' && (
            <div style={{ marginTop: 10 }}>
              <SkillPicker from="any" value={rc.variableSkills || []} max={1} taken={skillsTakenExcept(char, 'race')} onChange={(variableSkills) => setRc({ variableSkills })} />
            </div>
          )}
        </Section>
      )}

      {ri?.sizeChoice && (
        <Section title="Size">
          <div className="radio-row">
            {ri.sizeChoice.map((s) => (
              <label key={s} className={rc.size === s ? 'checked' : ''}>
                <input type="radio" checked={rc.size === s} onChange={() => setRc({ size: s })} /> {s}
              </label>
            ))}
          </div>
        </Section>
      )}

      {ri?.toolChoice && (
        <Section title="Tool Proficiency">
          <div className="radio-row">
            {ri.toolChoice.from.map((t) => (
              <label key={t} className={rc.tool === t ? 'checked' : ''}>
                <input type="radio" checked={rc.tool === t} onChange={() => setRc({ tool: t })} /> {t}
              </label>
            ))}
          </div>
        </Section>
      )}

      {ri?.ancestryChoice && (
        <Section title="Draconic Ancestry" hint="Determines your breath weapon and damage resistance.">
          <div className="field" style={{ maxWidth: 420 }}>
            <select value={rc.ancestry || ''} onChange={(e) => setRc({ ancestry: e.target.value })}>
              <option value="">— Choose a dragon —</option>
              {DRAGON_ANCESTRY.map((a) => <option key={a.key} value={a.key}>{a.name} — {a.damage}, {a.breath}</option>)}
            </select>
          </div>
        </Section>
      )}

      {ri?.cantripChoice && (
        <Section title="Racial Cantrip" hint={`One cantrip of your choice from the ${ri.cantripChoice.list} spell list.`}>
          <div className="field" style={{ maxWidth: 420 }}>
            <select value={rc.cantrip || ''} onChange={(e) => setRc({ cantrip: e.target.value })}>
              <option value="">— Choose a cantrip —</option>
              {ALL_SPELLS.filter((s) => s.level === 0 && s.classes.includes(ri.cantripChoice.list)).map((s) => <option key={s.key} value={s.key}>{s.name}</option>)}
            </select>
          </div>
        </Section>
      )}

      {ri?.spells && (
        <Section title="Racial Spells">
          <div className="chip-row">
            {ri.spells.list.map((s) => (
              <span key={s.key} className={'chip' + (char.level >= s.level ? ' gold' : '')}>{getSpell(s.key)?.name || s.key}{s.level > 1 ? ` (level ${s.level})` : ''}</span>
            ))}
          </div>
        </Section>
      )}

      {ri?.featChoice > 0 && (
        <Section title="Feat" hint="You gain one feat of your choice.">
          <FeatPicker char={char} d={d} value={rc.feat} takenSkills={skillsTakenExcept(char, 'feat')} onChange={(feat) => setRc({ feat })} />
        </Section>
      )}
    </>
  )
}
