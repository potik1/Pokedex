import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('Header', () => {
  const header = shallow(< Header />);

  test('renders correctly', () => {
    expect(header).toMatchSnapshot();
  });

  test('contains Connected SearchPokemonByName component', () => {
    expect(header.find('Connect(SearchPokemonByName)').exists()).toBe(true);
  });
});
