const API_URL = "https://beta.pokeapi.co/graphql/v1beta";

const listPokemonPerGeneration = () => {
  return `
  query samplePokeAPIquery {
    pokemon_v2_generation {
        id
        name
    }
  }
`;
};

export const requestListGeneration = async () => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: listPokemonPerGeneration() }),
  });

  const result = await response.json();
  return result.data;
};
