import React from 'react';
import './Watch.css';
// destructuring watch
const Watch = ({ watch }) => {
    //destructure to loading data 
    const { brand, model, price, features, os } = watch;
    return (
        <div className='style'>
            {/* show watch data */}
            <h2>Watches : {brand}</h2>
            <p>Model : {model}</p>
            <p>Price : {price}</p>
            <p>Features : {features}</p>
            <p>OS : {os}</p>
        </div>
    );
};

export default Watch;