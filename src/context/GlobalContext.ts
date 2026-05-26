import { createContext, type Dispatch, type SetStateAction } from 'react';

export interface GlobalContextType {
  globalValue: boolean;
  setGlobalValue: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export default GlobalContext;
