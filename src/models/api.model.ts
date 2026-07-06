import type { AxiosResponse } from 'axios';

// Contrato que deben devolver todas las funciones de servicio (ej. getCharacter).
// Agrupa la promesa de la petición y su controller en un solo objeto para que
// useApi pueda tanto awaitar la respuesta como cancelarla si es necesario.
//
// T es el tipo del dato esperado en el body de la respuesta (ej. Character).
export interface UseApiCall<T> {
  // Promesa que resuelve con la respuesta completa de axios (headers, status, data…).
  // useApi extrae `response.data` para exponer solo el payload al componente.
  call: Promise<AxiosResponse<T>>;

  // Controller asociado a este request. Llamar a controller.abort() cancela `call`
  // y hace que axios lance un CanceledError, que useApi captura y silencia.
  controller: AbortController;
}