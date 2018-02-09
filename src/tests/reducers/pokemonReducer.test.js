import pokemonsReducer from '../../reducers/pokemonsReducer';
import initialState from '../../store/initialState';
import { LIST_POKEMONS } from '../../actions/type';

describe('get all pokemons reducer', () => {
  test('should return an initial state', () => {
    const newState = pokemonsReducer(undefined, {});

    expect(newState).toEqual(initialState);
  });

  test('should handle LIST_POKEMONS', () => {
    const responseData = {
      data: {
        results: [
          {'1': 1}, {'2': 2},
        ],
      },
    };

    console.log(responseData);

    const actionObject = {
      type: LIST_POKEMONS,
      pokemons: responseData,
    };
    console.log(actionObject);

    const newState = pokemonsReducer(undefined, actionObject);

    expect(newState).toEqual(responseData);
  });
});
