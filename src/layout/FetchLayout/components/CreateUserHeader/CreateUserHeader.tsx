import type { CreateUserHeaderProps } from './CreateUserHeader.types';

export const CreateUserHeader = ({
  loading,
  onCreate,
}: CreateUserHeaderProps) => {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Crear usuario
      </h1>

      <div className="mt-2 flex items-center justify-between gap-4">
        <p className="text-slate-500">
          Crea un usuario usando JSONPlaceholder.
        </p>

        <button
          className="cursor-pointer rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-green-700 hover:shadow-md active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
          onClick={onCreate}
          disabled={loading}
        >
          {loading ? 'Creando...' : 'Agregar'}
        </button>
      </div>
    </header>
  );
};
