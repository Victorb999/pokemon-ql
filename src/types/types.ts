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
      id: string;
      name: string;
    };
  }[];
}

export interface GenerationList {
  id: number;
  name: string;
}

export interface DataError {
  errors: Error[];
}

export interface Error {
  message: string;
  extensions: Extensions;
}

export interface Extensions {
  path: string;
  code: string;
}
export interface PokemonData {
  data: PokemonPerfil;
}

export interface PokemonPerfil {
  pokemon_v2_pokemon: PokemonV2Pokemon[];
}

export interface PokemonV2Pokemon {
  id: number;
  name: string;
  height: number;
  base_experience: number;
  pokemon_v2_pokemonabilities: PokemonV2Pokemonability[];
  pokemon_v2_pokemonmoves: PokemonV2Pokemonmfe[];
  pokemon_v2_pokemonspecy: PokemonV2Pokemonspecy;
  pokemon_v2_pokemonsprites: PokemonV2Pokemonsprite3[];
  pokemon_v2_pokemonstats: PokemonV2Pokemonstat[];
  pokemon_v2_pokemontypes: PokemonV2Pokemontype[];
  order: number;
}

export interface PokemonPerfil {
  id: number;
  name: string;
  height: number;
  base_experience: number;
  pokemon_v2_pokemonabilities: PokemonV2Pokemonability[];
  pokemon_v2_pokemonmoves: PokemonV2Pokemonmfe[];
  pokemon_v2_pokemonspecy: PokemonV2Pokemonspecy;
  pokemon_v2_pokemonsprites: PokemonV2Pokemonsprite3[];
  pokemon_v2_pokemonstats: PokemonV2Pokemonstat[];
  pokemon_v2_pokemontypes: PokemonV2Pokemontype[];
  order: number;
}

export interface PokemonV2Pokemonability {
  id: number;
  is_hidden: boolean;
  ability_id: number;
  pokemon_v2_ability: PokemonV2Ability;
}

export interface PokemonV2Ability {
  name: string;
}

export interface PokemonV2Pokemonmfe {
  move_id: number;
  pokemon_v2_move: PokemonV2Move;
}

export interface PokemonV2Move {
  accuracy?: number;
  move_damage_class_id: number;
  name: string;
  move_effect_chance?: number;
}

export interface PokemonV2Pokemonspecy {
  base_happiness: number;
  capture_rate: number;
  evolution_chain_id: number;
  evolves_from_species_id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  id: number;
  pokemon_v2_pokemonspeciesflavortexts: PokemonV2Pokemonspeciesflavortext[];
  pokemon_v2_pokemonspeciesnames: PokemonV2Pokemonspeciesname[];
  pokemon_v2_pokemonevolutions: PokemonV2Pokemonevolution[];
  pokemon_v2_generation: PokemonV2Generation;
  pokemon_v2_pokemonshape: PokemonV2Pokemonshape;
  pokemon_v2_evolutionchain: PokemonV2Evolutionchain;
  pokemon_v2_pokemons: PokemonV2Pokemon2[];
}

export interface PokemonV2Pokemonspeciesflavortext {
  flavor_text: string;
  id: number;
  language_id: number;
}

export interface PokemonV2Pokemonspeciesname {
  genus: string;
  name: string;
  language_id: number;
}

export interface PokemonV2Pokemonevolution {
  min_level: number;
  id: number;
  pokemon_v2_evolutiontrigger: PokemonV2Evolutiontrigger;
}

export interface PokemonV2Evolutiontrigger {
  name: string;
}

export interface PokemonV2Generation {
  name: string;
  id: number;
}

export interface PokemonV2Pokemonshape {
  name: string;
}

export interface PokemonV2Evolutionchain {
  id: number;
  pokemon_v2_pokemonspecies: PokemonV2Pokemonspecy2[];
}

export interface PokemonV2Pokemonspecy2 {
  id: number;
  name: string;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  pokemon_v2_pokemons: PokemonV2Pokemon[];
  pokemon_v2_evolutionchain: PokemonV2Evolutionchain2;
}

export interface PokemonV2Pokemon {
  pokemon_v2_pokemonsprites: PokemonV2Pokemonsprite[];
}

export interface PokemonV2Pokemonsprite {
  sprites: Sprites;
}

export interface Sprites {
  other: Other;
  versions: Versions;
  back_shiny?: string;
  back_female: any;
  front_shiny: string;
  back_default?: string;
  front_female: any;
  front_default: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface Other {
  home: Home;
  showdown: Showdown;
  dream_world: DreamWorld;
  "official-artwork": OfficialArtwork;
}

export interface Home {
  front_shiny: string;
  front_female: any;
  front_default: string;
  front_shiny_female: any;
}

export interface Showdown {
  back_shiny: string;
  back_female: any;
  front_shiny: string;
  back_default: string;
  front_female: any;
  front_default: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface DreamWorld {
  front_female: any;
  front_default?: string;
}

export interface OfficialArtwork {
  front_shiny: string;
  front_default: string;
}

export interface Versions {
  "generation-i": GenerationI;
  "generation-v": GenerationV;
  "generation-ii": GenerationIi;
  "generation-iv": GenerationIv;
  "generation-vi": GenerationVi;
  "generation-iii": GenerationIii;
  "generation-vii": GenerationVii;
  "generation-viii": GenerationViii;
}

export interface GenerationI {
  yellow: Yellow;
  "red-blue": RedBlue;
}

export interface Yellow {
  back_gray?: string;
  front_gray?: string;
  back_default?: string;
  front_default?: string;
  back_transparent?: string;
  front_transparent?: string;
}

export interface RedBlue {
  back_gray?: string;
  front_gray?: string;
  back_default?: string;
  front_default?: string;
  back_transparent?: string;
  front_transparent?: string;
}

export interface GenerationV {
  "black-white": BlackWhite;
}

export interface BlackWhite {
  animated: Animated;
  back_shiny?: string;
  back_female: any;
  front_shiny: string;
  back_default?: string;
  front_female: any;
  front_default: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface Animated {
  back_shiny?: string;
  back_female: any;
  front_shiny?: string;
  back_default?: string;
  front_female: any;
  front_default?: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface GenerationIi {
  gold: Gold;
  silver: Silver;
  crystal: Crystal;
}

export interface Gold {
  back_shiny?: string;
  front_shiny?: string;
  back_default?: string;
  front_default?: string;
  front_transparent?: string;
}

export interface Silver {
  back_shiny?: string;
  front_shiny?: string;
  back_default?: string;
  front_default?: string;
  front_transparent?: string;
}

export interface Crystal {
  back_shiny?: string;
  front_shiny?: string;
  back_default?: string;
  front_default?: string;
  back_transparent?: string;
  front_transparent?: string;
  back_shiny_transparent?: string;
  front_shiny_transparent?: string;
}

export interface GenerationIv {
  platinum: Platinum;
  "diamond-pearl": DiamondPearl;
  "heartgold-soulsilver": HeartgoldSoulsilver;
}

export interface Platinum {
  back_shiny?: string;
  back_female: any;
  front_shiny?: string;
  back_default?: string;
  front_female: any;
  front_default?: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface DiamondPearl {
  back_shiny?: string;
  back_female: any;
  front_shiny?: string;
  back_default?: string;
  front_female: any;
  front_default?: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface HeartgoldSoulsilver {
  back_shiny?: string;
  back_female: any;
  front_shiny?: string;
  back_default?: string;
  front_female: any;
  front_default?: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface GenerationVi {
  "x-y": XY;
  "omegaruby-alphasapphire": OmegarubyAlphasapphire;
}

export interface XY {
  front_shiny?: string;
  front_female: any;
  front_default?: string;
  front_shiny_female: any;
}

export interface OmegarubyAlphasapphire {
  front_shiny?: string;
  front_female: any;
  front_default?: string;
  front_shiny_female: any;
}

export interface GenerationIii {
  emerald: Emerald;
  "ruby-sapphire": RubySapphire;
  "firered-leafgreen": FireredLeafgreen;
}

export interface Emerald {
  front_shiny?: string;
  front_default?: string;
}

export interface RubySapphire {
  back_shiny?: string;
  front_shiny?: string;
  back_default?: string;
  front_default?: string;
}

export interface FireredLeafgreen {
  back_shiny?: string;
  front_shiny?: string;
  back_default?: string;
  front_default?: string;
}

export interface GenerationVii {
  icons: Icons;
  "ultra-sun-ultra-moon": UltraSunUltraMoon;
}

export interface Icons {
  front_female: any;
  front_default?: string;
}

export interface UltraSunUltraMoon {
  front_shiny?: string;
  front_female: any;
  front_default?: string;
  front_shiny_female: any;
}

export interface GenerationViii {
  icons: Icons2;
}

export interface Icons2 {
  front_female: any;
  front_default: string;
}

export interface PokemonV2Evolutionchain2 {
  id: number;
}

export interface PokemonV2Pokemon2 {
  pokemon_v2_pokemonforms: PokemonV2Pokemonform[];
}

export interface PokemonV2Pokemonform {
  form_name: string;
  id: number;
  name: string;
  is_mega: boolean;
  is_default: boolean;
  is_battle_only: boolean;
  pokemon_id: boolean;
  pokemon_v2_pokemon: PokemonV2Pokemon3;
}

export interface PokemonV2Pokemon3 {
  pokemon_v2_pokemonsprites: PokemonV2Pokemonsprite2[];
  pokemon_v2_pokemontypes: PokemonV2Pokemontype[];
}

export interface PokemonV2Pokemonsprite2 {
  sprites: Sprites2;
}

export interface Sprites2 {
  other: Other2;
  versions: Versions2;
  back_shiny?: string;
  back_female: any;
  front_shiny: string;
  back_default?: string;
  front_female: any;
  front_default: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface Other2 {
  home: Home2;
  showdown: Showdown2;
  dream_world: DreamWorld2;
  "official-artwork": OfficialArtwork2;
}

export interface Home2 {
  front_shiny: string;
  front_female: any;
  front_default: string;
  front_shiny_female: any;
}

export interface Showdown2 {
  back_shiny: string;
  back_female: any;
  front_shiny: string;
  back_default: string;
  front_female: any;
  front_default: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface DreamWorld2 {
  front_female: any;
  front_default?: string;
}

export interface OfficialArtwork2 {
  front_shiny: string;
  front_default: string;
}

export interface Versions2 {
  "generation-i": GenerationI2;
  "generation-v": GenerationV2;
  "generation-ii": GenerationIi2;
  "generation-iv": GenerationIv2;
  "generation-vi": GenerationVi2;
  "generation-iii": GenerationIii2;
  "generation-vii": GenerationVii2;
  "generation-viii": GenerationViii2;
}

export interface GenerationI2 {
  yellow: Yellow2;
  "red-blue": RedBlue2;
}

export interface Yellow2 {
  back_gray?: string;
  front_gray?: string;
  back_default?: string;
  front_default?: string;
  back_transparent?: string;
  front_transparent?: string;
}

export interface RedBlue2 {
  back_gray?: string;
  front_gray?: string;
  back_default?: string;
  front_default?: string;
  back_transparent?: string;
  front_transparent?: string;
}

export interface GenerationV2 {
  "black-white": BlackWhite2;
}

export interface BlackWhite2 {
  animated: Animated2;
  back_shiny?: string;
  back_female: any;
  front_shiny: string;
  back_default?: string;
  front_female: any;
  front_default: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface Animated2 {
  back_shiny?: string;
  back_female: any;
  front_shiny?: string;
  back_default?: string;
  front_female: any;
  front_default?: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface GenerationIi2 {
  gold: Gold2;
  silver: Silver2;
  crystal: Crystal2;
}

export interface Gold2 {
  back_shiny?: string;
  front_shiny?: string;
  back_default?: string;
  front_default?: string;
  front_transparent?: string;
}

export interface Silver2 {
  back_shiny?: string;
  front_shiny?: string;
  back_default?: string;
  front_default?: string;
  front_transparent?: string;
}

export interface Crystal2 {
  back_shiny?: string;
  front_shiny?: string;
  back_default?: string;
  front_default?: string;
  back_transparent?: string;
  front_transparent?: string;
  back_shiny_transparent?: string;
  front_shiny_transparent?: string;
}

export interface GenerationIv2 {
  platinum: Platinum2;
  "diamond-pearl": DiamondPearl2;
  "heartgold-soulsilver": HeartgoldSoulsilver2;
}

export interface Platinum2 {
  back_shiny?: string;
  back_female: any;
  front_shiny?: string;
  back_default?: string;
  front_female: any;
  front_default?: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface DiamondPearl2 {
  back_shiny?: string;
  back_female: any;
  front_shiny?: string;
  back_default?: string;
  front_female: any;
  front_default?: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface HeartgoldSoulsilver2 {
  back_shiny?: string;
  back_female: any;
  front_shiny?: string;
  back_default?: string;
  front_female: any;
  front_default?: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface GenerationVi2 {
  "x-y": XY2;
  "omegaruby-alphasapphire": OmegarubyAlphasapphire2;
}

export interface XY2 {
  front_shiny?: string;
  front_female: any;
  front_default?: string;
  front_shiny_female: any;
}

export interface OmegarubyAlphasapphire2 {
  front_shiny?: string;
  front_female: any;
  front_default?: string;
  front_shiny_female: any;
}

export interface GenerationIii2 {
  emerald: Emerald2;
  "ruby-sapphire": RubySapphire2;
  "firered-leafgreen": FireredLeafgreen2;
}

export interface Emerald2 {
  front_shiny?: string;
  front_default?: string;
}

export interface RubySapphire2 {
  back_shiny?: string;
  front_shiny?: string;
  back_default?: string;
  front_default?: string;
}

export interface FireredLeafgreen2 {
  back_shiny?: string;
  front_shiny?: string;
  back_default?: string;
  front_default?: string;
}

export interface GenerationVii2 {
  icons: Icons3;
  "ultra-sun-ultra-moon": UltraSunUltraMoon2;
}

export interface Icons3 {
  front_female: any;
  front_default?: string;
}

export interface UltraSunUltraMoon2 {
  front_shiny?: string;
  front_female: any;
  front_default?: string;
  front_shiny_female: any;
}

export interface GenerationViii2 {
  icons: Icons4;
}

export interface Icons4 {
  front_female: any;
  front_default: string;
}

export interface PokemonV2Pokemonsprite3 {
  sprites: Sprites3;
}

export interface Sprites3 {
  other: Other3;
  versions: Versions3;
  back_shiny: string;
  back_female: any;
  front_shiny: string;
  back_default: string;
  front_female: any;
  front_default: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface Other3 {
  home: Home3;
  showdown: Showdown3;
  dream_world: DreamWorld3;
  "official-artwork": OfficialArtwork3;
}

export interface Home3 {
  front_shiny: string;
  front_female: any;
  front_default: string;
  front_shiny_female: any;
}

export interface Showdown3 {
  back_shiny: string;
  back_female: any;
  front_shiny: string;
  back_default: string;
  front_female: any;
  front_default: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface DreamWorld3 {
  front_female: any;
  front_default: string;
}

export interface OfficialArtwork3 {
  front_shiny: string;
  front_default: string;
}

export interface Versions3 {
  "generation-i": GenerationI3;
  "generation-v": GenerationV3;
  "generation-ii": GenerationIi3;
  "generation-iv": GenerationIv3;
  "generation-vi": GenerationVi3;
  "generation-iii": GenerationIii3;
  "generation-vii": GenerationVii3;
  "generation-viii": GenerationViii3;
}

export interface GenerationI3 {
  yellow: Yellow3;
  "red-blue": RedBlue3;
}

export interface Yellow3 {
  back_gray: string;
  front_gray: string;
  back_default: string;
  front_default: string;
  back_transparent: string;
  front_transparent: string;
}

export interface RedBlue3 {
  back_gray: string;
  front_gray: string;
  back_default: string;
  front_default: string;
  back_transparent: string;
  front_transparent: string;
}

export interface GenerationV3 {
  "black-white": BlackWhite3;
}

export interface BlackWhite3 {
  animated: Animated3;
  back_shiny: string;
  back_female: any;
  front_shiny: string;
  back_default: string;
  front_female: any;
  front_default: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface Animated3 {
  back_shiny: string;
  back_female: any;
  front_shiny: string;
  back_default: string;
  front_female: any;
  front_default: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface GenerationIi3 {
  gold: Gold3;
  silver: Silver3;
  crystal: Crystal3;
}

export interface Gold3 {
  back_shiny: string;
  front_shiny: string;
  back_default: string;
  front_default: string;
  front_transparent: string;
}

export interface Silver3 {
  back_shiny: string;
  front_shiny: string;
  back_default: string;
  front_default: string;
  front_transparent: string;
}

export interface Crystal3 {
  back_shiny: string;
  front_shiny: string;
  back_default: string;
  front_default: string;
  back_transparent: string;
  front_transparent: string;
  back_shiny_transparent: string;
  front_shiny_transparent: string;
}

export interface GenerationIv3 {
  platinum: Platinum3;
  "diamond-pearl": DiamondPearl3;
  "heartgold-soulsilver": HeartgoldSoulsilver3;
}

export interface Platinum3 {
  back_shiny: string;
  back_female: any;
  front_shiny: string;
  back_default: string;
  front_female: any;
  front_default: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface DiamondPearl3 {
  back_shiny: string;
  back_female: any;
  front_shiny: string;
  back_default: string;
  front_female: any;
  front_default: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface HeartgoldSoulsilver3 {
  back_shiny: string;
  back_female: any;
  front_shiny: string;
  back_default: string;
  front_female: any;
  front_default: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface GenerationVi3 {
  "x-y": XY3;
  "omegaruby-alphasapphire": OmegarubyAlphasapphire3;
}

export interface XY3 {
  front_shiny: string;
  front_female: any;
  front_default: string;
  front_shiny_female: any;
}

export interface OmegarubyAlphasapphire3 {
  front_shiny: string;
  front_female: any;
  front_default: string;
  front_shiny_female: any;
}

export interface GenerationIii3 {
  emerald: Emerald3;
  "ruby-sapphire": RubySapphire3;
  "firered-leafgreen": FireredLeafgreen3;
}

export interface Emerald3 {
  front_shiny: string;
  front_default: string;
}

export interface RubySapphire3 {
  back_shiny: string;
  front_shiny: string;
  back_default: string;
  front_default: string;
}

export interface FireredLeafgreen3 {
  back_shiny: string;
  front_shiny: string;
  back_default: string;
  front_default: string;
}

export interface GenerationVii3 {
  icons: Icons5;
  "ultra-sun-ultra-moon": UltraSunUltraMoon3;
}

export interface Icons5 {
  front_female: any;
  front_default: string;
}

export interface UltraSunUltraMoon3 {
  front_shiny: string;
  front_female: any;
  front_default: string;
  front_shiny_female: any;
}

export interface GenerationViii3 {
  icons: Icons6;
}

export interface Icons6 {
  front_female: any;
  front_default: string;
}

export interface PokemonV2Pokemonstat {
  id: number;
  pokemon_v2_stat: PokemonV2Stat;
}

export interface PokemonV2Stat {
  name: string;
  id: number;
}

export interface PokemonV2Pokemontype {
  id: number;
  pokemon_v2_type: PokemonV2Type;
}

export interface PokemonV2Type {
  name: string;
}
