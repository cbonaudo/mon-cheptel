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
              <p>N° de Boucle: {currentAnimal.identification.pentagNumber}</p>
              <p>Date de naissance: {currentAnimal.identification.birthdate.toISOString()}</p>
              <p>Lieu de naissance: {currentAnimal.identification.birthplace}</p>
              <p>Race: {currentAnimal.identification.race}</p>
              <p>Sexe: {currentAnimal.identification.gender}</p>
              <p>N° du père: {currentAnimal.identification.fatherPentagNumber}</p>
              <p>N° de la mère: {currentAnimal.identification.motherPentagNumber}</p>
              <p>Date d'entrée dans l'élevage: {currentAnimal.identification.enteredFarmDate.toISOString()}</p>
              <p>Date de sortie (abattage, vente, mortalité): {currentAnimal.identification.exitedFarmDate.toISOString()}</p>
            </div>
            <h2>Suivi sanitaire et traitements</h2>
            <div>
              <div>
                <h3>Statut sanitaire</h3>
                <div>
                  <p>Nombre de mammites: {currentAnimal.sanitary.status.mastitis}</p>
                  <p>Problèmes métaboliques: {currentAnimal.sanitary.status.metabolicProblems}</p>
                  <p>Score d'état corporel (Body Condition Score): {currentAnimal.sanitary.status.BCS}</p>
                  <p>Boiteries: {currentAnimal.sanitary.status.limping}</p>
                </div> 
                <h3>Vaccinations</h3>
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
                      <p>Durée du traitement en mois: {treatment.durationMonths}</p>
                      <p>Temps d'attente avant consommation (lait/viande) en mois: {treatment.consumptionDelayMonths}</p>
                    </div>
                  ))}
                </div>
                <h3>Analyse et contrôles sanitaires</h3>
                <div>
                  <h4>Résultats d'analyse</h4>
                  {currentAnimal.sanitary.controls.analysisResults.map((analysis) => (
                    <div>
                      <p>Type: {analysis.type}</p>
                      <p>Résultat: {analysis.result}</p>
                    </div>
                  ))}
                  <h4>Dépistages</h4>
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
            <h2>Reproduction</h2>
            <div>
              <p>Statut reproductif: {currentAnimal.reproduction.general.status}</p>
              <p>Age à la première insémination: {currentAnimal.reproduction.general.firstInseminationDate.toISOString()}</p>
              <p>Nombre de lactations: {currentAnimal.reproduction.general.lactationNumber}</p>
              {
                currentAnimal.reproduction.reproductions.map((repro) => (
                <div>
                  <p>Date d'insémination: {repro.inseminationDate.toISOString()}</p>
                  <p>Type: {repro.type}</p>
                  <p>Nom du taureau: {repro.genitorName}</p>
                  <p>N° du taureau: {repro.genitorPentagNumber}</p>
                  <p>Numéro de la dose IA: {repro.IANumber}</p>
                  <p>Observations sur l'IA/la saillie: {repro.IAObservations}</p>
                  <h3>Contrôles de gestation</h3>
                  {repro.gestationControls.map((control) => (
                    <div>
                      <p>Date: {control.date.toISOString()}</p>
                      <p>Résultats: {control.results}</p>
                      <p>Nombre de jours après l'IA: {control.daysAfterIA}</p>
                      <p>Observations: {control.observations}</p>
                    </div>
                  ))}
                  <h3>Cycle de reproduction post-vêlage</h3>
                  <div>
                    <p>Date de retour en chaleurs: {repro.postCalvingReproductionCycle.rebreedingDate.toISOString()}</p>
                    <p>Intensité des chaleurs: {repro.postCalvingReproductionCycle.rebreedingIntensity}</p>
                    <p>Delai vêlage - vêlage précédent en mois: {repro.postCalvingReproductionCycle.calvingInseminationIntervalMonths}</p>
                    <p>Interval par mois entre les velages: {repro.postCalvingReproductionCycle.calvingToCalvingIntervalMonths}</p>
                    <p>Nombre d'inséminations par gestation: {repro.postCalvingReproductionCycle.inseminationAmount}</p>
                    <p>Décision de reforme: {repro.postCalvingReproductionCycle.reformDecision}</p>
                  </div>
                </div>
              ))}
            </div>
            <h2>Production</h2>
            <div>
              <h3>Lait</h3>
              <div>
                <p>Quantité de lait produite par jour: {currentAnimal.production.milk.dailyLiters}</p>
                <p>Production par lactation: {currentAnimal.production.milk.litersByLactation}</p>
                <p>Production cumulée à vie: {currentAnimal.production.milk.lifetimeLiters}</p>
                <p>Pic de lactation: {currentAnimal.production.milk.lactationPeakLiters}</p>
                <p>Persisence de lactation: {currentAnimal.production.milk.lactationPersistence}</p>
                <p>Production: {currentAnimal.production.milk.followUp}</p>
              </div>
              <h3>Qualité</h3>
              <div>
                <p>Taux butyreux (TB): {currentAnimal.production.quality.fatRating}</p>
                <p>Taux protéique(TP): {currentAnimal.production.quality.proteinRating}</p>
                <p>Cellules somatiques: {currentAnimal.production.quality.somaticCells}</p>
                <p>Taux d'urée: {currentAnimal.production.quality.ureaLevels}</p>
                <p>Éfficacité alimentaire: {currentAnimal.production.quality.alimentaryEfficency}</p>
                <p>Présence d'antibiotiques: {currentAnimal.production.quality.antibioticPresence}</p>
              </div>
              <h3>Performance Economique</h3>
              <div>
                <p>Cout alimentaire par litre de lait produit: {currentAnimal.production.economic.alimentaryCostPerProducedLiter}</p>
                <p>Revenus par vache: {currentAnimal.production.economic.revenue}</p>
                <p>Charges vétérinaire et traitements: {currentAnimal.production.economic.vetCharges}</p>
                <h4>Valeur génétique</h4>
                <div>
                  <p>Index laitier: {currentAnimal.production.economic.geneticValue.lacticIndex}</p>
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