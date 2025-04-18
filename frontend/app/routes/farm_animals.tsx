import type { Route } from "./+types/farm_animals";
import FarmAnimals from "~/views/farm_animals";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Animaux" },
    { name: "description", content: "Page pour afficher la liste des animaux" },
  ];
}

export default function FarmAnimalsRoute() {
  return <FarmAnimals />;
}