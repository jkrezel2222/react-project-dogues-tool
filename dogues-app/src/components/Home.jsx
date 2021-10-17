import React from "react";
import FilterData from "./FilterData";


const Home = () => {
        return (
            <div>
                <div>
                <h3 style={{color: "#346DB7"}}>Dog breed selector</h3>
                </div>
                <br></br>
                <div>
                    <FilterData/>
                </div>

            </div>
        );
    };

export default Home;