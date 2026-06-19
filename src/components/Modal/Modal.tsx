import { useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import useModalContext from './hooks/useModalContext';
import { useEscapeKey } from './hooks/useEscapeKey';
// import { useFocusTrap } from './hooks/useFocusTrap';

interface ModalProps {
  children: ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { isOpen, closeModal } = useModalContext();
  useEscapeKey({ isOpen, onClose: closeModal });
  // useFocusTrap({ isOpen })

  const modalRoot = document.getElementById('modal') || document.body;

  if (!isOpen || !modalRoot) {
    return null;
  }

  // createPortal(children, domNode)
  // children: Elemento o contenido a renderizar
  // domNode: nodo del DOM donde se insertara

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={closeModal}
    >
      <section
        className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6">{children}</div>
        <div className="flex justify-end">
          <button
            className="rounded-lg bg-blue-500 px-5 py-2 font-semibold text-white transition hover:bg-blue-600 active:scale-95 cursor-pointer"
            onClick={closeModal}
          >
            Cerrar
          </button>
        </div>
      </section>
    </div>,
    modalRoot,
  );
};
