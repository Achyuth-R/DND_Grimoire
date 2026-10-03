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
npm run verify   # rules checks: every race/subrace × class × level, plus PHB/TCE spot checks
```

There is no test runner or linter. The verification bar is `npm run build` **and** `npm run verify` (`scripts/verify_rules.mjs`, plain Node). Add a spot check there when you change rules math.

## Source-of-truth boundaries

- `CharacterSheet_Creator/` is a **separate, read-only reference project** (a different prior character-sheet app, Tailwind-based). Do not edit it or import from it; our app deliberately re-implements its sheet in our own plain-CSS theme.
- The `source_pdfs/*.pdf` files are the official 5e rulebooks used only as **design reference**. They are large OCR'd scans — do not parse them in code or at runtime.
- **Content must be verbatim from the source PDFs.** All descriptions — class features, subclass descs, race traits, background features, spell descs, monster traits/actions — must be copied word-for-word from the official 5e PDFs in `source_pdfs/` (`DnD 5e Players Handbook.pdf`, `[D&D5e] Xanathar_s Guide to Everything.pdf`, `Tashas_Cauldron_of_Everything.pdf`, etc.). They can be read offline with PyMuPDF (`fitz`) for transcription; expect OCR noise (letter-spaced headings, soft hyphens, sidebars mixed into body text) that must be hand-corrected. Do not paraphrase or summarize. Mechanical facts (names, levels, schools, ranges, AC/HP, source tags) must also be accurate to the books.

## Architecture

**Routing** is hash-based (`HashRouter` in `src/main.jsx`) so the static build works without server rewrites. Routes live in `src/App.jsx`: `/`, `/compendium`, `/compendium/:type/:key`, `/characters`, `/builder` + `/builder/:id`, `/sheet/:id`.

**Data layer (`src/data/`)** is the heart of the app — plain JS modules, no fetching:
- `classes.js` aggregates the 13 per-class files in `classData/` (12 PHB + `artificer.js` from TCE, which also carries `infusions`) into the `CLASSES` array and derives `ALL_SUBCLASSES`. Each class file exports one object with full level-by-level `features` and a `subclasses` array (each subclass tagged with a `source` book: PHB/DMG/XGE/TCE). **Add a subclass by appending to the relevant `classData/<class>.js`** — the compendium and builder pick it up automatically.
- Class files hold **text**; rules facts live in `classMechanics.js` (keyed by class/subclass key) and are merged onto each class in `classes.js`: `asiLevels`, `subclassLevel`, `casting` (type full/half/halfUp/third/pact, cantrips/known tables, prepared formula), expertise, Unarmored Defense, speed bonuses, fighting styles, and per-subclass grants (`alwaysPrepared`/`expandedList` spells by **name**, proficiencies, skill/cantrip choices). If a new subclass grants spells or proficiencies, add its entry there too.
- Other structured rules data: `spellSlots.js` (slot tables), `equipment.js` (PHB armor/weapons, class starting equipment), `featMechanics.js` (feat keys, prerequisites and effects layered over the verbatim `feats.js`). Races carry mechanics alongside their text (`asiChoice`, `skills`, `skillChoice`, `featChoice`, `darkvision`, racial `spells`, …); Human is Standard vs Variant via subraces.
- `races.js`, `backgrounds.js` (each with a verbatim `feature`), `spells.js` (tagged with `source`; class lists use lowercase class keys incl. `artificer`), `monsters.js` follow the same flat-array + `getX(key)` lookup pattern. Spell keys are inconsistent across sources, so resolve by name with `getSpellByName`.
- `abilities.js` holds the ability/skill tables and the math primitives (`abilityMod`, `profBonus`, `POINT_BUY_COST`, `STANDARD_ARRAY`). **Ability keys are lowercase** (`str`,`dex`,…) throughout our app (note: the reference project uses uppercase — don't copy that convention).

**`src/compute.js`** is the single place for derived character math. `derive(char)` returns everything the builder and sheet need: scores (race + chosen + level-up + feat increases, capped at 20), proficiency unions from every source, expertise, HP, AC (armor/shield/Unarmored Defense), speed, darkvision, spellcasting (`slots`, limits, lists, always-prepared), innate racial/feat spells, and weapon attacks. `spellOptions` gives the legal spell pools and limits. Put new rules math here, not in components.

**`src/builderRules.js`** owns the builder's rules: `normalize(char)` (run on every builder change) keeps state legal — it drops stale choices, trims to counts, and dedupes skill picks by precedence (fixed grants > race picks > class > subclass > feat); `validateStep` returns the messages that gate the wizard; `stepsFor` decides which steps show.

**`src/store.js`** is the only persistence boundary — `localStorage` key `grimoire.characters.v1`, with `loadCharacters`/`upsertCharacter`/`deleteCharacter`/`getCharacter` and `newCharacter()` (the canonical character shape — extend it when adding fields). `migrateCharacter` fills new fields on load for older saves; bump the `v` schema version when a migration must run only once. Sheet text fields use `null` for "show the auto-filled default". `exportCharacters`/`importCharacters` handle JSON backup.

**`src/sync.js`** (optional) mirrors characters to a shared Supabase table (`supabase/schema.sql`) when `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set (see `.env.example`); otherwise the app is local-only. localStorage stays the synchronous cache pages read; `store.upsertCharacter` stamps `updatedAt` and emits a write that sync pushes (debounced, queued in `grimoire.pending.v1` while offline). Pulls and Realtime merge by newest `updatedAt`; deletes are soft (`deleted = true`). Pages that show characters subscribe with `onCharactersChanged` to pick up remote changes. Use `putLocal` (not `upsertCharacter`) when writing data that came from the server, so it isn't echoed back.

**Pages (`src/pages/`)**:
- `Home.jsx` — landing page: hero + class cards (short flavor blurbs live in a local `classShortDescs` map) linking into the builder/compendium.
- `Characters.jsx` — saved-character roster (reads `loadCharacters()`); cards link to sheet/builder and support delete via `deleteCharacter`.
- `Compendium.jsx` — tabbed browser (classes/subclasses/races/backgrounds/spells/monsters) with search and per-tab filters; cards link to `CompendiumDetail`.
- `CompendiumDetail.jsx` — one component that switches on the `:type` route param. The class view (`ClassDetail`) uses a **sidebar + detail pane** so subclasses are read one at a time; subclass cards deep-link via URL `#hash` which selects the pane.
- `CharacterBuilder.jsx` — wizard shell (Race → Class → Background → Abilities → Level-ups → Equipment → Spells (casters only) → Review). Each step lives in `pages/builder/*Step.jsx` with shared pickers in `builder/shared.jsx`; "Next" is disabled while `validateStep` reports errors, and the stepper flags earlier steps that a later change invalidated.
- `CharacterSheet.jsx` — the printable official-style sheet. Structured fields are display-only (edited via the builder); free-text areas (`attacksText`, personality/ideals/bonds/flaws, `equipmentText`, `featuresText`, `abilitiesText`) and the `SpellPicker` persist back to the character on every change. Characters with class spellcasting or racial/feat spells get a spellcasting page (slots, limits, always-prepared ✦, innate ◆); others get a feature-reference page.

**Component state gotcha:** pages initialize state with `useState(() => getCharacter(id))`, which does **not** re-run when only the route `:id` changes (same component instance). Both `CharacterSheet` and `CharacterBuilder` therefore reload via `useEffect([id])` — keep that pattern when adding `:id` routes.

**Styling** is a single hand-written `src/styles.css` (no Tailwind/CSS modules) using CSS variables for an arcane/parchment dark theme. The printable sheet uses `.cs-*` classes plus an `@media print` block that hides app chrome (`.nav`, `.no-print`) and paginates; mark on-screen-only controls with `className="no-print"`.

## Verifying UI changes

Use the preview tooling (`.claude/launch.json` defines the `dnd` server on port 5173). Because changes are observable in the browser, prefer seeding a character into `localStorage` and navigating via `location.hash` to inspect rendered output rather than relying on screenshots.
