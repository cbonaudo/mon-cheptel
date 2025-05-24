import React, { useEffect, useState } from "react";
import { useFarmContext } from "../contexts/farm";
import editContrastImage from "../assets/editContrast.png";
import addImage from "../assets/add.png"
import leftImage from "../assets/left.png"
import downImage from "../assets/down.png"
import cowImage from "../assets/cow.png"
import graph3Image from "../assets/graph-3.png"
import graph4Image from "../assets/graph-4.png"
import graph5Image from "../assets/graph-5.png"
import { NavLink, useParams } from "react-router";
import { Gender, Gestation, Lot, Status, VaccineEnum } from "~/types/farm"; 
import type { AnimalDetails } from "~/types/farm"; 
import EditionDialog from "~/components/edition_dialog";

const FarmAnimal: React.FC = () => {
  const { currentAnimalList } = useFarmContext();
  const { animalId } = useParams();
  const [currentAnimal, setCurrentAnimal] = useState<AnimalDetails | null>(null);
  const [isEditionDisplayed, setIsEditionDisplayed] = useState(false);

  useEffect(() => {
    if (animalId && !isNaN(+animalId)) {
      setCurrentAnimal(currentAnimalList[+animalId - 1])
    }
  }, [currentAnimalList, animalId]);

  return (
    <div>
      {
        isEditionDisplayed && currentAnimal && (
        <EditionDialog currentAnimal={currentAnimal} closeDialog={() => setIsEditionDisplayed(false)} />
      )
      }
      { currentAnimal ? (
        <div className="flex gap-2">
          <div className="border-3 rounded-full h-10 p-2 flex justify-center items-center border-black fixed w-10">     
            <NavLink to="/farm/animals" end><img src={leftImage}/></NavLink>
          </div>
          <div className="w-24"></div>
          <div className="text-gray-dark font-bold flex flex-col gap-2">
            <div className="animal-category">
              <div className="animal-header">
                <div className="animal-title">
                  <h1>INFORMATIONS GENERALES</h1>
                  <div className="horizontal-separator" />
                </div>
                <div className="animal-edit">
                  <img src={editContrastImage} />
                </div>
              </div>
              <div>
                <div className="grid grid-cols-[2fr_3fr_3fr_3fr] gap-2 items-center justify-center">
                  <div className="animal-chip">{currentAnimal.name}</div>
                  <div>Numéro : {currentAnimal.pentagNumber} <span className="animal-chip">{currentAnimal.pentagNumber2}</span></div>
                  <div>Race : <span className="animal-chip">{currentAnimal.race}</span></div>
                  <div>Âge : <span className="animal-chip">{currentAnimal.age}</span></div>
                  <div className="row-span-2 rounded-full flex justify-center items-center"><img src={cowImage} /></div>
                  <div>Sexe : <span className="animal-chip">{Gender[currentAnimal.gender]}</span></div>
                  <div className="col-span-2">Exploitation de naissance : <span className="animal-chip">{currentAnimal.birthExploitation}</span></div>
                  <div>Lot : <span className="animal-chip">{Lot[currentAnimal.lot]}</span></div>
                  <div className="col-span-2">Date de naissance : <span className="animal-chip">{currentAnimal.birthDate}</span></div>
                </div>
              </div>
              <div className="show-more"><button>Afficher plus <img src={downImage} /></button></div>
            </div>
            <div className="animal-category">
              <div className="animal-header">
                <div className="animal-title">
                  <h1>PEDIGREE</h1>
                  <div className="horizontal-separator" />
                </div>
                <div className="animal-edit">
                  <img src={editContrastImage} />
                </div>
              </div>
              <div className="grid grid-cols-[24fr_1fr_24fr] gap-2">
                <div className="pedigree-container">
                  <div className="flex gap-4">
                    <div className="text-lg text-secondary">Père</div>
                    <div className="flex flex-wrap justify-center gap-2">
                      <div>Nom : <span className="text-white">{currentAnimal.father.name}</span></div>
                      <div>Numéro : <span className="text-white">{currentAnimal.father.pentagNumber}</span></div>
                      <div>Race : <span className="text-white">{currentAnimal.father.race}</span></div>
                      <div>ISU : <span className="text-white">{currentAnimal.father.ISU}</span></div>
                      <div>CD : <span className="text-white">{currentAnimal.father.CD}</span></div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="grid grid-cols-4 gap-2 array">
                      <div>LAIT</div>
                      <div>TP</div>
                      <div>TB</div>
                      <div>INEL</div>
                      <div className="text-white">{currentAnimal.father.LAIT}</div>
                      <div className="text-white">{currentAnimal.father.TP}</div>
                      <div className="text-white">{currentAnimal.father.TB}</div>
                      <div className="text-white">{currentAnimal.father.INEL}</div>
                    </div>
                    <div className="flex justify-center grow">
                      <div className="vertical-separator"/>                
                    </div>
                    <div className="grid grid-cols-4 gap-2 array">
                      <div>MO</div>
                      <div>MA</div>
                      <div>CC</div>
                      <div>ME</div>
                      <div className="text-white">{currentAnimal.father.MO}</div>
                      <div className="text-white">{currentAnimal.father.MA}</div>
                      <div className="text-white">{currentAnimal.father.CC}</div>
                      <div className="text-white">{currentAnimal.father.ME}</div>
                    </div>
                    <div className="flex justify-center grow">
                      <div className="vertical-separator"/>                
                    </div>
                    <div className="grid grid-cols-2 gap-2 array">
                      <div>STMA</div>
                      <div>REPRO</div>
                      <div className="text-white">{currentAnimal.father.STMA}</div>
                      <div className="text-white">{currentAnimal.father.REPRO}</div>
                    </div>
                  </div>
                  <div className="flex justify-around">
                    <div>Père : <span className="text-white">{currentAnimal.father.father}</span></div>
                    <div>Mère : <span className="text-white">{currentAnimal.father.mother}</span></div>
                  </div>
                </div>
                <div className="flex justify-center grow">
                  <div className="vertical-separator"/>                
                </div>
                <div className="pedigree-container">
                  <div className="flex gap-4">
                    <div className="text-lg text-secondary">Mère</div>
                    <div className="flex flex-wrap justify-center gap-2 w-80">
                      <div>Nom : <span className="text-white">{currentAnimal.mother.name}</span></div>
                      <div>Numéro : <span className="text-white">{currentAnimal.mother.pentagNumber}</span></div>
                      <div>Race : <span className="text-white">{currentAnimal.mother.race}</span></div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="grid grid-cols-2 gap-1 array">
                      <div>ISU</div>
                      <div>CD</div>
                      <div className="text-white">{currentAnimal.mother.ISU}</div>
                      <div className="text-white">{currentAnimal.mother.CD}</div>
                    </div>
                    <div className="flex justify-center grow">
                      <div className="vertical-separator"/>                
                    </div>
                    <div className="grid grid-cols-4 gap-1 array">
                      <div>LAIT</div>
                      <div>TP</div>
                      <div>TB</div>
                      <div>INEL</div>
                      <div className="text-white">{currentAnimal.mother.LAIT}</div>
                      <div className="text-white">{currentAnimal.mother.TP}</div>
                      <div className="text-white">{currentAnimal.mother.TB}</div>
                      <div className="text-white">{currentAnimal.mother.INEL}</div>
                    </div>
                    <div className="flex justify-center grow">
                      <div className="vertical-separator"/>                
                    </div>
                    <div className="grid grid-cols-4 gap-1 array">
                      <div>MO</div>
                      <div>MA</div>
                      <div>CC</div>
                      <div>ME</div>
                      <div className="text-white">{currentAnimal.mother.MO}</div>
                      <div className="text-white">{currentAnimal.mother.MA}</div>
                      <div className="text-white">{currentAnimal.mother.CC}</div>
                      <div className="text-white">{currentAnimal.mother.ME}</div>
                    </div>
                  </div>
                  <div className="flex justify-around">
                    <div>Père : <span className="text-white">{currentAnimal.mother.father}</span></div>
                    <div>Mère : <span className="text-white">{currentAnimal.mother.mother}</span></div>
                  </div>
                </div>
              </div>
              <div className="show-more lower"><button>Afficher plus <img src={downImage} /></button></div>
            </div>
            <div className="animal-category">
              <div className="animal-header">
                <div className="animal-title">
                  <h1>SANTE</h1>
                  <div className="horizontal-separator" />
                </div>
                <div className="animal-edit" onClick={() => setIsEditionDisplayed(true)}>
                  <img src={editContrastImage} />
                </div>
              </div>
              <div className="grid grid-cols-[5fr_4fr_6fr_2fr] gap-2">
                <div className="flex gap-2 items-center">Repro :<button className="animal-chip">{Gestation[currentAnimal.reproduction]}</button></div>
                <div className="flex gap-2 items-center">Vaccins :<button className="animal-chip">{VaccineEnum[currentAnimal.vaccines]}</button></div>
                <div className="flex gap-2 items-center">Prochains traitements :<span className="animal-chip">{currentAnimal.nextTreatment}</span></div>
                <div></div>
                <div className="flex gap-2 items-center">Statut :<button className="animal-chip">{Status[currentAnimal.status]}</button></div>
                <div className="flex gap-2 items-center">Poids :<span className="animal-chip">{currentAnimal.weight}</span></div>
                <div className="flex gap-2 items-center">Dernier parage :<span className="animal-chip">{currentAnimal.lastParage}</span></div>
              </div>
              <div className="show-more"><button>Afficher plus <img src={downImage} /></button></div>
            </div>
            <div className="animal-category">
              <div className="animal-header">
                <div className="animal-title">
                  <h1>PERF'LAIT</h1>
                  <div className="horizontal-separator" />
                </div>
                <div className="animal-edit">
                  <img src={editContrastImage} />
                </div>
              </div>
              <div className="grid grid-cols-[5fr_5fr_6fr] justify-center gap-8 text-sm">
                <div className="h-50 flex flex-col items-center gap-1">
                  <img src={graph3Image} className="rounded-xl" />
                  <div className="text-error-light">35,7 kg</div>
                  <div>Moy : 35,2 kg</div>
                </div>
                <div className="h-50 flex flex-col items-center gap-1">
                  <img src={graph4Image} className="rounded-xl" />
                  <div className="text-error-light">Prot : 3,6%  I MG : 4,1%</div>
                  <div>Moy : 3,3% I 3,9%</div>
                </div>
                <div className="h-50 flex flex-col items-center gap-1">
                  <img src={graph5Image} className="rounded-xl" />
                  <div className="text-error-light">4 refus</div>
                  <div>Moy : 3,5 refus</div>
                </div>
              </div>
              <div className="show-more lowerer"><button>Afficher plus <img src={downImage} /></button></div>
            </div>
            <div className="animal-category">
              <div className="animal-header">
                <div className="animal-title">
                  <h1>REPRODUCTION</h1>
                  <div className="horizontal-separator" />
                </div>
                <div className="animal-edit">
                  <img src={editContrastImage} />
                </div>
              </div>
              <div className="grid grid-cols-[2fr_3fr] gap-6 m-4">
                <div className="flex gap-2 items-center">Etat: <span className="animal-chip">{Gestation[currentAnimal.reproduction]}</span> <span className="animal-chip disabled">Taureau</span></div>
                <div className="flex gap-2 items-center">Nombre de veaux: <span className="animal-chip">{currentAnimal.vealAmount}</span></div>
                <div className="flex gap-2 items-center">Détecteur installé: 
                  <span className={currentAnimal.detectorInstalled ? "animal-chip" : "animal-chip gray"}>Oui</span>
                  <span className={currentAnimal.detectorInstalled ? "animal-chip gray" : "animal-chip"}>Non</span>
                </div>
                <div className="flex gap-2 items-center">Tentatives IA: <span className="animal-chip">{currentAnimal.IAAttempts}</span></div>
              </div>
              <div className="show-more"><button>Afficher plus <img src={downImage} /></button></div>
            </div>
            <div className="flex justify-center">
              <button className="add-button">
                <div>Ajouter</div>
                <img src={addImage} className="h-8 w-8"/>
              </button>
            </div>
          </div>
        </div>)
        : <p>Pas d'animal sélectionné</p>
      }
    </div>
  );
};

export default FarmAnimal;