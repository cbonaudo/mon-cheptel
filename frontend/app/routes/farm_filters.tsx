import type { Route } from "./+types/farm_filters";
import FarmFilters from "~/views/farm_filters";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Filtres" },
    { name: "description", content: "Page pour afficher les filtres sélectionnables" },
  ];
}

export default function FarmFiltersRoute() {
  return <FarmFilters />;
}