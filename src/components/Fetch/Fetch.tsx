import { useEffect, useState } from 'react';
import styles from './Fetch.module.css';
import type User from './Fetch.types';

export const Fetch = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');

      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!res.ok) {
          throw new Error('Error en la petición');
        }

        const jsonData: User[] = await res.json();

        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

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
