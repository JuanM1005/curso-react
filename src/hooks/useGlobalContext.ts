import { useContext } from 'react';
import GlobalContext, {
  type GlobalContextType,
} from '../context/GlobalContext';

const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);

  if (context === undefined) {
    throw new Error(
      'useGlobalContext debe utilizarse dentro de un GlobalProvider',
    );
  }

  return context;
};

export default useGlobalContext;
