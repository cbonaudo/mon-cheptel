import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { animalDetailsSample, animalListSample, dashboardDataSample } from "~/samples/farm";
import { Cause, CauseDetail, type Animal, type AnimalDetails, type DashboardData, type Status } from "~/types/farm";

interface FarmContextType {
  dashboardData: DashboardData | null;
  currentAnimal: AnimalDetails;
  list: Animal[]
  setCurrentAnimalStatus: (status: Status) => void;
  setCurrentAnimalCauseDetail: (causeDetail: CauseDetail) => void;
  setCurrentAnimalCause: (cause: Cause) => void;
}

const defaultFarmContext: FarmContextType = {
  currentAnimal: animalDetailsSample,
  dashboardData: null,
  list: [],
  setCurrentAnimalStatus: (status) => {},
  setCurrentAnimalCauseDetail: (causeDetail) => {},
  setCurrentAnimalCause: (cause) => {}
};

const FarmContext = createContext<FarmContextType>(defaultFarmContext);

export function FarmProvider ({ children }: { children: ReactNode })  {
  const [list, setList] = useState<Animal[]>(animalListSample);
  const [currentAnimal, setCurrentAnimal] = useState<AnimalDetails>(animalDetailsSample);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(dashboardDataSample);

  const setCurrentAnimalStatus = (status: Status) => {
    currentAnimal.status = status;
    setCurrentAnimal({...currentAnimal});
  }

  const setCurrentAnimalCauseDetail = (causeDetail: CauseDetail) => {
    currentAnimal.causeDetail = causeDetail;
    setCurrentAnimal({...currentAnimal});
  }

  const setCurrentAnimalCause = (cause: Cause) => {
    currentAnimal.cause = cause;
    setCurrentAnimal({...currentAnimal});
  }

  return (
    <FarmContext.Provider value={{ currentAnimal, list, dashboardData, setCurrentAnimalStatus, setCurrentAnimalCauseDetail, setCurrentAnimalCause }}>
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