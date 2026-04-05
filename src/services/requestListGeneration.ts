import { GraphQLClient } from "graphql-request"
import { graphql } from "../gql"

const client = new GraphQLClient("https://beta.pokeapi.co/graphql/v1beta")

const listPokemonPerGenerationQuery = graphql(`
  query listPokemonPerGenerationQuery {
    pokemon_v2_generation {
      id
      name
    }
  }
`)

export const requestListGeneration = async () => {
  const result = await client.request(listPokemonPerGenerationQuery)
  return result
}
