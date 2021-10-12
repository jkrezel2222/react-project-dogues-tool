import React from "react";
import Form from "react-bootstrap/Form";
import FilterData from "./FilterData";


const Home = () => {
        return (
            <div>
                <div>
                <h3>Dog breed selector</h3>
                <br></br>
                <p>Select from the options below to find your ideal dog breed:</p>
                </div>

                <div>  
                <Form.Select aria-label="Default select example">
                    <option>Select breed size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </Form.Select>
                </div>
                <br></br>
                <div>
                <Form.Select aria-label="Default select example">
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