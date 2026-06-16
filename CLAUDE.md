# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

**Grimoire** — a D&D Beyond–style single-page app (React + Vite, JavaScript) with two pillars: a 5e **compendium** (classes, subclasses, races, backgrounds, spells, monsters) and a **character builder** that produces a printable, official-style character sheet. No backend; characters persist to `localStorage`. There are no tests, linters, or TypeScript configured.

## Commands

```bash
npm install
npm run dev      # Vite dev server on http://localhost:5173 (opens browser)
npm run build    # production build to dist/
npm run preview  # serve the production build
```

There is **no test or lint script** — "build passes" (`npm run build`) is the verification bar. The repo is not a git repository.

## Source-of-truth boundaries

- `CharacterSheet_Creator/` is a **separate, read-only reference project** (a different prior character-sheet app, Tailwind-based). Do not edit it or import from it; our app deliberately re-implements its sheet in our own plain-CSS theme.
- The root `*.pdf` files are the official 5e rulebooks used only as **design reference**. They are large OCR'd scans — do not parse them in code or at runtime.
- **Content licensing matters here.** Only **SRD (open-license)** game content is encoded. Spell/monster/class descriptions are authored as *original concise summaries* of mechanics, never verbatim copies of copyrighted book text (Xanathar's/Tasha's prose, etc.). Mechanical facts (names, levels, schools, ranges, AC/HP, etc.) are fine. Preserve this distinction when adding data.

## Architecture

**Routing** is hash-based (`HashRouter` in `src/main.jsx`) so the static build works without server rewrites. Routes live in `src/App.jsx`: `/`, `/compendium`, `/compendium/:type/:key`, `/characters`, `/builder` + `/builder/:id`, `/sheet/:id`.

**Data layer (`src/data/`)** is the heart of the app — plain JS modules, no fetching:
- `classes.js` aggregates the 12 per-class files in `classData/` into the `CLASSES` array and derives `ALL_SUBCLASSES`. Each class file exports one object with full level-by-level `features` and a `subclasses` array (each subclass tagged with a `source` book: PHB/DMG/XGE/TCE). **Add a subclass by appending to the relevant `classData/<class>.js`** — the compendium and builder pick it up automatically.
- `races.js`, `backgrounds.js`, `spells.js` (tagged with `source`), `monsters.js` follow the same flat-array + `getX(key)` lookup pattern.
- `abilities.js` holds the ability/skill tables and the math primitives (`abilityMod`, `profBonus`, `POINT_BUY_COST`, `STANDARD_ARRAY`). **Ability keys are lowercase** (`str`,`dex`,…) throughout our app (note: the reference project uses uppercase — don't copy that convention).

**`src/compute.js`** is the single place for derived character math. `derive(char)` returns everything the sheet needs (effective scores with racial ASIs, modifiers, proficiency bonus, saves, skills with expertise + Bard Jack-of-All-Trades, max HP incl. Hill Dwarf, AC, initiative, passive perception, and spell DC/attack for casters). `classFeaturesUpTo`, `racialTraits`, and `defaultFeatureText` feed the sheet's auto-filled feature text. Put new rules math here, not in components.

**`src/store.js`** is the only persistence boundary — `localStorage` key `grimoire.characters.v1`, with `loadCharacters`/`upsertCharacter`/`deleteCharacter`/`getCharacter` and `newCharacter()` (the canonical character shape — extend it when adding sheet fields).

**Pages (`src/pages/`)**:
- `Home.jsx` — landing page: hero + class cards (short flavor blurbs live in a local `classShortDescs` map) linking into the builder/compendium.
- `Characters.jsx` — saved-character roster (reads `loadCharacters()`); cards link to sheet/builder and support delete via `deleteCharacter`.
- `Compendium.jsx` — tabbed browser (classes/subclasses/races/backgrounds/spells/monsters) with search and per-tab filters; cards link to `CompendiumDetail`.
- `CompendiumDetail.jsx` — one component that switches on the `:type` route param. The class view (`ClassDetail`) uses a **sidebar + detail pane** so subclasses are read one at a time; subclass cards deep-link via URL `#hash` which selects the pane.
- `CharacterBuilder.jsx` — a 3-step wizard (Basics → Abilities → Proficiencies) ending in "Generate Sheet". Subclass selection appears for any class with subclasses; the unlock level is computed from the earliest subclass feature level.
- `CharacterSheet.jsx` — the printable official-style sheet. Structured fields are display-only (edited via the builder); free-text areas (`attacksText`, personality/ideals/bonds/flaws, `equipmentText`, `featuresText`, `abilitiesText`) and the `SpellPicker` persist back to the character on every change. Casters get a spellcasting page; martials get a feature-reference page.

**Component state gotcha:** pages initialize state with `useState(() => getCharacter(id))`, which does **not** re-run when only the route `:id` changes (same component instance). Both `CharacterSheet` and `CharacterBuilder` therefore reload via `useEffect([id])` — keep that pattern when adding `:id` routes.

**Styling** is a single hand-written `src/styles.css` (no Tailwind/CSS modules) using CSS variables for an arcane/parchment dark theme. The printable sheet uses `.cs-*` classes plus an `@media print` block that hides app chrome (`.nav`, `.no-print`) and paginates; mark on-screen-only controls with `className="no-print"`.

## Verifying UI changes

Use the preview tooling (`.claude/launch.json` defines the `dnd` server on port 5173). Because changes are observable in the browser, prefer seeding a character into `localStorage` and navigating via `location.hash` to inspect rendered output rather than relying on screenshots.
