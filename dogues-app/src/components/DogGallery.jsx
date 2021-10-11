import React from "react";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";


const DogGallery = () => {
        return (
            <div>
                <h3>Dog breed gallery</h3>
                <br></br>
                <p>Dog breed images will go here</p>
            </div>
        );
    };

export default DogGallery;