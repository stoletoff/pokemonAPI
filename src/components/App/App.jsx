import { Component } from 'react';
import { SearchBar } from 'components/SearchBar';
import { ToastContainer } from 'react-toastify';
import { PokemonInfo } from 'components/PokemonInfo'
import 'react-toastify/dist/ReactToastify.css';
export class App extends Component {
  state = {
    pokemonName: "",
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit}></SearchBar>
        <PokemonInfo pokemonName={this.state.pokemonName}></PokemonInfo>
        <ToastContainer autoClose={3000}/>
      </>
    );
  }
}
