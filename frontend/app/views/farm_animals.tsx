import React, { useEffect, useState } from "react";
import { useFarmContext } from "../contexts/farm";
import { Category, Echeance, Gender, HealthState, Lot, Race, VaccineEnum } from "~/types/farm";
import { NavLink } from "react-router";
import leftImage from "../assets/left.png";
import downImage from "../assets/down.png";
import refreshImage from "../assets/refresh.png";
import rightGrayImage from "../assets/rightGray.png";

const FarmAnimals: React.FC = () => {
  const { list } = useFarmContext();
  const [filteredList, setFilteredList] = useState(list);

  useEffect(() => {
    setFilteredList(list);
  }, [list]);
  
  const [boucleFilter, setBoucleFilter] = useState<null | string>(null);
  const [genderFilter, setGenderFilter] = useState<null | Gender>(null);
  const [bornInFilter, setBornInFilter] = useState<null | boolean>(null);
  const [categoryFilter, setCategoryFilter] = useState<null | Category>(null);
  const [lotFilter, setLotFilter] = useState<null | Lot>(null);
  const [healthStateFilter, setHealthStateFilter] = useState<null | HealthState>(null);
  const [vaccineFilter, setVaccineFilter] = useState<null | boolean>(null);
  const [vaccineDeadlineFilter, setVaccineDeadlineFilter] = useState<number>(Echeance["A définir"]);
  const [parageFilter, setParageFilter] = useState<null | boolean>(null);
  const [parageDeadlineFilter, setParageDeadlineFilter] = useState<number>(Echeance["A définir"]);

  useEffect(() => {
    let newFilteredList = [...list];
    if (boucleFilter) {
      newFilteredList = newFilteredList.filter((a) => a.boucle.includes(boucleFilter));
    }
    if (genderFilter != null) {
      newFilteredList = newFilteredList.filter((a) => a.gender == genderFilter);
      if (genderFilter == Gender["Femelle"] && (categoryFilter == Category["Taurillon"])) {
        setCategoryFilter(Category["Génisse"]);
      } else if (genderFilter == Gender["Femelle"] && (categoryFilter == Category["Taureau"])) {
        setCategoryFilter(Category["Vache"]);
      } else if (genderFilter == Gender["Mâle"] && (categoryFilter == Category["Génisse"])) {
        setCategoryFilter(Category["Taurillon"]);
      } else if (genderFilter == Gender["Mâle"] && (categoryFilter == Category["Vache"])) {
        setCategoryFilter(Category["Taureau"]);
      }
    }
    if (bornInFilter != null) {
      newFilteredList = newFilteredList.filter((a) => a.bornIn == bornInFilter);
    }
    if (categoryFilter != null) {
      newFilteredList = newFilteredList.filter((a) => a.category == categoryFilter);
    }
    if (lotFilter != null) {
      newFilteredList = newFilteredList.filter((a) => a.hasOwnProperty("lot") && a.lot == lotFilter);
    }
    if (healthStateFilter != null) {
      newFilteredList = newFilteredList.filter((a) => a.healthState == healthStateFilter);
    }
    if (vaccineFilter != null) {
      newFilteredList = newFilteredList.filter((a) => VaccineEnum[a.vaccine] == VaccineEnum[+!vaccineFilter]);
    }
    if (vaccineDeadlineFilter > Echeance["A définir"]) {
      let date = new Date();
      if (vaccineDeadlineFilter == Echeance["3 mois"]) {
        newFilteredList = newFilteredList.filter((a) => {
          return new Date(
            Number(a.vaccineEcheance.substring(6,10)), 
            Number(a.vaccineEcheance.substring(3,5)) - 1, 
            Number(a.vaccineEcheance.substring(0,2))) 
            < new Date(new Date(date).setMonth(date.getMonth() + 3))
        });
      } else if (vaccineDeadlineFilter == Echeance["6 mois"]) {
        newFilteredList = newFilteredList.filter((a) => {
          return new Date(
            Number(a.vaccineEcheance.substring(6,10)), 
            Number(a.vaccineEcheance.substring(3,5)) - 1, 
            Number(a.vaccineEcheance.substring(0,2))) 
            < new Date(new Date(date).setMonth(date.getMonth() + 6))
        });} else if (vaccineDeadlineFilter == Echeance["1 an"]) {
        newFilteredList = newFilteredList.filter((a) => {
          return new Date(
            Number(a.vaccineEcheance.substring(6,10)), 
            Number(a.vaccineEcheance.substring(3,5)) - 1, 
            Number(a.vaccineEcheance.substring(0,2))) 
            < new Date(new Date(date).setMonth(date.getMonth() + 12))
        });}
    }
    if (parageFilter != null) {
      newFilteredList = newFilteredList.filter((a) => VaccineEnum[a.parage] == VaccineEnum[+!parageFilter]);
    }
    if (parageDeadlineFilter > Echeance["A définir"]) {
      let date = new Date();
      if (parageDeadlineFilter == Echeance["3 mois"]) {
        newFilteredList = newFilteredList.filter((a) => {
          return new Date(
            Number(a.parageEcheance.substring(6,10)), 
            Number(a.parageEcheance.substring(3,5)) - 1, 
            Number(a.parageEcheance.substring(0,2))) 
            < new Date(new Date(date).setMonth(date.getMonth() + 3))
        });
      } else if (parageDeadlineFilter == Echeance["6 mois"]) {
        newFilteredList = newFilteredList.filter((a) => {
          return new Date(
            Number(a.parageEcheance.substring(6,10)), 
            Number(a.parageEcheance.substring(3,5)) - 1, 
            Number(a.parageEcheance.substring(0,2))) 
            < new Date(new Date(date).setMonth(date.getMonth() + 6))
        });} else if (parageDeadlineFilter == Echeance["1 an"]) {
        newFilteredList = newFilteredList.filter((a) => {
          return new Date(
            Number(a.parageEcheance.substring(6,10)), 
            Number(a.parageEcheance.substring(3,5)) - 1, 
            Number(a.parageEcheance.substring(0,2))) 
            < new Date(new Date(date).setMonth(date.getMonth() + 12))
        });}
    }
    setFilteredList(newFilteredList);
  }, [boucleFilter, genderFilter, bornInFilter, categoryFilter, 
    lotFilter, healthStateFilter, vaccineFilter, vaccineDeadlineFilter, 
    parageFilter, parageDeadlineFilter]);

  const resetFilter = () => {
    setBoucleFilter(null);
    setGenderFilter(null);
    setBornInFilter(null);
    setCategoryFilter(null);
    setLotFilter(null);
    setHealthStateFilter(null);
    setVaccineFilter(null);
    setVaccineDeadlineFilter(Echeance["A définir"]);
    setParageFilter(null);
    setParageDeadlineFilter(Echeance["A définir"]);
  }

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
                <input className="input" placeholder="Ex: 2884" value={boucleFilter || ""} onChange={(e) => setBoucleFilter(e.target.value)}/>
              </div>
              <div className="flex gap-1 items-center">
                Sexe : 
                <div 
                  className={genderFilter == 1 ? "chip-selected": "chip-unselected"} 
                  onClick={() => genderFilter == 1 ? setGenderFilter(null) : setGenderFilter(1)}>Femelle</div>
                <div 
                  className={genderFilter == 0 ? "chip-selected": "chip-unselected"} 
                  onClick={() => genderFilter == 0 ? setGenderFilter(null) : setGenderFilter(0)}>Mâle</div>
              </div>
            </div>
            <div className="flex gap-1">
              Né dans l'élevage : 
              <div className={bornInFilter == true ? "chip-selected": "chip-unselected"} 
                  onClick={() => bornInFilter == true ? setBornInFilter(null) : setBornInFilter(true)}>Oui</div>
              <div className={bornInFilter == false ? "chip-selected": "chip-unselected"} 
                  onClick={() => bornInFilter == false ? setBornInFilter(null) : setBornInFilter(false)}>Non</div>
            </div>
            <div className="flex gap-1">
              Catégorie: 
              <div onClick={() => categoryFilter == 0 ? setCategoryFilter(null) : setCategoryFilter(0)} 
                className={categoryFilter == 0 ? "chip-selected": "chip-unselected"}>Veau</div>
              <div onClick={() => {if (genderFilter != Gender["Mâle"]) {categoryFilter == 1 ? setCategoryFilter(null) : setCategoryFilter(1)}}} 
                className={categoryFilter == 1 ? "chip-selected" : genderFilter != Gender["Mâle"] ? "chip-unselected" : "chip-disabled"}>
                Génisse</div>
              <div onClick={() => {if (genderFilter != Gender["Mâle"]) {categoryFilter == 2 ? setCategoryFilter(null) : setCategoryFilter(2)}}} 
                className={categoryFilter == 2 ? "chip-selected" : genderFilter != Gender["Mâle"] ? "chip-unselected" : "chip-disabled"}>
                Vache</div>
              <div onClick={() => {if (genderFilter != Gender["Femelle"]) {categoryFilter == 3 ? setCategoryFilter(null) : setCategoryFilter(3)}}} 
                className={categoryFilter == 3 ? "chip-selected" : genderFilter != Gender["Femelle"] ? "chip-unselected" : "chip-disabled"}>
                Taureau</div>
              <div onClick={() => {if (genderFilter != Gender["Femelle"]) {categoryFilter == 4 ? setCategoryFilter(null) : setCategoryFilter(4)}}} 
                className={categoryFilter == 4 ? "chip-selected" : genderFilter != Gender["Femelle"] ? "chip-unselected" : "chip-disabled"}>
                Taurillon</div>
            </div>
            <div className="flex gap-1">
              Lot : 
              <div className={lotFilter == 0 ? "chip-selected": "chip-unselected"} 
                  onClick={() => lotFilter == 0 ? setLotFilter(null) : setLotFilter(0)}>Lactation</div>
              <div className={lotFilter == 1 ? "chip-selected": "chip-unselected"} 
                  onClick={() => lotFilter == 1 ? setLotFilter(null) : setLotFilter(1)}>Prépa Vêlage</div>
              <div className={lotFilter == 2 ? "chip-selected": "chip-unselected"} 
                  onClick={() => lotFilter == 2 ? setLotFilter(null) : setLotFilter(2)}>Vêlée</div>
              <div className={lotFilter == 3 ? "chip-selected": "chip-unselected"} 
                  onClick={() => lotFilter == 3 ? setLotFilter(null) : setLotFilter(3)}>Tarie</div>
            </div>
          </div>          
          <div className="button-secondary">Afficher plus <img src={downImage} /></div>
        </div>
        <div className="filter-container">
          <div className="filter-header">Statut sanitaire</div>
          <div className="flex flex-col p-2 text-sm gap-2">
            <div className="flex gap-2 col-span-2">
              Etat de santé : 
              <div
                className={healthStateFilter == 0 ? "chip-selected": "chip-unselected"} 
                onClick={() => healthStateFilter == 0 ? setHealthStateFilter(null) : setHealthStateFilter(0)}>Sain</div>
              <div
                className={healthStateFilter == 1 ? "chip-selected": "chip-unselected"} 
                onClick={() => healthStateFilter == 1 ? setHealthStateFilter(null) : setHealthStateFilter(1)}>Boiterie</div>
              <div
                className={healthStateFilter == 2 ? "chip-selected": "chip-unselected"} 
                onClick={() => healthStateFilter == 2 ? setHealthStateFilter(null) : setHealthStateFilter(2)}>Ecarté</div>
              <div className="chip-unselected">+</div>
            </div>
            <div className="flex gap-1">
              <div className="flex gap-1 items-center">
                Vaccin : 
                <div
                  className={vaccineFilter == true ? "chip-selected": "chip-unselected"} 
                  onClick={() => vaccineFilter == true ? setVaccineFilter(null) : setVaccineFilter(true)}>A jour</div>
                <div
                  className={vaccineFilter == false ? "chip-selected": "chip-unselected"} 
                  onClick={() => vaccineFilter == false ? setVaccineFilter(null) : setVaccineFilter(false)}>A faire</div>
              </div>
              <div className="flex gap-1 items-center">
                Echéance :
                <select className="input" value={vaccineDeadlineFilter} 
                  onChange={(e) => setVaccineDeadlineFilter(e.target.value as unknown as Echeance)}>
                  <option value="0">A définir</option>
                  <option value="1">3 mois</option>
                  <option value="2">6 mois</option>
                  <option value="3">1 an</option>
                </select>
              </div>
            </div>
            <div className="flex gap-1">
              <div className="flex gap-1 items-center">
                Parage :
                <div
                  className={parageFilter == true ? "chip-selected": "chip-unselected"} 
                  onClick={() => parageFilter == true ? setParageFilter(null) : setParageFilter(true)}>A jour</div>
                <div
                  className={parageFilter == false ? "chip-selected": "chip-unselected"} 
                  onClick={() => parageFilter == true ? setParageFilter(null) : setParageFilter(false)}>A faire</div>
              </div>
              <div className="flex gap-1 items-center">
                Echéance :
                <select className="input" value={parageDeadlineFilter} 
                  onChange={(e) => setParageDeadlineFilter(e.target.value as unknown as Echeance)}>
                  <option value="0">A définir</option>
                  <option value="1">3 mois</option>
                  <option value="2">6 mois</option>
                  <option value="3">1 an</option>
                </select>
              </div>
            </div>
          </div>
          <div className="button-secondary">Afficher plus <img src={downImage} /></div>
        </div>
        <div className="grid grid-cols-2 gap-4 self-start font-bold text-xs">
          <div className="button-secondary-light">Appliquer</div>
          <div className="refresh-button" onClick={resetFilter}><img src={refreshImage} /></div>
          <div className="col-span-2 toggle-light">Recherche avancée <img src={downImage} /></div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {filteredList.map((animal) => (
          <NavLink to={"/farm/animal/" + animal.id} end key={animal.id}>
            <div className="animal-sheet">
              <div></div>
              <div className="flex flex-col gap-2">
                <div>N° de boucle : <span className="font-normal">{animal.boucle}</span></div>
                <div className="grid grid-cols-[2fr_3fr] gap-2">
                  <div>
                    Sexe : <span className="font-normal">{Gender[animal.gender]}</span>
                  </div>
                  <div>
                    Age : <span className="font-normal">{animal.age} mois</span>
                  </div>
                  <div>
                    Père : <span className="font-normal">{animal.fatherPentagNumber}</span>
                  </div>
                  <div>
                    Mère : <span className="font-normal">{animal.motherPentagNumber}</span>
                  </div>
                  <div>
                    Race : <span className="font-normal">{Race[animal.race]}</span>
                  </div>
                  {animal.hasOwnProperty("lot") && (<div>
                    Lot : <span className="font-normal">{Lot[animal.lot!]}</span>
                  </div>)}
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