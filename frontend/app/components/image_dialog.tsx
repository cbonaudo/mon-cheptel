import React from "react";
import crossImage from "../assets/close.png"

import graph3Image from "../assets/graph-3.png"
import graph4Image from "../assets/graph-4.png"
import graph5Image from "../assets/graph-5.png"

const ImageDialog = ({ closeDialog, imageDisplayed }: {closeDialog: () => void, imageDisplayed: Number}) => {
  return (
    <div className="mask" onClick={closeDialog}>
        <img className="close" src={crossImage} />
        <div className="category" onClick={(e) => {e.stopPropagation()}}>
            <div>
                <div className="animal-title">
                    <h1>PERF'LAIT</h1>
                    <div className="horizontal-separator" />
                </div>
            </div>
            <div className="w-150">
                {imageDisplayed == 3 && <img src={graph3Image} className="rounded-2xl"/>}
                {imageDisplayed == 4 && <img src={graph4Image} className="rounded-2xl"/>}
                {imageDisplayed == 5 && <img src={graph5Image} className="rounded-2xl"/>}
            </div>
        </div>
    </div>
  );
};

export default ImageDialog;