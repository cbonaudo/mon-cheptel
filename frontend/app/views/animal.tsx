// Example usage in a component
import React from "react";
import { useFarmContext } from "../contexts/farm";

const Animal: React.FC = () => {
  const { currentAnimal } = useFarmContext();

  return (
    <div>
      { currentAnimal ?(
        <div>
          <div>
            <h1>Animal</h1>
            <h2>Identification</h2>
            <div>
              <p>Pentag number: {currentAnimal.identification.pentagNumber}</p>
              <p>Date de naissance: {currentAnimal.identification.birthdate.toISOString()}</p>
              <p>Lieu de naissance: {currentAnimal.identification.birthplace}</p>
              <p>Race: {currentAnimal.identification.race}</p>
              <p>Sexe: {currentAnimal.identification.gender}</p>
              <p>Pentag number du père: {currentAnimal.identification.fatherPentagNumber}</p>
              <p>Pentag Number de la mère: {currentAnimal.identification.motherPentagNumber}</p>
              <p>Date d'entrée: {currentAnimal.identification.enteredFarmDate.toISOString()}</p>
              <p>Date de sortie: {currentAnimal.identification.exitedFarmDate.toISOString()}</p>
            </div>
            <h2>Sanitaire</h2>
            <div>
              <div>
                <h3>Status</h3>
                <div>
                  <p>Mastites: {currentAnimal.sanitary.status.mastitis}</p>
                  <p>Problèmes métaboliques: {currentAnimal.sanitary.status.metabolicProblems}</p>
                  <p>BCS: {currentAnimal.sanitary.status.BCS}</p>
                  <p>Limping: {currentAnimal.sanitary.status.limping}</p>
                </div> 
                <h3>Vaccins</h3>
                <div>
                  {currentAnimal.sanitary.vaccines.map((vaccine) => (
                    <div>
                      <p>Type: {vaccine.type}</p>
                      <p>Date: {vaccine.date.toISOString()}</p>
                      <p>Veterinarian: {vaccine.veterinarian}</p>
                    </div>
                    ))}
                </div>
                <h3>Traitements Vétérinaires</h3>
                <div>
                  {currentAnimal.sanitary.veterinarianTreatments.map((treatment) => (
                    <div>
                      <p>Nom du produit: {treatment.productName}</p>
                      <p>Date d'administration: {treatment.administrationDate.toISOString()}</p>
                      <p>Durée en mois: {treatment.durationMonths}</p>
                      <p>Delai de consommation en mois: {treatment.consumptionDelayMonths}</p>
                    </div>
                  ))}
                </div>
                <h3>Contrôles</h3>
                <div>
                  <h4>Résultats d'analyse</h4>
                  {currentAnimal.sanitary.controls.analysisResults.map((analysis) => (
                    <div>
                      <p>Type: {analysis.type}</p>
                      <p>Résultat: {analysis.result}</p>
                    </div>
                  ))}
                  <h4>Screening</h4>
                  {currentAnimal.sanitary.controls.screenings.map((screening) => (
                    <div>
                      <p>Type: {screening.type}</p>
                      <p>Date: {screening.date.toISOString()}</p>
                    </div>
                  ))}
                </div>
                <h3>Visites Vétérinaires</h3>
                <div>
                  {currentAnimal.sanitary.veterinarianVisits.map((visit) => (
                    <div>
                      <p>Vétérinaire: {visit.vetName}</p>
                      <p>Date: {visit.date.toISOString()}</p>
                      <p>Observations: {visit.observations}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <h2>Reproductions</h2>
            <div>
              <p>Status: {currentAnimal.reproduction.general.status}</p>
              <p>Date de première insémination: {currentAnimal.reproduction.general.firstInseminationDate.toISOString()}</p>
              <p>Nombre de lactations: {currentAnimal.reproduction.general.lactationNumber}</p>
              {
                currentAnimal.reproduction.reproductions.map((repro) => (
                <div>
                  <p>Date d'insémination: {repro.inseminationDate.toISOString()}</p>
                  <p>Type: {repro.type}</p>
                  <p>Nom du géniteur: {repro.genitorName}</p>
                  <p>Pentag Number du géniteur: {repro.genitorPentagNumber}</p>
                  <p>Origine: {repro.origin}</p>
                  <p>Nombre d'IA: {repro.IANumber}</p>
                  <p>Observations d'IA: {repro.IAObservations}</p>
                  <h3>Contrôles de gestation</h3>
                  {repro.gestationControls.map((control) => (
                    <div>
                      <p>Date: {control.date.toISOString()}</p>
                      <p>Résultats: {control.results}</p>
                      <p>Jour après l'IA: {control.daysAfterIA}</p>
                      <p>Observations: {control.observations}</p>
                    </div>
                  ))}
                  <h3>Cycle de reproduction post-calving</h3>
                  <div>
                    <p>Date de rebreeding: {repro.postCalvingReproductionCycle.rebreedingDate.toISOString()}</p>
                    <p>Intensité de rebreeding: {repro.postCalvingReproductionCycle.rebreedingIntensity}</p>
                    <p>Interval en mois d'insemination calving: {repro.postCalvingReproductionCycle.calvingInseminationIntervalMonths}</p>
                    <p>Interval par mois entre les velages: {repro.postCalvingReproductionCycle.calvingToCalvingIntervalMonths}</p>
                    <p>Montant d'inséminations: {repro.postCalvingReproductionCycle.inseminationAmount}</p>
                    <p>Décision de reforme: {repro.postCalvingReproductionCycle.reformDecision}</p>
                  </div>
                </div>
              ))}
            </div>
            <h2>Production</h2>
            <div>
              <h3>Lait</h3>
              <div>
                <p>Litres par jour: {currentAnimal.production.milk.dailyLiters}</p>
                <p>Litres par lactation: {currentAnimal.production.milk.litersByLactation}</p>
                <p>Litres lifetime: {currentAnimal.production.milk.lifetimeLiters}</p>
                <p>Litres au pic de lactation: {currentAnimal.production.milk.lactationPeakLiters}</p>
                <p>Persisence de lactation: {currentAnimal.production.milk.lactationPersistence}</p>
                <p>Suivi: {currentAnimal.production.milk.followUp}</p>
              </div>
              <h3>Qualité</h3>
              <div>
                <p>Rating fat: {currentAnimal.production.quality.fatRating}</p>
                <p>Rating protein: {currentAnimal.production.quality.proteinRating}</p>
                <p>Cellules somatiques: {currentAnimal.production.quality.somaticCells}</p>
                <p>Niveau urea: {currentAnimal.production.quality.ureaLevels}</p>
                <p>Éfficacité alimentaire: {currentAnimal.production.quality.alimentaryEfficency}</p>
                <p>Présence d'antibiotiques: {currentAnimal.production.quality.antibioticPresence}</p>
              </div>
              <h3>Economique</h3>
              <div>
                <p>Cout alimentaire par litre produit: {currentAnimal.production.economic.alimentaryCostPerProducedLiter}</p>
                <p>Revenue: {currentAnimal.production.economic.revenue}</p>
                <p>Charges vétérinaire: {currentAnimal.production.economic.vetCharges}</p>
                <h4>Valeur génétique</h4>
                <div>
                  <p>Index lactique: {currentAnimal.production.economic.geneticValue.lacticIndex}</p>
                  <p>Reproduction: {currentAnimal.production.economic.geneticValue.reproduction}</p>
                  <p>Santé mammaire: {currentAnimal.production.economic.geneticValue.mammaryHealth}</p>
                </div>
              </div>
            </div>
          </div>
        </div>)
        : <p>Pas d'animal sélectionné</p>
      }
    </div>
  );
};

export default Animal;