import type { Route } from "./+types/farm_createAnimal";
import FarmCreateAnimal from "~/views/farm_createAnimal";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Create Animal" },
    { name: "description", content: "Page to create a new animal" },
  ];
}

export default function FarmCreateAnimalRoute() {
  return <FarmCreateAnimal />;
}