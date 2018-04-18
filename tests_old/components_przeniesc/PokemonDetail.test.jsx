import React from 'react';
import { shallow } from 'enzyme';
import { PokemonDetail } from '../../src/components/PokemonDetail';

describe('Pokemon Detail', () => {
  const props = { pokemon: {}, pokemonNotFound: false, loading: false };
  const pokemonDetail = shallow(<PokemonDetail {...props} />);

  test('renders correctly', () => {
    expect(pokemonDetail).toMatchSnapshot();
  });
});
