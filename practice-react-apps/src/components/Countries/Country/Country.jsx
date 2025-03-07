import '../Country.css'
const Country = ({ country }) => {
    // destructuring here
    const { name, flags, population, area, cca3 } = country;
    return (
        <div className="country">
            <h2>Name : {name?.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button>Visited</button>
        </div>
    );
};

export default Country;