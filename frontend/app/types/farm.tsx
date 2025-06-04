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
  "Tarie",
  "Croissance"
}

export enum Status {
  "En production",
  "Lait à écarter",
  "Hors production"
}

export enum Race {
  "Normande",
  "Prim'Holstein",
  "Brune",
  "Montbéliarde"
}

export enum HealthState {
  "Sain",
  "Boiterie",
  "Écarté"
}

export enum Appetite {
  "Normal",
  "Réduit",
  "Absent"
}

export enum Cause {
  "Traitement",
  "Colostrum",
  "Qualité",
  "Tarie"
}

export enum CauseDetail {
  "A définir",
  "Mammite",
  "Mastite",
  "Cétose",
  "Lait Non conforme"
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
  causeDetail: CauseDetail,
  vaccines: VaccineEnum,
  nextTreatment: string,
  weight: string,
  status: Status,
  healthState: HealthState,
  lastParage: string,
  vaccine: Date,
  parage: Date,
  appetite: Appetite,
  vealAmount: number,
  detectorInstalled: boolean,
  IAAttempts: number,
  cause: Cause,
};

export type Animal = {
  id: string;
  pentagNumber: string;
  boucle: string;
  gender: Gender;
  age: number;
  race: Race;
  fatherPentagNumber: string;
  motherPentagNumber: string;
  sanitaryStatus: Status;
  bornIn: boolean,
  category: Category,
  lot?: Lot,
  healthState: HealthState,
  vaccine: VaccineEnum,
  vaccineEcheance: string,
  parage: VaccineEnum,
  parageEcheance: string,
}

export type DashboardData = {
  cattleNumber: number;
  cattleInProduction: number;
  cattleNotInProduction: number;
  cattleNotProducing: number;
}