import React from "react";
import crossImage from "../assets/close.png"
import calendarImage from "../assets/calendar.png"
import warningImage from "../assets/warning.png"
import downImage from "../assets/down.png"
import downGrayImage from "../assets/downgray.png"

import { Appetite, Cause, CauseDetail, HealthState, Status, type AnimalDetails } from "~/types/farm"; 
import { useFarmContext } from "~/contexts/farm";

// TODO: all values in the currentAnimal
// TODO: call updateAnimal on clicking buttons (for now état de santé) seulement
// TODO: finish visual
// TODO: add animals details
const EditionDialog = ({ closeDialog }: { closeDialog: () => void }) => {
    const { currentAnimal, setCurrentAnimalStatus, setCurrentAnimalCauseDetail, setCurrentAnimalCause } = useFarmContext();

    return (
        <div className="mask" onClick={closeDialog}>
            <img className="close" src={crossImage} />
            <div className="category" onClick={(e) => {e.stopPropagation()}}>
                <div>
                    <div className="animal-title">
                        <h1>SANTE</h1>
                        <div className="horizontal-separator" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 pl-6">
                    <div className="flex gap-4">
                        <div className="flex flex-col justify-between">
                            <div className="flex statut gap-4">
                                <p>STATUT :</p>
                                <div className={currentAnimal.status == Status["En production"] ? "chip-selected-edit" : "chip-grayed-edit"}
                                    onClick={() => setCurrentAnimalStatus(Status["En production"])}
                                >En Production</div>
                                <div className={currentAnimal.status == Status["Lait à écarter"] ? "chip-selected-edit" : "chip-grayed-edit"}
                                    onClick={() => setCurrentAnimalStatus(Status["Lait à écarter"])}
                                >Lait à écarter</div>
                                <div className={currentAnimal.status == Status["Hors production"] ? "chip-selected-edit" : "chip-grayed-edit"}
                                    onClick={() => setCurrentAnimalStatus(Status["Hors production"])}
                                >Hors Production</div>
                            </div>
                            {
                                currentAnimal.status == Status["Lait à écarter"] ? (
                                <div className="flex gap-2">
                                    Cause : 
                                    <button className={currentAnimal.cause == Cause["Traitement"] ? "chip-selected-edit" : "chip-unselected-edit"}
                                        onClick={() => setCurrentAnimalCause(Cause["Traitement"])}
                                    >Traitement</button>
                                    { currentAnimal.cause == Cause["Traitement"] ? (<select className="input cause" value={currentAnimal.causeDetail} 
                                        onChange={(e) => setCurrentAnimalCauseDetail(e.target.value as unknown as CauseDetail)}>
                                        <option value="0">A définir</option>
                                        <option value="1">Mammite</option>
                                        <option value="2">Mastite</option>
                                        <option value="3">Cétose</option>
                                        <option value="4">Lait Non Conforme</option>
                                    </select>) : (<div></div>)}
                                    <button className={currentAnimal.cause == Cause["Colostrum"] ? "chip-selected-edit" : "chip-unselected-edit"}
                                        onClick={() => setCurrentAnimalCause(Cause["Colostrum"])}>Colostrum</button>
                                    <button className={currentAnimal.cause == Cause["Qualité"] ? "chip-selected-edit" : "chip-unselected-edit"}
                                        onClick={() => setCurrentAnimalCause(Cause["Qualité"])}>Qualité</button>
                                </div>) : currentAnimal.status == Status["Hors production"] ? (
                                <div className="flex gap-4">
                                    Cause : 
                                    <button className={currentAnimal.cause == Cause["Traitement"] ? "chip-selected-edit" : "chip-unselected-edit"}>Traitement</button>
                                    <button className={currentAnimal.cause == Cause["Tarie"] ? "chip-selected-edit" : "chip-unselected-edit"}>Tarie</button>
                                </div>) : (<div></div>)
                            }
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            Poids : 
                            <span className="animal-chip">{currentAnimal.weight}</span>
                            Au 
                            <input className="input-edit dialog small" value={"01/03/2025"} /></div>
                    </div>

                    <div className="horizontal-separator-black" />
                    
                    <div>OBSERVATIONS :</div>
                    <div className="flex gap-4">
                        <div>
                            <div className="flex gap-2 items-center mb-4">Appétit : 
                                <button className={currentAnimal.appetite == Appetite["Normal"] ? "chip-selected-edit" : "chip-unselected-edit"}>Normal</button>
                                <button className={currentAnimal.appetite == Appetite["Réduit"] ? "chip-selected-edit" : "chip-unselected-edit"}>Réduit</button>
                                <button className={currentAnimal.appetite == Appetite["Absent"] ? "chip-selected-edit" : "chip-unselected-edit"}>Absent</button>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div>Pesées :</div>
                                <div className="flex gap-4">
                                    <input className="input-edit dialog" value={"14/02/2025"} />
                                    <input className="input-edit dialog" value={"2 ans et 1 mois"} />
                                    <span className="animal-chip">164 kg</span>
                                </div>
                                <div className="flex gap-4">
                                    <input className="input-edit dialog" value={"12/08/2024"} />
                                    <input className="input-edit dialog" value={"1 an et 8 mois"} />
                                    <span className="animal-chip">104 kg</span>
                                </div>
                                <div className="flex gap-4">
                                    <input className="input-edit dialog" value={"02/06/2023"} />
                                    <input className="input-edit dialog" value={"Naissance"} />
                                    <span className="animal-chip big">32 kg</span>
                                </div>
                                <button className={"chip-unselected-edit"}>+ Ajouter</button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            Observations : 
                            <div className="flex gap-4">
                                <input className="input-edit dialog" value={"24/01/2024"} />
                                <span className="animal-chip">Boiterie faible</span>
                            </div>
                            <div className="flex gap-4">
                                <input className="input-edit dialog" value={"18/11/2023"} />
                                <span className="animal-chip">Pas rumination</span>
                            </div>
                            <button className={"chip-unselected-edit"}>+ Ajouter</button>
                        </div>
                    </div>

                    <div className="horizontal-separator-black" />

                    <div className="mb-4">ETAT SANITAIRE :</div>
                    <div className="flex gap-4 mb-4">
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-2 items-center">
                                Vaccin : 
                                <button className={"chip-selected-edit"}>A jour</button>
                                <button className={"chip-unselected-edit"}>A faire</button>
                            </div>
                            <div className="flex">
                                <input className="input-edit dialog search" value={"Recherche"} /> 
                                <img src={downGrayImage} className="-ml-50"/>
                            </div>
                            <div className="alert-echeance">
                                <img src={warningImage} className="img-alert" />
                                <div className="flex justify-center items-center w-64">Prochain vaccin : <span className="input m-1">FCO</span></div>
                                <div className="flex justify-center items-center w-54">Echéance : <span className="input m-1">3 mois</span></div>
                            </div>
                            <div className="alert-echeance">
                                <img src={warningImage} className="img-alert" />
                                <div className="flex justify-center items-center w-64">Prochain vaccin : <span className="input m-1">IBR</span></div>
                                <div className="flex justify-center items-center w-54">Echéance : <span className="input m-1">3 mois</span></div>
                            </div>
                            <div className="alert-echeance">
                                <img src={warningImage} className="img-alert" />
                                <div className="flex justify-center items-center w-64">Prochain vaccin : <span className="input m-1">RSV</span></div>
                                <div className="flex justify-center items-center w-54">Echéance : <span className="input m-1">3 mois</span></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            Prises de sang :
                            <div className="flex gap-2">
                                <div className="flex">
                                    <input className="input-edit dialog cal" value={"28/10/2024"} />
                                    <img className="calendar" src={calendarImage} />
                                </div>
                                <span className="animal-chip">Nutrition</span>
                            </div>
                            <div className="flex gap-2">
                                <div className="flex">
                                    <input className="input-edit dialog cal" value={"29/09/2023"} />
                                    <img className="calendar" src={calendarImage} />
                                </div>
                                <span className="animal-chip gds">GDS</span>
                            </div>
                            <div className="flex gap-2">
                                <div className="flex">
                                    <input className="input-edit dialog cal" value={"08/07/2023"} />
                                    <img className="calendar" src={calendarImage} />
                                </div>
                                <span className="animal-chip">Contrôle</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center mb-4">
                        Etat du pis : 
                        <input className="input-edit dialog large mr-20" value={"Chaud et gonflé"} />
                        Date de l'observation : 
                        <input className="input-edit dialog large" value={"14/02/2025"} />
                    </div>
                    <div className="flex gap-8 mb-6">
                        <div className="flex gap-2 items-center">
                            Vaccin : 
                            <button className={"chip-selected-edit"}>A jour</button>
                            <button className={"chip-unselected-edit"}>A faire</button>
                        </div>
                        <div className="alert-echeance big gap-4">
                            <img src={warningImage} className="img-alert" />
                            <div className="flex justify-between items-center w-110">
                                Échéance prochain parage : 
                                <span className="input m-1 -mr-10">6 mois</span>
                                <img src={downImage} className="w-12 h-12" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-[4fr_3fr] gap-4 mb-4">
                        <div className="flex gap-2 items-center justify-evenly">
                            Dernier contrôle vétérinaire: 
                            <input className="input-edit dialog large" value={"17/02/2025"} />
                        </div>
                        <div className="flex gap-2 items-center font-normal text-black text-center text-sm">(Mise à jour automatique via les passerelles avec les logiciels vétérinaires)</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditionDialog;