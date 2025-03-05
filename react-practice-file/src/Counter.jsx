import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    const HandleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const HandleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    return (
        <div style={{
            border: '2px solid green'
        }}>
            <h2>Counter:{count} </h2>
            <button onClick={HandleAdd}>Add Number</button>
            <button onClick={HandleReduce}>Reduce</button>
        </div >
    )
}