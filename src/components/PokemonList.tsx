import type { Pokemon } from '../types/pokemon';
import PokemonCard from './PokemonCard';

interface PokemonListProps {
  pokemonList: Pokemon[];
}

function PokemonList({ pokemonList }: PokemonListProps) {
  if (pokemonList.length === 0) {
    return null;
  }

  return (
    <section>
      <h2>Pokémon encontrados</h2>

      <div>
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
          />
        ))}
      </div>
    </section>
  );
}

export default PokemonList;