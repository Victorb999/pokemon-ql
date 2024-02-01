const API_URL = "https://beta.pokeapi.co/graphql/v1beta";

const listPokemonPerGeneration = (id: string) => {
  return `
  query samplePokeAPIquery {
    pokemon_v2_pokemon(where: {pokemon_v2_pokemonspecy: {generation_id: {_eq: ${id}}}}, order_by: {id: asc}) {
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
`;
};

export const requestPokemonListPerGeneration = async (id: string) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Adicione quaisquer cabeçalhos necessários, como autorização
    },
    body: JSON.stringify({ query: listPokemonPerGeneration(id) }),
  });

  const result = await response.json();
  return result.data;
};

/* `pokemon_v2_generation {
    id
    name
  }` */
