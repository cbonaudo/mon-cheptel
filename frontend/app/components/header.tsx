
// Example usage in a component
import React from "react";
import { NavLink } from "react-router";

const Header: React.FC = () => {
  return (
    <div className="flex gap-16 bg-green-800 p-4">
        <NavLink to="/" end>Tableau de Bord</NavLink>
        <NavLink to="/farm/animals" end>Mes animaux</NavLink>
        <NavLink to="/farm/animal" end>Animal</NavLink>
    </div>
  );
};

export default Header;