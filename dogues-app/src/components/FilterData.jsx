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

    function search(items) {
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
                        <input
                            type="search"
                            name="search-form"
                            id="search-form"
                            className="search-input"
                            placeholder="Search breed name"
                            value={q}
                            onChange={(e) => setQ(e.target.value)}/>

                            {/* instead of word Search below, add in a button here called "Search" and onClick event */}
                            <span>Search</span>
                    </label>
                    </div>
                    <ul>
                        {search(items).map((item) => (
                                <article className="card">
                                    <br></br>
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
                                        </div>
                                        </div>
                                </article>
                        ))}
                    </ul>
                </div>
            );
        }    
}

export default FilterData;
