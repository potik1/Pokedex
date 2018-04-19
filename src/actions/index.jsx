import axios from 'axios';
import {
  LIST_POKEMONS, GET_POKEMON, SEARCH_POKEMON,
  LOADING_ERROR, LOADING_POKEMON, LOADING_LIST, ERROR_RESET,
} from './type';

const ROOT_URL = 'https://pokeapi.co/api/v2/';
const POKEMON_LIMIT = 10;

export function loadingError(bool) {
  return {
    type: LOADING_ERROR,
    hasError: bool,
  };
}

export function loading(bool) {
  return {
    type: LOADING_POKEMON,
    loading: bool,
  };
}

export function loadingList(bool) {
  return {
    type: LOADING_LIST,
    loadingList: bool,
  };
}

export function errorReset() {
  return {
    type: ERROR_RESET,
  };
}

export function getPokemonList(pageNumber = 1, limit = POKEMON_LIMIT) {
  const offset = limit * (pageNumber - 1);
  const url = `${ROOT_URL}pokemon/?limit=${limit}&offset=${offset}`;
  const request = axios.get(url);

  return (dispatch) => {
    dispatch(loadingList(true));
    dispatch(errorReset());
    request.then((response) => {
      dispatch(loadingList(false));
      return dispatch({
        type: LIST_POKEMONS,
        payload: response,
      });
    }).catch(() => dispatch(loadingError(true)));
  };
}

export function getPokemon(url) {
  const request = axios.get(url);
  return (dispatch) => {
    dispatch(loading(true));
    dispatch(errorReset());
    request.then((response) => {
      dispatch(loading(false));
      return dispatch({
        type: GET_POKEMON,
        payload: response,
      });
    });
  };
}

export function searchPokemon(name) {
  const url = `${ROOT_URL}pokemon/${name}/`;
  return (dispatch) => {
    dispatch(loading(true));
    dispatch(errorReset());
    axios.get(url).then((response) => {
      dispatch(loading(false));
      return dispatch({
        type: SEARCH_POKEMON,
        payload: response,
      });
    }).catch((err) => {
      dispatch(loading(false));
      dispatch({ type: SEARCH_POKEMON, error: err });
    });
  };
}

