import React from "react";
import crossImage from "../assets/close.png"
import calendarImage from "../assets/calendar.png"
import warningImage from "../assets/warning.png"
import downImage from "../assets/down.png"

import { Appetite, Cause, HealthState, Status, type AnimalDetails } from "~/types/farm"; 

// TODO: all values in the currentAnimal
// TODO: call updateAnimal on clicking buttons (for now état de santé) seulement
// TODO: finish visual
// TODO: add animals details
const EditionDialog = ({ closeDialog, currentAnimal }: {closeDialog: () => void, currentAnimal: AnimalDetails}) => {
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
                <div>STATUT :</div>
                <div className="flex">
                    <div className="flex flex-col">
                        <div className="flex">
                            <div>En Production</div>
                            <div>Lait à écarter</div>
                            <div>Hors Production</div>
                        </div>
                        <div className="flex gap-4">
                            Cause : 
                            {/* If Hors Production, TODO: faire if Lait à écarter */}
                            <button className={currentAnimal.cause == Cause["Traitement"] ? "chip-selected-edit" : "chip-unselected-edit"}>Traitement</button>
                            <button className={currentAnimal.cause == Cause["Tarie"] ? "chip-selected-edit" : "chip-unselected-edit"}>Tarie</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 items-center">Poids : <span className="animal-chip">{currentAnimal.weight}</span>Au <input className="input-edit" value={"01/03/2025"} /></div>
                </div>
                <div className="horizontal-separator-black" />
                <div>OBSERVATIONS</div>
                <div className="flex">
                    <div>
                        <div className="flex gap-2 items-center">Appétit : 
                            <button className={currentAnimal.appetite == Appetite["Normal"] ? "chip-selected-edit" : "chip-unselected-edit"}>Normal</button>
                            <button className={currentAnimal.appetite == Appetite["Réduit"] ? "chip-selected-edit" : "chip-unselected-edit"}>Réduit</button>
                            <button className={currentAnimal.appetite == Appetite["Absent"] ? "chip-selected-edit" : "chip-unselected-edit"}>Absent</button>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div>Pesées :</div>
                            <div className="flex gap-4">
                                <input className="input-edit" value={"14/02/2025"} />
                                <input className="input-edit" value={"2 ans et 1 mois"} />
                                <span className="animal-chip">164 kg</span>
                            </div>
                            <div className="flex gap-4">
                                <input className="input-edit" value={"12/08/2024"} />
                                <input className="input-edit" value={"1 an et 8 mois"} />
                                <span className="animal-chip">104 kg</span>
                            </div>
                            <div className="flex gap-4">
                                <input className="input-edit" value={"02/06/2023"} />
                                <input className="input-edit" value={"Naissance"} />
                                <span className="animal-chip">32 kg</span>
                            </div>
                            <button className={"chip-unselected-edit"}>+ Ajouter</button>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="-m-6">
                            Observations :
                        </div>
                        <div>
                            <div className="flex gap-4">
                                <input className="input-edit" value={"14/02/2025"} />
                                <span className="animal-chip">164 kg</span>
                            </div>
                            <div className="flex gap-4">
                                <input className="input-edit" value={"12/08/2024"} />
                                <span className="animal-chip">104 kg</span>
                            </div>
                            <button className={"chip-unselected-edit"}>+ Ajouter</button>
                        </div>
                    </div>
                </div>


                <div className="horizontal-separator-black" />
                <div>ETAT SANITAIRE :</div>
                <div className="flex">
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 items-center">
                            Vaccin : 
                            <button className={"chip-selected-edit"}>A jour</button>
                            <button className={"chip-unselected-edit"}>A faire</button>
                        </div>
                        {/* TODO: add arrowDown */}
                        <input className="input-edit" value={"Recherche"} /> 
                        <div className="alert-echeance">
                            <img src={warningImage} className="img-alert" />
                            <div className="flex justify-center items-center w-64">Prochain vaccin : <span className="input m-1">FCO</span></div>
                            <div className="flex justify-center items-center w-54">Echéance : <span className="input m-1">3 mois</span>
                                <img src={downImage} className="h-9" />
                            </div>
                        </div>
                        <div className="alert-echeance">
                            <img src={warningImage} className="img-alert" />
                            <div className="flex justify-center items-center w-64">Prochain vaccin : <span className="input m-1">IBR</span></div>
                            <div className="flex justify-center items-center w-54">Echéance : <span className="input m-1">3 mois</span>
                                <img src={downImage} className="h-9" />
                            </div>
                        </div>
                        <div className="alert-echeance">
                            <img src={warningImage} className="img-alert" />
                            <div className="flex justify-center items-center w-64">Prochain vaccin : <span className="input m-1">RSV</span></div>
                            <div className="flex justify-center items-center w-54">Echéance : <span className="input m-1">3 mois</span>
                                <img src={downImage} className="h-9" />
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="-m-2">
                            Prises de sang :
                        </div>
                        <div>
                            <div className="flex gap-4">
                                <div className="flex">
                                    <input className="input-edit" value={"28/10/2024"} />
                                    <img className="-m-12" src={calendarImage} />
                                </div>
                                <span className="animal-chip">Nutrition</span>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex">
                                    <input className="input-edit" value={"29/09/2023"} />
                                    <img className="-m-12" src={calendarImage} />
                                </div>
                                <span className="animal-chip">GDS</span>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex">
                                    <input className="input-edit" value={"08/07/2023"} />
                                    <img className="-m-12" src={calendarImage} />
                                </div>
                                <span className="animal-chip">Contrôle</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    Etat du pis : 
                    <input className="input-edit" value={"Chaud et gonflé"} />
                    Date de l'observation : 
                    <input className="input-edit" value={"14/02/2025"} />
                </div>
                <div className="flex gap-8">
                    <div className="flex gap-2 items-center">
                        Vaccin : 
                        <button className={"chip-selected-edit"}>A jour</button>
                        <button className={"chip-unselected-edit"}>A faire</button>
                    </div>
                    <div className="alert-echeance">
                        <img src={warningImage} className="img-alert" />
                        <div className="flex justify-center items-center w-64">Prochain vaccin : <span className="input m-1">RSV</span></div>
                        <div className="flex justify-center items-center w-54">Echéance : <span className="input m-1">3 mois</span>
                            <img src={downImage} className="h-9" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-[4fr_3fr] gap-4 mt-4">
                    <div className="flex gap-2 items-center">Dernier contrôle vétérinaire: <input className="input-edit" value={"17/02/2025"} /></div>
                    <div className="flex gap-2 items-center font-normal text-black text-center text-sm">(Mise à jour automatique via les passerelles avec les logiciels vétérinaires)</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default EditionDialog;