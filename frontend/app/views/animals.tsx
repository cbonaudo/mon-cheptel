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
              Pentag Number: {animal.pentagNumber}
            </p>
            <p>
              Gender: {animal.gender}
            </p>
            <p>
              Age: {animal.age}
            </p>
            <p>
              Father Pentag Number: {animal.fatherPentagNumber}
            </p>
            <p>
              Mother Pentag Number: {animal.motherPentagNumber}
            </p>
          </div>)
        }
    </div>
  );
};

export default Animals;