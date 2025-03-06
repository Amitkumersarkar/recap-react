import { useEffect, useState } from "react"

export default function Users() {
    const [users, setUsers] = useState([]);

    // call the useEffect
    // useEffect has two function one callback another is dependence
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    return (
        <div>
            <h2>users : {users.length}</h2>
        </div>
    )
}

// declared a state to hold the data
// useEffect with callback and dependency array
// to data load use fetch
// set data to setUser