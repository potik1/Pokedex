import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getPokemonList, getPokemon, searchPokemon } from '../actions/index';
import PokemonDetail from './PokemonDetail';

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {page: 1};
  }

  componentWillMount() {
    this.props.getPokemonList(this.state.page).then((res) => {
      const pokemonName = res.payload.data.results[0].name;
      this.props.searchPokemon(pokemonName);
    });
  }

  nextPage() {
    console.log(this.props);
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
        <li className="list-group-item" key={pokemon.name}>
          {pokemon.name}</li>)
    );
  }

  render() {

    if (!this.props.pokemons) {
      return (<div>Loading...</div>);
    }
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <h3 className="text-center my-4"> POKEMON LISTS</h3>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 mx-4">
            <div>
              <ul className="list-group">
                {this.renderList()}
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
            <PokemonDetail/>
          </div>
        </div>
        <div className="row my-6">
          <div className="col-12">
            <div className="text-center">
              <button className={this.props.previousPage
                ? 'btn btn-outline-secondary'
                : 'btn btn-outline-secondary disabled'}
                      onClick={() => this.prevPage()}>
                Previous
              </button>
              <button className={this.props.nextPage
                ? 'btn btn-outline-secondary'
                : 'btn btn-outline-secondary disabled'}
                      onClick={() => this.nextPage()}>
                Next
              </button>
            </div>
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
  };
}

PokemonList.propTypes = {
  getPokemonList: PropTypes.func.isRequired,
  getPokemon: PropTypes.func.isRequired,
  searchPokemon: PropTypes.func.isRequired,
  pokemons: PropTypes.arrayOf(PropTypes.object),
  pokemon: PropTypes.object,
  previousPage: PropTypes.string,
  nextPage: PropTypes.string,
};

export default connect(mapStateToProps,
  {getPokemonList, getPokemon, searchPokemon})(PokemonList);

