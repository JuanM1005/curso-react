import {
  HiOutlinePlus,
  HiOutlineMinus,
  HiOutlineSparkles,
} from 'react-icons/hi2';
import useGlobalContext from './hooks/useGlobalContext';

import { Button } from './components';

const AppContent = () => {
  const { globalValue, setGlobalValue } = useGlobalContext();

  const handleIncrement = (): void => {
    setGlobalValue((prev) => prev + 1);
  };

  const handleDecrement = (): void => {
    if (globalValue > 0) {
      setGlobalValue((prev) => prev - 1);
    }
  };

  const handleReset = (): void => {
    setGlobalValue(0);
  };

  const isDisabled = globalValue === 0;

  return (
    <main className="flex min-h-svh items-center justify-center bg-slate-50 px-4">
      <section className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
          <HiOutlineSparkles size={24} />
        </div>

        <p className="text-sm font-medium text-slate-500">Contador global</p>

        <h1 className="mt-2 text-5xl font-bold tracking-tight text-slate-900">
          {globalValue}
        </h1>

        <p className="mt-3 mb-5 text-sm leading-relaxed text-slate-500">
          Este valor se administra desde el contexto y puede compartirse entre
          componentes.
        </p>

        <div className="flex flex-col gap-3">
          <Button
            variant="primary"
            icon={<HiOutlinePlus size={20} />}
            onClick={handleIncrement}
          >
            Aumentar contador
          </Button>

          <Button variant="ghost" onClick={handleReset} disabled={isDisabled}>
            Resetear contador
          </Button>

          <Button
            variant="secondary"
            icon={<HiOutlineMinus size={20} />}
            onClick={handleDecrement}
            disabled={isDisabled}
          >
            Decrementar contador
          </Button>
        </div>
      </section>
    </main>
  );
};

export default AppContent;
