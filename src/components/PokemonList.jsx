import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getPokemonList, getPokemon } from '../actions/index';
import PokemonDetail from './PokemonDetail';
import {
  hasError,
  renderLoading,
  addStyleClassToElement,
  removeStyleClassFromElement,
} from '../utils/functions';

export class PokemonList extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
    };

    this.activeEl = null;
  }

  componentDidMount() {
    this.props.getPokemonList();
    const url1 = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
    this.props.getPokemon(url1);
  }

  getSelectPokemonList = pokemonUrl => (e) => {
    this.props.getPokemon(pokemonUrl);

    if ((this.activeEl) && (e.target !== this.activeEl)) {
      removeStyleClassFromElement(this.activeEl, 'font-weight-bold');
    }
    addStyleClassToElement(e.target, 'font-weight-bold');
    this.activeEl = e.target;
  };

  nextPage() {
    const page = this.state.page + 1;
    this.setState({page});
    this.props.getPokemonList(page);
  }

  prevPage() {
    const page = this.state.page - 1;
    this.setState({page});
    this.props.getPokemonList(page);
  }

  renderList() {
    return (
      this.props.pokemons.map(pokemon =>
        (<li
          className="list-group-item text-capitalize"
          key={pokemon.name}
          onClick={this.getSelectPokemonList(pokemon.url)}
        >
          {pokemon.name}
        </li>))
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3 className="mt-4 mx-auto">LIST OF POKEMONS</h3>
          <div className="col-12 "/>
          <div className="col-lg-3 col-md-3 col-sm-5 col-xs-6 mx-auto">
            <div className="text-center">
              <button
                className={this.props.previousPage
                  ? 'btn btn-outline-info'
                  : 'btn btn-outline-info disabled'}
                onClick={() => this.prevPage()}
              >
                Previous
              </button>
              <button
                className={this.props.nextPage
                  ? 'btn btn-outline-info'
                  : 'btn btn-outline-info disabled'}
                onClick={() => this.nextPage()}
              >
                Next
              </button>
            </div>
            <div>
              <ul className="list-group my-4">
                {this.props.loadingList && renderLoading()}
                {this.props.hasError && hasError()}
                {this.props.pokemons
                && !this.props.loadingList
                && !this.props.hasError
                && this.renderList()}
              </ul>
            </div>
            <hr className="d-block d-sm-none"/>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-7 col-xs-6 mx-auto">
            <PokemonDetail/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    pokemons: state.pokemons.pokemons,
    previousPage: state.pokemons.previousPage,
    nextPage: state.pokemons.nextPage,
    pokemonNotFound: state.pokemons.pokemonNotFound,
    hasError: state.pokemons.hasError,
    loadingList: state.pokemons.loadingList,
  }
);

PokemonList.propTypes = {
  getPokemonList: PropTypes.func.isRequired,
  getPokemon: PropTypes.func.isRequired,
  /* eslint-disable*/
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  /* eslint-disable */
  previousPage: PropTypes.string.isRequired,
  /* eslint-disable */
  nextPage: PropTypes.string.isRequired,
  pokemonNotFound: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  loadingList: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  {getPokemonList, getPokemon},
)(PokemonList);

