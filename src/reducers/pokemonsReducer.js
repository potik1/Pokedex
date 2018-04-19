import {
  LIST_POKEMONS,
  GET_POKEMON,
  SEARCH_POKEMON,
  LOADING_POKEMON,
  LOADING_ERROR,
  LOADING_LIST,
  ERROR_RESET,
} from '../actions/type';
import initialState from '../store/initialState';

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case LIST_POKEMONS:
      return {
        ...state,
        pokemons: action.payload.data.results,
        previousPage: action.payload.data.previous,
        nextPage: action.payload.data.next,
        loadingList: false,
      };

    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload.data,
        pokemonNotFound: false,
        loading: false,
      };

    case SEARCH_POKEMON:
      if (action.error) {
        return {
          ...state,
          pokemonNotFound: true,
          loading: false,
        };
      }
      return {
        ...state,
        pokemon: action.payload.data,
        pokemonNotFound: false,
        loading: false,
      };

    case LOADING_POKEMON:
      return { ...state, loading: true };
    case LOADING_LIST:
      return { ...state, loadingList: true };
    case LOADING_ERROR:
      return { ...state, hasError: true };
    case ERROR_RESET:
      return { ...state, pokemonNotFound: false };

    default:
      return state;
  }
}
