import { useCallback, useMemo } from 'react';

import { useApi } from '@/hooks';
import type { User } from '@/models';
import { createUser, getUsers } from '@/services/api.service';

import { NEW_USER } from './data/new-user.data';
import {
    CreateUserHeader,
    EmptyState,
    ErrorState,
    UserList,
    type UserListItem,
} from './components';

export const FetchLayout = () => {
    // Lista de usuarios existentes — se carga automáticamente al montar.
    const getAllUsers = useCallback(() => getUsers(), []);
    const usersApi = useApi<User[]>(getAllUsers, { autoFetch: true });

    // Creación del nuevo usuario — se dispara manualmente con el botón.
    const createNewUser = useCallback(() => createUser(NEW_USER), []);
    const createApi = useApi<User>(createNewUser, { autoFetch: false });

    // Derivamos la lista combinada con useMemo.
    // Se recomputa solo cuando cambia la lista base o el usuario recién creado.
    // Marcamos con isNew el usuario creado para que UserCard lo resalte.
    const items = useMemo<UserListItem[]>(() => {
        console.log('Merge de lista...');

        // Mapea los usuarios de la api convirtiendo cada usuario en un objeto user junto con el estado en false (indicando que ya eran usuarios antiguos)
        const list = (usersApi.data ?? []).map((user) => ({
            user,
            isNew: false,
        }));

        // Si existe un usuario recién creado, lo agrega al inicio de la lista.
        // Si no existe, retorna solo la lista de usuarios obtenidos de la API (previamente convertidos en objeto con isNew en false).
        return createApi.data
            ? [{ user: createApi.data, isNew: true }, ...list]
            : list;
    }, [usersApi.data, createApi.data]);

    const error = createApi.error ?? usersApi.error;

    return (
        <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
            <section className="mx-auto max-w-3xl">
                <CreateUserHeader loading={createApi.loading} onCreate={createApi.fetch} />

                {error && <ErrorState message={error.message} />}

                {usersApi.loading && items.length === 0 && (
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                        <p className="animate-pulse text-slate-500">Cargando usuarios...</p>
                    </div>
                )}

                {!usersApi.loading && items.length === 0 && <EmptyState />}

                {items.length > 0 && <UserList items={items} />}
            </section>
        </main>
    );
};