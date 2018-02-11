import axios from 'axios';
import { LIST_POKEMONS, GET_POKEMON } from './type';

const ROOT_URL = 'https://pokeapi.co/api/v2/';
const POKEMON_LIMIT = 20;

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

  return {
    type: GET_POKEMON,
    payload: request,
  };
}

