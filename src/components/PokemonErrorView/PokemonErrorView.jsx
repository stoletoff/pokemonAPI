import imgEror from 'components/img/sticker.webp';

export default function PokemonErrorView({ message }) {
  return (
    <div role="alert">
      <img src={imgEror} width="240" alt="sadcat" />
      <p>{message}</p>
    </div>
  );
}
