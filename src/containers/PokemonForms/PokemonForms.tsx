import { PokemonV2Pokemon2 } from "@/src/types/types"
import { LabelTypes } from "../../components/LabelType/LabelType"
import Image from "next/image"
import Link from "next/link"

interface PokemonFormsProps {
  forms: PokemonV2Pokemon2[]
}

export const PokemonForms = ({ forms }: PokemonFormsProps) => {
  return (
    <div
      className={`flex flex-col 
        justify-center items-center
        p-4 gap-2 w-[90%] `}
    >
      <h2 className="text-2xl font-bold">Forms</h2>
      <div className="flex gap-2 flex-wrap justify-center items-center">
        {forms.map((form, index) => {
          const formObj = form.pokemon_v2_pokemonforms[0]
          return (
            <div
              key={formObj.id + index}
              className={`flex flex-col items-center 
              type-${formObj.pokemon_v2_pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name}
                border-2 border-yellow-700 p-4 w-[200px] gap-2 overflow-hidden min-h-[300px]
                hover:border-amber-200 hover:shadow-lg pattern-negative`}
            >
              <Link href={`/pokemon/${formObj.pokemon_id}`} className="flex flex-col items-center gap-2">
                <span className="text-stone-200 font-bold">#{formObj.pokemon_id}</span>
                {formObj.pokemon_v2_pokemon.pokemon_v2_pokemonsprites[0].sprites
                  .front_default && (
                    <Image
                      src={
                        formObj.pokemon_v2_pokemon.pokemon_v2_pokemonsprites[0]
                          .sprites.front_default
                      }
                      alt={formObj.form_name}
                      width={96}
                      height={96}
                    />
                  )}

                <h3 className="text-stone-100 font-bold capitalize">{formObj.name}</h3>
              </Link>

              <div className="flex gap-2">
                {formObj.pokemon_v2_pokemon.pokemon_v2_pokemontypes.map(
                  (type, index) => {
                    return (
                      <LabelTypes
                        key={type.id + index}
                        name={type.pokemon_v2_type.name}
                        id={type.pokemon_v2_type.id}
                      />
                    )
                  }
                )}
              </div>

              {formObj.is_mega && (
                <span className="text-xl uppercase rounded bg-blue-300 w-fit px-2 text-stone-900">
                  Mega
                </span>
              )}
            </div>
          )
        })}
        {/* <pre>{JSON.stringify(forms, null, 2)}</pre> */}
      </div>
    </div>
  )
}
