import styles from './Fetch.module.css';
import type User from './Fetch.types';
import { useFetch } from '../../hooks';

const url = 'https://jsonplaceholder.typicode.com/users';

export const Fetch = () => {
  const { data, loading, error } = useFetch<User[]>(url);

  if (loading)
    return (
      <div className={styles.state}>
        <div className={styles.spinner} />
        <p>Cargando...</p>
      </div>
    );

  if (error)
    return (
      <div className={styles.state}>
        <span className={styles.errorIcon}>⚠️</span>
        <p className={styles.errorText}>{error.message}</p>
      </div>
    );

  if (!data)
    return (
      <div className={styles.state}>
        <span className={styles.emptyIcon}>📭</span>
        <p>No hay datos disponibles</p>
      </div>
    );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Usuarios</h1>

      <ul className={styles.list}>
        {data.map((user) => (
          <li key={user.id} className={styles.card}>
            <p className={styles.name}>{user.name}</p>
            <p className={styles.email}>{user.email}</p>
            <p className={styles.username}>@{user.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
