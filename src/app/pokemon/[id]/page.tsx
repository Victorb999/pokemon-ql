"use client"
import Image from "next/image"
import { useQuery } from "@tanstack/react-query"
import { requestPokemon } from "@/src/services/requestPokemon"
import { PokemonPerfil } from "@/src/containers/PokemonPerfil/PokemonPerfil"
import { PokemonForms } from "@/src/containers/PokemonForms/PokemonForms"
import { PokemonFormsEvolutions } from "@/src/containers/PokemonFormsEvolutions/PokemonFormsEvolutions"
import { PokemonMoves } from "@/src/components/PokemonMoves/PokemonMoves"
import { LoadingPokemon } from "@/src/components/LoadingPokemon/LoadingPokemon"
interface PageProps {
  params: { id: string }
}

export default function Page({ params }: PageProps) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["pokemon", params.id],
    queryFn: () => requestPokemon(params.id)
  })

  if (isLoading) return <LoadingPokemon load="pikachu" />
  if (error) {
    const errorMessage =
      (error as Error)?.message || "An unknown error occurred"
    return <LoadingPokemon load="gastly" msg={errorMessage} />
  }

  if (data) {
    const sprites = data.pokemon_v2_pokemonsprites?.[0]?.sprites
    const species = data.pokemon_v2_pokemonspecy
    const types = data.pokemon_v2_pokemontypes

    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-center">
          {sprites?.front_default && (
            <Image
              src={sprites.front_default}
              alt={data.name}
              width={100}
              height={100}
            />
          )}
          <h1 className="text-3xl font-bold capitalize">
            #{data.id} {data.name}
          </h1>
        </div>

        <PokemonPerfil
          urlImg={
            sprites?.other?.["official-artwork"]?.front_default ||
            sprites?.front_default ||
            ""
          }
          name={data.name}
          title={
            species?.pokemon_v2_pokemonspeciesnames?.[0]?.genus || "Pokemon"
          }
          generation={species?.pokemon_v2_generation?.name || "Unknown"}
          description={
            species?.pokemon_v2_pokemonspeciesflavortexts?.[0]?.flavor_text ||
            "No description available."
          }
          evolutions={species?.pokemon_v2_pokemonevolutions || []}
          shape={species?.pokemon_v2_pokemonshape?.name || "Unknown"}
          isBaby={species?.is_baby}
          isMythical={species?.is_mythical}
          isLegendary={species?.is_legendary}
          types={types || []}
          generationId={species?.pokemon_v2_generation?.id || 0}
          stats={data.pokemon_v2_pokemonstats || []}
          abilities={data.pokemon_v2_pokemonabilities || []}
        />

        {species?.pokemon_v2_pokemons?.length > 1 && (
          <PokemonForms forms={species.pokemon_v2_pokemons} />
        )}

        {species?.pokemon_v2_evolutionchain?.pokemon_v2_pokemonspecies?.length > 1 && (
          <PokemonFormsEvolutions
            evolutions={species.pokemon_v2_evolutionchain}
          />
        )}

        {types?.[0] && (
          <PokemonMoves
            moves={data.pokemon_v2_pokemonmoves || []}
            color={types[0].pokemon_v2_type.name}
          />
        )}
      </div>
    )
  }
}
