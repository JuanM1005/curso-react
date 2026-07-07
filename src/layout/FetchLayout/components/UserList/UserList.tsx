import { UserCard } from '../UserCard/UserCard';
import type { UserListProps } from './UserList.types';

export const UserList = ({ items }: UserListProps) => {
  return (
    <ul className="space-y-4">
      {items.map(({ user, isNew }) => (
        <li key={user.id}>
          <UserCard user={user} isNew={isNew} />
        </li>
      ))}
    </ul>
  );
};
