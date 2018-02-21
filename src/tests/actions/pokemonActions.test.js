import { getPokemonList, getPokemon, searchPokemon } from '../../actions/index';
import { GET_POKEMON, LIST_POKEMONS, SEARCH_POKEMON } from '../../actions/type';

describe('tests of action functions', () => {
  describe('getPokemonsList function test', () => {
    test('Valid response', () => {
      expect.assertions(9);

      const limit = 10;
      const response = getPokemonList(1, limit);

      expect(response.type).toEqual(LIST_POKEMONS);

      return response.payload.then((res) => {
        expect(res.status).toEqual(200);
        expect(res.data.results.length).toEqual(limit);
        expect(Array.isArray(res.data.results)).toBe(true);
        expect(res.data.results[0]).toMatchObject({});
        expect(res.data.results[0].name).toBeTruthy();
        expect(res.data.results[0]).toHaveProperty('name');
        expect(res.data.results[0]).toHaveProperty('url');
        expect(res.data.results[0].url).toContain('https://');
      });
    });

    test('Out fo range parameters', () => {
      const response = getPokemonList(999, 999);

      expect.assertions(3);
      expect(response.type).toEqual(LIST_POKEMONS);

      return response.payload.then((res) => {
        expect(res.status).toEqual(200);
        expect(res.data.results.length).toEqual(0);
      });
    });

    test('All Pokemons at once', () => {
      const response = getPokemonList(1, 949);

      expect.assertions(3);
      expect(response.type).toEqual(LIST_POKEMONS);

      return response.payload.then((res) => {
        expect(res.status).toEqual(200);
        expect(res.data.results.length).toEqual(949);
      });
    });
  });

  describe('getPokemon function test', () => {
    test('Valid response', () => {
      const response = getPokemon('https://pokeapi.co/api/v2/pokemon/1/');

      expect.assertions(6);
      expect(response.type).toEqual(GET_POKEMON);

      return response.payload.then((res) => {
        expect(res.status).toEqual(200);
        expect(res.data).toMatchObject({});
        expect(res.data).toHaveProperty('name');
        expect(res.data).toHaveProperty('id');
        expect(res.data).toHaveProperty('abilities');
      });
    });

    test('url does not exist', () => {
      const response = getPokemon('https://pokeapi.co/api/v2/pokemon/0/');

      expect.assertions(3);
      expect(response.type).toEqual(GET_POKEMON);

      return response.payload.catch((e) => {
        expect(e).toMatchObject({});
        expect(e.message).toContain('status code 404');
      });
    });
  });

  describe('searchPokemon function test', () => {
    test('correct name', () => {
      const response = searchPokemon('bulbasaur');

      expect.assertions(6);
      expect(response.type).toEqual(SEARCH_POKEMON);

      return response.payload.then((res) => {
        expect(res.status).toEqual(200);
        expect(res.data).toMatchObject({});
        expect(res.data).toHaveProperty('base_experience');
        expect(res.data).toHaveProperty('id');
        expect(res.data).toHaveProperty('abilities');
      });
    });

    test('invalid name', () => {
      const response = searchPokemon('kikomana');

      expect.assertions(3);
      expect(response.type).toEqual(SEARCH_POKEMON);

      return response.payload.catch((e) => {
        expect(e).toMatchObject({});
        expect(e.message).toContain('Request failed with status code 404');
      });
    });
  });
});
