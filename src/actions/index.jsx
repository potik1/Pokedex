import axios from 'axios';
import { LIST_POKEMONS, GET_POKEMON, SEARCH_POKEMON, LOADING } from './type';

const ROOT_URL = 'https://pokeapi.co/api/v2/';
const POKEMON_LIMIT = 10;

function loading() {
  return {
    type: LOADING,
  };
}

export function getPokemonList(pageNumber = 1, limit = POKEMON_LIMIT) {
  const offset = limit * (pageNumber - 1);
  const url = `${ROOT_URL}pokemon/?limit=${limit}&offset=${offset}`;
  const request = axios.get(url);

  return {
    type: LIST_POKEMONS,
    payload: request,
  };
}

export function getPokemon(url) {
  const request = axios.get(url);
  return (dispatch) => {
    dispatch(loading());

    return dispatch({
      type: GET_POKEMON,
      payload: request,
    });
  };
}

export function searchPokemon(name) {
  const url = `${ROOT_URL}pokemon/${name}/`;
  const request = axios.get(url);

  return (dispatch) => {
    dispatch(loading());
    return dispatch({
      type: SEARCH_POKEMON,
      payload: request,
    });
  };
}

