import React from "react";
import Form from "react-bootstrap/Form";


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
                    <option>Select coat type</option>
                    <option value="ShortCoat">Short Coat</option>
                    <option value="LongCoat">Long Coat</option>
                </Form.Select>
                </div>
                <br></br>
                <div>
                <Form.Select aria-label="Default select example">
                    <option>Select breed type</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </Form.Select>
                </div>
            </div>
        );
    };

export default Home;