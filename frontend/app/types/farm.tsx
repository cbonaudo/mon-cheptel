
export enum Gender {
  "Mâle",
  "Femelle"
}

export enum Result {
  "Positif",
  "Négatif"
}

export enum ReproductionStatus {
  "Saillie",
  "Non Saillie"
}

export enum Echeance {
  "A définir",
  "3 mois",
  "6 mois",
  "1 an"
}

export enum ReproductionType {
  "IA",
  "Monte Naturelle",
  "Transfert d'embryon"
}

export enum GestationResults {
  "Gestante",
  "Non Gestante"
}

export enum Category {
  "Veau",
  "Génisse",
  "Vache",
  "Taureau",
  "Taurillon"
}

export enum Lot {
  "Lactation",
  "Prépa Vêlage",
  "Vêlée",
  "Tarie"
}

export enum HealthState {
  "Sain",
  "Boiterie",
  "Écarté"
}

export type Vaccine = { 
  type: string;
  date: Date;
  veterinarian: string;
}

export type VeterinarianTreatment = { 
  productName: string, 
  administrationDate: Date, 
  durationMonths: number,
  consumptionDelayMonths: number
}

export type AnalysisResult = {
    type: string,
    result: Result
}


export type Screening = {
  type: string,
  date: Date
}

export type VeterinarianVisits = {
  date: Date,
  vetName: string,
  observations: string
}

export type GestationControl = {
    date: Date,
    results: GestationResults,
    daysAfterIA: number,
    observations: string
}

export type Reproduction = {
    inseminationDate: Date,
    type: ReproductionType,
    genitorName: string,
    genitorPentagNumber: string,
    origin: string,
    IANumber: number,
    IAObservations: string,
    gestationControls: GestationControl[],
    postCalvingReproductionCycle: {
        rebreedingDate: Date,
        rebreedingIntensity: string,
        calvingInseminationIntervalMonths: number,
        calvingToCalvingIntervalMonths: number,
        inseminationAmount: number,
        reformDecision: boolean
    },
}

export type AnimalDetails = {
  id: string;
  identification: {
    pentagNumber: string,
    birthdate: Date,
    birthplace: string,
    race: string,
    gender: Gender,
    fatherPentagNumber: string,
    motherPentagNumber: string,
    enteredFarmDate: Date,
    exitedFarmDate: Date
  },
  sanitary: {
      status: {
          mastitis: number,
          metabolicProblems: string,
          BCS: number,
          limping: number
      },
      vaccines: Vaccine[],
      veterinarianTreatments: VeterinarianTreatment[],
      controls: {
          analysisResults: AnalysisResult[],
          screenings: Screening[]
      },
      veterinarianVisits: VeterinarianVisits[]
  },
  reproduction: {
    general: {
        status: ReproductionStatus,
        firstInseminationDate: Date,
        lactationNumber: number
    },
    reproductions: Reproduction[],
  },
  production: {
    milk: {
        dailyLiters: number,
        litersByLactation: number,
        lifetimeLiters: number,
        lactationPeakLiters: number,
        lactationPersistence: boolean,
        followUp: string 
    },
    quality: {
        fatRating: number,
        proteinRating: number,
        somaticCells: number,
        ureaLevels: number,
        alimentaryEfficency: number,
        antibioticPresence: boolean 
    },
    economic: {
        alimentaryCostPerProducedLiter: number,
        revenue: number,
        vetCharges: number,
        geneticValue: {
            lacticIndex: number,
            reproduction: number,
            mammaryHealth: number
        }
    }
  }
};

export type Animal = {
  isSelected: boolean;
  id: string;
  pentagNumber: string;
  gender: Gender;
  age: number;
  race: string;
  fatherPentagNumber: string;
  motherPentagNumber: string;
  sanitaryStatus: string;
  bornIn: boolean,
  category: Category,
  lot: Lot,
  healthState: HealthState,
  vaccine: Date,
  parage: Date,
}

export type DashboardData = {
  cattleNumber: number;
  cattleInProduction: number;
  cattleNotInProduction: number;
  cattleNotProducing: number;
}