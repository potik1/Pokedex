import { combineReducers } from 'redux';
import PokemonsReducer from './pokemonsReducer';

const rootReducer = combineReducers({
  pokemons: PokemonsReducer,
});

export default rootReducer;
