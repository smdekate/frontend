import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('https://backend-sbt7.onrender.com/api/jokes')
    .then((response) => setJokes(response.data))
    .catch((error) => {console.log(error);
    })
  }, [jokes])

  return (
    <>
      <h1>Jokes</h1>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
