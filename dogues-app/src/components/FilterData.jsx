import React from "react";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import HeartLikeButton from "./HeartLikeButton";
import Spinner from "react-bootstrap/Spinner";

const LoadingSpinner =
        <Spinner animation="border" role="status" variant="light" >
            <span className="visually-hidden">Loading...</span>
        </Spinner>

function FilterData() {
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const [q, setQ] = useState("");
    const [searchParam] = useState(["breedName", "description"]);

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
            return <div>{LoadingSpinner}</div>;
        } else {
            return (                
                <div className="wrapper">
                    <div>
                    <Form.Select style={{width: "17vw"}} value={q} onChange={(e) => setQ(e.target.value)} aria-label="Breed size" className="aria-label-home">
                        <option>Select breed size</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </Form.Select>
                    </div>
                    <div><br></br></div>
                    <div className="search-wrapper" >
                    <span style={{paddingInline: "8px"}}>Or search breed name</span>
                    <label htmlFor="search-form">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className="adapted-search"
                            value={q}
                            onChange={(e) => setQ(e.target.value)
                            }/>
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
                                    <HeartLikeButton />
                                        <h3 key="item.id">
                                            {item.breedName.toUpperCase()}
                                        </h3>
                                    </div>
                                    <div>
                                        <img src={item.image} alt={item.breedName} />
                                    </div>
                                    <br></br>
                                        <div key="item.id">
                                        <p className="card-description">
                                            {item.description}
                                        </p>
                                        <div className="card-list" key="item.id">
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
