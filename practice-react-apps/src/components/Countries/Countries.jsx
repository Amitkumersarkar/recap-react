import { useEffect } from "react";
import { useState } from "react";

const Countries = () => {
    // to store data in useState
    const [countries, setCountries] = useState([]);
    // to load data in useEffect
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h3>Countries : {countries}</h3>
        </div>
    );
};

export default Countries;