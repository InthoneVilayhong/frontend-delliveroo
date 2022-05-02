import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Minicards = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3200/");
                // console.log(response.data.categories);
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error.response); // contrairement au error.message d'express
            }
        };
        fetchData();
    }, []);

    return isLoading ? (
        <span>En cours de chargement...</span>
    ) : (
        <div className="show-all-cards">
            {data.categories.map((minicard, index) => {
                return (
                    <div key={index} className="container-meal-card">
                        <h2>{minicard.name}</h2>
                        <div className="meal-card">
                            {minicard.meals.map((meal) => {
                                return (
                                    <div key={meal.id} className="minicard">
                                        <div className="left-minicard">
                                            <h3>{meal.title}</h3>
                                            {meal.description && (
                                                <p>{meal.description}</p>
                                            )}
                                            <div className="price">
                                                <span>{meal.price} €</span>
                                                {meal.popular && (
                                                    <span className="famous">
                                                        <FontAwesomeIcon icon="fa-solid fa-star" />
                                                        <span className="famous">
                                                            Populaire
                                                        </span>
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="right-minicard">
                                            {meal.picture && (
                                                <img
                                                    src={meal.picture}
                                                    alt="meal"
                                                />
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Minicards;
