import { LIST_POKEMONS } from '../actions/type';
import initialState from '../store/initialState';

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case LIST_POKEMONS:
      return { ...state, pokemons: action.payload.data };
    default:
      return state;
  }
}
