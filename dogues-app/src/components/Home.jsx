import React from "react";
import Form from "react-bootstrap/Form";
import FilterData from "./FilterData";
import { HeartFill } from "react-bootstrap-icons";
import { Heart } from "react-bootstrap-icons";
import HeartLikeButton from "./HeartLikeButton";


const Home = () => {
        return (
            <div>
                <div>
                <h3>Dog breed selector</h3>
                <br></br>
                <h4>Find your ideal dog, select from the options below</h4>
                <br></br>
                </div>

                <div>  
                    {/* <button className="heart-button">{<Heart />}</button>
                    <button className="heart-button-red">{<HeartFill />}</button> */}
                    
                <Form.Select aria-label="Breed size" className="aria-label-home">
                    <option>Select breed size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </Form.Select>
                </div>
                <br></br>
                <div>
                <Form.Select aria-label="Activity level" className="aria-label-home">
                    <option>Select activity level</option>
                    <option value="Relaxed">Relaxed</option>
                    <option value="Active">Active</option>
                    <option value="Working">Working</option>
                </Form.Select>
                </div>
                <br></br>

                <div>
                    <FilterData/>

                </div>

            </div>
        );
    };

export default Home;