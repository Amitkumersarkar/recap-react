import { useState } from 'react';
import '../Country.css'
const Country = ({ country }) => {
    // destructuring here
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);
    // state declared for visited countries list
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisited = () => {
        setVisited(!visited);
    }



    const handleVisitedCountry = () => {
        setVisitedCountries(visitedCountries);

    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2 style={{ color: visited ? 'white' : 'red' }}>Name : {name?.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={handleVisitedCountry}>Mark Visited</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not visited'}</button>
            {visited ? ' i have visited this country.' : ' I have to visit this country very soon'}
        </div>
    );
};

export default Country;