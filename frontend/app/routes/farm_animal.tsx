import type { Route } from "./+types/farm_animal";
import FarmAnimal from "~/views/farm_animal";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Animal" },
    { name: "description", content: "Page pour afficher les details d'un animal" },
  ];
}

export default function FarmAnimalRoute() {
  return <FarmAnimal />;
}