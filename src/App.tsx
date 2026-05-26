import {
  HiOutlinePlus,
  HiOutlineMinus,
  HiOutlineSparkles,
} from 'react-icons/hi2';
import useGlobalContext from './hooks/useGlobalContext';

const App = () => {
  const { globalValue, setGlobalValue } = useGlobalContext();

  const handleIncrement = (): void => {
    setGlobalValue((prev) => prev + 1);
  };

  const handleDecrement = (): void => {
    setGlobalValue((prev) => prev - 1);
  };

  const handleReset = (): void => {
    setGlobalValue(0);
  };

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

        <p className="mt-3 text-sm leading-relaxed text-slate-500">
          Este valor se administra desde el contexto y puede compartirse entre
          componentes.
        </p>

        <button
          type="button"
          onClick={handleIncrement}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-md shadow-blue-600/20 transition cursor-pointer hover:bg-blue-700 active:scale-[0.98]"
        >
          <HiOutlinePlus size={20} />
          Aumentar contador
        </button>

        <button
          type="button"
          onClick={handleReset}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-md shadow-blue-600/20 transition cursor-pointer hover:bg-blue-700 active:scale-[0.98]"
        >
          <HiOutlineMinus size={20} />
          Resetear
        </button>

        <button
          type="button"
          onClick={handleDecrement}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-md shadow-blue-600/20 transition cursor-pointer hover:bg-blue-700 active:scale-[0.98]"
        >
          <HiOutlineMinus size={20} />
          Decrementar contador
        </button>
      </section>
    </main>
  );
};

export default App;
