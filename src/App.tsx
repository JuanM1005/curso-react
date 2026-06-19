import useModalContext from './components/Modal/hooks/useModalContext';
import { Modal } from './components';

const App = () => {
  const { openModal } = useModalContext();

  return (
    <div className="min-h-svh flex items-center justify-center">
      <button
        className="bg-blue-500 p-3 rounded-lg text-white font-semibold cursor-pointer"
        type="button"
        onClick={openModal}
      >
        Abrir modal
      </button>

      <Modal>
        <h2>Hola, soy un modal</h2>
        <p>Este contenido se renderiza dentro del portal.</p>
      </Modal>
    </div>
  );
};

export default App;
