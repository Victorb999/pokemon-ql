import Image from "next/image";
import { PokemonList } from "../../types/types";

interface ListPokemonProps {
  data: { pokemon_v2_pokemon: PokemonList[] };
}

export const ListPokemon = ({ data }: ListPokemonProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {data.pokemon_v2_pokemon.map((pokemon: PokemonList) => (
        <div
          key={pokemon.id}
          className="flex flex-col items-center bg-amber-100 p-4 rounded w-[128px]"
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
  );
};
