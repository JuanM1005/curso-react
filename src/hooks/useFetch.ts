import { useEffect, useState } from 'react';

// Tipos auxiliares del hook.
// Se mantienen en este archivo porque solo se usan aquí.
// Si se reutilizan en más lugares, conviene moverlos a un archivo de tipos.
type Data<T> = T | null;
type ErrorType = Error | null;

// Estructura de datos que devuelve el hook.
// T permite reutilizar useFetch con distintos tipos de respuesta.
interface Params<T> {
  data: Data<T>;
  loading: boolean;
  error: ErrorType;
}

export const useFetch = <T>(url: string): Params<T> => {
  const [data, setData] = useState<Data<T>>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ErrorType>(null);

  useEffect(() => {
    // Permite cancelar la petición actual si el componente se desmonta
    // o si la URL cambia antes de que termine la solicitud.
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async (): Promise<void> => {
      setLoading(true);

      try {
        const response = await fetch(url, { signal });
        // Se pasa el signal al fetch para que pueda ser abortado si el componente se desmonta o si la URL cambia

        if (!response.ok) {
          throw new Error('Error en la petición');
        }

        const jsonData: T = await response.json();

        setData(jsonData);
        setError(null); // Limpiar errores anteriores si la solicitud es exitosa
      } catch (err) {
        // Cuando la petición se cancela intencionalmente, fetch lanza un AbortError.
        // En ese caso no se guarda como error, porque no es una falla real.
        if (err instanceof Error && err.name === 'AbortError') return;

        setError(err instanceof Error ? err : new Error('Error desconocido'));
      } finally {
        // Si la petición fue abortada, evitamos actualizar el estado
        // para no afectar un componente desmontado o una solicitud anterior.
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // Limpieza del efecto: cancela la petición activa antes de desmontar
    // el componente o antes de iniciar una nueva petición por cambio de URL.
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
};
