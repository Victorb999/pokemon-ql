const API_URL = "https://beta.pokeapi.co/graphql/v1beta";
//https://beta.pokeapi.co/graphql/console/
const listPokemonPerId = (id: string) => {
  return `
    query samplePokeAPIquery {
        pokemon_v2_pokemon(where: {id: {_eq: ${id}}}) {
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
            pokemon_v2_pokemonevolutions {
              min_level
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
                pokemon_v2_pokemon {
                  pokemon_v2_pokemonsprites {
                    sprites
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
          order
        }
      }
  `;
};

export const requestPokemon = async (id: string) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: listPokemonPerId(id) }),
  });

  const result = await response.json();
  if (result.errors || result.data.pokemon_v2_pokemon.length === 0) {
    throw new Error("Ops, something went wrong. Try again later.");
  }
  return result.data;
};
