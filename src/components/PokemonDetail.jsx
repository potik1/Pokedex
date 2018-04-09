import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { renderLoading } from '../utils/functions';
import ShowingArrow from './Showing';


class PokemonDetail extends Component {
  componentDidUpdate() {
    this.scroll();
  }

  scroll = () => {
    if (this.element) {
      this.element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  renderPokemonDetails = (pokemon) => {
    const { name, weight, height } = pokemon;
    const index = pokemon.id;
    const imgFrontShiny = pokemon.sprites.front_shiny;
    const imgBackShiny = pokemon.sprites.back_shiny;
    const baseExp = pokemon.base_experience;

    const tableStat = pokemon.stats.map(stat => (
      <tr key={stat.stat.name}>
        <td>{stat.stat.name}</td>
        <td>{stat.base_stat}</td>
      </tr>
    ));

    const typeStat = pokemon.types.map(type => (
      <li key={type.type.name}>{type.type.name}</li>
    ));
    return (
      <div>
        <div className="row my-2">
          <div className="col-12 text-uppercase">
            <h4 className="text-center font-weight-bold">{name}</h4>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-12 text-center">
            <img src={imgFrontShiny} alt="imgFrontShiny" />
            <img src={imgBackShiny} alt="imgBackShiny" />
          </div>
        </div>
        <div className="row">
          <div className="col-6  mx-auto">
            <h5 className="font-italic font-weight-bold">
              Characteristics:
            </h5>
            <ul>
              <li>Index: {index}</li>
              <li>Height: {height}</li>
              <li>Weight: {weight}</li>
              <li>Basic experience: {baseExp}</li>
            </ul>
          </div>
          <div className="col-6  mx-auto">
            <h5 className="font-italic font-weight-bold">Types:</h5>
            <ul>
              {typeStat}
            </ul>
          </div>
        </div>
        <div className="row my-4 mx-2">
          <h5 className="font-italic font-weight-bold">
            Statistics:
          </h5>
          <table className="table table-sm table-bordered">
            <thead>
              <tr className="table-secondary">
                <th>Ability</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {tableStat}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  renderPokemonNotFound = () => (
    <div className="row">
      <h2 className="text-danger mx-auto">Pokemon Not Found!</h2>
    </div>
  );

  render() {
    return (
      <div ref={(el) => { this.element = el; }}>
        {this.props.loading && renderLoading()}
        {this.props.pokemonNotFound && this.renderPokemonNotFound()}
        {this.props.pokemon
          && !this.props.loading
          && !this.props.pokemonNotFound
          && this.renderPokemonDetails(this.props.pokemon)}
        <ShowingArrow />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    pokemon: state.pokemons.pokemon,
    pokemonNotFound: state.pokemons.pokemonNotFound,
    loading: state.pokemons.loading,
  }
);

PokemonDetail.propTypes = {
  pokemonNotFound: PropTypes.bool.isRequired,
  /* eslint-disable */
  pokemon: PropTypes.object,
  /* eslint-enable */
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(PokemonDetail);

