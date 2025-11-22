"use client"
import { useQuery } from "react-query"
import { useAtom } from "jotai"
import { requestPokemonListPerType } from "../../../services/requestListPokemon"
import { typeIdAtom } from "../../../store/store"
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

  const { data, error, isLoading } = useQuery(
    ["pokemonList", typeId],
    () => requestPokemonListPerType(typeId),
    { retry: 0, refetchOnWindowFocus: false }
  )

  useEffect(() => {
    params.id && settypeId(params.id[0])
  }, [params.id, settypeId])
  // Função para lidar com a seleção do <select>

  if (isLoading) return <LoadingPokemon load="pikachu" />
  if (error) {
    const errorMessage =
      (error as Error)?.message || "An unknown error occurred"
    return <LoadingPokemon load="gastly" msg={errorMessage} />
  }

  return (
    <div className="flex flex-col items-center p-4 gap-4">
      <h1 className="text-3xl font-bold">Pokémon list per type</h1>

      <SelectType />
      {data && data.pokemon_v2_typeefficacy && (
        <TypeEfficacy efficacy={data.pokemon_v2_typeefficacy} />
      )}
      <ListPokemon data={data} />
    </div>
  )
}
