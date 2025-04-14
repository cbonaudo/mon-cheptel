import Filters from "~/views/filters";
import type { Route } from "./+types/createAnimal";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Filtres" },
    { name: "description", content: "Page pour afficher les filtres sélectionnables" },
  ];
}

export default function FiltersRoute() {
  return <Filters />;
}