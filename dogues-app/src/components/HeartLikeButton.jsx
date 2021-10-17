import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import { useState } from "react";


function HeartLikeButton() {

    const [isClicked, setIsClicked] = useState(false)

    function handleClick() {
        setIsClicked(prevValue => {
            return !prevValue
        })
    }
    console.log(isClicked)

    return (
        <div className="HeartLikeButton">
            <FormControlLabel 
            onClick={handleClick} control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />} label="Save to gallery" />
            {isClicked}
        </div>
    );
}

export default HeartLikeButton;



// onClick={toggleSwitch} />
//    {toggle ? <span></span> : <span></span>}

//    if toggleSwitch === true => {

//    } 

    // const [toggle, setToggle] = useState(false);
    // const toggleSwitch = () => {
    //     toggle ? setToggle(false) : setToggle(true);
    // }