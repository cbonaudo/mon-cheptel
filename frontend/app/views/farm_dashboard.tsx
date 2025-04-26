import graph1Image from "../assets/graph-1.png";
import graph2Image from "../assets/graph-2.png";
import editImage from "../assets/edit.png";
import notifsImage from "../assets/notifs.png";
import addImage from "../assets/add.png";
import downImage from "../assets/down.png";

const FarmDashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-[3fr_1fr] font-bold gap-4">
      <div className="flex flex-col gap-16">
        <div className="flex gap-14">
          <div className="flex flex-col gap-2">
            <div className="header-fat">
              <h1>Mon Cheptel</h1>
            </div>
            <div className="chip-list">
              <div className="chip">
                {'250'}
                <span className="chip-selected">
                  Animaux
                </span>
              </div>
              <div className="chip">
                {'28'}
                <span className="chip-selected">
                  IA restantes
                </span>
              </div>
              <div className="chip">
                {'29'}
                <span className="chip-selected">
                  En traitement
                </span>
              </div>
              <div className="chip">
                {'29'}
                <span className="chip-selected">
                  Veaux
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="header-fat">
              <h1>Animaux en production</h1>
            </div>
            <div className="chip-list">
              <div className="chip">
                <div>
                  {'180'}
                </div>
                <span className="chip-selected">
                  Animaux
                </span>
              </div>
              <div className="chip">
                <div>
                  {'11'}
                </div>
                <span className="chip-selected">
                  Sous antibio
                </span>
              </div>
              <div className="chip">
                {'14'}
                <span className="chip-selected">
                  Période Colostrum
                </span>
              </div>
              <div className="chip">
                {'19'}
                <span className="chip-selected">
                  Taries
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="container">            
            <div className="grid grid-cols-[10fr_1fr] gap-2">
              <div className="header-slim">
                <h2>Performance lait by PERF'LAIT</h2>
              </div>
              <div className="edit-container">
                <img src={editImage} />
              </div>
            </div>
            <div>
              <img src={graph1Image} />
            </div>
          </div>
          <div className="container">
            <div className="grid grid-cols-[10fr_1fr] gap-2">
              <div className="header-slim">
                <h2>Performance repro</h2>
              </div>
              <div className="edit-container">
                <img src={editImage} />
              </div>
            </div>
            <img src={graph2Image} />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4 text-sm items-center">
          <button className="toggle-light">Filtres avancés <img src={downImage}/></button>
          <button className="button-light"><img src={addImage}/> Ajouter des indicateurs</button>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 self-center items-center">
              <div><img src={notifsImage} /></div>
              <div className="header-contrast">Alertes</div>
            </div>
            <div className="alert contrast">
              <div>Prochain rendez-vous vétérinaire</div>
              <div>
                <div>9h00</div>
                <div>15/02/25</div>
              </div>
            </div>
            <div className="alert tertiary">
              <div>Traitement en cours à vérifier</div>
              <div>
                <div>Toute la journée</div>
                <div>30/02/25</div>
              </div>
            </div>
            <div className="alert gray">
              <div>15 en perte de performance (-2L/j)</div>
              <div>
                <div>au 10/02/25</div>
              </div>
            </div>
            <div className="alert primary">
              <div>Déclaration PAC J-2</div>
              <div>
                <div>Toute la journée</div>
                <div>28/02/25</div>
              </div>
            </div>
            <div className="alert secondary">
              <div>Dernier prélèvement tank</div>
              <div className="flex gap-2">
                <div>6312 L</div>
                <div>|</div>
                <div>Jours de production : 3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FarmDashboard;