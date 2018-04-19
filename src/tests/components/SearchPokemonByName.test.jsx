import React from 'react';
import { shallow } from 'enzyme';
import { SearchPokemonByName } from '../../components/SearchPokemonByName';

describe('Search Pokemon', () => {
  const mockSearchPokemon = jest.fn();
  const props = {term: '', searchPokemon: mockSearchPokemon};
  const searchPokemonByName = shallow(<SearchPokemonByName {...props} />);

  test('renders correctly', () => {
    expect(searchPokemonByName).toMatchSnapshot();
  });

  test('create an input to search', () => {
    expect(searchPokemonByName.find('.form-control').exists()).toBe(true);
  });

  describe('when user types into input', () => {
    const name = 'pikachu';

    beforeEach(() => {
      searchPokemonByName.find('.form-control').simulate(
        'change',
        {target: {value: name}},
      );
    });

    test('update the local `state` term value', () => {
      expect(searchPokemonByName.state().term).toEqual(name);
    });

    describe('submit form', () => {
      const preventDefault = jest.fn();

      beforeEach(() => {
        searchPokemonByName.find('.form-inline').simulate('submit',
          { preventDefault });
      });

      test('dispatches the `searchPokemon()` function', () => {
        expect(mockSearchPokemon).toHaveBeenCalledWith(name);
      });
    });
  });
});

