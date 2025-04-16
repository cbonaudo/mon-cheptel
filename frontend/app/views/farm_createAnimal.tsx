import React from "react";
import { useFarmContext } from "../contexts/farm";

const FarmCreateAnimal: React.FC = () => {
  const {} = useFarmContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  };

  return (
    <div>
      <input
        type="text"
        name="id"
        value={""}
        onChange={handleChange}
        placeholder="Enter ID"
      />
      <input
        type="date"
        name="birthdate"
        value={""}
        onChange={handleChange}
        placeholder="Enter Birthdate"
      />
      <input
        type="text"
        name="birthplace"
        value={""}
        onChange={handleChange}
        placeholder="Enter Birthplace"
      />
      <select name="gender" value={"male"} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
};

export default FarmCreateAnimal;