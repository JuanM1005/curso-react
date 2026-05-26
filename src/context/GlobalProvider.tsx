import { useState, type ReactNode } from 'react';
import GlobalContext from './GlobalContext';

interface GlobalProviderProps {
  children: ReactNode;
}

const INITIAL_GLOBAL_VALUE: number = 0;

const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [globalValue, setGlobalValue] = useState<number>(INITIAL_GLOBAL_VALUE);

  return (
    <GlobalContext.Provider value={{ globalValue, setGlobalValue }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
