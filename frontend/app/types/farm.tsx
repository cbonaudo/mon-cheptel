export enum Gender {
  "Mâle",
  "Femelle"
}

export enum Echeance {
  "A définir",
  "3 mois",
  "6 mois",
  "1 an"
}

export enum Gestation {
  "En gestation",
  "Taureau"
}

export enum VaccineEnum {
  "À jour",
  "À faire"
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

export enum Status {
  "En production"
}

export enum HealthState {
  "Sain",
  "Boiterie",
  "Écarté"
}

export type AnimalDetails = {
  id: string,
  name: string,
  pentagNumber: string,
  pentagNumber2: string,
  race: string,
  age: string,
  gender: Gender,
  birthExploitation: string,
  lot: Lot,
  birthDate: string,
  father: {
      name: string,
      pentagNumber: string,
      race: number,
      ISU: number,
      CD: number,
      LAIT: number,
      TP: number,
      TB: number,
      INEL: number,
      MO: number,
      MA: number,
      CC: number,
      ME: number,
      STMA: number,
      REPRO: number,
      father: string,
      mother: string
  },
  mother : {
      name: string,
      pentagNumber: string,
      race: number,
      ISU: number,
      CD: number,
      LAIT: number,
      TP: number,
      TB: number,
      INEL: number,
      MO: number,
      MA: number,
      CC: number,
      ME: number,
      father: string,
      mother: string
  },
  reproduction: Gestation,
  vaccines: VaccineEnum,
  nextTreatment: string,
  weight: string,
  status: Status,
  lastParage: string,
  vealAmount: number,
  detectorInstalled: boolean,
  IAAttempts: number,
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