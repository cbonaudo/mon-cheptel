import type { Route } from "./+types/farm_createAnimal";
import FarmCreateAnimal from "~/views/farm_createAnimal";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Créer Animal" },
    { name: "description", content: "Page pour ajouter un animal" },
  ];
}

export default function FarmCreateAnimalRoute() {
  return <FarmCreateAnimal />;
}