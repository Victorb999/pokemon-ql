import {
  PokemonV2Pokemonevolution,
  PokemonV2Pokemontype,
} from "@/src/types/types"
import Image from "next/image"
import { LabelTypes } from "../../components/LabelType/LabelType"
import Link from "next/link"

interface PokemonPerfilProps {
  urlImg: string
  name: string
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
}

export const PokemonPerfil = ({
  urlImg,
  name,
  title,
  generation,
  description,
  evolutions,
  shape,
  isBaby,
  isMythical,
  isLegendary,
  generationId,
  types,
}: PokemonPerfilProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row lg:flex-row 
      justify-center items-center
      p-4 gap-2 w-[90%] lg:w-[70%] xl:w-[60%] 2xl:w-[46%]
      ${types[0].pokemon_v2_type.name}
      bg-stone-900
      pattern-negative`}
    >
      <div className="flex items-center justify-center">
        <Image src={urlImg} alt={name} width={300} height={300} />
      </div>
      <div className="flex flex-col gap-2 max-w-full md:max-w-[400px]">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{description.replace("", "\n")}</p>

        <div>
          {isBaby && <span>Baby</span>}
          {isLegendary && <span>Legendary</span>}
          {isMythical && <span>Mythical</span>}
        </div>

        <div className="flex flex-col border-t py-2 border-stone-600">
          <div className="flex flex-col">
            {evolutions.map((evolution) => (
              <>
                <span className="font-bold">Evolution:</span>
                <span key={evolution.id} className="text-md">
                  {evolution.pokemon_v2_evolutiontrigger.name}{" "}
                  {evolution.min_level}
                </span>
              </>
            ))}
          </div>

          <div className="flex flex-col">
            <span className="font-bold">Shape:</span>
            <span>{shape}</span>
          </div>
        </div>

        <div className="flex flex-col border-y py-2 border-stone-600">
          <span className="font-bold">Type:</span>
          <div className="flex gap-2 mt-2">
            {types.map((type) => (
              <LabelTypes key={type.id} name={type.pokemon_v2_type.name} />
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
    </div>
  )
}
