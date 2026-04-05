import {
  PokemonV2Pokemonevolution,
  PokemonV2Pokemontype,
  PokemonV2Pokemonability,
} from "@/src/types/types"
import { LabelTypes } from "../../components/LabelType/LabelType"
import Link from "next/link"

interface PokemonAboutProps {
  title: string
  description: string
  generation: string
  generationId: number
  evolutions: PokemonV2Pokemonevolution[]
  shape: string
  isBaby?: boolean
  isMythical?: boolean
  isLegendary?: boolean
  types: PokemonV2Pokemontype[]
  abilities: PokemonV2Pokemonability[]
}

export const PokemonAbout = ({
  title,
  description,
  generation,
  generationId,
  evolutions,
  shape,
  isBaby,
  isMythical,
  isLegendary,
  types,
  abilities,
}: PokemonAboutProps) => {
  return (
    <div className="flex flex-col gap-2 max-w-full md:max-w-[400px]">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{description.replace("", "\n")}</p>

      <div>
        {isBaby && <span>Baby</span>}
        {isLegendary && <span>Legendary</span>}
        {isMythical && <span>Mythical</span>}
      </div>

      <div className="flex flex-col border-t py-2 theme-border">
        <div className="flex flex-col">
          {evolutions.map((evolution) => (
            <div key={evolution.id}>
              <span className="font-bold">Evolution:</span>
              <span className="text-md">
                {evolution.pokemon_v2_evolutiontrigger.name}{" "}
                {evolution.min_level}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col">
          <span className="font-bold">Shape:</span>
          <span>{shape}</span>
        </div>
      </div>

      <div className="flex flex-col border-y py-2 theme-border mb-4">
        <span className="font-bold">Type:</span>
        <div className="flex gap-2 mt-2">
          {types.map((type) => (
            <LabelTypes key={type.id} name={type.pokemon_v2_type.name} id={type.pokemon_v2_type.id} />
          ))}
        </div>
      </div>

      <div className="flex flex-col mb-4">
        <span className="font-bold">Abilities:</span>
        <div className="flex flex-wrap gap-2 mt-1">
          {abilities.map((ability) => (
            <div key={ability.id} className="flex flex-col group relative">
              <span className={`text-sm font-bold uppercase px-2 py-1 rounded theme-bg-elevated border theme-border ${ability.is_hidden ? 'italic opacity-80' : ''}`}>
                {ability.pokemon_v2_ability.name.replace(/-/g, ' ')}
                {ability.is_hidden && <span className="ml-1 text-[10px] opacity-60">(Hidden)</span>}
              </span>
              {ability.pokemon_v2_ability.pokemon_v2_abilityflavortexts[0] && (
                <div className="absolute bottom-full left-0 mb-2 w-48 p-2 rounded bg-stone-800 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-xl border border-stone-700">
                  {ability.pokemon_v2_ability.pokemon_v2_abilityflavortexts[0].flavor_text.replace(/\f/g, ' ')}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Link
        href={`/generation/${generationId}`}
        className="text-xl uppercase rounded bg-green-300 w-fit px-2 text-stone-900"
      >
        {generation}
      </Link>
    </div>
  )
}
