
import React from "react";
import { NavLink, useLocation } from "react-router";
import headerImage from "../assets/header.png";
import personImage from "../assets/person.png";

const Header: React.FC = () => {
  let pathname = useLocation().pathname;
  const isDashboardSelected = pathname == "/";
  const isAnimalsSelected = pathname.includes("animals");
  const isAnimalSelected = pathname.endsWith("animal");

  return (
    <div>
      <div className="flex gap-2 mb-2">
        <div className="flex flex-col items-center gap-2 text-gray-dark p-2 font-bold">
          <div className="bg-contrast-light pl-2 pr-2 rounded-xl text-sm">N° EDE</div>
          <img src={personImage} />
          <div className="text-xs">10/02/2025</div>
        </div>
        <div><img src={headerImage} /></div>
      </div>
      <div className="flex text-white justify-around">
        <NavLink to="/" end>
          <div className={(isDashboardSelected ? "link-selected": "") + " link primary-light"}>Tableau de Bord</div>
        </NavLink>
        <NavLink to="/farm/animals" end>
          <div className={(isAnimalsSelected ? "link-selected": "") + " link primary"}>Mes animaux</div>
        </NavLink>
        <NavLink to="/farm/animal" end>
          <div className={(isAnimalSelected ? "link-selected": "") + " link secondary"}>Fiche Animal</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;