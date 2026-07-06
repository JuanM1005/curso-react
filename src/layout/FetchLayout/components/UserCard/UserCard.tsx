import clsx from 'clsx';

import type { UserCardProps } from './UserCard.types';

export const UserCard = ({ user, isNew = false }: UserCardProps) => {
  return (
    <article
      className={clsx(
        'rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md',
        isNew
          ? 'border-green-300 ring-2 ring-green-500 hover:border-green-400'
          : 'border-slate-200 hover:border-green-200',
      )}
    >
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-green-600">
          Usuario #{user.id}
        </span>

        {isNew && (
          <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
            Nuevo
          </span>
        )}
      </div>

      <h2 className="mt-2 text-xl font-bold text-slate-900">{user.name}</h2>

      <div className="mt-4 space-y-2 text-sm text-slate-600">
        <p>
          <span className="font-semibold text-slate-900">Username:</span>{' '}
          {user.username}
        </p>

        <p>
          <span className="font-semibold text-slate-900">Email:</span>{' '}
          {user.email}
        </p>

        <p>
          <span className="font-semibold text-slate-900">Dirección:</span>{' '}
          {user.address.street}, {user.address.suite}, {user.address.city}
        </p>
      </div>
    </article>
  );
};