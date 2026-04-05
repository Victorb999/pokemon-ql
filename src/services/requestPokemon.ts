import { GraphQLClient } from "graphql-request"
import { graphql } from "../gql"

const client = new GraphQLClient("https://beta.pokeapi.co/graphql/v1beta")

const pokemonQuery = graphql(`
  query getPokemonQuery($id: Int!) {
    pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
      id
      name
      height
      base_experience
      pokemon_v2_pokemonabilities {
        id
        is_hidden
        ability_id
        pokemon_v2_ability {
          name
        }
      }
      pokemon_v2_pokemonmoves {
        move_id
        pokemon_v2_move {
          accuracy
          move_damage_class_id
          name
          move_effect_chance
        }
      }
      pokemon_v2_pokemonspecy {
        base_happiness
        capture_rate
        evolution_chain_id
        evolves_from_species_id
        is_baby
        is_legendary
        is_mythical
        name
        id
        pokemon_v2_pokemonspeciesflavortexts(
          limit: 1
          where: { language_id: { _eq: 9 } }
        ) {
          flavor_text
          id
          language_id
        }
        pokemon_v2_pokemonspeciesnames(where: { language_id: { _eq: 9 } }) {
          genus
          name
          language_id
        }
        pokemon_v2_pokemonevolutions {
          min_level
          id
          pokemon_v2_evolutiontrigger {
            name
          }
        }
        pokemon_v2_generation {
          name
          id
        }
        pokemon_v2_pokemonshape {
          name
        }
        pokemon_v2_evolutionchain {
          id
          pokemon_v2_pokemonspecies {
            id
            name
            is_baby
            is_legendary
            is_mythical
            pokemon_v2_pokemons {
              pokemon_v2_pokemonsprites {
                sprites
              }
              pokemon_v2_pokemontypes {
                pokemon_v2_type {
                  id
                  name
                }
              }
            }
            pokemon_v2_evolutionchain {
              id
            }
          }
        }
        pokemon_v2_pokemons {
          pokemon_v2_pokemonforms {
            form_name
            id
            name
            is_mega
            is_default
            is_battle_only
            pokemon_id
            pokemon_v2_pokemon {
              pokemon_v2_pokemonsprites {
                sprites
              }
              pokemon_v2_pokemontypes {
                pokemon_v2_type {
                  id
                  name
                }
              }
            }
          }
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemonstats {
        id
        pokemon_v2_stat {
          name
          id
        }
      }
      pokemon_v2_pokemontypes {
        id
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
        id
        pokemon_v2_stat {
          name
          id
        }
      }
      order
    }
  }
`)

export const requestPokemon = async (id: string) => {
  const parsedId = parseInt(id, 10)
  if (isNaN(parsedId)) {
    throw new Error("Invalid id provided")
  }

  const result = await client.request(pokemonQuery, { id: parsedId })

  if (result.pokemon_v2_pokemon.length === 0) {
    throw new Error("Ops, something went wrong. Try again later.")
  }
  return result.pokemon_v2_pokemon[0] as any
}
