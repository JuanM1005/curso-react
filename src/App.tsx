// import AppContent from './AppContent';
// import AppContent from './AppContent';
import FocusInput from './components/useRef/FocusInput';
// import BookReader from './components/useRef/useRef';
import ShoppingCart from './components/useRef/useMemo';

const App = () => {
  // return <AppContent />;
  return (
    <div className="min-h-svh flex items-center justify-center gap-3">
      {/* <BookReader /> */}
      <FocusInput />
      <ShoppingCart />
    </div>
  );
};

export default App;
