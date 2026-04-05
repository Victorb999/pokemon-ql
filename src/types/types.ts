export interface PokemonList {
  name: string
  id: number
  pokemon_v2_pokemonsprites: {
    sprites: any
  }[]
  pokemon_v2_pokemontypes: {
    pokemon_v2_type: {
      id: number
      name: string
    }
  }[]
}

export interface GenerationList {
  id: number
  name: string
}

export interface TypeList {
  id: number
  name: string
}

export interface DataError {
  errors: Error[]
}

export interface Error {
  message: string
  extensions: Extensions
}

export interface Extensions {
  path: string
  code: string
}

export interface PokemonV2Pokemon {
  id: number
  name: string
  height: number
  base_experience: number
  pokemon_v2_pokemonabilities: PokemonV2Pokemonability[]
  pokemon_v2_pokemonmoves: PokemonV2Pokemonmfe[]
  pokemon_v2_pokemonspecy: PokemonV2Pokemonspecy
  pokemon_v2_pokemonsprites: PokemonV2Pokemonsprite3[]
  pokemon_v2_pokemonstats: PokemonV2Pokemonstat[]
  pokemon_v2_pokemontypes: PokemonV2Pokemontype[]
  order: number
}

export interface PokemonV2Pokemonability {
  id: number
  is_hidden: boolean
  ability_id: number
  pokemon_v2_ability: PokemonV2Ability
}

export interface PokemonV2Ability {
  name: string
}

export interface PokemonV2Pokemonmfe {
  move_id: number
  pokemon_v2_move: PokemonV2Move
}

export interface PokemonV2Move {
  accuracy?: number
  move_damage_class_id: number
  name: string
  power?: number
  pp?: number
  pokemon_v2_type: {
    name: string
  }
  pokemon_v2_movedamageclass: {
    name: string
  }
  pokemon_v2_moveflavortexts: {
    flavor_text: string
  }[]
}

export interface PokemonV2Pokemonspecy {
  base_happiness: number
  capture_rate: number
  evolution_chain_id: number
  evolves_from_species_id: number
  is_baby: boolean
  is_legendary: boolean
  is_mythical: boolean
  name: string
  id: number
  pokemon_v2_pokemonspeciesflavortexts: PokemonV2Pokemonspeciesflavortext[]
  pokemon_v2_pokemonspeciesnames: PokemonV2Pokemonspeciesname[]
  pokemon_v2_pokemonevolutions: PokemonV2Pokemonevolution[]
  pokemon_v2_generation: PokemonV2Generation
  pokemon_v2_pokemonshape: PokemonV2Pokemonshape
  pokemon_v2_evolutionchain: PokemonV2Evolutionchain
  pokemon_v2_pokemons: PokemonV2Pokemon2[]
}

export interface PokemonV2Pokemonspeciesflavortext {
  flavor_text: string
  id: number
  language_id: number
}

export interface PokemonV2Pokemonspeciesname {
  genus: string
  name: string
  language_id: number
}

export interface PokemonV2Pokemonevolution {
  min_level: number
  id: number
  pokemon_v2_evolutiontrigger: PokemonV2Evolutiontrigger
}

export interface PokemonV2Evolutiontrigger {
  name: string
}

export interface PokemonV2Generation {
  name: string
  id: number
}

export interface PokemonV2Pokemonshape {
  name: string
}

export interface PokemonV2Evolutionchain {
  id: number
  pokemon_v2_pokemonspecies: PokemonV2Pokemonspecy2[]
}

export interface PokemonV2Pokemonspecy2 {
  id: number
  name: string
  is_baby: boolean
  is_legendary: boolean
  is_mythical: boolean
  pokemon_v2_pokemons: PokemonV2Pokemon[]
  pokemon_v2_evolutionchain: PokemonV2Evolutionchain2
}

export interface PokemonV2Evolutionchain2 {
  id: number
}

export interface PokemonV2Pokemon2 {
  pokemon_v2_pokemonforms: PokemonV2Pokemonform[]
}

export interface PokemonV2Pokemonform {
  form_name: string
  id: number
  name: string
  is_mega: boolean
  is_default: boolean
  is_battle_only: boolean
  pokemon_id: number
  pokemon_v2_pokemon: PokemonV2Pokemon3
}

export interface PokemonV2Pokemon3 {
  pokemon_v2_pokemonsprites: PokemonV2Pokemonsprite3[]
  pokemon_v2_pokemontypes: PokemonV2Pokemontype[]
}

export interface PokemonV2Pokemonsprite3 {
  sprites: any
}

export interface PokemonV2Pokemontype {
  id: number
  pokemon_v2_type: {
    name: string
    id?: number
  }
}

export interface PokemonV2Pokemonstat {
  base_stat: number
  id: number
  pokemon_v2_stat: {
    name: string
    id: number
  }
}
