import pokemonsReducer from '../../reducers/pokemonsReducer';
import { GET_POKEMON, LIST_POKEMONS } from '../../actions/type';
import initialState from '../../store/initialState';

describe('handle all reducers', () => {
  test.only('should return an initial state', () => {

    const newState = pokemonsReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  test.only('should handle LIST_POKEMONS', () => {
    const pokemons = [{id: 1}, {id: 2}];

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
      pokemon:null,
      pokemons,
    };

    const newStateGetAll = pokemonsReducer(undefined, action);
    expect(newStateGetAll).toEqual(expectedState);
  });

  test('should handle GET_POKEMON', () => {
    const id = 1;
    const axiosGetPokemonResponse = {
      data: {
        id,
      },
    };

    const actionGetPokemon = {
      type: GET_POKEMON,
      payload: axiosGetPokemonResponse,
    };

    const expectedGetPokemonState = {
      id,
      pokemons: [],
    };

    const newStateGetPokemon = pokemonsReducer(undefined, actionGetPokemon);
    expect(newStateGetPokemon).toEqual(expectedGetPokemonState);
  });
});
