export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
}

export interface Sprites {
  other: {
    'official-artwork': {
      front_default: string;
    };
  };
}

export interface Type {
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonDetails extends Pokemon {
  stats: Stat[];
  sprites: Sprites;
  types: Type[];
  id: number;
}
