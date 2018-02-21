import {
  LIST_POKEMONS,
  GET_POKEMON,
  SEARCH_POKEMON, LOADING,
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
      };

    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload.data,
        pokemonNotFound: false,
        loadingPokemon: false,
      };

    case SEARCH_POKEMON:
      if (action.error) {
        const { status } = action.payload.response;
        if (status === 404) {
          return {
            ...state,
            pokemonNotFound: true,
            loadingPokemon: false,
          };
        }
      }
      return {
        ...state,
        pokemon: action.payload.data,
        pokemonNotFound: false,
        loadingPokemon: false,
      };

    case LOADING:
      return { ...state, loadingPokemon: true };

    default:
      return state;
  }
}
