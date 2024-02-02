export interface PokemonList {
  name: string;
  id: number;
  pokemon_v2_pokemonsprites: {
    sprites: {
      front_default: string;
    };
  }[];
  pokemon_v2_pokemontypes: {
    pokemon_v2_type: {
      name: string;
    };
  }[];
}

export interface GenerationList {
  id: number;
  name: string;
}
