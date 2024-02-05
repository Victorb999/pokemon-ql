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

export interface Pokedex {
  data: Data;
}

export interface Data {
  pokemon_v2_pokemon: DataPokemonV2Pokemon[];
}

export interface DataPokemonV2Pokemon {
  id: number;
  name: string;
  height: number;
  base_experience: number;
  pokemon_v2_pokemonabilities: PokemonV2Pokemonability[];
  pokemon_v2_pokemonmoves: PokemonV2Pokemonmove[];
  pokemon_v2_pokemonspecy: PokemonV2PokemonPokemonV2Pokemonspecy;
  pokemon_v2_pokemonsprites: PokemonV2Pokemonsprite[];
  pokemon_v2_pokemonstats: PokemonV2Pokemonstat[];
  pokemon_v2_pokemontypes: PokemonV2Pokemontype[];
  order: number;
}

export interface PokemonV2Pokemonability {
  id: number;
  is_hidden: boolean;
  ability_id: number;
  pokemon_v2_ability: PokemonV2PokemonshapeClass;
}

export interface PokemonV2PokemonshapeClass {
  name: string;
}

export interface PokemonV2Pokemonmove {
  move_id: number;
  pokemon_v2_move: PokemonV2Move;
}

export interface PokemonV2Move {
  accuracy: number | null;
  move_damage_class_id: number;
  name: string;
  move_effect_chance: number | null;
}

export interface PokemonV2PokemonPokemonV2Pokemonspecy {
  base_happiness: number;
  capture_rate: number;
  evolution_chain_id: number;
  evolves_from_species_id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  id: number;
  pokemon_v2_pokemonevolutions: PokemonV2Pokemonevolution[];
  pokemon_v2_generation: PokemonV2GenerationClass;
  pokemon_v2_pokemonshape: PokemonV2PokemonshapeClass;
  pokemon_v2_evolutionchain: PurplePokemonV2Evolutionchain;
  pokemon_v2_pokemons: PurplePokemonV2Pokemon[];
}

export interface PurplePokemonV2Evolutionchain {
  id: number;
  pokemon_v2_pokemonspecies: PokemonV2PokemonspecyElement[];
}

export interface PokemonV2PokemonspecyElement {
  id: number;
  name: string;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  pokemon_v2_pokemons: PokemonV2PokemonformPokemonV2Pokemon[];
  pokemon_v2_evolutionchain: FluffyPokemonV2Evolutionchain;
}

export interface FluffyPokemonV2Evolutionchain {
  id: number;
}

export interface PokemonV2PokemonformPokemonV2Pokemon {
  pokemon_v2_pokemonsprites: PokemonV2Pokemonsprite[];
}

export interface PokemonV2Pokemonsprite {
  sprites: Sprites;
}

export interface GenerationV {
  "black-white": Sprites;
}

export interface GenerationIv {
  platinum: Sprites;
  "diamond-pearl": Sprites;
  "heartgold-soulsilver": Sprites;
}

export interface Versions {
  "generation-i": GenerationI;
  "generation-v": GenerationV;
  "generation-ii": GenerationIi;
  "generation-iv": GenerationIv;
  "generation-vi": { [key: string]: Home };
  "generation-iii": GenerationIii;
  "generation-vii": GenerationVii;
  "generation-viii": GenerationViii;
}

export interface Other {
  home: Home;
  showdown: Sprites;
  dream_world: DreamWorld;
  "official-artwork": OfficialArtwork;
}

export interface Sprites {
  other?: Other;
  versions?: Versions;
  back_shiny: null | string;
  back_female: null;
  front_shiny: null | string;
  back_default: null | string;
  front_female: null;
  front_default: null | string;
  back_shiny_female: null;
  front_shiny_female: null;
  animated?: Sprites;
}

export interface GenerationI {
  yellow: RedBlue;
  "red-blue": RedBlue;
}

export interface RedBlue {
  back_gray: null | string;
  front_gray: null | string;
  back_default: null | string;
  front_default: null | string;
  back_transparent: null | string;
  front_transparent: null | string;
}

export interface GenerationIi {
  gold: Gold;
  silver: Gold;
  crystal: Crystal;
}

export interface Crystal {
  back_shiny: null | string;
  front_shiny: null | string;
  back_default: null | string;
  front_default: null | string;
  back_transparent: null | string;
  front_transparent: null | string;
  back_shiny_transparent: null | string;
  front_shiny_transparent: null | string;
}

export interface Gold {
  back_shiny: null | string;
  front_shiny: null | string;
  back_default: null | string;
  front_default: null | string;
  front_transparent?: null | string;
}

export interface GenerationIii {
  emerald: OfficialArtwork;
  "ruby-sapphire": Gold;
  "firered-leafgreen": Gold;
}

export interface OfficialArtwork {
  front_shiny: null | string;
  front_default: null | string;
}

export interface Home {
  front_shiny: null | string;
  front_female: null;
  front_default: null | string;
  front_shiny_female: null;
}

export interface GenerationVii {
  icons: DreamWorld;
  "ultra-sun-ultra-moon": Home;
}

export interface DreamWorld {
  front_female: null;
  front_default: null | string;
}

export interface GenerationViii {
  icons: DreamWorld;
}

export interface PokemonV2GenerationClass {
  name: string;
  id: number;
}

export interface PokemonV2Pokemonevolution {
  min_level: number;
  pokemon_v2_evolutiontrigger: PokemonV2PokemonshapeClass;
}

export interface PurplePokemonV2Pokemon {
  pokemon_v2_pokemonforms: PokemonV2Pokemonform[];
}

export interface PokemonV2Pokemonform {
  form_name: string;
  id: number;
  name: string;
  is_mega: boolean;
  is_default: boolean;
  is_battle_only: boolean;
  pokemon_v2_pokemon: PokemonV2PokemonformPokemonV2Pokemon;
}

export interface PokemonV2Pokemonstat {
  id: number;
  pokemon_v2_stat: PokemonV2GenerationClass;
}

export interface PokemonV2Pokemontype {
  id: number;
  pokemon_v2_type: PokemonV2PokemonshapeClass;
}
