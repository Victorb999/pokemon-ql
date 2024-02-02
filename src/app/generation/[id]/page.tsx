"use client";
import { useQuery } from "react-query";
import { useAtom } from "jotai";
import { requestPokemonListPerGeneration } from "../../../services/requestListPokemon";
import { generationIdAtom, myStore } from "../../../store/store";
import { SelectGeneration } from "../../../components/SelectGeneration/SelectGeneration";
import { ListPokemon } from "../../../components/ListPokemon/ListPokemon";
import { LoadingPokemon } from "../../../components/LoadingPokemon/LoadingPokemon";
//https://beta.pokeapi.co/graphql/console/

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const [generationId, setGenerationId] = useAtom(generationIdAtom);
  setGenerationId(params.id);

  const { data, error, isLoading } = useQuery(
    ["pokemonList", generationId],
    () => requestPokemonListPerGeneration(generationId),
  );

  // Função para lidar com a seleção do <select>

  if (isLoading) return <LoadingPokemon load="pikachu" />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col items-center p-4 gap-4">
      <h1 className="text-3xl font-bold">Pokémon list per generation</h1>

      <SelectGeneration />
      <ListPokemon data={data} />
    </div>
  );
}
