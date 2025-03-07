import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './User';
function App() {

  function HandleClick() {
    alert('button click');
  }

  const HandleClick2 = () => {
    alert('clicked btn 2');
  }

  const addToFive = (num) => {
    alert(num + 10);
  }

  return (
    <>
      <div>
        <h2>react core concept 2.0</h2>
        <button onClick={HandleClick}>Click Here</button>
        <button onClick={HandleClick2}>Click Here</button>
        <button onClick={() => addToFive(5)}>Click Me</button>
        <Counter></Counter>
        <Team></Team>
        <Users></Users>
        <Friends></Friends>
      </div>
    </>
  )
}

export default App
