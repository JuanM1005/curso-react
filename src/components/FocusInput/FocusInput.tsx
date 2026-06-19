import { useEffect, useRef } from 'react';
import { HiOutlineCursorArrowRays } from 'react-icons/hi2';

import { Button } from '../Button/Button';

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const focusInput = (): void => {
    if (!inputRef) {
      console.log('No hay referencia al elemento HTML.');
      return;
    }

    inputRef.current?.focus();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <section className="flex w-full max-w-md flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-slate-900">Focus Input</h2>

        <p className="text-sm leading-relaxed text-slate-500">
          El input se enfoca automáticamente al montar el componente y cuando se
          hace click en el boton.
        </p>
      </div>

      <div className="group flex flex-col gap-2">
        <label
          htmlFor="focus-input"
          className="text-sm font-semibold text-slate-700 transition-colors group-focus-within:text-blue-600"
        >
          Mensaje
        </label>

        <input
          id="focus-input"
          ref={inputRef}
          type="text"
          placeholder="Escribe algo..."
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10"
        />
      </div>

      <Button
        variant="primary"
        icon={<HiOutlineCursorArrowRays size={20} />}
        onClick={focusInput}
        fullWidth={true}
      >
        Enfocar Input
      </Button>
    </section>
  );
};

export default FocusInput;
