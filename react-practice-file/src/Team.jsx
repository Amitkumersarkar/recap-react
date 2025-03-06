import { useState } from "react"

export default function Team() {

    // state declared here
    const [team, setTeam] = useState(11);


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
            <button>Hire Team</button>
        </div>
    )
}