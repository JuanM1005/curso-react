import type { User } from '@/models';

export const NEW_USER: Omit<User, 'id'> = {
  name: 'Juan Antonio',
  username: 'juanito',
  email: 'juan@email.com',
  address: {
    street: 'Calle 1',
    suite: 'Apt. 123',
    city: 'CDMX',
  },
};