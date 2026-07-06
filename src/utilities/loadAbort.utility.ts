// Crea y devuelve un AbortController nuevo.
// AbortController es una API nativa del navegador que permite cancelar
// operaciones asíncronas (fetch, axios) a través de su propiedad `signal`.
//
// Se extrae en una utilidad para:
//   1. Centralizar la creación del controller (un solo lugar si cambia la lógica).
//   2. Facilitar el testeo: se puede mockear `loadAbort` en vez de `AbortController`.
export const loadAbort = () => {
  return new AbortController();
};