import { createContext, type Dispatch, type SetStateAction } from 'react';

export interface GlobalContextType {
  globalValue: number;
  setGlobalValue: Dispatch<SetStateAction<number>>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export default GlobalContext;
