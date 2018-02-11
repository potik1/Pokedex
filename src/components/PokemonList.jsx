import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {page: 1};
  }

  componentWillMount() {
    this.props.getPokemonList(this.state.page).then((res) => {
      const Name = res.payload.data.results[0].name;
    });
  }

  renderList() {
    return (
      this.props.pokemons.map(pokemon =>
        <li className="list-group-item" key={pokemon.name}>{pokemon.name}</li>)
    );
  }

  render() {
    if (!this.props.pokemons) {
      return (<div>Loading...</div>);
    }
    return (
      <div>
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {pokemons: state.pokemons.pokemons};
}

export default connect(mapStateToProps, actions)(PokemonList);

