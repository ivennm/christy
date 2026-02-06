import { useState } from 'react'
import './App.css'

function App() {
  const story = [
    "It was a quiet evening.",
    "You sat there reading, not expecting anything unusual.",
    "Then something caught your attention.",
    "So here’s the question… do you want to continue?"
  ]

  const [step, setStep] = useState(0)

  const isLastStep = step === story.length - 1

  return (
    <div className="container">
      <p className="text">{story[step]}</p>

      {!isLastStep && (
        <button onClick={() => setStep(step + 1)}>
          Continue
        </button>
      )}

      {isLastStep && (
        <div className="buttons">
          <button onClick={() => alert("You said NO")}>
            No
          </button>
          <button onClick={() => alert("You said YES")}>
            Yes
          </button>
        </div>
      )}
    </div>
  )
}

export default App
