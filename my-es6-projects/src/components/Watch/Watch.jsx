import React from 'react';
// destructuring watch
const Watch = ({ watch }) => {
    //destructure to loading data 
    const { name, price } = watch;
    return (
        <div>
            {/* show watch data */}
            <h2>Watches : {name}</h2>
            <p>Price : {price}</p>
        </div>
    );
};

export default Watch;