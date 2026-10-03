import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loadCharacters, deleteCharacter, exportCharacters, importCharacters } from '../store.js'
import { getClass } from '../data/classes.js'
import { getRace } from '../data/races.js'
import { derive } from '../compute.js'

// Save text as a downloaded file.
function download(filename, text) {
  const url = URL.createObjectURL(new Blob([text], { type: 'application/json' }))
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}
const slug = (s) => (s || 'character').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'character'

export default function Characters() {
  const [list, setList] = useState(loadCharacters())
  const [confirmId, setConfirmId] = useState(null)
  const nav = useNavigate()
  const fileRef = useRef(null)
  const [notice, setNotice] = useState(null)

  const exportAll = () => download(`grimoire-characters-${new Date().toISOString().slice(0, 10)}.json`, exportCharacters(list))
  const exportOne = (ch) => download(`${slug(ch.name)}.json`, exportCharacters([ch]))
  const onImport = async (e) => {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return
    try {
      const { added, updated, skipped } = importCharacters(await file.text())
      setList(loadCharacters())
      setNotice({ ok: true, text: [`Imported ${added} new`, updated ? `updated ${updated}` : null, skipped ? `skipped ${skipped} invalid` : null].filter(Boolean).join(', ') + '.' })
    } catch (err) {
      setNotice({ ok: false, text: err.message })
    }
  }

  const remove = (id) => {
    deleteCharacter(id)
    setList(loadCharacters())
    setConfirmId(null)
  }

  return (
    <div className="container">
      <div className="row-between">
        <div className="section-title" style={{ margin: 0 }}><h2>⚔️ Your Characters</h2></div>
        <div className="char-toolbar">
          {list.length > 0 && <span className="muted">{list.length} hero{list.length === 1 ? '' : 'es'}</span>}
          <button className="btn sm" onClick={() => fileRef.current?.click()}>⬆ Import JSON</button>
          {list.length > 0 && <button className="btn sm" onClick={exportAll}>⬇ Export all</button>}
          <input ref={fileRef} type="file" accept="application/json,.json" hidden onChange={onImport} />
        </div>
      </div>
      {notice && <div className={'notice ' + (notice.ok ? 'ok' : 'bad')} role="status">{notice.text}</div>}

      {list.length === 0 ? (
        <div className="empty">
          <div style={{ fontSize: 48 }}>🗡️</div>
          <h3>No heroes yet</h3>
          <p>Forge your first character to begin the adventure.</p>
          <Link to="/builder" className="btn primary">Create a Character</Link>
        </div>
      ) : (
        <div className="grid" style={{ marginTop: 20 }}>
          {list.map((ch) => {
            const cls = getClass(ch.classKey)
            const race = getRace(ch.raceKey)
            const sub = cls?.subclasses?.find((s) => s.key === ch.subclassKey)
            let stats = null
            try { stats = derive(ch) } catch { stats = null }
            const confirming = confirmId === ch.id
            return (
              <div
                key={ch.id}
                className="card char-card"
                role="link"
                tabIndex={0}
                onClick={() => nav(`/sheet/${ch.id}`)}
                onKeyDown={(e) => { if (e.key === 'Enter') nav(`/sheet/${ch.id}`) }}
              >
                <div className="stripe" style={{ background: cls?.color || '#d4af37' }} />
                <div className="icon">{cls?.icon || '🗡️'}</div>
                <h3>{ch.name || 'Unnamed Hero'}</h3>
                <div className="sub">
                  Level {ch.level} {race?.name} {cls?.name}
                  {sub ? <> · <span className="gold">{sub.name}</span></> : ''}
                </div>

                {stats && (
                  <div className="char-stats">
                    <span><b>{stats.maxHp}</b> HP</span>
                    <span><b>{stats.ac}</b> AC</span>
                    <span><b>{stats.passivePerception}</b> Pass. Perc.</span>
                  </div>
                )}

                <div className="char-actions" onClick={(e) => e.stopPropagation()}>
                  {confirming ? (
                    <>
                      <span className="muted" style={{ fontSize: 13, marginRight: 'auto' }}>Delete this hero?</span>
                      <button className="btn sm danger" onClick={() => remove(ch.id)}>Confirm</button>
                      <button className="btn sm ghost" onClick={() => setConfirmId(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <Link to={`/sheet/${ch.id}`} className="btn sm primary">View Sheet</Link>
                      <Link to={`/builder/${ch.id}`} className="btn sm">Edit</Link>
                      <button className="btn sm" onClick={() => exportOne(ch)} title="Download this character as JSON">Export</button>
                      <button className="btn sm danger" onClick={() => setConfirmId(ch.id)}>Delete</button>
                    </>
                  )}
                </div>
              </div>
            )
          })}

          <Link to="/builder" className="card char-card-new">
            <div className="icon">＋</div>
            <h3>New Character</h3>
            <div className="sub">Forge another hero</div>
          </Link>
        </div>
      )}
    </div>
  )
}
