import { useEffect } from 'react';

interface UseFocusTrapProps {
  isOpen: boolean;
}

export const useFocusTrap = ({ isOpen }: UseFocusTrapProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const root = document.getElementById('root');
    if (!root) return;

    root.inert = true;

    return () => {
      root.inert = false;
    };
  }, [isOpen]);
};
