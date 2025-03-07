import { useState } from 'react';
import './Friends.css';
export default function Friends() {

    const [friends, setFriends] = useState([]);

    return (
        <div className='box'>
            <h3>Friends : {friends.length}</h3>
        </div>
    )
}

// steps for data load
// step1 : declared an state to hold data
// step2 : 