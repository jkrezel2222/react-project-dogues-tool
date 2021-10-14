import React from "react";
import { useState, useEffect } from "react";



function FilterData() {
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const [q, setQ] = useState("");
    const [searchParam] = useState(["breedName"]);

    useEffect(() => {
        fetch("https://api-dog-breeds.herokuapp.com/api/dogs")
        .then((response) => response.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
    }, []);

    
    function Search(items) {
        return items.filter((item) => {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                    .toString()
                    .toLowerCase()
                    .indexOf(q.toLowerCase()) > -1
                );
            });
        });
    }

        if (error) {
            return <div>{error.message}</div>;
        } else if (!isLoaded) {
            return <div>loading ...</div>;
        } else {
            return (
                <div className="wrapper">
                    <div className="search-wrapper">
                    <label htmlFor="search-form">
                        {/* instead of word Search below, add in a button here called "Search" and onClick event */}
                        <span>Or search breed name</span>
                        <input
                            type="search"
                            name="search-form"
                            id="search-form"
                            className="search-input"
                            placeholder="Search"
                            value={q}
                            onChange={(e) => setQ(e.target.value)}/>


                    </label>
                    </div>
                        {Search(items).map((item) => (
                            <div>
                                <div>
                                    <br></br>
                                </div>
                                <div> 
                                <article className="card">
                                    <br></br>
                                    <div>
                                        <h3>
                                            {item.breedName.toUpperCase()}
                                        </h3>
                                    </div>
                                    <div>
                                        <img src={item.image} alt={item.breedName} />
                                    </div>
                                    <br></br>
                                        <div>
                                        <p className="card-description">
                                            {item.description}
                                        </p>
                                        <div className="card-list">
                                            <p>
                                                - Height: {" "}
                                                <span>{item.dogInfo.height}</span>
                                            </p>
                                            <p>
                                                - Weight: {" "}
                                                <span>{item.dogInfo.weight}</span>
                                            </p>
                                            <p>
                                                - Life expectancy: {" "}
                                                <span>{item.dogInfo.life}</span>
                                            </p>
                                            <div>
                                            <br></br>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                </div>
                            </div>
                        ))}
                </div>
            );
        }    
}

export default FilterData;
