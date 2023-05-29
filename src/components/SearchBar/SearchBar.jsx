import { Component } from 'react';
import { ButtonSearch } from 'components/ButtonSearch';
import { SearchHeader, BtnSearchText } from './SearchBar.styled';
// import {ReactComponent as SearchIcon} from '../../svg/search.svg'
import { toast } from 'react-toastify';
import { AiOutlineSearch } from 'react-icons/ai';

export class SearchBar extends Component {
  state = {
    pokemonName: '',
  };
  handleNameChange = event => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    // Проверкан пустую строку, trim - для токо что бы у строки справа и слева обрезать пробелы, т.к пробел в строке считается валидной строкой (не пустой)
    if (this.state.pokemonName.trim() === '') {
      return toast.error('Введите имя покемона');
    }
    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <SearchHeader>
        <form onSubmit={this.handleSubmit} style={{ display: 'flex' }}>
          <input
            type="text"
            name="pokemonName"
            value={this.state.pokemonName}
            onChange={this.handleNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Write pokemon Name"
          />
          <ButtonSearch>
            <AiOutlineSearch />
            <BtnSearchText>Search</BtnSearchText>
          </ButtonSearch>
        </form>
      </SearchHeader>
    );
  }
}
