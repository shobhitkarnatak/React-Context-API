import { createContext } from "react";

interface Bio {
    name: string;
    age: number;
  }
  export const BioContext = createContext<Bio | undefined>(undefined);

interface BioProviderProps {
  children: React.ReactNode;
  bio:Bio
}

export const BioProvider = ({bio, children }:BioProviderProps) => {
  return (
    <BioContext.Provider value={ bio }>{children}</BioContext.Provider>
  );
};
