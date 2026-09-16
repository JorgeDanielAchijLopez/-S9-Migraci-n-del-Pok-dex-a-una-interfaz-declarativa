import type { FormEvent } from 'react';

interface SearchFormProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

function SearchForm({
  value,
  onChange,
  onSubmit,
}: SearchFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="pokemon-search">
        Buscar Pokémon
      </label>

      <input
        id="pokemon-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Ejemplo: pikachu"
        autoComplete="off"
      />

      <button type="submit">
        Buscar
      </button>
    </form>
  );
}

export default SearchForm;