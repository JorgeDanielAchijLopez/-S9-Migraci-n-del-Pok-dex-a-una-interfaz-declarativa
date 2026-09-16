import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';

import SearchForm from './components/SearchForm';
import PokemonList from './components/PokemonList';
import RequestStatus from './components/RequestStatus';

import useDebounce from './hooks/useDebounce';
import { getPokemonByName } from './services/pokeApi';

import type {
  Pokemon,
  RequestStatus as RequestStatusType,
} from './types/pokemon';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [submittedSearch, setSubmittedSearch] = useState('');

  const [pokemonList, setPokemonList] =
    useState<Pokemon[]>([]);

  const [status, setStatus] =
    useState<RequestStatusType>('idle');

  const [message, setMessage] = useState(
    'Escribe el nombre de un Pokémon para comenzar.',
  );

  const abortControllerRef =
    useRef<AbortController | null>(null);

  const debouncedSearch = useDebounce(
    submittedSearch,
    500,
  );

  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): void {
    event.preventDefault();

    const value = searchTerm.trim();

    if (!value) {
      setStatus('empty');
      setMessage('Escribe un nombre antes de buscar.');
      return;
    }

    setSubmittedSearch(value);
  }

  useEffect(() => {
    if (!debouncedSearch) {
      return;
    }

    abortControllerRef.current?.abort();

    const controller = new AbortController();

    abortControllerRef.current = controller;

    async function searchPokemon(): Promise<void> {
      setStatus('loading');
      setMessage('Buscando Pokémon...');

      try {
        const pokemon = await getPokemonByName(
          debouncedSearch,
          controller.signal,
        );

        if (!pokemon) {
          setStatus('empty');
          setMessage(
            'No se encontró ningún Pokémon con ese nombre.',
          );
          return;
        }

        setPokemonList((currentPokemon) => {
          const alreadyExists = currentPokemon.some(
            (item) => item.id === pokemon.id,
          );

          if (alreadyExists) {
            return currentPokemon;
          }

          return [...currentPokemon, pokemon];
        });

        setStatus('success');
        setMessage(
          `Pokémon encontrado: ${pokemon.name}`,
        );

        setSearchTerm('');
      } catch (error: unknown) {
        if (
          error instanceof DOMException &&
          error.name === 'AbortError'
        ) {
          return;
        }

        setStatus('error');
        setMessage(
          'Ocurrió un error al consultar PokéAPI.',
        );
      }
    }

    void searchPokemon();

    return () => {
      controller.abort();
    };
  }, [debouncedSearch]);

  return (
    <main>
      <h1>Pokédex React + TypeScript</h1>

      <p>
        Migración de la Pokédex a una interfaz declarativa.
      </p>

      <SearchForm
        value={searchTerm}
        onChange={setSearchTerm}
        onSubmit={handleSubmit}
      />

      <RequestStatus
        status={status}
        message={message}
      />

      <PokemonList
        pokemonList={pokemonList}
      />
    </main>
  );
}

export default App;