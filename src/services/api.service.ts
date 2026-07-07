import type { UseApiCall, Character } from '@/models';
import { loadAbort } from '@/utilities';
import { rickAndMorty } from './axios.service';

export const getCharacter = (id: number): UseApiCall<Character> => {
  const controller = loadAbort();

  return {
    call: rickAndMorty.get<Character>(`/character/${id}`, {
      signal: controller.signal,
    }),
    controller,
  };
};

// /** Prepara la petición para obtener todos los usuarios. */
// export const getUsers = (): UseApiCall<User[]> => {
//   const controller = loadAbort();

//   return {
//     call: userJSONPlaceholder.get<User[]>(`/users`, {
//       signal: controller.signal,
//     }),
//     controller,
//   };
// };

// /** Prepara la petición para obtener un usuario por id. */
// export const getUser = (id: number): UseApiCall<User> => {
//   const controller = loadAbort();

//   return {
//     call: userJSONPlaceholder.get<User>(`/users/${id}`, {
//       signal: controller.signal,
//     }),
//     controller,
//   };
// };

// /** Prepara la petición para crear un usuario. */
// export const createUser = (payload: CreateUserPayload): UseApiCall<User> => {
//   const controller = loadAbort();

//   return {
//     call: userJSONPlaceholder.post<User>('/users', payload, {
//       signal: controller.signal,
//     }),
//     controller,
//   };
// };

// export const deleteUser = (id: number): UseApiCall<void> => {
//   const controller = loadAbort();

//   return {
//     call: userJSONPlaceholder.delete<void>(`/users/${id}`, {
//       signal: controller.signal,
//     }),
//     controller,
//   };
// };
