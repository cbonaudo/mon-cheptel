// Example usage in a component
import React from "react";
import { useFarmContext } from "../contexts/farm";

const CreateAnimal: React.FC = () => {
  const { state, updateState } = useFarmContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    updateState(name as keyof typeof state, value);
  };

  return (
    <div>
      <p>
        {state.id || ""}
      </p>
      <p>
        {state.birthdate || ""}
      </p>
      <p>
        {state.birthplace || ""}
      </p>
      <p>
        {state.gender || ""}
      </p>
    </div>
  );
};

export default CreateAnimal;