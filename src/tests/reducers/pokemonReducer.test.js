import pokemonsReducer from '../../reducers/pokemonsReducer';
import { GET_POKEMON, LIST_POKEMONS, SEARCH_POKEMON } from '../../actions/type';
import initialState from '../../store/initialState';

describe('handle all reducers', () => {
  test('should return an initial state', () => {
    const newState = pokemonsReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  test('should handle LIST_POKEMONS', () => {
    const pokemons = [{ id: 1 }, { id: 2 }];

    const axiosResponse = {
      data: {
        results: pokemons,
      },
    };

    const action = {
      type: LIST_POKEMONS,
      payload: axiosResponse,
    };

    const expectedState = {
      pokemons,
      pokemon: null,
      nextPage: undefined,
      previousPage: undefined,
    };

    const newStateGetAll = pokemonsReducer(undefined, action);
    expect(newStateGetAll).toEqual(expectedState);
  });

  test('should handle NextPage', () => {
    const nextPage = 'https://pokeapi.co/api/v2/pokemon/?limit=10&offset=10';

    const axiosResponse = {
      data: {
        next: nextPage,
      },
    };

    const action = {
      type: LIST_POKEMONS,
      payload: axiosResponse,
    };

    const expectedState = {
      pokemons: undefined,
      pokemon: null,
      nextPage,
      previousPage: undefined,
    };

    const newStateGetAll = pokemonsReducer(undefined, action);
    expect(newStateGetAll).toEqual(expectedState);
  });
  test('should handle previousPage', () => {
    const previousPage = 'https://pokeapi.co/api/v2/pokemon/?limit=10';

    const axiosResponse = {
      data: {
        previous: previousPage,
      },
    };

    const action = {
      type: LIST_POKEMONS,
      payload: axiosResponse,
    };

    const expectedState = {
      pokemons: undefined,
      pokemon: null,
      nextPage: undefined,
      previousPage,
    };

    const newStateGetAll = pokemonsReducer(undefined, action);
    expect(newStateGetAll).toEqual(expectedState);
  });


  test('should handle GET_POKEMON', () => {
    const name = 'bulbasaur';
    const axiosGetPokemonResponse = {
      data: {
        name,
      },
    };

    const actionGetPokemon = {
      type: GET_POKEMON,
      payload: axiosGetPokemonResponse,
    };

    const expectedGetPokemonState = {
      pokemons: [],
      pokemon: { name },
      nextPage: undefined,
      previousPage: undefined,
    };

    const newStateGetPokemon = pokemonsReducer(undefined, actionGetPokemon);
    expect(newStateGetPokemon).toEqual(expectedGetPokemonState);
  });
  test('should handle SEARCH_POKEMON', () => {
    const name = 'squirtle';
    const axiosSearchPokemonResponse = {
      data: {
        name,
      },
    };

    const actionSearchPokemon = {
      type: SEARCH_POKEMON,
      payload: axiosSearchPokemonResponse,
    };

    const expectedSearchPokemonState = {
      pokemons: [],
      pokemon: { name },
      nextPage: undefined,
      previousPage: undefined,
    };

    const newStateSearchPokemon = pokemonsReducer(undefined, actionSearchPokemon);
    expect(newStateSearchPokemon).toEqual(expectedSearchPokemonState);
  });
});
