import type { Character, UseApiCall, User } from '../models';
import { loadAbort } from '../utilities';
import { createAxios } from './axios.service';

// const BASE_URL = 'https://rickandmortyapi.com/api' as const;
const USERS_BASE_URL = 'https://jsonplaceholder.typicode.com/' as const;

// La instancia
const api = createAxios(USERS_BASE_URL);

type CreateUser = Omit<User, 'id'>

// Función de servicio que prepara (pero NO ejecuta aún) la petición HTTP.
// Devuelve un objeto UseApiCall<Character> con dos propiedades:
//   - call: la promesa de axios que contiene la petición (pendiente hasta que se awaite)
//   - controller: el AbortController que permite cancelar esa petición en cualquier momento
//
// Se separa la PREPARACIÓN de la EJECUCIÓN: el hook useApi decide cuándo awaitar `call`
// y puede cancelar todo vía `controller.abort()` si el componente desmonta antes.
export const getCharacter = (id: number): UseApiCall<Character> => {
  // Crea un AbortController nuevo para este request específico.
  // Cada llamada a getCharacter() genera su propio controller independiente,
  // lo que permite tener múltiples peticiones en vuelo sin que interfieran entre sí.
  const controller = loadAbort();

  return {
    // axios.get devuelve una Promise<AxiosResponse<Character>>.
    // Vinculamos el signal del controller para que, si se llama controller.abort(),
    // axios cancele la petición de red y lance un CanceledError (capturado en useApi).
    // Es equivalente al patrón nativo: fetch(url, { signal: controller.signal })
    call: api.get<Character>(`/character/${id}`, {
      signal: controller.signal,
    }),
    controller,
  };
};

export const getUsers = (): UseApiCall<User[]> => {
  const controller = loadAbort();

  return {
    call: api.get<User[]>(`/users`, { signal: controller.signal }),
    controller,
  };
};

export const getUser = (id: number): UseApiCall<User> => {
  const controller = loadAbort();

  return {
    call: api.get<User>(`/users/${id}`, { signal: controller.signal }),
    controller,
  };
};

export const createUser = (user: CreateUser): UseApiCall<User> => {
  const controller = loadAbort();

  return {
    call: api.post<User>('/users', user, {
      signal: controller.signal,
    }),
    controller,
  };
};