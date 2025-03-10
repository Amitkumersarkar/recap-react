import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country/Country";

const Countries = () => {
    // to store data in useState
    const [countries, setCountries] = useState([]);

    // state declared for visited countries list
    const [visitedCountries, setVisitedCountries] = useState([]);

    // to load data in useEffect
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    // mark visited btn Event handler function

    const handleVisitedCountry = country => {
        console.log('Add This To Your Visited Country')
        // console.log(country);
        //using spread operator all country coping here and add new country
        const newVisitedCountries = [...visitedCountries, country];
        // set new visited country by state
        setVisitedCountries(newVisitedCountries);

    }


    return (
        <div >
            <h3>Countries : {countries.length}</h3>

            {/* visited countries list bar */}
            <div>

                <h4>Visited Countries : {visitedCountries.length} </h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>
                            {country.name.common}
                        </li>)
                    }
                </ul>
            </div>
            <div className="country-container">
                {
                    // use loop to make new components
                    countries.map(country =>
                        <Country
                            key={country.cca3}
                            // send props validation
                            handleVisitedCountry={handleVisitedCountry}
                            country={country}>

                        </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;