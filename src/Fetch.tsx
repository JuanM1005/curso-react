import { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

const Fetch = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!res.ok) {
        throw new Error('Error en la petición');
      }

      const jsonData: User[] = await res.json();

      console.log(jsonData);
      setData(jsonData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default Fetch;
