import Image from "next/image";
import { PokemonList } from "../../types/types";
import Hexagon from "../../public/pattern/hexagon7.svg";

interface ListPokemonProps {
  data: { pokemon_v2_pokemon: PokemonList[] };
}

export const ListPokemon = ({ data }: ListPokemonProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {data.pokemon_v2_pokemon.map((pokemon: PokemonList) => (
        <div
          key={pokemon.id}
          className={`flex flex-col items-center bg-rose-700
          border-2 border-yellow-500 p-4 w-[128px] 
          hover:bg-rose-600 hover:border-amber-200 hover:shadow-lg`}
          style={{ backgroundImage: `url(${Hexagon.src})` }}
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
              p-1 mb-1 flex justify-center items-center text-white text-zinc-100`}
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
