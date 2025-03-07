import { useEffect, useState } from 'react';
import './Friends.css';
import Friend from './Friend';
export default function Friends() {

    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return (
        <div className='box'>
            <h3>Friends : {friends.length}</h3>
            {
                friends.map(friend => <Friend></Friend>)
            }
        </div>
    )
}

// steps for data load
// step1 : declared an state to hold data
// step2 : declared an useEffect with dependency array to load data
// step3 : use fetch to load data
// step4 : loaded data to the state
// step5 : to show all data we can use loop then use map