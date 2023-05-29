import { Component } from 'react';
import PokemonErrorView from 'components/PokemonErrorView/PokemonErrorView';
import PokemonPendingView from 'components/PokemonPendingView/PokemonPendingView';
import PokemonCardList from 'components/PokemonCardList/PokemonCardList';
import { TextWrapper } from './PokemonInfo.styled';

// StateMashine
// idle - Запроса еще нету
// pending  - ожидается выполнения, пошел запрос
// resolved - успешный запрос
// rejected  - запрос с ошибкой

export class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };

  //Компонент перерендеривается при изм. state или когда приходят новые props,
  // в данном компоненте нужно выполнить проверку, если изменяется this.props.pokemonName то необходимо выполеить фетч!
  // Внутри componentDidUpdate обязательно необходимо выполнять проверку, что бы не зациклить компонент
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;
    if (prevName !== nextName) {
      // console.log('prevProps.pokemonName:', prevProps.pokemonName)
      // console.log('this.props.pokemonName:', this.props.pokemonName)
      this.setState({ status: 'pending' });
      setTimeout(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
          // .then(result => result.json())
          // Обработка ошибки
          .then(response => {
            if (response.ok) {
              // true => все хорошо парсим json
              return response.json();
            }
            return Promise.reject(
              new Error(`Покемон с именем ${nextName} не найден`)
            );
            // если будет false (ошибка 404) необходимо вернуть Promise.reject(new Error(такого покемона нет)) что бы нижне можно было его словить и кидаем результат с новой ошибкой
          })
          .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
          .catch(error => this.setState({ error, status: 'rejected' }));
      }, 2000);
    }
  }
  render() {
    //Деструктуризация props from State!
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;
    if (status === 'idle') {
      return <TextWrapper>Пожалуйста, введите имя покемона</TextWrapper>;
    }

    if (status === 'pending') {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === 'rejected') {
      return <PokemonErrorView message={error.message}></PokemonErrorView>;
    }

    if (status === 'resolved') {
      return <PokemonCardList pokemon={pokemon} />;
    }
  }
}

// render() {
//   //Деструктуризация props from State!
//   const { pokemon, loading, error } = this.state;
//   const { pokemonName } = this.props;
//   return (
//     <div>
//       {error && <h1>Покемона с именем {pokemonName} нет</h1>}
//       {loading && <div>Загружаем</div>}
//       {!pokemonName && <div>Введите имя покемона</div>}
//       {pokemon && (
//         <div>
//           <p>Имя покемона: {pokemon.name}</p>
//           <img
//             src={pokemon.sprites.other['official-artwork'].front_default}
//             width="240"
//             alt={pokemon.name}
//           />
//         </div>
//       )}
//     </div>
//   );
// }
