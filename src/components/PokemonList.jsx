import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getPokemonList, getPokemon, searchPokemon } from '../actions/index';
import PokemonDetail from './PokemonDetail';

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };

    this.props.getPokemonList(this.state.page).then((res) => {
      const pokemonName = res.payload.data.results[0].name;
      this.props.searchPokemon(pokemonName);
    });

    this.activeEl = null;
  }

  getSelectPokemonList = pokemonUrl => (e) => {
    this.props.getPokemon(pokemonUrl);
    if ((this.activeEl) && (e.target !== this.activeEl)) {
      this.activeEl.classList.remove('font-weight-bold');
    }
    e.target.classList.add('font-weight-bold');
    this.activeEl = e.target;
  };

  nextPage() {
    const page = this.state.page + 1;
    this.setState({ page });
    this.props.getPokemonList(page);
  }

  prevPage() {
    const page = this.state.page - 1;
    this.setState({ page });
    this.props.getPokemonList(page);
  }

  notFound() {
    if (this.props.pokemonNotFound) {
      return (
        <div>
          <h4 className="text-danger mx-auto">POKEMON NOT FOUND</h4>
        </div>
      );
    }
    return null;
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
          <div className="col-12">
            <div className="col-lg-3 col-md-3 col-sm-5 col-xs-6 mx-auto">
              <h3 className="mt-4 mx-auto"> LIST OF POKEMONS</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-5 col-xs-6 mx-auto">
            <div>{this.notFound()}</div>
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
            <div >
              <ul className="list-group my-4">
                {this.renderList()}
              </ul>
            </div>
            <hr />
          </div>
          <div className="col-lg-8 col-md-8 col-sm-7 col-xs-6 mx-auto" >
            <PokemonDetail />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pokemons: state.pokemons.pokemons,
    previousPage: state.pokemons.previousPage,
    nextPage: state.pokemons.nextPage,
    pokemonNotFound: state.pokemons.pokemonNotFound,
  };
}

PokemonList.propTypes = {
  getPokemonList: PropTypes.func.isRequired,
  getPokemon: PropTypes.func.isRequired,
  searchPokemon: PropTypes.func.isRequired,
  pokemons: PropTypes.arrayOf(PropTypes.object),
  previousPage: PropTypes.string,
  nextPage: PropTypes.string,
};

export default connect(
  mapStateToProps,
  { getPokemon, getPokemonList, searchPokemon },
)(PokemonList);

