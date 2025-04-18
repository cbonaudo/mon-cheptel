// Example usage in a component
import React from "react";
import { NavLink } from "react-router";

const Filters: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 items-center">
        <div className="header-1">
            <h1>Mon Cheptel</h1>
        </div>

        <div className="flex gap-32 w-fit">
            <div className="p-8 bg-green-800 rounded-xl">
                <h2>Pédigré</h2>
                <div>
                    <p>Sexe</p>
                    <input type="radio" id="male" name="gender" value="male" checked />
                    <label htmlFor="male">Mâle</label>
                    <input type="radio" id="female" name="gender" value="female" />
                    <label htmlFor="female">Femelle</label>
                </div>
                <div>
                    <p>Père</p>
                    <input type="text" />
                </div>
                <div>
                    <p>Mère</p>
                    <input type="text" />
                </div>
                <div>
                    <p>Race</p>
                    <input type="text" />
                </div>
                <div>
                    <p>Age</p>
                    <input type="number" />
                </div>
                <div>
                    <p>N° de Boucle</p>
                    <input type="text" />
                </div>
            </div>
            <div className="p-8 bg-green-800 rounded-xl">
                <h2>Suivi de soins</h2>
                <div>
                    <p>Date de vêlage</p>
                    <input type="date" />
                </div>
                <div>
                    <p>Date d'insémination</p>
                    <input type="date" />
                </div>
                <div>
                    <p>Vaccin FCO</p>
                    <input type="radio" id="trueFCO" name="vaccineFCO" value="true" checked />
                    <label htmlFor="trueFCO">Oui</label>
                    <input type="radio" id="falseFCO" name="vaccineFCO" value="false" />
                    <label htmlFor="falseFCO">Non</label>
                    </div>
                <div>
                    <p>Vaccin BRSV</p>
                    <input type="radio" id="trueBSRV" name="vaccineBSRV" value="true" checked />
                    <label htmlFor="trueBSRV">Oui</label>
                    <input type="radio" id="falseBSRV" name="vaccineBSRV" value="false" />
                    <label htmlFor="falseBSRV">Non</label>
                </div>
                <div>
                    <p>Vaccin pi3</p>
                    <input type="radio" id="truePI3" name="vaccinePI3" value="true" checked />
                    <label htmlFor="truePI3">Oui</label>
                    <input type="radio" id="falsePI3" name="vaccinePI3" value="false" />
                    <label htmlFor="falsePI3">Non</label>
                </div>
                <div>
                    <p>Parage</p>
                    <input type="radio" id="trueParage" name="parage" value="true" checked />
                    <label htmlFor="trueParage">Oui</label>
                    <input type="radio" id="falseParage" name="parage" value="false" />
                    <label htmlFor="falseParage">Non</label>
                </div>
            </div>
        </div>
        
        <button className="p-8 bg-green-800 rounded-xl">
            <NavLink to="/farm/animals" end>Rechercher</NavLink>
        </button>
    </div>
  );
};

export default Filters;