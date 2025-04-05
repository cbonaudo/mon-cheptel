import type { Route } from "./+types/createAnimal";
import CreateAnimal from "../views/createAnimal";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Create Animal" },
    { name: "description", content: "Page to create a new animal" },
  ];
}

export default function CreateAnimalRoute() {
  return <CreateAnimal />;
}