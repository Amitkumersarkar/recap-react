import { useState } from "react"

export default function Team() {

    // state declared here
    const [team, setTeam] = useState(11);

    // declare event handler to add team
    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    // declare event handler to remove team

    const handleRemove = () => {
        const newTeam = team - 1;
        setTeam(newTeam);
    }

    // apply css using js type
    const teamStyle = {
        border: '2px solid Pink',
        padding: '14px',
        margin: '15px',
        borderRadius: '4px',

    }
    return (
        // css apply here
        <div style={teamStyle}>
            <h2>Player : {team}</h2>
            <button onClick={handleAdd}>Add Player</button>
            <button onClick={handleRemove}>Remove Player</button>
        </div>
    )
}