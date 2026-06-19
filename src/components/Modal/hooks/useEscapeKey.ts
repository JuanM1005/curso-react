import { useEffect } from 'react';

interface UseEscapeKeyProps {
  isOpen: boolean;
  onClose: () => void;
}

const KEY_NAME_ESC = 'Escape';
const KEY_EVENT_TYPE = 'keydown';

export const useEscapeKey = ({ isOpen, onClose }: UseEscapeKeyProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === KEY_NAME_ESC) {
        onClose();
      }
    };

    // keydown: cuando la tecla es presionada, keyup: cuando sueltas la tecla
    document.addEventListener(KEY_EVENT_TYPE, handleEscapeKey);

    return () => {
      document.removeEventListener(KEY_EVENT_TYPE, handleEscapeKey);
    };
  }, [isOpen, onClose]);
};
