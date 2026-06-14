// import AppContent from './AppContent';
// import AppContent from './AppContent';
// import FocusInput from './components/useRef/FocusInput';
// import BookReader from './components/useRef/useRef';
// import ShoppingCart from './components/useRef/useMemo';
import {ContactCard} from './components/useRef/UseCallback';

const App = () => {
  const contact = {
    id: 1,
    name: 'Juan',
    phone: '3312345678',
  };

  const handleCall = (phone: string) => {
    console.log(`Llamando al número ${phone}`);
  };

  return (
    <div className="min-h-svh flex items-center justify-center gap-3">
      <ContactCard contact={contact} onCall={handleCall} />
    </div>
  );
};

export default App;
