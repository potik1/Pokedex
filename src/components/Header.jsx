import React from 'react';
import SearchPokemonByName from './SearchPokemonByName';

const Header = () => (
  <div className="container px-0">
    <nav className="navbar bg-info ">
      <a href="/" className="navbar-brand text-white mx-3">POKEDEX</a>
      <SearchPokemonByName />
    </nav>
  </div>
);

export default Header;
