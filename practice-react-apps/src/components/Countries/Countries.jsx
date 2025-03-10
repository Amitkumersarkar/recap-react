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
        <div >
            <h3>Countries : {countries.length}</h3>

            {/* visited countries list bar */}
            <div>

                <h4>Visited Countries : </h4>
                <ul>

                </ul>
            </div>
            <div className="country-container">
                {
                    // use loop to make new components
                    countries.map(country =>
                        <Country
                            key={country.cca3}
                            // handleVisitedCountry={handleVisitedCountry}
                            country={country}>

                        </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;