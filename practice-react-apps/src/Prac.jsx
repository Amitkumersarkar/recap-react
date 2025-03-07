export default function Prac({ user }) {
    const { id, title } = user;

    return (
        <div className="box">
            <h3>id: {id}</h3>
            <p>title: {title}</p>
        </div>
    )
}