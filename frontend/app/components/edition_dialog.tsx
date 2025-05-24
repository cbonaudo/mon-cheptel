import React from "react";
import crossImage from "../assets/close.png"
import calendarImage from "../assets/calendar.png"
import warningImage from "../assets/warning.png"
import downImage from "../assets/down.png"

import { Appetite, HealthState, Status, type AnimalDetails } from "~/types/farm"; 

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
                <div className="flex gap-2 items-center">Status : <span className="animal-chip">{Status[currentAnimal.status]}</span></div>
                <div className="flex gap-2 items-center">Poids : <span className="animal-chip">{currentAnimal.weight}</span></div>
                <div className="flex gap-2 items-center">Etat de santé : 
                    <button className={currentAnimal.healthState == HealthState["Sain"] ? "chip-selected-edit" : "chip-unselected-edit"}>Sain</button>
                    <button className={currentAnimal.healthState == HealthState["Boiterie"] ? "chip-selected-edit" : "chip-unselected-edit"}>Boiterie</button>
                    <button className={currentAnimal.healthState == HealthState["Écarté"] ? "chip-selected-edit" : "chip-unselected-edit"}>Écarté</button>
                    <button className="chip-unselected-edit">+</button>
                </div>
                <div className="flex gap-6">
                    <div className="flex gap-2 items-center">Vaccin :
                        <button className={true ? "chip-selected-edit" : "chip-unselected-edit"}>A jour</button>
                        <button className={false ? "chip-selected-edit" : "chip-unselected-edit"}>A faire</button>
                    </div>
                    <div className="alert-echeance">
                        <img src={warningImage} className="img-alert" />
                        <div className="flex justify-center items-center w-64">Prochain vaccin : <span className="input m-1">FCO</span></div>
                        <div className="flex justify-center items-center w-54">Echéance : <span className="input m-1">3 mois</span>
                            <img src={downImage} className="h-9" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="flex gap-2 items-center">Parage :
                        <button className={true ? "chip-selected-edit" : "chip-unselected-edit"}>A jour</button>
                        <button className={false ? "chip-selected-edit" : "chip-unselected-edit"}>A faire</button>
                    </div>
                    <div className="alert-echeance">
                        <img src={warningImage}  className="img-alert"/>
                        <div className="flex justify-center items-center w-114 ml-4">
                            <div>Echéance prochain parage :</div>
                            <div className="input ml-30">3 mois</div>
                            <img src={downImage} className="h-9 " />
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 items-center">Appétit :
                    <button className={currentAnimal.appetite == Appetite["Normal"] ? "chip-selected-edit" : "chip-unselected-edit"}>Normal</button>
                    <button className={currentAnimal.appetite == Appetite["Réduit"] ? "chip-selected-edit" : "chip-unselected-edit"}>Réduit</button>
                    <button className={currentAnimal.appetite == Appetite["Absent"] ? "chip-selected-edit" : "chip-unselected-edit"}>Absent</button>
                </div>
                <div className="flex gap-4">
                    <div className="flex gap-2 items-center">Etat du pis : <input className="input-edit" value={"Chaud et gonflé"} /></div>
                    <div className="flex gap-2 items-center">Date de l'observation: 
                        <input className="input-edit" value={"14/02/2025"} />
                        <img className="-m-12" src={calendarImage} />
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