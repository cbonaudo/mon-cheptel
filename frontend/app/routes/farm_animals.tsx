import type { Route } from "./+types/farm_animals";
import FarmAnimals from "~/views/farm_animals";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Animals" },
    { name: "description", content: "Page to display the list of animals" },
  ];
}

export default function FarmAnimalsRoute() {
  return <FarmAnimals />;
}