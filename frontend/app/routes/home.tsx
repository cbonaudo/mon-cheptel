import type { Route } from "./+types/home";
import { Dashboard } from "../views/dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mon Tableau de Bord" },
    { name: "description", content: "Tableau de Bord de mon cheptel" },
  ];
}

export default function Home() {
  return <Dashboard />;
}
