import type { Pokemon } from '../types/pokemon';

interface PokemonCardProps {
  pokemon: Pokemon;
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <article>
      <img
        src={pokemon.image}
        alt={`Imagen de ${pokemon.name}`}
      />

      <h2>{pokemon.name}</h2>

      <p>ID: {pokemon.id}</p>

      <p>
        Tipo: {pokemon.types.join(', ')}
      </p>
    </article>
  );
}

export default PokemonCard;