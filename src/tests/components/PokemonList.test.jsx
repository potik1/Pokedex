import React from 'react';
import { shallow } from 'enzyme';
import PokemonList from '../../components/PokemonDetail';

describe('Pokemon List', () => {
  const pokemonList = shallow(<PokemonList />);

  test('renders correctly', () => {
    expect(pokemonList).toMatchSnapshot();
  });
});
