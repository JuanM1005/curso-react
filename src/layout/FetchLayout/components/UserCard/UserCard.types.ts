import type { User } from '@/models';

export interface UserCardProps {
  user: User;
  isNew?: boolean;
}
