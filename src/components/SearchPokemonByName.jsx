import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchPokemon } from '../actions/index';

class SearchPokemonByName extends Component {

  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.searchPokemon(this.state.term);
    this.setState({term:''});
  }

  render() {
    return (
      <form
        onSubmit={(event)=> this.onFormSubmit(event)}
        className="form-inline my-2 my-lg-0 ">
        <input
          placeholder="Enter pokemon name..."
          className="form-control"
          value={this.state.term}
          onChange={(event) => this.onInputChange(event)}
        />
        <span className="input-group-btn ">
               <button type="submit"
                       className="btn btn-secondary">Submit</button>
          </span>
      </form>
    );
  }
}

export default connect(null, {searchPokemon})(SearchPokemonByName);
