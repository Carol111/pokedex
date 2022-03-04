export type PokemonList = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
};

export type PokemonListItem = {
  name: string;
};

export type PokemonDetailsListItem = {
  name: string;
  order: number;
  types: PokemonTypes[];
  sprites: PokemonSprites;
  image: string;
};

export type PokemonTypes = {
  slot: number;
  type: {
    name: string;
  };
};

export type PokemonSprites = {
  other: {
    'official-artwork': {
      front_default: string;
    };
  };
};
