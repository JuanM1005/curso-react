import { useCallback } from 'react';
import { getCharacter } from '../../services/api.service';
import type { Character } from '../../models';
import { useApi } from '../../hooks';

export const ApiLayout = () => {
  // Memoizamos la factory con useCallback y deps vacías [].
  //
  // SIN useCallback: cada render crea una nueva función `() => getCharacter(1)`.
  // Como esa función entra en las deps de useCallback dentro de useApi (que recrea fetch),
  // y fetch entra en las deps del useEffect (que llama fetch si autoFetch=true),
  // se formaría un BUCLE INFINITO:
  //   render → nueva apiCall → nuevo fetch → useEffect → setState → render → ...
  //
  // CON useCallback + []: la referencia de getCharacterById es siempre la misma,
  // por lo que fetch no se recrea entre renders y el useEffect no se vuelve a ejecutar.
  const getCharacterById = useCallback(() => getCharacter(1), []);

  const { data, error, loading, fetch } = useApi<Character>(getCharacterById, {
    autoFetch: true,
  });

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p className="animate-pulse text-lg font-medium">Cargando...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
        <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-center text-red-200">
          <p className="font-semibold">Ocurrió un error</p>
          <p className="mt-2 text-sm">{error.message}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <section className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/10 p-6 text-white shadow-2xl backdrop-blur">
        {data && (
          <article className="flex flex-col items-center text-center">
            <img
              src={data.image}
              alt={data.name}
              className="size-40 rounded-full border-4 border-blue-500 object-cover shadow-lg"
            />

            <div className="mt-5">
              <h1 className="text-2xl font-bold">{data.name}</h1>

              <div className="mt-3 flex flex-wrap justify-center gap-2 text-sm">
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-blue-200">
                  {data.species}
                </span>

                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-200">
                  {data.status}
                </span>
              </div>
            </div>

            <button
              type="button"
              className="mt-6 cursor-pointer rounded-2xl bg-blue-500 px-5 py-2.5 font-medium text-white shadow-lg shadow-blue-500/30 transition duration-300 hover:scale-95 hover:bg-blue-600 active:scale-90"
              onClick={fetch}
            >
              Recargar
            </button>
          </article>
        )}
      </section>
    </main>
  );
};
