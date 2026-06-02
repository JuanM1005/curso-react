import { useRef } from 'react';
import { Button } from '../Button/Button';

const BookReader = () => {
  /**
   * useRef crea un objeto mutable (referencia):
   * { current: 1 }
   *
   * currentPageRef.current almacena el valor actual.
   * El valor se conserva entre renders y puede modificarse,
   * pero cambiarlo NO provoca un re-render del componente.
   */

  const currentPageRef = useRef<number>(1);

  const nextPage = (): void => {
    currentPageRef.current += 1;

    console.log(`Avanzaste a la página ${currentPageRef.current}`);
  };

  const previousPage = (): void => {
    if (currentPageRef.current === 1) {
      console.log(
        `No puedes retroceder porque ya te encuentras en la página ${currentPageRef.current}.`,
      );
      return;
    }

    currentPageRef.current -= 1;

    console.log(`Retrocediste a la página ${currentPageRef.current}`);
  };

  const goToPage = (page: number): void => {
    if (page < 1) {
      console.log('No puedes saltar a una página menor que 1.');
      return;
    }

    if (currentPageRef.current === page) {
      console.log(`Ya te encuentras en la página ${currentPageRef.current}`);
      return;
    }

    currentPageRef.current = page;

    console.log(`Saltaste a la página ${currentPageRef.current}`);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/5">
        <header className="mb-6 border-b border-slate-200 pb-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            Book Reader
          </p>

          <h2 className="text-2xl font-bold text-slate-900">
            Lectura del libro
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Práctica del hook <code className="font-semibold">useRef</code>
          </p>

          <p className="mt-2 text-[0.75rem] text-red-950 border border-red-400 bg-red-500/50 w-fit p-1 rounded-xs ">
            Verifica la consola!
          </p>
        </header>

        <div className="mb-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <p className="text-sm font-medium text-blue-700">Página inicial</p>

          <p className="mt-1 text-4xl font-bold text-blue-700">
            {currentPageRef.current}
          </p>

          <p className="mt-3 text-sm leading-6 text-blue-700/80">
            El valor mostrado no cambiará al navegar porque una ref no provoca
            un re-render. Revisa la consola para ver el valor actualizado.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="secondary" onClick={previousPage}>
            Anterior
          </Button>

          <Button variant="primary" onClick={nextPage}>
            Siguiente
          </Button>

          <Button
            variant="third"
            className="col-span-2"
            fullWidth={true}
            onClick={() => goToPage(10)}
          >
            Ir a la página 10
          </Button>
        </div>
      </section>
    </main>
  );
};

export default BookReader;
