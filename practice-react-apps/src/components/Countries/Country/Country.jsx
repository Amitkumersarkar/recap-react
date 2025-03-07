import '../Country.css'
const Country = ({ country }) => {
    // destructuring here
    const { name, flags } = country;
    return (
        <div className="country">
            <h2>Name : {name?.common}</h2>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;