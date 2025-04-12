import type { Route } from "./+types/createAnimal";
import Animals from "~/views/animals";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Animals" },
    { name: "description", content: "Page to display the list of animals" },
  ];
}

export default function AnimalsRoute() {
  return <Animals />;
}