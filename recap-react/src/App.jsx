import './App.css'
import Counter from './Counter';
import Friends from './Friends';

function App() {
  // create another function
  function handleClick() {
    alert('Do not touch btn without permission..');
  }

  const handleClick2 = () => {
    alert('hello');
  }
  return (
    <>
      <Counter></Counter>
      <Friends></Friends>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Do it</button>
    </>
  )
}

export default App
