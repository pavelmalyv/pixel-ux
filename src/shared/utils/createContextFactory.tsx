import { createContext, useContext } from "react";

export const createContextFactory = <T extends object>() => {
  const Context = createContext<T | undefined>(undefined);

  interface ProviderProps {
    value: T;
    children: React.ReactNode;
  }

  const Provider = ({ value, children }: ProviderProps) => {
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  const useContextFactory = () => {
    const context = useContext(Context);

    if (context === undefined) {
      throw new Error("This hook must be used within its corresponding Provider");
    }

    return context;
  };

  return [useContextFactory, Provider] as const;
};
