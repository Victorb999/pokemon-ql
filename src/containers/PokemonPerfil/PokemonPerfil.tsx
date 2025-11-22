import {
  PokemonV2Pokemonevolution,
  PokemonV2Pokemontype,
  PokemonV2Pokemonstat,
} from "@/src/types/types"
import Image from "next/image"
import { useState } from "react"
import { PokemonAbout } from "../../components/PokemonAbout/PokemonAbout"
import { PokemonStats } from "../../components/PokemonStats/PokemonStats"

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
  stats: PokemonV2Pokemonstat[]
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
  stats,
}: PokemonPerfilProps) => {
  const [activeTab, setActiveTab] = useState<"about" | "stats">("about")

  return (
    <div
      className={`flex flex-col md:flex-row lg:flex-row 
      justify-center items-center
      border-2 border-yellow-700  hover:border-amber-200 hover:shadow-lg
      p-4 gap-2 w-[90%] lg:w-[70%] xl:w-[60%] 2xl:w-[46%]
      ${types[0].pokemon_v2_type.name}
      bg-stone-900
      pattern-negative`}
    >
      <div className="flex items-center justify-center">
        <Image src={urlImg} alt={name} width={300} height={300} />
      </div>
      <div className="flex flex-col gap-2 max-w-full md:max-w-[400px] w-full">
        <div className="flex gap-4 border-b border-stone-600 pb-2 mb-2">
          <button
            onClick={() => setActiveTab("about")}
            className={`text-lg font-bold pb-1 ${
              activeTab === "about"

                ? "text-stone-100 border-b-2 border-stone-200"
                : "text-stone-100 hover:text-stone-200"
            }`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab("stats")}
            className={`text-lg font-bold pb-1 ${
              activeTab === "stats"
                ? "text-stone-100 border-b-2 border-stone-200"
                : " hover:text-stone-200"
            }`}
          >
            Stats
          </button>
        </div>

        {activeTab === "about" && (
          <PokemonAbout
            title={title}
            description={description}
            generation={generation}
            generationId={generationId}
            evolutions={evolutions}
            shape={shape}
            isBaby={isBaby}
            isMythical={isMythical}
            isLegendary={isLegendary}
            types={types}
          />
        )}

        {activeTab === "stats" && (
          <PokemonStats stats={stats} color={types[0].pokemon_v2_type.name} />
        )}
      </div>
    </div>
  )
}
