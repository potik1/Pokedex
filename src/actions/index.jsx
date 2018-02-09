import axios from 'axios';
import { LIST_POKEMONS } from './type';

const ROOT_URL = 'https://pokeapi.co/api/v2/';
const POKEMON_LIMIT = 20;

export function getPokemonList(pageNumber = 1, limit = POKEMON_LIMIT) {
  const offset = limit * (pageNumber - 1);
  const request = axios.get(`${ROOT_URL}pokemon/?limit=${limit}&offset=${offset}`);

  return {
    action: LIST_POKEMONS,
    payload: request,
  };
}

