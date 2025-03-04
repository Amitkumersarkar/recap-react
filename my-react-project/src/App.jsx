import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <Person></Person>
      <Student></Student>
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
    <div>
      <h3>i am a student</h3>
    </div>
  )
}
export default App
