// Example usage in a component
import React from "react";
import { useFarmContext } from "../contexts/farm";
import type { Animal } from "~/types/farm";
import { NavLink } from "react-router";

const FarmAnimals: React.FC = () => {
  const { list } = useFarmContext();
  return (
    <div>{
        list.map((animal: Animal) => 
          <div key={animal.id}>
            <NavLink to="/farm/animal" end>Animal</NavLink>
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

export default FarmAnimals;