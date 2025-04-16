// import React from 'react';

export default function Friend({ friend }) {
    const { name, email, address } = friend;
    return (
        <div>
            <h3>Name : {name}</h3>
            <p>Email : {email} </p>
            <p>Address : {address}</p>
        </div>
    )
}
