import { useContext } from 'react';
import ModalContext, { type ModalContextType } from '../context/ModalContext';

const useModalContext = (): ModalContextType => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error(
      'useModalContext debe utilizarse dentro de un ModalProvider',
    );
  }

  return context;
};

export default useModalContext;
