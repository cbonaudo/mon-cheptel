import React from "react";
import { useFarmContext } from "../contexts/farm";
import { Gender, GestationResults, ReproductionStatus, ReproductionType, Result } from "~/types/farm";

const FarmAnimal: React.FC = () => {
  const { currentAnimal } = useFarmContext();

  return (
    <div>
      { currentAnimal ? (
        <div className="text-black">
          <div>
            <div><div><h1>INFORMATIONS GENERALES</h1> ---------</div><div>Edit</div></div>
            <div>
              <div className="flex flex-col flex-wrap h-20">
                <div>Samsarah</div>
                <div>COW</div>
                <div>.</div>
                <div>Numéro : 561603 <span>2526</span></div>
                <div>Âge : <span>2 ans 11 mois</span></div>
                <div>Date de naissance : <span>25/05/2022</span></div>
                <div>Race : <span>Prim'holstein</span></div>
                <div>Sexe : <span>Femelle</span></div>
                <div>Lot : <span>Lactation</span></div>
                <div>Exploitation de naissance : <span>56160340</span></div>
                <div>.</div>
                <div><button>Afficher plus <span>V</span></button></div>
              </div>
            </div>
          </div>
          <div>
            <div><div><h1>PEDIGREE</h1> ---------</div><div>Edit</div></div>
            <div>
            <div>
                <div>
                  <div>Père</div>
                  <div>
                    <div>Nom : Haddock</div>
                    <div>Numéro : 3256482285</div>
                    <div>Race : 34</div>
                    <div>ISU : 125</div>
                    <div>CD : 82</div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>LAIT</div>
                    <div>TP</div>
                    <div>TB</div>
                    <div>INEL</div>
                    <div>939</div>
                    <div>-1.1</div>
                    <div>-4.2</div>
                    <div>30</div>
                  </div>
                  <div>|</div>
                  <div>
                    <div>MO</div>
                    <div>MA</div>
                    <div>CC</div>
                    <div>ME</div>
                    <div>1.4</div>
                    <div>1.1</div>
                    <div>0.3</div>
                    <div>0.5</div>
                  </div>
                  <div>|</div>
                  <div>
                    <div>STMA</div>
                    <div>REPRO</div>
                    <div>0.8</div>
                    <div>2.1</div>
                  </div>
                </div>
                <div>
                  <div>Père : Grimpy</div>
                  <div>Mère : Iroise</div>
                </div>
              </div><div>
                <div>
                  <div>Mère</div>
                  <div>
                    <div>Nom : Maya</div>
                    <div>Numéro : 5634402144</div>
                    <div>Race : 66</div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>ISU</div>
                    <div>CD</div>
                    <div>121</div>
                    <div>78</div>
                  </div>
                  <div>|</div>
                  <div>
                    <div>LAIT</div>
                    <div>TP</div>
                    <div>TB</div>
                    <div>INEL</div>
                    <div>841</div>
                    <div>-0.9</div>
                    <div>-3.1</div>
                    <div>23</div>
                  </div>
                  <div>|</div>
                  <div>
                    <div>MO</div>
                    <div>MA</div>
                    <div>CC</div>
                    <div>ME</div>
                    <div>1.1</div>
                    <div>0.9</div>
                    <div>0.5</div>
                    <div>0.7</div>
                  </div>
                </div>
                <div>
                  <div>Père : Galop</div>
                  <div>Mère : Jeanna</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div><div><h1>SANTE</h1> ---------</div><div>Edit</div></div>
            <div>
              <div>Repro<button>En gestation <span>V</span></button></div>
              <div>Vaccins<button>A jour <span>V</span></button></div>
              <div>Prochains traitements<span>12/05/2025</span></div>
              <div>.</div>
              <div>Poids<span>127 kg</span></div>
              <div>Statut<button>En production <span>V</span></button></div>
              <div>Dernier parage<span>3 semaines</span></div>
              <div><button>Afficher plus <span>V</span></button></div>
              </div>
          </div>
          <div>
            <div><div><h1>PERF'LAIT</h1> ---------</div><div>Edit</div></div>
            <div>
              <div>graph</div>
              <div>graph</div>
              <div><button>Afficher plus <span>V</span></button></div>
            </div>
          </div>
          <div>
            <div><div><h1>REPRODUCTION</h1> ---------</div><div>Edit</div></div>
            <div>
              <div>graph</div>
              <div><button>Afficher plus <span>V</span></button></div>
            </div>
          </div>
          <div>
            <button>
              <div>Ajouter</div>
              <div>+</div>
            </button>
          </div>
        </div>)
        : <p>Pas d'animal sélectionné</p>
      }
    </div>
  );
};

export default FarmAnimal;