import React from 'react';
import SearchPokemonByName from './SearchPokemonByName';

const Header = () => (
  <nav className="navbar bg-secondary text-white">
    <a className="navbar-brand">POKEDEX</a>
      <SearchPokemonByName  />
  </nav>
);

export default Header;
