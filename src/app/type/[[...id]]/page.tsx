"use client"
import { useQuery } from "@tanstack/react-query"
import { useAtom } from "jotai"
import { requestPokemonListPerType } from "../../../services/requestListPokemon"
import { typeIdAtom } from "../../../store/store"
import { PokemonList } from "../../../types/types"
import { SelectType } from "../../../components/SelectType/SelectType"
import { ListPokemon } from "../../../containers/ListPokemon/ListPokemon"
import { LoadingPokemon } from "../../../components/LoadingPokemon/LoadingPokemon"
import { TypeEfficacy } from "../../../components/TypeEfficacy/TypeEfficacy"
import { useEffect } from "react"
//https://beta.pokeapi.co/graphql/console/

interface PageProps {
  params: { id: string }
}

export default function Page({ params }: PageProps) {
  const [typeId, settypeId] = useAtom(typeIdAtom)

  const { data, error, isLoading } = useQuery({
    queryKey: ["pokemonList", typeId],
    queryFn: () => requestPokemonListPerType(typeId),
    retry: 0,
    refetchOnWindowFocus: false,
    enabled: typeId !== ""
  })

  useEffect(() => {
    if (params.id) {
      settypeId(params.id[0])
    } else {
      settypeId("")
    }
  }, [params.id, settypeId])

  const renderContent = () => {
    if (isLoading) return <LoadingPokemon load="pikachu" />
    if (error) {
      const errorMessage = (error as Error)?.message || "An unknown error occurred"
      return <LoadingPokemon load="gastly" msg={errorMessage} />
    }
    if (typeId !== "" && data) {
      return (
        <>
          {data.pokemon_v2_typeefficacy && (
            <TypeEfficacy efficacy={data.pokemon_v2_typeefficacy} />
          )}
          <ListPokemon data={data as { pokemon_v2_pokemon: PokemonList[] }} />
        </>
      )
    }
    return null
  }

  return (
    <div className="flex flex-col items-center p-4 gap-4">
      <h1 className="text-3xl font-bold">Pokémon list per type</h1>

      <SelectType />
      {renderContent()}
    </div>
  )
}
