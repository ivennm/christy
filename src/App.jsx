import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/yes" element={<Yes />} />
      <Route path="/no" element={<No />} />
    </Routes>
  )
}

function Home() {
  const navigate = useNavigate()

  return (
    <div className="buttons">
      <h1>yes or no?</h1>
      <div>
        <button onClick={() => navigate('/no')}>No</button>
        <button onClick={() => navigate('/yes')}>Yes</button>
      </div>
    </div>
  )
}

function Yes() {
  return <h1>You chose YES 😄</h1>
}

function No() {
  return <h1>You chose NO 😢</h1>
}

export default App
