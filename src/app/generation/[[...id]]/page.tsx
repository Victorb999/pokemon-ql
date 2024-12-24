"use client"
import { useQuery } from "react-query"
import { useAtom } from "jotai"
import { requestPokemonListPerGeneration } from "../../../services/requestListPokemon"
import { generationIdAtom, myStore } from "../../../store/store"
import { SelectGeneration } from "../../../components/SelectGeneration/SelectGeneration"
import { ListPokemon } from "../../../containers/ListPokemon/ListPokemon"
import { LoadingPokemon } from "../../../components/LoadingPokemon/LoadingPokemon"
import { useEffect } from "react"
//https://beta.pokeapi.co/graphql/console/

interface PageProps {
  params: { id: string }
}

export default function Page({ params }: PageProps) {
  const [generationId, setGenerationId] = useAtom(generationIdAtom)

  const { data, error, isLoading } = useQuery(
    ["pokemonList", generationId],
    () => requestPokemonListPerGeneration(generationId),
    { retry: 0, refetchOnWindowFocus: false }
  )

  useEffect(() => {
    params.id && setGenerationId(params.id[0])
  }, [params.id, setGenerationId])
  // Função para lidar com a seleção do <select>

  if (isLoading) return <LoadingPokemon load="pikachu" />
  if (error) {
    return <LoadingPokemon load="gastly" msg={error.message} />
  }

  return (
    <div className="flex flex-col items-center p-4 gap-4">
      <h1 className="text-3xl font-bold">Pokémon list per generation</h1>

      <SelectGeneration />
      <ListPokemon data={data} />
    </div>
  )
}
