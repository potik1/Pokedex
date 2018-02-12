import React, { Component } from 'react';
import Header from './Header';
import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <PokemonList />
      </div>
    );
  }
}

export default Main;
