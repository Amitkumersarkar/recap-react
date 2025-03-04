import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <Person></Person>
    </>
  )
}
function Person() {
  const age = 24;
  return <h3>i am a person with age : {age}</h3>
}
export default App
