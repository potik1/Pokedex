import React from 'react';
import { shallow } from 'enzyme';
import PokemonDetail from '../../components/PokemonDetail';

describe('Pokemon Detail', () => {
  const pokemonDetail = shallow(<PokemonDetail />);

  test('renders correctly', () => {
    expect(pokemonDetail).toMatchSnapshot();
  });
});
