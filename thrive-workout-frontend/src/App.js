// import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import fetchExercises from './services/ExerciseAPI'
import { useState, useEffect } from'react'

function App() {
  const [exercises, setExercises] = useState([])
  useEffect(() => {
    const loadExercises = async () => {
      const data = await fetchExercises()
      setExercises(data)
    }
    loadExercises()
  }, [])


  return (
    <div className="App">
      <Home exercises={exercises} />
    </div>
  )
}

export default App;


