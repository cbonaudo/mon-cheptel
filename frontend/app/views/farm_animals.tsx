import React from "react";
import { useFarmContext } from "../contexts/farm";
import { Gender } from "~/types/farm";
import { NavLink } from "react-router";
import leftImage from "../assets/left.png";
import downImage from "../assets/down.png";
import refreshImage from "../assets/refresh.png";
import downGrayImage from "../assets/downgray.png";
import circleImage from "../assets/circle.png";
import checkImage from "../assets/check.png";
import rightGrayImage from "../assets/rightGray.png";

const FarmAnimals: React.FC = () => {
  const { list } = useFarmContext();

  return (
    <div className="flex flex-col gap-4 text-black">
      <div className="grid grid-cols-[1fr_8fr_9fr_4fr] gap-4">
        <div className="border-3 rounded-full h-10 p-2 flex justify-center items-center w-10">     
          <NavLink to="/" end><img src={leftImage}/></NavLink>
        </div>
        <div className="filter-container">
          <div className="filter-header">Identité</div>
          <div className="flex flex-col p-2 text-sm gap-2">
            <div className="flex gap-2">
              <div className="flex gap-1 items-center">
                Numéro : 
                <div className="input">Ex: 2884</div>
              </div>
              <div className="flex gap-1 items-center">
                Sexe : 
                <div className="chip-selected">Femelle</div>
                <div className="chip-unselected">Mâle</div>
              </div>
            </div>
            <div className="flex gap-1">
              Né dans l'élevage : 
              <div className="chip-unselected">Oui</div>
              <div  className="chip-unselected">Non</div>
            </div>
            <div className="flex gap-1">
              Catégorie: 
              <div className="chip-unselected">Veau</div>
              <div className="chip-unselected">Génisse</div>
              <div className="chip-selected">Vache</div>
              <div className="chip-disabled">Taureau</div>
              <div className="chip-disabled">Taurillon</div>
            </div>
            <div className="flex gap-1">
              Lot : 
              <div className="chip-selected">Lactation</div>
              <div className="chip-unselected">Prépa Vêlage</div>
              <div className="chip-unselected">Vêlée</div>
              <div className="chip-unselected">Tarie</div>
            </div>
          </div>          
          <div className="button-secondary">Afficher plus <img src={downGrayImage} /></div>
        </div>
        <div className="filter-container">
          <div className="filter-header">Statut sanitaire</div>
          <div className="flex flex-col p-2 text-sm gap-2">
            <div className="flex gap-2 col-span-2">
              Etat de santé : 
              <div className="chip-selected">Sain</div>
              <div className="chip-unselected">Boiterie</div>
              <div className="chip-unselected">Ecarté</div>
              <div className="chip-unselected">+</div>
            </div>
            <div className="flex gap-1">
              <div className="flex gap-1 items-center">
                Vaccin : 
                <div className="chip-unselected">A jour</div>
                <div className="chip-selected">A faire</div>
              </div>
              <div className="flex gap-1 items-center">
                Echéance :
                <select className="input">
                  <option value="3 mois">3 mois</option>
                </select>
              </div>
            </div>
            <div className="flex gap-1">
              <div className="flex gap-1 items-center">
                Parage : 
                <div className="chip-selected">A jour</div>
                <div className="chip-unselected">A faire</div>
              </div>
              <div className="flex gap-1 items-center">
                Echéance :
                <select className="input disabled p-0 w-21" >
                  <option value="A définir">A définir</option>
                </select>
              </div>
            </div>
          </div>
          <div className="button-secondary">Afficher plus <img src={downGrayImage} /></div>
        </div>
        <div className="grid grid-cols-2 gap-4 self-start font-bold text-xs">
          <div className="button-secondary-light">Appliquer</div>
          <div className="refresh-button"><img src={refreshImage} /></div>
          <div className="col-span-2 toggle-light">Recherche avancée <img src={downImage} /></div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {list.map((animal) => (
          <NavLink to="/farm/animal" end>
            <div className="animal-sheet">
              <div><img src={animal.isSelected ? checkImage : circleImage} /></div>
              <div className="flex flex-col gap-2">
                <div>N° de boucle : <span className="font-normal">{animal.pentagNumber}</span></div>
                <div className="grid grid-cols-[1fr_2fr] gap-2">
                  <div>
                    Sexe : <span className="font-normal">{Gender[animal.gender]}</span>
                  </div>
                  <div>
                    Age : <span className="font-normal">{animal.age}</span>
                  </div>
                  <div>
                    Père : <span className="font-normal">{animal.fatherPentagNumber}</span>
                  </div>
                  <div>
                    Mère : <span className="font-normal">{animal.motherPentagNumber}</span>
                  </div>
                  <div>
                    Race : <span className="font-normal">{animal.race}</span>
                  </div>
                  <div>
                    Statut sanitaire : <span className="font-normal">{animal.sanitaryStatus}</span>
                  </div>
                </div>
                <div className="self-end text-gray flex">
                  Afficher plus <img src={rightGrayImage} />
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default FarmAnimals;