import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCharacter, upsertCharacter, onCharactersChanged } from '../store.js'
import { derive, racialTraits, defaultFeatureText, classFeaturesUpTo, spellOptions, defaultEquipmentText } from '../compute.js'
import { ABILITIES, SKILLS, fmtMod } from '../data/abilities.js'
import { getSpell, spellLevelName } from '../data/spells.js'
import { DRAGON_ANCESTRY } from '../builderRules.js'

export default function CharacterSheet() {
  const { id } = useParams()
  const [char, setChar] = useState(() => getCharacter(id))
  // Reload when navigating between different character sheets (same component instance).
  useEffect(() => { setChar(getCharacter(id)); window.scrollTo(0, 0) }, [id])
  // Adopt a newer copy synced from another device (our own saves are never newer than local state).
  useEffect(() => onCharactersChanged(() => setChar((prev) => {
    const fresh = getCharacter(id)
    if (!fresh) return prev
    return !prev || Date.parse(fresh.updatedAt || 0) > Date.parse(prev.updatedAt || 0) ? fresh : prev
  })), [id])

  if (!char) {
    return (
      <div className="container">
        <div className="empty"><h2>Character not found</h2><Link to="/characters" className="btn">Back to Characters</Link></div>
      </div>
    )
  }

  const update = (field, value) => {
    setChar(upsertCharacter({ ...char, [field]: value }))
  }
  const updateAttack = (i, field, value) => {
    const attacks = (char.attacks || []).map((a, idx) => (idx === i ? { ...a, [field]: value } : a))
    update('attacks', attacks)
  }
  const addAttack = () => update('attacks', [...(char.attacks || []), { name: '', bonus: '', damage: '' }])

  const d = derive(char)
  const traits = racialTraits(char)
  const features = classFeaturesUpTo(char)
  const defaults = defaultFeatureText(char)
  const subclass = d.sub
  const subrace = d.ri?.sub
  const ancestry = DRAGON_ANCESTRY.find((a) => a.key === char.raceChoices?.ancestry)
  const infusions = (d.cls?.infusions || []).filter((i) => (char.infusions || []).includes(i.key))
  const toolLabel = (t) => (d.toolExpertise.includes('thieves-tools') && t === "Thieves' tools" ? `${t} (expertise)` : t)
  const hasSpellPage = !!d.spell || d.innate.length > 0
  const hpCurrent = char.hpCurrent ?? d.maxHp
  const ab3 = (k) => k.slice(0, 3).toUpperCase()

  return (
    <div className="container">
      <div className="no-print">
        <Link to="/characters" className="back-link">← Back to Characters</Link>
        <div className="sheet-toolbar">
          <button className="btn primary" onClick={() => window.print()}>🖨️ Print / Export PDF</button>
          <Link to={`/builder/${char.id}`} className="btn">✎ Edit Character</Link>
        </div>
      </div>

      <div className="sheet-stage">
        {/* ===== PAGE 1 ===== */}
        <div className="cs-page">
          <div className="cs-head">
            <div className="cs-name-wrap">
              <div className="cs-name">{char.name || ' '}</div>
              <div className="cs-name-label">Character Name</div>
            </div>
            <div className="cs-meta">
              <Meta label="Class & Level" value={`${d.cls?.name} ${char.level}${subclass ? ` · ${subclass.name}` : ''}`} />
              <Meta label="Background" value={d.bg?.name} />
              <Meta label="Player Name" value={char.playerName || ' '} />
              <Meta label="Race" value={subrace ? subrace.name : d.race?.name} />
              <Meta label="Alignment" value={char.alignment} />
              <Meta label="Experience" value={char.experience || 0} />
            </div>
          </div>

          <div className="cs-cols">
            {/* LEFT */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div className="cs-ability-row">
                <div className="cs-ability-col">
                  {ABILITIES.map((a) => (
                    <div className="cs-ability" key={a.key}>
                      <div className="ab">{ab3(a.key)}</div>
                      <div className="score">{d.scores[a.key]}</div>
                      <div className="mod">{fmtMod(d.mods[a.key])}</div>
                    </div>
                  ))}
                </div>
                <div className="cs-rightcol">
                  <div className="cs-prof-pill">
                    <div className="bubble">+{d.pb}</div>
                    <div className="lbl">Proficiency Bonus</div>
                  </div>
                  <div className="cs-box">
                    <div className="cs-section-title">Saving Throws</div>
                    {ABILITIES.map((a) => (
                      <div className="cs-line" key={a.key}>
                        <span className={'cs-dot' + (d.saves[a.key].proficient ? ' on' : '')} />
                        <span className="v">{fmtMod(d.saves[a.key].value)}</span>
                        <span className="n">{a.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="cs-box">
                    <div className="cs-section-title">Skills</div>
                    {d.skills.map((s) => (
                      <div className="cs-line" key={s.key}>
                        <span className={'cs-dot' + (s.expert ? ' exp' : s.proficient ? ' on' : '')} />
                        <span className="v">{fmtMod(s.value)}</span>
                        <span className="n">{s.name} <span className="ab-tag">({ab3(s.ability)})</span></span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="cs-prof-pill">
                <div className="bubble">{d.passivePerception}</div>
                <div className="lbl">Passive Wisdom (Perception)</div>
              </div>
              <div className="cs-box" style={{ flex: 1 }}>
                <div className="cs-section-title">Other Proficiencies & Languages</div>
                <div style={{ fontSize: 11, lineHeight: 1.5 }}>
                  <p style={{ margin: '0 0 4px' }}><b>Armor:</b> {d.profs.armor.length ? d.profs.armor.join(', ') : 'None'}</p>
                  <p style={{ margin: '0 0 4px' }}><b>Weapons:</b> {d.profs.weapons.join(', ')}</p>
                  <p style={{ margin: '0 0 4px' }}><b>Tools:</b> {d.profs.tools.length ? d.profs.tools.map(toolLabel).join(', ') : '—'}</p>
                  <p style={{ margin: '0 0 4px' }}><b>Languages:</b> {d.profs.languages.join(', ')}</p>
                  <p style={{ margin: 0 }}><b>Size:</b> {d.size}{d.darkvision ? ` · Darkvision ${d.darkvision} ft` : ''}{ancestry ? ` · ${ancestry.name} dragon ancestry (${ancestry.damage})` : ''}</p>
                </div>
              </div>
            </div>

            {/* CENTER */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div className="cs-stat3">
                <div className="cs-stat" title={[d.acLabel, ...d.acNotes].join('\n')}><div className="big">{d.ac}</div><div className="lbl">Armor Class</div></div>
                <div className="cs-stat"><div className="big">{fmtMod(d.initiative)}</div><div className="lbl">Initiative</div></div>
                <div className="cs-stat"><div className="big">{d.speed}</div><div className="lbl">Speed</div></div>
              </div>

              <div className="cs-hp">
                <div className="bar"><span>Hit Point Maximum</span><b>{d.maxHp}</b></div>
                <input
                  className="pool" style={{ width: '100%', border: 'none', background: 'transparent' }}
                  value={hpCurrent}
                  onChange={(e) => update('hpCurrent', e.target.value === '' ? '' : parseInt(e.target.value) || 0)}
                />
                <div className="cap">Current Hit Points</div>
              </div>

              <div className="cs-stat3">
                <div className="cs-stat" style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#666', borderBottom: '1px solid #ccc', paddingBottom: 3, marginBottom: 4 }}>Total {char.level}d{d.hitDie}</div>
                  <div className="lbl" style={{ textAlign: 'center' }}>Hit Dice</div>
                </div>
                <div className="cs-death">
                  <div style={{ fontSize: 9, fontWeight: 700 }}>Successes</div>
                  <div className="cs-pips">{[0, 1, 2].map((i) => <span className="cs-pip" key={i} />)}</div>
                  <div style={{ fontSize: 9, fontWeight: 700 }}>Failures</div>
                  <div className="cs-pips">{[0, 1, 2].map((i) => <span className="cs-pip" key={i} />)}</div>
                  <div className="lbl" style={{ marginTop: 3 }}>Death Saves</div>
                </div>
              </div>

              <div className="cs-box" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <table className="cs-attacks">
                  <thead><tr><th>Name</th><th style={{ width: 60, textAlign: 'center' }}>Atk</th><th>Damage/Type</th></tr></thead>
                  <tbody>
                    {(char.attacks || []).map((atk, i) => (
                      <tr key={i}>
                        <td><input value={atk.name} onChange={(e) => updateAttack(i, 'name', e.target.value)} /></td>
                        <td><input style={{ textAlign: 'center' }} value={atk.bonus} onChange={(e) => updateAttack(i, 'bonus', e.target.value)} /></td>
                        <td><input value={atk.damage} onChange={(e) => updateAttack(i, 'damage', e.target.value)} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button className="btn sm no-print" style={{ margin: '6px 0' }} onClick={addAttack}>+ Add Attack</button>
                <textarea
                  className="cs-ta" style={{ flex: 1, minHeight: 90 }}
                  value={char.attacksText} onChange={(e) => update('attacksText', e.target.value)}
                  placeholder={'Attacks & spellcasting notes…'}
                />
                <div className="cs-box-label" style={{ marginTop: 4 }}>Attacks & Spellcasting</div>
              </div>
            </div>

            {/* RIGHT */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <TraitArea label="Personality Traits" value={char.personalityText} onChange={(v) => update('personalityText', v)} />
              <TraitArea label="Ideals" value={char.idealsText} onChange={(v) => update('idealsText', v)} />
              <TraitArea label="Bonds" value={char.bondsText} onChange={(v) => update('bondsText', v)} />
              <TraitArea label="Flaws" value={char.flawsText} onChange={(v) => update('flawsText', v)} />

              <div className="cs-trait-box">
                <div style={{ overflow: 'hidden' }}>
                  <div className="cs-feat-h">Racial Traits ({subrace ? subrace.name : d.race?.name})</div>
                  <ul className="cs-feat-list">
                    {traits.map((t, i) => <li key={i}><b>{t.name}.</b> {t.desc}</li>)}
                  </ul>
                  <div className="cs-feat-h">Background Feature: {d.bg?.feature?.name}</div>
                  <p style={{ fontSize: 11, fontStyle: 'italic', margin: '0 0 8px', paddingLeft: 8, borderLeft: '2px solid #ccc' }}>{d.bg?.feature?.desc}</p>
                  {(d.feats.length > 0 || d.fightingStyle || infusions.length > 0) && (
                    <>
                      <div className="cs-feat-h">Feats & Choices</div>
                      <ul className="cs-feat-list">
                        {d.feats.map(({ feat, choices, source }) => (
                          <li key={feat.key + source}><b>{feat.name}</b> ({source}){choices.ability ? ` · +1 ${choices.ability.toUpperCase()}` : ''}{choices.skills?.length ? ` · ${choices.skills.map((k) => SKILLS.find((s) => s.key === k)?.name).join(', ')}` : ''}</li>
                        ))}
                        {d.fightingStyle && <li><b>Fighting Style:</b> {d.fightingStyle.name}</li>}
                        {infusions.length > 0 && <li><b>Infusions:</b> {infusions.map((i) => i.name).join(', ')}</li>}
                      </ul>
                    </>
                  )}
                  <div className="cs-feat-h">Class Features {subclass ? `& ${subclass.name}` : ''}</div>
                  <textarea
                    className="cs-ta" style={{ minHeight: 140, border: '1px dashed #ccc', padding: 4, borderRadius: 4 }}
                    value={char.featuresText ?? defaults.compact}
                    onChange={(e) => update('featuresText', e.target.value)}
                  />
                </div>
                <div className="cap">Features & Traits</div>
              </div>

              <div className="cs-trait-box" style={{ minHeight: 120 }}>
                <textarea
                  className="cs-ta" style={{ flex: 1, minHeight: 90 }}
                  value={char.equipmentText ?? defaultEquipmentText(char, d)}
                  onChange={(e) => update('equipmentText', e.target.value)}
                  placeholder="Equipment and currency…"
                />
                <div className="cap">Equipment</div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== PAGE 2: SPELLCASTING (class casters, or racial/feat spells) ===== */}
        {hasSpellPage && (
          <div className="cs-page">
            <div className="cs-head">
              <div className="cs-name-wrap">
                <div className="cs-name">Spellcasting</div>
                <div className="cs-name-label">{d.spell ? `Spellcasting Class — ${d.cls?.name}` : 'Racial & Feat Spells'}</div>
              </div>
              {d.spell && (
                <div className="cs-meta">
                  <Meta label="Spell Ability" value={ab3(d.spell.ability)} />
                  <Meta label="Spell Save DC" value={d.spell.dc} />
                  <Meta label="Spell Atk Bonus" value={fmtMod(d.spell.attack)} />
                </div>
              )}
            </div>
            {d.spell && (
              <div className="cs-slots">
                {d.spell.slots.map((s) => (
                  <div className="cs-slot" key={s.level}>
                    <div className="lvl">{s.pact ? `Pact · ${spellLevelName(s.level)}` : spellLevelName(s.level)}</div>
                    <div className="cs-pips">{Array.from({ length: s.count }, (_, i) => <span className="cs-pip" key={i} />)}</div>
                  </div>
                ))}
              </div>
            )}
            <div className="cs-spell-grid">
              <div className="cs-spell-pane">
                <div className="cs-section-title">Cantrips & Spells</div>
                <SpellPicker char={char} update={update} d={d} />
              </div>
              <div className="cs-spell-pane">
                <div className="cs-section-title">Class & Subclass Abilities</div>
                <textarea
                  className="cs-ta" style={{ flex: 1 }}
                  value={char.abilitiesText ?? defaults.detailed}
                  onChange={(e) => update('abilitiesText', e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {/* Non-casters: full feature reference page (auto-filled from compendium) */}
        {!hasSpellPage && features.length > 0 && (
          <div className="cs-page">
            <div className="cs-head">
              <div className="cs-name-wrap">
                <div className="cs-name">Features & Abilities</div>
                <div className="cs-name-label">{d.cls?.name}{subclass ? ` · ${subclass.name}` : ''} — through level {char.level}</div>
              </div>
            </div>
            <div className="cs-spell-pane" style={{ minHeight: 'auto' }}>
              <textarea
                className="cs-ta" style={{ flex: 1, minHeight: 700 }}
                value={char.abilitiesText ?? defaults.detailed}
                onChange={(e) => update('abilitiesText', e.target.value)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Spell list for the sheet: the player's chosen spells plus everything granted automatically.
// Adding is limited to legal spells (class list, slot level) and the known/prepared counts.
function SpellPicker({ char, update, d }) {
  const [q, setQ] = useState('')
  const opts = spellOptions(char, d)
  const chosen = new Set(char.spells || [])
  const legal = new Set(opts ? [...opts.cantrips, ...opts.leveled].map((s) => s.key) : [])
  const entries = [
    ...[...chosen].map((k) => (legal.has(k)
      ? { key: k, tag: null, removable: true }
      : { key: k, tag: '⚠', title: 'Not on your spell list or above your spell level — remove it, or fix it in the builder', removable: true })),
    ...(d.spell?.alwaysPrepared || []).map((k) => ({ key: k, tag: '✦', title: 'Always prepared' })),
    ...(d.spell?.bonusCantrips || []).map((k) => ({ key: k, tag: '✦', title: 'Granted by your subclass' })),
    ...d.innate.map((s) => ({ key: s.key, tag: '◆', title: `${s.source} · DC ${s.dc}, +${s.attack} to hit (${s.ability.toUpperCase()})` })),
  ]
  const seen = new Set()
  const byLevel = {}
  for (const e of entries) {
    const s = getSpell(e.key)
    if (!s || seen.has(s.key)) continue
    seen.add(s.key)
    ;(byLevel[s.level] ||= []).push({ ...e, spell: s })
  }
  Object.values(byLevel).forEach((arr) => arr.sort((a, b) => a.spell.name.localeCompare(b.spell.name)))

  const cantripCount = opts ? opts.cantrips.filter((s) => chosen.has(s.key)).length : 0
  const leveledCount = opts ? opts.leveled.filter((s) => chosen.has(s.key)).length : 0
  const canAdd = (s) => (s.level === 0 ? cantripCount < opts.cantripLimit : leveledCount < opts.leveledLimit)
  const toggle = (key) => update('spells', chosen.has(key) ? char.spells.filter((k) => k !== key) : [...(char.spells || []), key])

  const results = opts && q.trim()
    ? [...opts.cantrips, ...opts.leveled].filter((s) => s.name.toLowerCase().includes(q.toLowerCase()) && !chosen.has(s.key)).slice(0, 8)
    : []

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
      {opts && (
        <div className="no-print" style={{ position: 'relative', marginBottom: 8 }}>
          <div style={{ fontSize: 11, color: '#666', marginBottom: 4 }}>
            Cantrips {cantripCount}/{opts.cantripLimit} · {opts.leveledLabel === 'spells known' ? 'Known' : 'Prepared'} {leveledCount}/{opts.leveledLimit}
          </div>
          <input className="cs-spell-search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search your spell list to add…" />
          {results.length > 0 && (
            <div className="cs-spell-results">
              {results.map((s) => (
                <button key={s.key} className="cs-spell-result" disabled={!canAdd(s)} onClick={() => { toggle(s.key); setQ('') }}>
                  <span><b>{s.name}</b> <span style={{ color: '#888' }}>· {spellLevelName(s.level)} · {s.school}</span></span>
                  <span style={{ color: canAdd(s) ? '#1565c0' : '#999', fontWeight: 700 }}>{canAdd(s) ? '+ Add' : 'Limit reached'}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <div style={{ flex: 1, overflowY: 'auto' }}>
        {seen.size === 0 && <p className="no-print" style={{ fontSize: 12, color: '#888' }}>No spells yet. Search above to add known/prepared spells.</p>}
        {Object.keys(byLevel).map(Number).sort((a, b) => a - b).map((lvl) => (
          <div key={lvl} style={{ marginBottom: 8 }}>
            <div className="cs-spell-lvl">{spellLevelName(lvl)}</div>
            {byLevel[lvl].map(({ spell: s, tag, title, removable }) => (
              <div className="cs-spell-item" key={s.key}>
                <span title={title || s.desc}>
                  {s.name}
                  {tag && <span className="cs-spell-flag" title={title}>{tag}</span>}
                  {s.conc && <span className="cs-spell-flag" title="Concentration">C</span>}
                  {s.ritual && <span className="cs-spell-flag" title="Ritual">R</span>}
                </span>
                {removable && <button className="cs-spell-x no-print" onClick={() => toggle(s.key)} title="Remove">×</button>}
              </div>
            ))}
          </div>
        ))}
      </div>
      {(d.spell?.alwaysPrepared?.length > 0 || d.innate.length > 0) && (
        <div style={{ fontSize: 10, color: '#777', marginTop: 4 }}>✦ always prepared / granted · ◆ racial or feat spell</div>
      )}
    </div>
  )
}

function Meta({ label, value }) {
  return (
    <div className="cs-meta-field">
      <div className="cs-meta-val" title={value}>{value}</div>
      <div className="cs-meta-label">{label}</div>
    </div>
  )
}

function TraitArea({ label, value, onChange }) {
  return (
    <div className="cs-trait-box" style={{ minHeight: 64 }}>
      <textarea className="cs-ta" style={{ flex: 1, minHeight: 38 }} value={value} onChange={(e) => onChange(e.target.value)} placeholder={label} />
      <div className="cap">{label}</div>
    </div>
  )
}
