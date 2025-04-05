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
      <input
        type="text"
        name="id"
        value={state.id || ""}
        onChange={handleChange}
        placeholder="Enter ID"
      />
      <input
        type="date"
        name="birthdate"
        value={state.birthdate}
        onChange={handleChange}
        placeholder="Enter Birthdate"
      />
      <input
        type="text"
        name="birthplace"
        value={state.birthplace}
        onChange={handleChange}
        placeholder="Enter Birthplace"
      />
      <select name="gender" value={state.gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
};

export default CreateAnimal;