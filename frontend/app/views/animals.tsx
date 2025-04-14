// Example usage in a component
import React from "react";
import { useFarmContext } from "../contexts/farm";
import type { Animal } from "~/types/farm";

const Animals: React.FC = () => {
  const { list } = useFarmContext();
  return (
    <div>{
        list.map((animal: Animal) => 
          <div>
            <h1>Animal</h1>
            <p>
              N° de Boucle: {animal.pentagNumber}
            </p>
            <p>
              Sexe: {animal.gender}
            </p>
            <p>
              Age: {animal.age}
            </p>
            <p>
              Père: {animal.fatherPentagNumber}
            </p>
            <p>
              Mère: {animal.motherPentagNumber}
            </p>
          </div>)
        }
    </div>
  );
};

export default Animals;