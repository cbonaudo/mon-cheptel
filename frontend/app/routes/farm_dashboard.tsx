import type { Route } from "./+types/farm_dashboard";
import FarmDashboard from "~/views/farm_dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mon Tableau de Bord" },
    { name: "description", content: "Tableau de Bord de mon cheptel" },
  ];
}

export default function FarmDashboardRoute() {
  return <FarmDashboard />;
}
