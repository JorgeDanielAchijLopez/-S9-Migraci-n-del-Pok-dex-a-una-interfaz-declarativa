# Pokédex React + TypeScript

Aplicación desarrollada con React, TypeScript y Vite como parte de la migración de una Pokédex realizada originalmente con JavaScript hacia una interfaz declarativa basada en componentes.

## Objetivo

Aplicar conceptos de:

- Componentes reutilizables.
- Estado en React.
- Formularios controlados.
- Eventos.
- Renderizado declarativo.
- Solicitudes HTTP.
- Debounce.
- Cancelación de solicitudes con AbortController.
- Manejo de estados de interfaz.

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- PokéAPI
- CSS

## Estructura del proyecto

```text
src/
├── components/
│   ├── SearchForm.tsx
│   ├── RequestStatus.tsx
│   ├── PokemonList.tsx
│   └── PokemonCard.tsx
├── hooks/
│   └── useDebounce.ts
├── services/
│   └── pokeApi.ts
├── types/
│   └── pokemon.ts
├── App.tsx
├── main.tsx
└── index.css