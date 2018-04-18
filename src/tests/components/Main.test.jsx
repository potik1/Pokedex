import React from 'react';
import { shallow } from 'enzyme';
import Main from '../../components/Main';

describe('Main', () => {
  const main = shallow(<Main />);

  test('renders correctly', () => {
    expect(main).toMatchSnapshot();
  });

  test('contains Header component', () => {
    expect(main.find('Header').exists()).toBe(true);
  });
  test('contains Connected PokemonList component', () => {
    expect(main.find('Connect(PokemonList)').exists()).toBe(true);
  });
});
