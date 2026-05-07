import type { ReactNode } from 'react';

export default interface FormData {
  children: ReactNode;
  onSubmit: (e: React.FormEvent) => void;
}
