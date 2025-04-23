import { NavLink } from "react-router";
import { useFarmContext } from "~/contexts/farm";

const FarmDashboard: React.FC = () => {
  const { dashboardData } = useFarmContext();

  const percentageInProduction = dashboardData ? Math.trunc(100 * dashboardData.cattleInProduction / dashboardData.cattleNumber) : "--";
  const percentageNotInProduction = dashboardData ? Math.trunc(100 * dashboardData.cattleNotInProduction / dashboardData.cattleNumber) : "--";
  const percentageNotProducing = dashboardData ? Math.trunc(100 * dashboardData.cattleNotProducing / dashboardData.cattleNumber) : "--";

  return (
    <div className="flex">
      <div className="flex flex-col">
        <div className="flex">
          <div>
            <div className="header-fat">
              <h1>Mon Cheptel</h1>
            </div>
            <div className="chip-list">
              <div>
                {'250 '}
                <span className="chip-selected">
                  Animaux
                </span>
              </div>
              <div>
                {'28 '}
                <span className="chip-selected">
                  IA restantes
                </span>
              </div>
              <div>
                {'29 '}
                <span className="chip-selected">
                  En traitement
                </span>
              </div>
              <div>
                {'29 '}
                <span className="chip-selected">
                  Veaux
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="header-fat">
              <h1>Animaux en production</h1>
            </div>
            <div className="chip-list">
              <div>
                {'180 '}
                <span className="chip-selected">
                  Animaux
                </span>
              </div>
              <div>
                {'11 '}
                <span className="chip-selected">
                  Sous antibio
                </span>
              </div>
              <div>
                {'14 '}
                <span className="chip-selected">
                  Période Colostrum
                </span>
              </div>
              <div>
                {'19 '}
                <span className="chip-selected">
                  Taries
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="container">            
            <div className="flex">
              <div className="header-slim">
                <h2>Performance lait by PERF'LAIT</h2>
              </div>
              <div>Edit</div>
            </div>
            <div className="graph">
              Graph 1
            </div>
          </div>
          <div className="container">       
            <div className="flex">
              <div className="header-slim">
                <h2>Performance repro</h2>
              </div>
              <div>Edit</div>
            </div>
            <div className="graph">
              Graph 1
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex">
          <button className="toggle-light">Filtres avancés <span>V</span></button>
          <button className="button-light"><span>+</span> Ajouter des indicateurs</button>
        </div>
        <div>
          <div>
            <div>Cloche</div>
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
          <div className="alert secondary">
            <div>Déclaration PAC J-2</div>
            <div>
              <div>Toute la journée</div>
              <div>28/02/25</div>
            </div>
          </div>
          <div className="alert primary flex-col">
            <div>Dernier prélèvement tank</div>
            <div className="flex">
              <div>6312 L</div>
              <div>|</div>
              <div>Jours de production : 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FarmDashboard;