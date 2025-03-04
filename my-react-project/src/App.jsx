import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
      <Device></Device>
      <Device></Device>
      <Device name='laptop'></Device>
    </>
  )
}
function Person() {
  const person = { name: 'Amit Sarkar' }
  const age = 24;
  return <h3>my name is {person.name} and my age is : {age}</h3>
}

function Student() {
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
