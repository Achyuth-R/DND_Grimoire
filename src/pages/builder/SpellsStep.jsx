import { getSpell } from '../../data/spells.js'
import { spellOptions } from '../../compute.js'
import { Section, SpellChooser } from './shared.jsx'

const ordinal = (n) => `${n}${['th', 'st', 'nd', 'rd'][n % 10 > 3 || Math.floor(n / 10) === 1 ? 0 : n % 10]}`

export default function SpellsStep({ char, set, d }) {
  const sp = d.spell
  const opts = spellOptions(char, d)
  if (!sp || !opts) return <p className="hint">Your class doesn't cast spells at this level.</p>

  return (
    <>
      <h3 style={{ marginTop: 0 }}>Spells</h3>
      <div className="pill-row">
        <span className="pill"><b>Ability:</b> {sp.ability.toUpperCase()}</span>
        <span className="pill"><b>Save DC:</b> {sp.dc}</span>
        <span className="pill"><b>Attack:</b> +{sp.attack}</span>
        <span className="pill"><b>Slots:</b> {sp.slots.map((s) => `${s.count} × ${ordinal(s.level)}`).join(', ')}{sp.type === 'pact' ? ' (Pact Magic)' : ''}</span>
      </div>

      {(sp.bonusCantrips.length > 0 || d.innate.length > 0) && (
        <Section title="Granted Automatically">
          <div className="chip-row">
            {sp.bonusCantrips.map((k) => <span key={k} className="chip gold">{getSpell(k)?.name}</span>)}
            {d.innate.map((s) => <span key={s.key} className="chip" title={s.source}>{getSpell(s.key)?.name} · {s.source}</span>)}
          </div>
        </Section>
      )}

      {opts.cantripLimit > 0 && (
        <Section title="Cantrips" hint={`You know ${opts.cantripLimit} cantrips from the ${sp.lists.join(' and ')} list.`}>
          <SpellChooser pool={opts.cantrips} value={char.spells || []} max={opts.cantripLimit} label="cantrips" onChange={(spells) => set({ spells })} />
        </Section>
      )}

      {opts.leveledLimit > 0 && (
        <Section
          title={opts.leveledLabel === 'spells known' ? 'Spells Known' : 'Prepared Spells'}
          hint={opts.leveledLabel === 'spells known'
            ? `Choose ${opts.leveledLimit} spells of ${ordinal(sp.maxLevel)} level or lower.`
            : `Prepare ${opts.leveledLimit} spells (${sp.ability.toUpperCase()} modifier + ${sp.type === 'full' ? '' : 'half '}your level) of ${ordinal(sp.maxLevel)} level or lower. You can change these after a long rest.`}
        >
          <SpellChooser
            pool={opts.leveled} value={char.spells || []} max={opts.leveledLimit}
            label={opts.leveledLabel} always={sp.alwaysPrepared} onChange={(spells) => set({ spells })}
          />
        </Section>
      )}
    </>
  )
}
