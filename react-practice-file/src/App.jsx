import './App.css'

function App() {

  function HandleClick() {
    alert('button click');
  }

  return (
    <>
      <div>
        <h2>react core concept 2.0</h2>
        <button onClick={HandleClick}>Click Here</button>
      </div>
    </>
  )
}

export default App
