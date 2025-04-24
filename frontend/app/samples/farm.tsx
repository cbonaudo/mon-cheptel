import { Gender, GestationResults, ReproductionStatus, ReproductionType, Result, type Animal, type AnimalDetails, type DashboardData } from "~/types/farm";

export const dashboardDataSample: DashboardData = {
    "cattleNumber": 143,
    "cattleInProduction": 70,
    "cattleNotInProduction": 53,
    "cattleNotProducing": 20
}; 

export const animalListSample: Animal[] = [{
    id: "1234",
    pentagNumber: "123456",
    gender: 1,
    age: 1,
    fatherPentagNumber: "123455",
    motherPentagNumber: "123454",
    sanitaryStatus: "En production",
    race: "34"
},{
    id: "2345",
    pentagNumber: "234567",
    gender: 1,
    age: 3,
    fatherPentagNumber: "234566",
    motherPentagNumber: "234565",
    sanitaryStatus: "En production",
    race: "66"
},{
    id: "3456",
    pentagNumber: "345678",
    gender: 0,
    age: 4,
    fatherPentagNumber: "345677",
    motherPentagNumber: "345676",
    sanitaryStatus: "En production",
    race: "34"
}];

export const animalDetailsSample: AnimalDetails = {
    id: "1234",
    identification: {
        pentagNumber: "123456",
        birthdate: new Date(),
        birthplace: "Dijon",
        race: "Charolaise",
        gender: 1,
        fatherPentagNumber: "123455",
        motherPentagNumber: "123454",
        enteredFarmDate: new Date(),
        exitedFarmDate: new Date()
    },
    sanitary: {
        status: {
            mastitis: 11,
            metabolicProblems: "metabolisme ralenti",
            BCS: 1,
            limping: 2
        },
        vaccines: [
            {
                type: "Covid",
                date: new Date(),
                veterinarian: "John Vet"
            }
        ],
        veterinarianTreatments: [
            {
                productName: "Azorpic",
                administrationDate: new Date(),
                durationMonths: 10,
                consumptionDelayMonths: 11
            }
        ],
        controls: {
            analysisResults: [{
                type: "Grippe",
                result: 0
            }],
            screenings: [{
                type: "Covid",
                date: new Date()
            }]
        },
        veterinarianVisits: [{
            date: new Date(),
            vetName: "John Vet",
            observations: "Pas d'observations particulières"
        }]
    },
    reproduction: {
        general: {
            status: 0,
            firstInseminationDate: new Date(),
            lactationNumber: 4
        },
        reproductions: [{
            inseminationDate: new Date(),
            type: 0,
            genitorName: "Sarro",
            genitorPentagNumber: "123455",
            origin: "Bourg",
            IANumber: 1235,
            IAObservations: "Pas d'observations sur l'IA",
            gestationControls: [{
                date: new Date(),
                results: 0,
                daysAfterIA: 11,
                observations: "Pas d'observations sur la gestation"
            }],
            postCalvingReproductionCycle: {
                rebreedingDate: new Date(),
                rebreedingIntensity: "régulière",
                calvingInseminationIntervalMonths: 10,
                calvingToCalvingIntervalMonths: 4,
                inseminationAmount: 5,
                reformDecision: false
            }
        }]
    },
    production: {
        milk: {
            dailyLiters: 30,
            litersByLactation: 20,
            lifetimeLiters: 3500,
            lactationPeakLiters: 50,
            lactationPersistence: true,
            followUp: "pas de follow up spécifique"
        },
        quality: {
            fatRating: 90,
            proteinRating: 50,
            somaticCells: 50,
            ureaLevels: 10,
            alimentaryEfficency: 5,
            antibioticPresence: false
        },
        economic: {
            alimentaryCostPerProducedLiter: 10,
            revenue: 1000,
            vetCharges: 100,
            geneticValue: {
                lacticIndex: 40,
                reproduction: 200,
                mammaryHealth: 100
            }
        }
    }
};