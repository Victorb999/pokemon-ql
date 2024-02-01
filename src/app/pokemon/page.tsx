"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

//https://beta.pokeapi.co/graphql/console/
const POKEMON_QUERY = `
  query samplePokeAPIquery {
    pokemon_v2_pokemon(where: {pokemon_v2_pokemonspecy: {generation_id: {_eq: 8}}}, order_by: {id: asc}) {
      id
      name
      order
      pokemon_species_id
      is_default
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
          id
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemonspecy {
        generation_id
      }
    }
  }
`;

const requestPokemonList = async () => {
  console.log("ico");
  const response = await fetch("https://beta.pokeapi.co/graphql/v1beta", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Adicione quaisquer cabeçalhos necessários, como autorização
    },
    body: JSON.stringify({ query: POKEMON_QUERY }),
  });

  const result = await response.json();
  return result.data;
};

export default function Page() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["pokemonList"],
    queryFn: requestPokemonList,
    staleTime: 5 * 1000,
  });
  console.log(data, error, isLoading);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col items-center p-4 gap-4">
      <h1 className="text-3xl font-bold">Pokémon List</h1>
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
                  className="text-sm rounded bg-violet-400 p-1 mb-1 flex justify-center items-center"
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
