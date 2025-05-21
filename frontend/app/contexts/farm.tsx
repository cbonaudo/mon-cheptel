import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { animalDetailsSample, animalListSample, dashboardDataSample } from "~/samples/farm";
import type { Animal, AnimalDetails, DashboardData } from "~/types/farm";

interface FarmContextType {
  dashboardData: DashboardData | null;
  currentAnimal: AnimalDetails | null;
  list: Animal[]
  // addAnimal: (key: keyof AnimalDetails, value: string) => void;
}

const defaultFarmContext: FarmContextType = {
  currentAnimal: null,
  dashboardData: null,
  list: [],
  // addAnimal: () => {},
};

const FarmContext = createContext<FarmContextType>(defaultFarmContext);

export function FarmProvider ({ children }: { children: ReactNode })  {
  const [list, setList] = useState<Animal[]>(animalListSample);
  const [currentAnimal, setCurrentAnimal] = useState<AnimalDetails | null>(animalDetailsSample);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(dashboardDataSample);

  return (
    <FarmContext.Provider value={{ currentAnimal, list, dashboardData }}>
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