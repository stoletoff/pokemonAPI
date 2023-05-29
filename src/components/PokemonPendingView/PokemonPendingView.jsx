import { FaSpinner } from 'react-icons/fa';
import PokemonCardList from '../PokemonCardList/PokemonCardList'
import pendingImage from 'components/img/bad.jpg'
export default function PokemonPendingView({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official_artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };
  return (
    <div role="alert">
      <div>
        <FaSpinner size="32" />
        Загружаем...
      </div>
      <PokemonCardList pokemon={pokemon}/>
    </div>
  );
}
