"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { requestPokemonListPerGeneration } from "../../services/requestListPokemon";
import { useState } from "react";
//https://beta.pokeapi.co/graphql/console/

export default function Page() {
  const [generation, setGeneration] = useState("1");

  const { data, error, isLoading } = useQuery({
    queryKey: ["pokemonList", generation],
    queryFn: () => requestPokemonListPerGeneration(generation),
    staleTime: 5 * 1000,
  });
  console.log(generation, "current");
  // Função para lidar com a seleção do <select>

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col items-center p-4 gap-4">
      <h1 className="text-3xl font-bold">Pokémon list per generation</h1>

      <div className="flex gap-2 justify-center items-center">
        <label htmlFor="generation">Generation:</label>
        <select
          name="generation"
          id="generation"
          className="bg-slate-200 p-2 rounded"
          onChange={(e) => setGeneration(e.target.value)}
          defaultValue={generation}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {data.pokemon_v2_pokemon.map((pokemon) => (
          <div
            key={pokemon.id}
            className="flex flex-col items-center bg-slate-200 p-4 rounded w-[128px]"
          >
            <h1>{pokemon.name}</h1>
            <h2># {pokemon.id}</h2>
            {pokemon.pokemon_v2_pokemonsprites[0].sprites.front_default && (
              <Image
                src={pokemon.pokemon_v2_pokemonsprites[0].sprites.front_default}
                alt={pokemon.name}
                width={96}
                height={96}
              />
            )}
            <ul>
              {pokemon.pokemon_v2_pokemontypes.map((type) => (
                <li
                  key={type.pokemon_v2_type.id}
                  className={`text-sm rounded ${type.pokemon_v2_type.name}
                  p-1 mb-1 flex justify-center items-center text-white`}
                >
                  {type.pokemon_v2_type.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
