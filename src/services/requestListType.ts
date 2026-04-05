import { GraphQLClient } from "graphql-request"
import { graphql } from "../gql"

const client = new GraphQLClient("https://beta.pokeapi.co/graphql/v1beta")

const listPokemonPerTypeQuery = graphql(`
  query listPokemonPerTypeQuery {
    pokemon_v2_type {
      id
      name
    }
  }
`)

export const requestListType = async () => {
  const result = await client.request(listPokemonPerTypeQuery)
  return result
}
