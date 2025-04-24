
// Example usage in a component
import React from "react";
import { NavLink } from "react-router";

const Header: React.FC = () => {
  return (
    <div>
      <div className="flex text-gray-dark">
        <div>
          <div>N° EDE</div>
          <div>Person</div>
          <div>10/02/2025</div>
        </div>
        <div>Cows</div>
      </div>
      <div className="flex text-white bg-primary justify-around">
          <NavLink to="/" end>Tableau de Bord</NavLink>
          <NavLink to="/farm/animals" end>Mes animaux</NavLink>
          <NavLink to="/farm/animal" end>Animal</NavLink>
        </div>
      </div>
  );
};

export default Header;