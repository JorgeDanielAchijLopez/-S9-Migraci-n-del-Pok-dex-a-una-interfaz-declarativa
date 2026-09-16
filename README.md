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
```

## Componentes principales

### SearchForm

Componente encargado del formulario de búsqueda.

El campo de búsqueda es controlado mediante el estado de React y procesa el evento `submit`.

### RequestStatus

Componente encargado de mostrar los distintos estados de la solicitud:

- Estado inicial.
- Cargando.
- Éxito.
- Resultado vacío.
- Error.

### PokemonList

Componente encargado de mostrar la colección de Pokémon almacenada en el estado.

Las tarjetas se renderizan de forma declarativa utilizando `map`.

### PokemonCard

Componente encargado de mostrar la información individual de cada Pokémon:

- Imagen.
- Nombre.
- Identificador.
- Tipo o tipos.

## Acceso a PokéAPI

El acceso a PokéAPI está separado de los componentes de presentación.

La lógica de las solicitudes se encuentra en:

```text
src/services/pokeApi.ts
```

La aplicación realiza consultas a:

```text
https://pokeapi.co/api/v2/pokemon/
```

## Formulario controlado

El campo de búsqueda utiliza el estado de React para conservar su valor.

El formulario procesa la búsqueda mediante el evento `submit`, evitando la recarga automática de la página.

## Estado de Pokémon

La aplicación conserva una colección de Pokémon utilizando estado de React.

Cada Pokémon contiene:

- ID.
- Nombre.
- Imagen.
- Tipos.

## Prevención de duplicados

Antes de agregar un Pokémon a la colección se comprueba su identificador.

```ts
const alreadyExists = currentPokemon.some(
  (item) => item.id === pokemon.id
);
```

Esto evita que un mismo Pokémon se agregue varias veces.

## Renderizado declarativo

La lista se genera utilizando `map`.

```tsx
pokemonList.map((pokemon) => (
  <PokemonCard
    key={pokemon.id}
    pokemon={pokemon}
  />
))
```

El identificador del Pokémon se utiliza como clave estable.

No se utiliza `getElementById`, `innerHTML` ni creación manual de tarjetas.

## Debounce

La aplicación utiliza un hook personalizado llamado:

```text
src/hooks/useDebounce.ts
```

El debounce introduce un pequeño retraso antes de procesar la búsqueda.

Esto ayuda a evitar solicitudes innecesarias.

## AbortController

La aplicación utiliza `AbortController` para cancelar una solicitud anterior cuando deja de ser relevante.

La señal del controlador se envía a la solicitud `fetch`.

Las cancelaciones esperadas no se muestran como errores de red.

## Estados de interfaz

La aplicación representa los siguientes estados:

- `idle`: estado inicial.
- `loading`: solicitud en proceso.
- `success`: búsqueda realizada correctamente.
- `empty`: no se encontró un resultado válido.
- `error`: ocurrió un problema durante la solicitud.

Los mensajes de estado utilizan `aria-live` para facilitar la accesibilidad.

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/JorgeDanielAchijLopez/-S9-Migraci-n-del-Pok-dex-a-una-interfaz-declarativa.git
```

Entrar a la carpeta del proyecto:

```bash
cd -S9-Migraci-n-del-Pok-dex-a-una-interfaz-declarativa
```

Instalar las dependencias:

```bash
npm install
```

## Ejecución

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará una dirección local similar a:

```text
http://localhost:5173/
```

Abrir esa dirección en el navegador.

## Compilación

Para comprobar que el proyecto compile correctamente:

```bash
npm run build
```

## Funcionalidades

- Búsqueda de Pokémon por nombre.
- Formulario controlado.
- Manejo del evento `submit`.
- Solicitudes a PokéAPI.
- Estado con colección de Pokémon.
- Prevención de duplicados utilizando el ID.
- Renderizado declarativo con `map`.
- Claves estables con `pokemon.id`.
- Debounce.
- Cancelación de solicitudes con `AbortController`.
- Manejo de errores.
- Estado inicial.
- Estado de carga.
- Estado de éxito.
- Estado vacío.
- Diseño adaptable.
- Navegación mediante teclado.

## Repositorio

https://github.com/JorgeDanielAchijLopez/-S9-Migraci-n-del-Pok-dex-a-una-interfaz-declarativa