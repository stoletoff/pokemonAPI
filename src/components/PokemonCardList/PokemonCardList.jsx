import { CardContainer, PokemonName, Pokemonstatslist } from "./PokemonCardList.styled";
export default function PokemonCardList({ pokemon: { sprites, name, stats } }) {
    return (
      <CardContainer>
        
        <PokemonName>{name}</PokemonName>
        <img
          src={sprites.other['official-artwork'].front_default}
          width="240"
          alt={name}
        ></img>
        <Pokemonstatslist>
          {stats.map(entry => (
            <li key={entry.stat.name}>
              {entry.stat.name}: {entry.base_stat}
            </li>
          ))}
        </Pokemonstatslist>
      </CardContainer>
    );
  }
  