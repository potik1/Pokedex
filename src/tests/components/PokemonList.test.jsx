import React from 'react';
import { shallow } from 'enzyme';
import { PokemonList } from '../../components/PokemonList';

describe('Pokemon List', () => {
  const mockgetPokemonList = jest.fn();
  const mockgetPokemon = jest.fn();
  const mockhasError = jest.fn();
  const mockerrorLoading = jest.fn();

  let props = {
    page: 1,
    activeEl: null,
    loadingList: false,
    pokemonNotFound: false,
    hasError: false,
    nextPage: '',
    previousPage: '',
    pokemons: [],
    getPokemonList: mockgetPokemonList,
    getPokemon: mockgetPokemon,
  };

  let pokemonList = shallow(<PokemonList {...props} />);

  test('renders correctly', () => {
    expect(pokemonList).toMatchSnapshot();
  });
  test('state at the start', () => {
    expect(pokemonList.state().page).toEqual(1);
    expect(pokemonList.state().activeEl).toEqual(undefined);
  });

  test('contains Connected PokemonDetail component', () => {
    expect(pokemonList.find('Connect(PokemonDetail)').exists()).toBe(true);
  });

  describe(
    'calls `getPokemonList()` and `getPokemon()` when componentDidMount',
    () => {
      beforeEach(() => {
        pokemonList.instance().componentDidMount();
        props = {url1: 'https://pokeapi.co/api/v2/pokemon/bulbasaur'};
      });
      test(
        'calls `getPokemonList()` and `getPokemon()`',
        () => {
          expect(mockgetPokemonList).toHaveBeenCalledTimes(1);
          expect(mockgetPokemon).toBeCalledWith(props.url1);
        },
      );
    },
  );

  describe('renderList', () => {
    beforeEach(() => {
      props = {
        pokemons: [{name: 'bulbasaur'}, {name: 'ivysaur'}],
        page: 1,
        activeEl: null,
        loadingList: false,
        pokemonNotFound: false,
        hasError: false,
        nextPage: '',
        previousPage: '',
        getPokemonList: mockgetPokemonList,
        getPokemon: mockgetPokemon,
        url1: 'https://pokeapi.co/api/v2/pokemon/bulbasaur',
      };

      pokemonList = shallow(<PokemonList {...props} />);
    });

    test('renders correctly', () => {
      expect(pokemonList.find('ul')).toHaveLength(1);
      expect(pokemonList.find('li')).toHaveLength(2);
      expect(pokemonList.find('ul').childAt(0).text()).toEqual('bulbasaur');
      expect(pokemonList.find('ul').childAt(1).text()).toEqual('ivysaur');
    });

    describe('select pokemon when clicking', () => {
      test('before clicking has a class `list-group-item` and has not `font-weight-bold`', () => {
        expect(pokemonList.find('ul').childAt(0).hasClass('list-group-item')).toEqual(true);
        expect(pokemonList.find('ul').childAt(0).hasClass('font-weight-bold')).toEqual(false);
      });
      test('add classList `font-weight-bold` to selected pokemon', () => {
        const event = { target: { name: 'bulbasaur' } };
        const getSelectPokemonList = jest.fn();
        pokemonList.find('ul').childAt(0).simulate('click', event);
        getSelectPokemonList(props.url1);
        //pokemonList.update();
        //expect(targetOn).toContain('.font-weight-bold');
      });
    });
  });
});
