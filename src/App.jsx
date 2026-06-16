import { Routes, Route, NavLink, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Compendium from './pages/Compendium.jsx'
import CompendiumDetail from './pages/CompendiumDetail.jsx'
import Characters from './pages/Characters.jsx'
import CharacterBuilder from './pages/CharacterBuilder.jsx'
import CharacterSheet from './pages/CharacterSheet.jsx'

export default function App() {
  return (
    <>
      <nav className="nav">
        <Link to="/" className="brand">
          <img src="/d20.svg" className="d20" alt="" />
          Grimoire
        </Link>
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Home</NavLink>
          <NavLink to="/compendium" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Compendium</NavLink>
          <NavLink to="/characters" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Characters</NavLink>
        </div>
        <div className="spacer" />
        <Link to="/builder" className="btn primary sm">+ New Character</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compendium" element={<Compendium />} />
        <Route path="/compendium/:type/:key" element={<CompendiumDetail />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/builder" element={<CharacterBuilder />} />
        <Route path="/builder/:id" element={<CharacterBuilder />} />
        <Route path="/sheet/:id" element={<CharacterSheet />} />
      </Routes>
    </>
  )
}
