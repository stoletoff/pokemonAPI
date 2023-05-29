import { FaSpinner } from 'react-icons/fa';
import PokemonCardList from '../PokemonCardList/PokemonCardList'
import pendingImage from 'components/img/weight.jpg'

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
      <div>
        <FaSpinner className="icon-spin" size="32" />
        Загружаем...
      </div>
      <PokemonCardList pokemon={pokemon}/>
    </div>
  );
}
