import { NavLink } from "react-router";
import { useFarmContext } from "~/contexts/farm";

const FarmDashboard: React.FC = () => {
  const { dashboardData } = useFarmContext();

  const percentageInProduction = dashboardData ? Math.trunc(100 * dashboardData.cattleInProduction / dashboardData.cattleNumber) : "--";
  const percentageNotInProduction = dashboardData ? Math.trunc(100 * dashboardData.cattleNotInProduction / dashboardData.cattleNumber) : "--";
  const percentageNotProducing = dashboardData ? Math.trunc(100 * dashboardData.cattleNotProducing / dashboardData.cattleNumber) : "--";

  return (
    <main className="flex flex-col gap-16 items-center">
      <div className="header-1">
        <h1>Mon Tableau de bord</h1>
      </div>
      <div className="flex flex-col gap-8 p-8 bg-green-800 rounded-xl">
        <h2>Mes indicateurs</h2>
        <div className="flex items-center justify-center gap-16">
          <p>
            Nombre total: 
            <div className="font-bold text-6xl flex justify-center">
              {dashboardData?.cattleNumber}
            </div>
          </p>
          <p>
            Vaches en production: 
            <div className="font-bold text-2xl flex justify-center">
              {percentageInProduction} %
            </div>
            <div className="font-bold text-6xl flex justify-center">
              {dashboardData?.cattleInProduction}
            </div>
          </p>
          <p>
            Vaches en traitement/écartées: 
            <div className="font-bold text-2xl flex justify-center">
              {percentageNotInProduction} %
            </div>
            <div className="font-bold text-6xl flex justify-center">
              {dashboardData?.cattleNotInProduction}
            </div>
          </p>
          <p>
            Veaux/Génisses ne produisant pas: 
            <div className="font-bold text-2xl flex justify-center">
              {percentageNotProducing} %
            </div>
            <div className="font-bold text-6xl flex justify-center">
              {dashboardData?.cattleNotProducing}
            </div>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center p-8 bg-green-800 rounded-xl w-fit">
        <NavLink to="/farm/animals" end>Liste des animaux</NavLink>
      </div>
    </main>
  );
}
export default FarmDashboard;