import { LIST_POKEMONS, GET_POKEMON } from '../actions/type';
import initialState from '../store/initialState';

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case LIST_POKEMONS:
      return { ...state, pokemons: action.payload.data.results };
    case GET_POKEMON:
      return { ...state, pokemon: action.payload.data };
    default:
      return state;
  }
}
