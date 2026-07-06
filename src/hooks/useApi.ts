import { useCallback, useEffect, useRef, useState } from 'react';
import type { UseApiCall } from '../models';

// T es el tipo del dato que devolverá la API (ej. Character, User, etc.)
// null representa el estado inicial antes de que llegue cualquier respuesta.
type Data<T> = T | null;
type ErrorType = Error | null;

// Forma del objeto que devuelve el hook al componente.
// `fetch` es la función que el componente puede llamar manualmente (ej. botón Recargar).
interface UseApiResult<T> {
  data: Data<T>;
  loading: boolean;
  error: ErrorType;
  fetch: () => Promise<void>;
}

// Opciones opcionales del hook.
// autoFetch: true → dispara la petición automáticamente al montar el componente.
// autoFetch: false (o ausente) → el componente controla cuándo llamar a fetch().
interface UseApiOptions {
  autoFetch?: boolean;
}

// Hook genérico que encapsula el ciclo de vida de una llamada a la API:
//   petición → loading → datos/error → cleanup (abort si desmonta).
//
// apiCall es una FACTORY (función que DEVUELVE el objeto de la llamada).
// Se recibe como factory para que cada invocación de fetch() cree un request fresco
// con su propio AbortController, en vez de reutilizar una promesa ya resuelta.
export const useApi = <T>(
  apiCall: () => UseApiCall<T>,
  options?: UseApiOptions,
): UseApiResult<T> => {
  // Estado de los datos recibidos. null mientras no haya respuesta.
  const [data, setData] = useState<Data<T>>(null);

  // loading empieza en false; se activa al iniciar la petición y se desactiva al terminar.
  const [loading, setLoading] = useState<boolean>(false);

  // error guarda cualquier excepción que no sea un abort (CanceledError).
  const [error, setError] = useState<ErrorType>(null);

  // Ref para el AbortController del request actual.
  // Un ref (no estado) porque cambiar el controller no debe disparar un re-render.
  // Nos permite cancelar la petición en curso si el componente desmonta o
  // si se lanza un nuevo fetch() antes de que el anterior termine.
  const controllerRef = useRef<AbortController | null>(null);

  // fetch es la función principal del hook. Se memoiza con useCallback para que
  // su referencia sea estable entre renders y no genere bucles infinitos en useEffect.
  //
  // DEPENDENCIA [apiCall]: si la factory cambia (ej. el ID del personaje varía),
  // fetch se recrea para apuntar a la nueva petición. Si la factory es estable
  // (memoizada con useCallback en el componente), fetch también lo será.
  const fetch = useCallback(async (): Promise<void> => {
    setLoading(true);

    // Invocamos la factory aquí, NO en el render del componente.
    // Así cada llamada a fetch() crea un request nuevo con AbortController propio,
    // lo que permite cancelar peticiones anteriores y que el botón Recargar funcione.
    const { call, controller } = apiCall();

    // Guardamos el controller para poder abortarlo desde el cleanup del useEffect.
    controllerRef.current = controller;

    try {
      const response = await call; // Esperamos la respuesta de axios.

      setData(response.data);
      setError(null); // Limpiamos errores previos si la petición tuvo éxito.
    } catch (error) {
      // Si el error es un abort (usuario desmontó o llamó a abort()),
      // ignoramos silenciosamente: no es un error de la API.
      if (error instanceof Error && error.name === 'CanceledError') return;

      setError(
        error instanceof Error ? error : new Error('Error desconocido.'),
      );
    } finally {
      // Solo actualizamos loading si el request NO fue abortado.
      // Si fue abortado, el componente ya desmontó → actualizar estado causaría
      // el warning "Can't perform a React state update on an unmounted component".
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
  }, [apiCall]);

  useEffect(() => {
    // Si autoFetch está activo, disparamos la petición al montar el componente
    // sin que el usuario tenga que pulsar ningún botón.
    if (options?.autoFetch) {
      (async () => {
        await fetch();
      })();
    }

    // Cleanup: cuando el componente desmonta (o cuando fetch/autoFetch cambian),
    // cancelamos la petición en vuelo para evitar actualizaciones de estado
    // sobre un componente ya desmontado y para liberar recursos de red.
    return () => controllerRef.current?.abort();

    // options?.autoFetch: primitivo boolean → referencia estable, no genera bucles.
    // fetch: estable gracias a useCallback (y a que apiCall está memoizada en App).
  }, [options?.autoFetch, fetch]);

  return { data, loading, error, fetch };
};
