import React from 'react';
import { shallow } from 'enzyme';
import { PokemonList } from '../../components/PokemonList';


describe('Pokemon List', () => {
  const mockgetPokemonList = jest.fn();
  const mockgetPokemon = jest.fn();

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

  test('visible test', () => {
    expect(pokemonList.find('h3').text()).toEqual('LIST OF POKEMONS');
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
          expect(mockgetPokemonList).toHaveBeenCalled();
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
  });

  describe('nextPage', () => {
    beforeAll(() => {
      pokemonList.find('button').last().simulate('click');
    });
    test('change state after clicking', () => {
      expect(pokemonList.state().page).toEqual(2);
    });
    test('checking Next button name', () => {
      expect(pokemonList.find('button').last().text()).toEqual('Next');
    });
  });

  describe('prevPage', () => {
    beforeAll(() => {
      pokemonList.find('button').first().simulate('click');
    });
    test('change state after clicking', () => {
      expect(pokemonList.state().page).toEqual(1);
    });
    test('checking Previous button name', () => {
      expect(pokemonList.find('button').first().text()).toEqual('Previous');
    });
  });

  describe('getSelectPokemonList', () => {
    const mockGetSelectPokemonList = jest.fn();
    const mockRemove = jest.fn();
    const mockAdd = jest.fn();

    props = {
      pokemons: [{ name: 'bulbasaur' }, { name: 'ivysaur' }],
      page: 1,
      activeEl: null,
      loadingList: false,
      pokemonNotFound: false,
      hasError: false,
      nextPage: '',
      previousPage: '',
      getPokemonList: mockgetPokemonList,
      getPokemon: mockgetPokemon,
      removeStyleClassFromElement: mockRemove,
      addStyleClassToElement: mockAdd,
      getSelectPokemonList: mockGetSelectPokemonList,
      url1: 'https://pokeapi.co/api/v2/pokemon/bulbasaur',
    };

    pokemonList = shallow(<PokemonList {...props} />);

    test('calling pokemonList', () => {
      const pokemonUrl = props.url1;
      expect(mockgetPokemon).toBeCalledWith(pokemonUrl);
    });
    //not finished yet
  });
});
