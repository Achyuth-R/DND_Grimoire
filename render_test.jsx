import React from 'react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter, Routes, Route } from 'react-router-dom'

// Mock localstorage to provide a valid character
global.localStorage = {
  getItem: () => JSON.stringify([{
    id: "test", name: "", playerName: "", classKey: "fighter", subclassKey: "",
    raceKey: "human", subraceKey: "", backgroundKey: "soldier", level: 1,
    alignment: "True Neutral", experience: 0,
    scores: { str: 15, dex: 14, con: 13, int: 12, wis: 10, cha: 8 },
    skills: [], expertise: [], spells: [], attacks: [],
    hpCurrent: null, notes: ""
  }]),
  setItem: () => {}
}

import CharacterSheet from './src/pages/CharacterSheet.jsx'

try {
  const html = renderToString(
    <MemoryRouter initialEntries={["/sheet/test"]}>
      <Routes>
        <Route path="/sheet/:id" element={<CharacterSheet />} />
      </Routes>
    </MemoryRouter>
  )
  console.log("RENDER SUCCESS, HTML length:", html.length)
} catch (e) {
  console.error("RENDER CRASH:", e)
}
