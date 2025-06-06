import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
const API_BASE = import.meta.env.VITE_API_BASE;

function App() {
  const [username, setUsername] = useState('')

  useEffect(() => {
    fetch(`${API_BASE}/api/getUsername`)
      .then(res => res.json())
      .then(data => setUsername(data.username));
  }, [])

  return (
    <>
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={reactLogo} alt="react" />
      </div>
    </>
  )
}

export default App
