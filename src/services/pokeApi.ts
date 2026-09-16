import type { Pokemon } from '../types/pokemon';

interface PokeApiPokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string | null;
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

export async function getPokemonByName(
  name: string,
  signal?: AbortSignal,
): Promise<Pokemon | null> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`,
    { signal },
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error('No se pudo obtener la información del Pokémon.');
  }

  const data: PokeApiPokemon = await response.json();

  return {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default ?? '',
    types: data.types.map((item) => item.type.name),
  };
}