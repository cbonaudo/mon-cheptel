import React from "react";
import { useFarmContext } from "../contexts/farm";
import editContrastImage from "../assets/editContrast.png";
import addImage from "../assets/add.png"
import leftImage from "../assets/left.png"
import downImage from "../assets/down.png"
import cowImage from "../assets/cow.png"
import graph3Image from "../assets/graph-3.png"
import graph4Image from "../assets/graph-4.png"
import graph5Image from "../assets/graph-5.png"
import { NavLink } from "react-router";

const FarmAnimal: React.FC = () => {
  const { currentAnimal } = useFarmContext();

  return (
    <div>
      { currentAnimal ? (
        <div className="flex gap-2">
          <div className="border-3 rounded-full h-10 p-2 flex justify-center items-center border-black fixed w-10">     
            <NavLink to="/farm/animals" end><img src={leftImage}/></NavLink>
          </div>
          <div className="w-14"></div>
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
                  <div className="animal-chip">SAMSARAH</div>
                  <div>Numéro : FR561603 <span className="animal-chip">2526</span></div>
                  <div>Race : <span className="animal-chip">Prim'holstein</span></div>
                  <div>Âge : <span className="animal-chip">2 ans 11 mois</span></div>
                  <div className="row-span-2 rounded-full flex justify-center items-center"><img src={cowImage} /></div>
                  <div>Sexe : <span className="animal-chip">Femelle</span></div>
                  <div className="col-span-2">Exploitation de naissance : <span className="animal-chip">FR56160340</span></div>
                  <div>Lot : <span className="animal-chip">En Lactation</span></div>
                  <div className="col-span-2">Date de naissance : <span className="animal-chip">25/05/2022</span></div>
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
                      <div>Nom : <span className="text-white">Haddock</span></div>
                      <div>Numéro : <span className="text-white">3256482285</span></div>
                      <div>Race : <span className="text-white">34</span></div>
                      <div>ISU : <span className="text-white">125</span></div>
                      <div>CD : <span className="text-white">82</span></div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="grid grid-cols-4 gap-2 array">
                      <div>LAIT</div>
                      <div>TP</div>
                      <div>TB</div>
                      <div>INEL</div>
                      <div className="text-white">939</div>
                      <div className="text-white">-1.1</div>
                      <div className="text-white">-4.2</div>
                      <div className="text-white">30</div>
                    </div>
                    <div className="flex justify-center grow">
                      <div className="vertical-separator"/>                
                    </div>
                    <div className="grid grid-cols-4 gap-2 array">
                      <div>MO</div>
                      <div>MA</div>
                      <div>CC</div>
                      <div>ME</div>
                      <div className="text-white">1.4</div>
                      <div className="text-white">1.1</div>
                      <div className="text-white">0.3</div>
                      <div className="text-white">0.5</div>
                    </div>
                    <div className="flex justify-center grow">
                      <div className="vertical-separator"/>                
                    </div>
                    <div className="grid grid-cols-2 gap-2 array">
                      <div>STMA</div>
                      <div>REPRO</div>
                      <div className="text-white">0.8</div>
                      <div className="text-white">2.1</div>
                    </div>
                  </div>
                  <div className="flex justify-around">
                    <div>Père : <span className="text-white">Grimpy</span></div>
                    <div>Mère : <span className="text-white">Iroise</span></div>
                  </div>
                </div>
                <div className="flex justify-center grow">
                  <div className="vertical-separator"/>                
                </div>
                <div className="pedigree-container">
                  <div className="flex gap-4">
                    <div className="text-lg text-secondary">Mère</div>
                    <div className="flex flex-wrap justify-center gap-2 w-80">
                      <div>Nom : <span className="text-white">Maya</span></div>
                      <div>Numéro : <span className="text-white">5634402144</span></div>
                      <div>Race : <span className="text-white">66</span></div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="grid grid-cols-2 gap-1 array">
                      <div>ISU</div>
                      <div>CD</div>
                      <div className="text-white">121</div>
                      <div className="text-white">78</div>
                    </div>
                    <div className="flex justify-center grow">
                      <div className="vertical-separator"/>                
                    </div>
                    <div className="grid grid-cols-4 gap-1 array">
                      <div>LAIT</div>
                      <div>TP</div>
                      <div>TB</div>
                      <div>INEL</div>
                      <div className="text-white">841</div>
                      <div className="text-white">-0.9</div>
                      <div className="text-white">-3.1</div>
                      <div className="text-white">23</div>
                    </div>
                    <div className="flex justify-center grow">
                      <div className="vertical-separator"/>                
                    </div>
                    <div className="grid grid-cols-4 gap-1 array">
                      <div>MO</div>
                      <div>MA</div>
                      <div>CC</div>
                      <div>ME</div>
                      <div className="text-white">1.1</div>
                      <div className="text-white">0.9</div>
                      <div className="text-white">0.5</div>
                      <div className="text-white">0.7</div>
                    </div>
                  </div>
                  <div className="flex justify-around">
                    <div>Père : <span className="text-white">Galop</span></div>
                    <div>Mère : <span className="text-white">Jeanna</span></div>
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
                <div className="animal-edit">
                  <img src={editContrastImage} />
                </div>
              </div>
              <div className="grid grid-cols-[5fr_4fr_6fr_2fr] gap-2">
                <div className="flex gap-2 items-center">Repro :<button className="animal-chip">En gestation</button></div>
                <div className="flex gap-2 items-center">Vaccins :<button className="animal-chip">A jour</button></div>
                <div className="flex gap-2 items-center">Prochains traitements :<span className="animal-chip">12/05/2025</span></div>
                <div></div>
                <div className="flex gap-2 items-center">Statut :<button className="animal-chip">En production</button></div>
                <div className="flex gap-2 items-center">Poids :<span className="animal-chip">127 kg</span></div>
                <div className="flex gap-2 items-center">Dernier parage :<span className="animal-chip">3 semaines</span></div>
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
                <div>Etat: <span className="animal-chip">En gestation</span> <span className="animal-chip disabled">Taureau</span></div>
                <div>Nombre de veaux: <span className="animal-chip">4</span></div>
                <div>Détecteur installé: <span className="animal-chip gray">Oui</span> <span className="animal-chip">Non</span></div>
                <div>Tentatives IA: <span className="animal-chip">2</span></div>
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