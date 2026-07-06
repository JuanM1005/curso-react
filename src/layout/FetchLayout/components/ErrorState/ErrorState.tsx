import type { ErrorStateProps } from './ErrorState.types';

export const ErrorState = ({ message }: ErrorStateProps) => {
  return (
    <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-6 text-red-700 shadow-sm">
      <p className="font-semibold">Ocurrió un error</p>
      <p className="mt-2 text-sm text-red-600">{message}</p>
    </div>
  );
};
