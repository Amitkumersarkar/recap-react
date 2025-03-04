import './App.css'
import Todo from './toDo';
function App() {

  return (
    <>
      <Person></Person>
      <Student grade="9" score="90"></Student>
      <Developer></Developer>
      <Device></Device>
      <Device></Device>
      <Device name='laptop'></Device>
      <Todo task=" learn React"></Todo>
      <Todo task=" learn typescript"></Todo>
      <Todo task=" learn Next js"></Todo>
      <Todo task="isDone"></Todo>
    </>
  )
}
function Person() {
  const person = { name: 'Amit Sarkar' }
  const age = 24;
  return <h3>my name is {person.name} and my age is : {age}</h3>
}

function Student(props) {
  console.log(props);
  return (
    <div className='student'>
      <h3>i am a student</h3>
    </div>
  )
}
function Developer() {
  const developerStyle = {
    margin: '15px',
    padding: '20px',
    border: '2px solid blue',
    borderRadius: '10px'
  }
  return (
    <div style={developerStyle}>
      <h3>post : jr. react developer</h3>
      <h3>company name : ridax.co</h3>
      <h3>salary : 1000 usd</h3>
    </div>
  )
}

function Device(props) {
  console.log(props)
  return (
    <div>
      <h3>this device : phone</h3>
    </div>
  )
}
export default App
