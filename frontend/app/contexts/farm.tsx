import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type FarmState = {
  id: string | null;
  birthdate: string;
  birthplace: string;
  gender: string;
}

interface FarmContextType {
  state: FarmState;
  updateState: (key: keyof FarmState, value: string) => void;
}

const defaultFarmContext: FarmContextType = {
  state: {
    id: null,
    birthdate: "",
    birthplace: "",
    gender: "",    
  },
    updateState: () => {},
};

const FarmContext = createContext<FarmContextType>(defaultFarmContext);

export function FarmProvider ({ children }: { children: ReactNode })  {
  const [state, setState] = useState<FarmState>({
    id: null,
    birthdate: "",
    birthplace: "",
    gender: "",
  });

  const updateState = (key: keyof FarmState, value: string) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <FarmContext.Provider value={{ state, updateState }}>
      {children}
    </FarmContext.Provider>
  );
};

export const useFarmContext = (): FarmContextType => {
  const context = useContext(FarmContext);
  if (!context) {
    throw new Error("useFarmContext must be used within a FarmProvider");
  }
  return context;
};