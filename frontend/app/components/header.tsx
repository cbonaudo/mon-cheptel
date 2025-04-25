
import React from "react";
import { NavLink, useLocation } from "react-router";

const Header: React.FC = () => {
  let pathname = useLocation().pathname;
  const isDashboardSelected = pathname == "/";
  const isAnimalsSelected = pathname.includes("animals");
  const isAnimalSelected = pathname.endsWith("animal");

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
          <NavLink to="/" end><div className={isDashboardSelected ? "link-selected": "link"}>Tableau de Bord</div></NavLink>
          <NavLink to="/farm/animals" end><div className={isAnimalsSelected ? "link-selected": "link"}>Mes animaux</div></NavLink>
          <NavLink to="/farm/animal" end><div className={isAnimalSelected ? "link-selected": "link"}>Animal</div></NavLink>
        </div>
      </div>
  );
};

export default Header;