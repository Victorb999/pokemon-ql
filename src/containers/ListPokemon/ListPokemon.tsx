import Image from "next/image"
import { PokemonList } from "../../types/types"
import Hexagon from "../../public/pattern/hexagon7.svg"
import Link from "next/link"
import { LabelTypes } from "../../components/LabelType/LabelType"

interface ListPokemonProps {
  data: { pokemon_v2_pokemon: PokemonList[] }
}

export const ListPokemon = ({ data }: ListPokemonProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {data.pokemon_v2_pokemon.map((pokemon: PokemonList) => (
        <div
          key={pokemon.id}
          className={`flex flex-col items-center bg-rose-900
            border-2 border-yellow-700 p-4 w-[128px] gap-2
          hover:bg-rose-700 hover:border-amber-200 hover:shadow-lg pattern`}
        >
          <Link href={`/pokemon/${pokemon.id}`} as={`/pokemon/${pokemon.id}`}>
            <h1 className="text-md font-bold capitalize">{pokemon.name}</h1>
            <h2 className="text-stone-900 font-bold"># {pokemon.id}</h2>

            {pokemon.pokemon_v2_pokemonsprites[0].sprites.front_default && (
              <Image
                src={pokemon.pokemon_v2_pokemonsprites[0].sprites.front_default}
                alt={pokemon.name}
                width={96}
                height={96}
              />
            )}

            <div>
              {pokemon.pokemon_v2_pokemontypes.map((type) => (
                <LabelTypes
                  name={type.pokemon_v2_type.name}
                  key={type.pokemon_v2_type.id}
                />
              ))}
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}
