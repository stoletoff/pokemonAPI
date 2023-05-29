import { FaSpinner } from 'react-icons/fa';
import PokemonCardList from '../PokemonCardList/PokemonCardList'
import pendingImage from 'components/img/weight.jpg'
import { SpinnerWrap } from './PokemonPendingView.styled';

export default function PokemonPendingView({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };
  return (
    <div role="alert">
      <SpinnerWrap>
        <FaSpinner className="icon-spin" size="32" />
        <p>Загружаем...</p>
      </SpinnerWrap>
      <PokemonCardList pokemon={pokemon}/>
    </div>
  );
}
