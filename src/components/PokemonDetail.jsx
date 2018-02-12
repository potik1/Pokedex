import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPokemon} from '../actions';

class PokemonDetail extends Component {
  componentDidMount() {

  }

  render() {
    if (!this.props.pokemon) {
      return (<div>Loading...</div>);
    }
    return (
<div></div>
    );
  }
}

function mapStateToProps(state) {
  return {pokemon: state.pokemons.pokemon};
}
export default connect(mapStateToProps, {getPokemon})(PokemonDetail);
