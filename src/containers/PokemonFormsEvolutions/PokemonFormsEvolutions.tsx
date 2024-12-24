import { PokemonV2Evolutionchain } from "@/src/types/types"
import { LabelTypes } from "../../components/LabelType/LabelType"
import Image from "next/image"
import Link from "next/link"

interface PokemonFormsEvolutionsProps {
  evolutions: PokemonV2Evolutionchain
}

export const PokemonFormsEvolutions = ({
  evolutions,
}: PokemonFormsEvolutionsProps) => {
  return (
    <div
      className={`flex flex-col 
        justify-center items-center
        p-4 gap-2 w-[90%] `}
    >
      <h2 className="text-2xl font-bold">Evolutions</h2>
      <div className="flex gap-2 flex-wrap justify-center items-center">
        {evolutions.pokemon_v2_pokemonspecies.map((forms) => {
          //return <span key={forms.id}>{JSON.stringify(forms)}</span>
          const formObj = forms.pokemon_v2_pokemons[0]
          return (
            <Link
              href={`/pokemon/${forms.id}`}
              key={formObj.id}
              className={`flex flex-col items-center 
              ${formObj.pokemon_v2_pokemontypes[0].pokemon_v2_type.name}
                border-2 border-yellow-700 p-4 w-[200px] gap-2 overflow-hidden
                hover:border-amber-200 hover:shadow-lg pattern-negative`}
            >
              <span>#{forms.id}</span>
              {formObj.pokemon_v2_pokemonsprites[0].sprites.front_default && (
                <Image
                  src={
                    formObj.pokemon_v2_pokemonsprites[0].sprites.front_default
                  }
                  alt={forms.name}
                  width={96}
                  height={96}
                />
              )}

              <h3>{forms.name}</h3>

              <div className="flex gap-2">
                {formObj.pokemon_v2_pokemontypes.map((type) => {
                  return (
                    <LabelTypes
                      key={type.id}
                      name={type.pokemon_v2_type.name}
                    />
                  )
                })}
              </div>
            </Link>
          )
        })}
        {/* <pre>{JSON.stringify(forms, null, 2)}</pre> */}
      </div>
    </div>
  )
}
