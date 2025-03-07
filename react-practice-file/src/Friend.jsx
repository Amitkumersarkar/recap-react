export default function Friend({ friend }) {
    // destructure friends objects
    const { name, email } = friend;
    return (
        <div className="box">
            <h4>Name : {name}</h4>
            <p>Email : {email}</p>
        </div>
    )
}