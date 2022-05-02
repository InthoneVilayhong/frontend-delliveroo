import axios from "axios";
import { useState, useEffect } from "react";

const Topcard = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3200/");
                // console.log(response.data);
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
        <div className="top-card container">
            <div className="left-top-card">
                <h1>{data.restaurant.name}</h1>
                <p>{data.restaurant.description}</p>
            </div>
            <div>
                <img src={data.restaurant.picture} alt="" />
            </div>
        </div>
    );
};

export default Topcard;
