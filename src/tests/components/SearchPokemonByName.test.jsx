import React from 'react';
import { shallow } from 'enzyme';
import SearchPokemonByName from '../../components/SearchPokemonByName';

describe('Search Pokemon', () => {
  const searchPokemon = shallow(<SearchPokemonByName />);

  test('renders correctly', () => {
    expect(searchPokemon).toMatchSnapshot();
  });
});
