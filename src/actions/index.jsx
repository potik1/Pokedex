import axios from 'axios';
import { LIST_POKEMONS, GET_POKEMON, SEARCH_POKEMON, LOADING } from './type';

const ROOT_URL = 'https://pokeapi.co/api/v2/';
const POKEMON_LIMIT = 10;

function loading() {
  return {
    type: LOADING,
  };
}

/*export function signinUser({email, password}) {  //{email:email, password:password}

  return dispatch => {
    axios.post(`${API_URL}/signin`, {email, password}).then(response => {
      //save JWT token
      localStorage.setItem('token', response.data.token);
      //authentication is true
      dispatch({type: AUTH_USER});
      //redirect to the route '/feature'
      history.push('/feature');

    }).catch(() => {
      dispatch(authInError('BAD EMAIL OR PASSWORD'));
    });
  };
}*/

/*export function getPokemonList(pageNumber = 1, limit = POKEMON_LIMIT) {
  const offset = limit * (pageNumber - 1);
  const url = `${ROOT_URL}pokemon/?limit=${limit}&offset=${offset}`;
  const request = axios.get(url);

  return {
    type: LIST_POKEMONS,
    payload: request,
  };
}*/

export function getPokemonList(pageNumber = 1, limit = POKEMON_LIMIT) {
  const offset = limit * (pageNumber - 1);
  const url = `${ROOT_URL}pokemon/?limit=${limit}&offset=${offset}`;
  const request =axios.get(url);

  return (dispatch) => {

    request.then(response => {
    return {
      type: LIST_POKEMONS,
      payload: request,
    };
  })
};

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

