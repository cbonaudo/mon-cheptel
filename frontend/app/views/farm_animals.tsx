import React, { useState } from "react";
import { useFarmContext } from "../contexts/farm";
import { Gender, type Animal } from "~/types/farm";
import { NavLink } from "react-router";

const FarmAnimals: React.FC = () => {
  const { list } = useFarmContext();

  return (
    <div className="text-black">
      <div>
        <div>{"<"}</div>
        <div>
          <div>Identité</div>
          <div>
            <div>Numéro : <input placeholder="Ex: 2884" type="text" /></div>
            <div>Né dans l'élevage : <div>Oui</div><div>Non</div></div>
            <div>Sexe : <div>Femelle</div><div>Mâle</div></div>
            <div>Catégorie : <div>Veau</div><div>Génisse</div><div>Vache</div><div>Taureau</div><div>Taurillon</div></div>
            <div>Lot : <div>Lactation</div><div>Prépa Vêlage</div><div>Vêlée</div><div>Tarie</div></div>
            <div>Afficher plus <span>V</span></div>
          </div>
        </div>
        <div>
          <div>Statut sanitaire</div>
          <div>
            <div>Etat de santé : <div>Sain</div><div>Boiterie</div><div>Ecarté</div><div>+</div></div>
            <div>Vaccin : <div>A jour</div><div>A faire</div></div>
            <div>Echéance : <select value="3 mois"/></div>
            <div>Parage : <div>A jour</div><div>A faire</div></div>
            <div>Echéance : <select value="A définir" disabled/></div>
            <div>Afficher plus <span>V</span></div>
          </div>
        </div>
        <div>
          <div>Appliquer</div>
          <div>Actu</div>
          <div>Recherche anvancée <span>V</span></div>
        </div>
      </div>
      <div>
        {list.map((animal) => (
          <div>
            <div>Coche</div>
            <div>
              <div>N° de boucle : {animal.pentagNumber}</div>
              <div>
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
              <div>
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