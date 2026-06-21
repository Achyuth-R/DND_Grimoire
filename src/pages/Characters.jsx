import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loadCharacters, deleteCharacter } from '../store.js'
import { getClass } from '../data/classes.js'
import { getRace } from '../data/races.js'

export default function Characters() {
  const [list, setList] = useState(loadCharacters())
  const nav = useNavigate()

  const remove = (id) => {
    deleteCharacter(id)
    setList(loadCharacters())
  }

  return (
    <div className="container">
      <div className="row-between">
        <div className="section-title" style={{ margin: 0 }}><h2>⚔️ Your Characters</h2></div>
        <Link to="/builder" className="btn primary">+ New Character</Link>
      </div>

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
            return (
              <div key={ch.id} className="card" style={{ cursor: 'default' }}>
                <div className="stripe" style={{ background: cls?.color || '#d4af37' }} />
                <div className="icon">{cls?.icon || '🗡️'}</div>
                <h3>{ch.name || 'Unnamed Hero'}</h3>
                <div className="sub">Level {ch.level} {race?.name} {cls?.name}</div>
                <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
                  <Link to={`/sheet/${ch.id}`} className="btn sm primary">View Sheet</Link>
                  <Link to={`/builder/${ch.id}`} className="btn sm">Edit</Link>
                  <button className="btn sm danger" onClick={() => remove(ch.id, ch.name)}>Delete</button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
