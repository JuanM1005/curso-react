import { RANDM_BASE_URL } from '@/constants';
import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';

export const setupInterceptors = (api: AxiosInstance): AxiosInstance => {
  // Interceptor de petición
  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
      const token = localStorage.getItem('token');

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      console.log(`Request made to: ${config.url}`);

      return config;
    },
    (error: AxiosError): Promise<never> => {
      console.error(`Request interceptor error: ${error}`);

      return Promise.reject(error);
    },
  );

  api.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
      // Cualquier código de estado 2xx cae aquí
      console.log(`Response from: ${response.config.url}`, {
        data: response.data,
        status: response.status,
      });

      return response;
    },
    (error: AxiosError): Promise<never> => {
      // Cualquier código de estado fuera de 2xx cae aquí
      // Ejemplo: 401, 404, 500

      if (error.response?.status === 401) {
        console.log('Session expired');
      } else if (error.response) {
        console.log('Server responded with an error:', error.response.status);
      } else {
        console.log('No response from server');
      }

      return Promise.reject(error);
    },
  );

  return api;
};

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
  const api = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Devuelve la instancia con los interceptores
  return setupInterceptors(api);
};

export const rickAndMorty = createAxios(RANDM_BASE_URL);

// createAxios()
//   crea la instancia de Axios

// setupInterceptors()
//   recibe esa instancia
//   le agrega interceptores
//   retorna la misma instancia configurada

// initAxios()
//   retorna la instancia lista para usar
