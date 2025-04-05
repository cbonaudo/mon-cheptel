import type { Route } from "./+types/createAnimal";
import Animal from "~/views/animal";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Animal" },
    { name: "description", content: "Page to create a new animal" },
  ];
}

export default function AnimalRoute() {
  return <Animal />;
}