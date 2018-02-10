import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class PokemonList extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>{console.log(this.props.pokemons)}</div>
    );
  }
}

function mapStateToProps(state) {
  return { pokemons: state.pokemons.pokemons};
}

export default connect(mapStateToProps, actions)(PokemonList);

