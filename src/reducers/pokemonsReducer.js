import { LIST_POKEMONS, GET_POKEMON, SEARCH_POKEMON } from '../actions/type';
import initialState from '../store/initialState';

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case LIST_POKEMONS:
      return {
        ...state,
        pokemons: action.payload.data.results,
        previousPage: action.payload.data.previous,
        nextPage: action.payload.data.next,
      };
    case GET_POKEMON:
      return { ...state, pokemon: action.payload.data };
    case SEARCH_POKEMON:
      return { ...state, pokemon: action.payload.data };
    default:
      return state;
  }
}
