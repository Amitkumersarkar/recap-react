import { useState } from 'react';
import '../Country.css'

// destructuring here
const Country = ({ country, handleVisitedCountry }) => {
    // destructuring here
    // props
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState([]);
    const handleVisited = () => {
        setVisited(!visited);
    }

    // declared this function to send parameter
    // const passWithParams = () => {
    //     handleVisitedCountry(country);
    // }
    // console.log(handleVisitedCountry);

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2 style={{ color: visited ? 'white' : 'red' }}>Name : {name?.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            {/* declared this event handler to send parameter  */}
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>

            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not visited'}</button>
            {visited ? ' i have visited this country.' : ' I have to visit this country very soon'}
        </div>
    );
};

export default Country;