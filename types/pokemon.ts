export interface PokemonSprites {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
}

export interface PokemonAbility {
  ability: {
    name: string;
  };
}

export interface PokemonMove {
  move: {
    name: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  dreamworld?: string;
  abilities: PokemonAbility[];
  moves: PokemonMove[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
}

export interface MyPokemon extends Pokemon {
  local_name: string;
}

export interface PokemonListItem {
  id: number;
  name: string;
  dreamworld: string;
}

export interface PokemonsResponse {
  count: number;
  results: PokemonListItem[];
}
