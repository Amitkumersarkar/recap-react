export default function Team() {
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
            <h2>Player : </h2>
            <button>Hire Team</button>
        </div>
    )
}