import { useState } from 'react'
import './App.css'

function App() {
  // INTRO STORY STEPS
  const intro = [
    {
      text: "So like I have a question",
    },
    {
      text: "erm...",
      image: "/christy/erm.jpg",
    },
    {
      text: "I know i'm kind of awkward and cringe and autistic...",
      image: "christy/shy.jpg"
    },
    {
      text: "but I thought i'd give it a shot",
      image: "/christy/cringe.png",
    },
    {
      text: "Christy..."
    },
    {
      text: "Would you like to be my girlfriend?",
    },
  ]

  // FOLLOW-UP QUESTIONS
  const questions = [
    {
      text: "Are you sure?",
    },
    {
      text: "fr fr?",
      image: "/christy/frfr.png",
    },
    {
      text: "me?",
      image: "/christy/me.jpeg",
    },
  ]

  const [section, setSection] = useState('intro') // intro | questions | good_end | bad_end
  const [step, setStep] = useState(0)

  function handleContinue() {
    setStep(step + 1)
  }

  function handleYes() {
    if (section === 'intro') {
      setSection('questions')
      setStep(0)
      return
    }

    if (section === 'questions') {
      if (step < questions.length - 1) {
        setStep(step + 1)
      } else {
        setSection('good_end')
      }
    }
  }

  function handleNo() {
    setSection('bad_end')
  }

  return (
    <div className="container">

      {/* INTRO SECTION */}
      {section === 'intro' && (
        <>
          <div>
            <p>{intro[step].text}</p>
          </div>

          {intro[step].image && (
            <img
              src={intro[step].image}
              alt=""
              className="story-image"
            />
          )}
          
          {step < intro.length - 1 ? (
            <button onClick={handleContinue}>Continue</button>
          ) : (
            <div className="buttons">
              <button onClick={handleNo}>No</button>
              <button onClick={handleYes}>Yes</button>
            </div>
            
          )}
        </>
      )}

      {/* QUESTIONS SECTION */}
      {section === 'questions' && (
        <>
          <p>{questions[step].text}</p>

          {questions[step].image && (
            <img
              src={questions[step].image}
              alt=""
              className="story-image"
            />
          )}

          <div className="buttons">
            <button onClick={handleNo}>No</button>
            <button onClick={handleYes}>Yes</button>
          </div>
        </>
      )}

      {/* GOOD END */}
      {section === 'good_end' && (
        <>
          <h2>YAYAYAYAYA</h2>
          <img
            src="/christy/yay.gif"
            alt="Happy ending"
            className="end-image"
          />
          <h2>💛💛💛</h2>
        </>
      )}

      {/* BAD END */}
      {section === 'bad_end' && (
        <>
          <h2>...</h2>
          <img
            src="/christy/sad_cat.png"
            alt="Sad ending"
            className="end-image"
          />
          <h2>you hate me and want me to die</h2>
        </>
      )}

    </div>
  )
}

export default App
