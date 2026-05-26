import { useState, type ReactNode } from 'react';
import GlobalContext from './GlobalContext';

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [globalValue, setGlobalValue] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ globalValue, setGlobalValue }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
