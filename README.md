# Grimoire — A D&D Beyond–style Clone

A web app for building D&D 5e character sheets and browsing a rules compendium of
classes, subclasses, races, and backgrounds. Built with React + Vite. Character data
is saved locally in your browser (localStorage).

## Features

### 📚 Compendium
Browse and search reference material, each with a dedicated detail page:
- **Classes** — all 12 core classes with hit dice, proficiencies, saving throws, spellcasting, and **full features for every level (1–20)**.
- **Subclasses** — **101 subclasses** drawn from the Player's Handbook, Dungeon Master's Guide, Xanathar's Guide to Everything, and Tasha's Cauldron of Everything. Each lists its source book and detailed features at every subclass level.
- **Races** — ability score increases, speed, size, traits, languages, and subraces.
- **Backgrounds** — skill & tool proficiencies, the background feature, and starting equipment.

Subclass coverage per class: Barbarian 7, Bard 7, Cleric 12, Druid 7, Fighter 9,
Monk 8, Paladin 8, Ranger 8, Rogue 9, Sorcerer 7, Warlock 7, Wizard 12.

### ⚔️ Character Builder & Sheets
- Pick race (+ subrace), class (+ subclass at level 3), and background.
- Assign ability scores by hand, **Standard Array**, or watch the live **point-buy** counter.
- Choose class skill proficiencies; background skills are granted automatically.
- A generated **character sheet** computes modifiers, AC, HP, initiative, speed,
  proficiency bonus, passive perception, saving throws, skills, and lists all
  racial traits, class features (up to current level), and background details.
- Characters persist locally and can be edited or deleted any time.

## Running it

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Data & licensing

Game content is drawn from the D&D 5e **System Reference Document (SRD)**, available
under the Open Gaming License / Creative Commons. The rulebook PDFs in this folder are
the design reference; only SRD-open content is encoded in `src/data/`.

## Project structure

```
src/
  data/
    classData/     # one file per class: full features + all subclasses (source-tagged)
    classes.js     # aggregates classData/* and exposes ALL_SUBCLASSES
    races.js       # races, subraces, traits
    backgrounds.js # backgrounds, features, equipment
    abilities.js   # ability/skill tables and helpers
  pages/           # Home, Compendium, CompendiumDetail, Characters, Builder, Sheet
  compute.js       # derived character math (mods, AC, HP, saves, skills)
  store.js         # localStorage persistence
  App.jsx          # routing + nav
  styles.css       # arcane/parchment dark theme
```

To add a subclass, append an entry (with `source`) to the relevant
`src/data/classData/<class>.js` file — the compendium and builder update automatically.

## Extending

Add a new class, race, or background by appending an entry to the matching file in
`src/data/` — the compendium and builder pick it up automatically.
