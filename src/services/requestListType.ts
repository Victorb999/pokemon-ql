const API_URL = "https://beta.pokeapi.co/graphql/v1beta"

const listPokemonPerType = () => {
  return `
  query samplePokeAPIquery {
    pokemon_v2_type {
        id
        name
    }
  }
`
}

export const requestListType = async () => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: listPokemonPerType() }),
  })

  const result = await response.json()
  return result.data
}
