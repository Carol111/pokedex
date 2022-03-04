import {api} from './api';
import * as T from 'src/types/pokemon';

type PokemonResponse = {
  ok: boolean;
  status: number;
  data: T.PokemonList;
};

type DetailsResponse = {
  ok: boolean;
  status: number;
  data: T.PokemonDetailsListItem;
};

type DetailedListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  list: T.PokemonDetailsListItem[];
};

export async function getPokemonList() {
  const baseList = await getPokemon();
  if (!baseList.ok) {
    return {
      ok: false,
      message: 'There was an error loading the pokemon list',
      data: {} as T.PokemonList,
    };
  }

  const detailedList = await getDetails(baseList.data.results);

  if (!detailedList.ok) {
    return {
      ok: false,
      message: 'There was an error loading pokemon data',
      data: {} as T.PokemonList,
    };
  }

  const completeList: DetailedListResponse = {
    count: baseList.data.count,
    next: baseList.data.next,
    previous: baseList.data.previous,
    list: detailedList.data,
  };

  return {
    ok: true,
    status: 200,
    data: completeList,
  };
}

async function getPokemon() {
  try {
    const response: PokemonResponse = await api.get('pokemon');
    return response;
  } catch (error) {
    return {
      ok: false,
      status: 400,
      data: {} as T.PokemonList,
    };
  }
}

async function getDetails(list: T.PokemonListItem[]) {
  try {
    const detailedList = await Promise.all(
      list.map(async pokemon => {
        const pokemonDetailsResult: DetailsResponse = await api.get(
          `pokemon/${pokemon.name}`,
        );

        return {
          ...pokemon,
          ...pokemonDetailsResult.data,
          image:
            pokemonDetailsResult.data.sprites.other['official-artwork']
              .front_default,
        };
      }),
    );

    return {
      ok: true,
      status: 200,
      data: detailedList,
    };
  } catch (error) {
    return {
      ok: false,
      status: 400,
      data: [] as T.PokemonDetailsListItem[],
    };
  }
}
