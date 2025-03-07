import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country/Country";

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
            <h3>Countries : {countries.length}</h3>
            {
                // use loop to make new components
                countries.map(country =>
                    <Country key={country.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;