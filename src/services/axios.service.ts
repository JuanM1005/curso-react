import axios, { type AxiosInstance } from 'axios';

// Factoría que crea y devuelve una instancia personalizada de axios.
//
// En vez de usar `axios.get(...)` directamente en cada servicio, se trabaja
// con instancias: cada instancia tiene su propia baseURL, headers y configuración,
// lo que permite tener múltiples clientes HTTP (distintas APIs) sin repetir config.
//
// Ejemplo de uso:
//   const rickAndMortyApi = createAxios('https://rickandmortyapi.com/api');
//   rickAndMortyApi.get('/character/1'); // GET https://rickandmortyapi.com/api/character/1
export const createAxios = (baseURL: string): AxiosInstance => {
  return axios.create({ baseURL });
};
