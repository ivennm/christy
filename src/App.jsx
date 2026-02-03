import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  function NoHandle(){
    alert("temporary alert bery bery sad")
  }

  function YesHandle(){
    alert("temporary alert bery bery happy")
  }

  return (
    <div>
      <h1>Yes or No</h1>
      <div class="buttons">
        <button onClick={NoHandle}>No</button>
        <button onClick={YesHandle}>Yes</button>
      </div>
    </div>
  )
}

export default App

