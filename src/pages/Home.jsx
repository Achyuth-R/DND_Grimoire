import { Link } from 'react-router-dom'
import { CLASSES } from '../data/classes.js'

const classShortDescs = {
  barbarian: 'A fierce warrior of primitive background who can enter a battle rage.',
  bard: 'An inspiring magician whose power echoes the music of creation.',
  cleric: 'A priestly champion who wields divine magic in service of a higher power.',
  druid: 'A priest of the Old Faith, wielding the powers of nature and adopting animal forms.',
  fighter: 'A master of martial combat, skilled with a variety of weapons and armor.',
  monk: 'A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.',
  paladin: 'A holy warrior bound to a sacred oath.',
  ranger: 'A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization.',
  rogue: 'A scoundrel who uses stealth and trickery to overcome obstacles and enemies.',
  sorcerer: 'A spellcaster who draws on inherent magic from a gift or bloodline.',
  warlock: 'A wielder of magic that is derived from a bargain with an extraplanar entity.',
  wizard: 'A scholarly magic-user capable of manipulating the structures of reality.'
}

export default function Home() {
  return (
    <div className="container">
      <div className="hero">
        <h1>Grimoire</h1>
        <p>Forge heroes and explore the rules. A character builder and 5e compendium for classes, subclasses, races, and backgrounds — all in one tome.</p>
        <div className="hero-actions">
          <Link to="/builder" className="btn primary">⚔️ Create a Character</Link>
          <Link to="/compendium" className="btn">📚 Browse Compendium</Link>
        </div>
      </div>

      <div className="section-title"><h2>Quick Start</h2><div className="line" /></div>
      <div className="grid">
        <Link to="/builder" className="card">
          <div className="stripe" style={{ background: '#d4af37' }} />
          <div className="icon">🛠️</div>
          <h3>Character Builder</h3>
          <div className="sub">Pick a race, class, and background. Assign ability scores and watch your sheet come to life.</div>
        </Link>
        <Link to="/compendium?tab=classes" className="card">
          <div className="stripe" style={{ background: '#c0392b' }} />
          <div className="icon">🎓</div>
          <h3>Classes & Subclasses</h3>
          <div className="sub">All 12 core classes with features by level and their signature archetypes.</div>
        </Link>
        <Link to="/compendium?tab=races" className="card">
          <div className="stripe" style={{ background: '#27ae60' }} />
          <div className="icon">🧝</div>
          <h3>Races</h3>
          <div className="sub">Ancestral traits, ability bonuses, and subraces for every lineage.</div>
        </Link>
        <Link to="/compendium?tab=backgrounds" className="card">
          <div className="stripe" style={{ background: '#8e44ad' }} />
          <div className="icon">📜</div>
          <h3>Backgrounds</h3>
          <div className="sub">Skills, proficiencies, and roleplay features to ground your hero's story.</div>
        </Link>
      </div>

      <div className="section-title"><h2>The Twelve Classes</h2><div className="line" /></div>
      <div className="grid">
        {CLASSES.map((c) => (
          <Link key={c.key} to={`/compendium/class/${c.key}`} className="card">
            <div className="stripe" style={{ background: c.color }} />
            <div className="icon">{c.icon}</div>
            <h3>{c.name}</h3>
            <div className="sub">{classShortDescs[c.key]}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
