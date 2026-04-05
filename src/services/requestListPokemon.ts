import { GraphQLClient } from "graphql-request"
import { graphql } from "../gql"

const client = new GraphQLClient("https://beta.pokeapi.co/graphql/v1beta")

const listPokemonPerGenerationQuery = graphql(`
  query pokemonListPerGenerationQuery($id: Int!) {
    pokemon_v2_pokemon(
      where: { pokemon_v2_pokemonspecy: { generation_id: { _eq: $id } } }
      order_by: { id: asc }
    ) {
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
`)

const listPokemonPerTypeQuery = graphql(`
  query pokemonListPerTypeQuery($id: Int!) {
    pokemon_v2_pokemon(
      where: { pokemon_v2_pokemontypes: { type_id: { _eq: $id } } }
      order_by: { id: asc }
    ) {
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
    pokemon_v2_typeefficacy(
      where: {
        pokemon_v2_type: { id: { _eq: $id } }
        _not: { damage_factor: { _eq: 100 } }
      }
    ) {
      damage_factor
      target_type_id
      pokemonV2TypeByTargetTypeId {
        name
      }
    }
  }
`)

export const requestPokemonListPerGeneration = async (id: string) => {
  const parsedId = parseInt(id, 10)
  if (isNaN(parsedId)) {
    throw new Error("Invalid id provided")
  }
  const result = await client.request(listPokemonPerGenerationQuery, {
    id: parsedId,
  })

  if (result.pokemon_v2_pokemon.length === 0) {
    throw new Error("Ops, something went wrong. Try again later.")
  }
  return result
}

export const requestPokemonListPerType = async (id: string) => {
  const parsedId = parseInt(id, 10)
  if (isNaN(parsedId)) {
    throw new Error("Invalid id provided")
  }

  const result = await client.request(listPokemonPerTypeQuery, {
    id: parsedId,
  })

  if (result.pokemon_v2_pokemon.length === 0) {
    throw new Error("Ops, something went wrong. Try again later.")
  }
  return result
}
