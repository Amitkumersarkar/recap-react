import { useEffect, useState } from "react"
import Friend from "./friend";

export default function Friends() {
    const [friends, setFriend] = useState([]);

    //to load data by declared dependency with callback function
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h2>Friends : {friends.length}</h2>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}