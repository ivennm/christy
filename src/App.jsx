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

  function instaLink() {

  }

  return (
    <div>
      <h1>Yes or Yes</h1>
      <div class="buttons">
        <button onClick={NoHandle}>No</button>
        <button onClick={YesHandle}>Yes</button>
      </div>
      <div>
        <a
        href='https://www.instagram.com/reel/DT4kS8FCg_i/?igsh=Y3JkdXhhbDBrM3A5'
        target='_blank'
        rel='noopener noreferrer'
        >
        <button>Test</button>
        </a>
      </div>
    </div>
  )
}

export default App

