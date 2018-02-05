import { getPokemonList } from '../../actions';
import { LIST_POKEMONS } from '../../actions/type';

describe('getPokemonsList function test', () => {
  test('Valid response', () => {
    const limit = 10;
    const response = getPokemonList(1, limit);

    expect(response.action).toEqual(LIST_POKEMONS);
    response.payload.then((res) => {
      expect(res.status).toEqual(200);
      expect(res.data.results.length).toEqual(limit);
      expect(Array.isArray(res.data.results)).toBe(true);
      expect(res.data.results[0]).toMatchObject({});
      expect(res.data.results[0].name).toBeTruthy();
      expect(res.data.results[0].url).toBeTruthy();
    });
  });

  test('Out fo range parameters', () => {
    const response = getPokemonList(999, 999);
    expect(response.action).toEqual(LIST_POKEMONS);
    response.payload.then((res) => {
      expect(res.status).toEqual(200);
      expect(res.data.results.length).toEqual(0);
    });
  });

  test('All Pokemons at once', () => {
    const response = getPokemonList(1, 949);
    expect(response.action).toEqual(LIST_POKEMONS);
    response.payload.then((res) => {
      expect(res.status).toEqual(200);
      expect(res.data.results.length).toEqual(949);
    });
  });
});
