import React, { useState } from "react";
import { useFarmContext } from "../contexts/farm";
import { Gender, type Animal } from "~/types/farm";
import { NavLink } from "react-router";

const FarmAnimals: React.FC = () => {
  const { list } = useFarmContext();

  return (
    <div className="flex flex-col gap-4 text-black">
      <div className="flex gap-4">
        <div>     
          <NavLink to="/" end>{"<"}</NavLink>
        </div>
        <div className="flex flex-col">
          <div className="self-center">Identité</div>
          <div className="grid grid-cols-2">
            <div className="flex gap-2">Numéro : <input placeholder="Ex: 2884" type="text" /></div>
            <div className="flex gap-2">Né dans l'élevage : <div>Oui</div><div>Non</div></div>
            <div className="flex col-span-2 gap-2">Sexe : <div>Femelle</div><div>Mâle</div></div>
            <div className="flex col-span-2 gap-2">Catégorie : <div>Veau</div><div>Génisse</div><div>Vache</div><div>Taureau</div><div>Taurillon</div></div>
            <div className="flex col-span-2 gap-2">Lot : <div>Lactation</div><div>Prépa Vêlage</div><div>Vêlée</div><div>Tarie</div></div>
          </div>
          <div className="self-end">Afficher plus <span>V</span></div>
        </div>
        <div className="flex flex-col">
          <div className="self-center">Statut sanitaire</div>
          <div className="grid grid-cols-2">
            <div className="flex gap-2 col-span-2">Etat de santé : <div>Sain</div><div>Boiterie</div><div>Ecarté</div><div>+</div></div>
            <div className="flex gap-2">Vaccin : <div>A jour</div><div>A faire</div></div>
            <div className="flex gap-2">Echéance : <select><option value="3 mois">3 mois</option></select></div>
            <div className="flex gap-2">Parage : <div>A jour</div><div>A faire</div></div>
            <div className="flex gap-2">Echéance : <select><option disabled>A définir</option></select></div>
          </div>
          <div className="self-end">Afficher plus <span>V</span></div>
        </div>
        <div className="grid grid-cols-2 gap-4 self-start">
          <div>Appliquer</div>
          <div>Actu</div>
          <div className="col-span-2">Recherche avancée <span>V</span></div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {list.map((animal) => (
          <div className="grid grid-cols-[1fr_10fr]">
            <div>Coche</div>
            <div className="flex flex-col gap-2">
              <div>N° de boucle : {animal.pentagNumber}</div>
              <div className="grid grid-cols-[1fr_2fr] gap-2">
                <div>
                  Sexe: {Gender[animal.gender]}
                </div>
                <div>
                  Age: {animal.age}
                </div>
                <div>
                  Père: {animal.fatherPentagNumber}
                </div>
                <div>
                  Mère: {animal.motherPentagNumber}
                </div>
                <div>
                  Race: {animal.race}
                </div>
                <div>
                  Statut sanitaire: {}
                </div>
              </div>
              <div className="self-end">
                Afficher plus <span>{">"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmAnimals;