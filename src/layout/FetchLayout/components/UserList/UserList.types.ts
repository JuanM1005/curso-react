import type { User } from '@/models';

export interface UserListItem {
  user: User;
  isNew: boolean;
}

export interface UserListProps {
  items: UserListItem[];
}
