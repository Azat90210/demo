import { createContext, ReactNode, useContext } from 'react';
import { RootStore, rootStore } from './rootStore';

const StoreContext = createContext<RootStore | null>(null);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>;
};

export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return store;
};
