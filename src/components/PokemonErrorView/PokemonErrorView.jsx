import imgEror from 'components/img/sticker.webp';
import { PokemonWrong } from './PokemonErorView.styled';
export default function PokemonErrorView({ message }) {
  return (
    <PokemonWrong role="alert">
      <img src={imgEror} width="240" alt="sadcat" />
      <p>{message}</p>
    </PokemonWrong>
  );
}
