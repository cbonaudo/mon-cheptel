import { NavLink } from "react-router";
import { useFarmContext } from "~/contexts/farm";

const FarmDashboard: React.FC = () => {
  const { dashboardData } = useFarmContext();
  return (
    <main>
      <div>
        <h1>Mon Tableau de bord</h1>
      </div>
      <div>
        <h2>Mes indicateurs</h2>
        <p>Nombre total: {dashboardData?.cattleNumber}</p>
        <p>Vaches en production: {dashboardData?.cattleInProduction}</p>
        <p>Vaches en traitement/écartées: {dashboardData?.cattleNotInProduction}</p>
        <p>Veaux/Génisses ne produisant pas: {dashboardData?.cattleNotProducing}</p>
        
        <NavLink to="/farm/animals" end>Liste des animaux</NavLink>
      </div>
    </main>
  );
}
export default FarmDashboard;