import pokemonsReducer from '../../reducers/pokemonsReducer';
import initialState from '../../store/initialState';
import { LIST_POKEMONS } from '../../actions/type';

describe('get all pokemons reducer', () => {
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
    };

    const newState = pokemonsReducer(undefined, action);
    expect(newState).toEqual(expectedState);
  });
});
