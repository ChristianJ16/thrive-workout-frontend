import { Route, Routes, useNavigate } from 'react-router'
import './App.css'
import Home from './pages/Home'
import fetchExercises from './services/ExerciseAPI'
import { useState, useEffect } from 'react'
import Workouts from './pages/Workouts'
import AddWorkout from './pages/AddWorkout'
import EditWorkout from './pages/EditWorkout'
import Header from './components/header/Header'

function App() {
    const [exercises, setExercises] = useState([])
    const [workouts, setWorkouts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const loadExercises = async () => {
            const data = await fetchExercises()
            setExercises(data)
        }
        loadExercises()
    }, [])

    const handleAddWorkout = (newWorkout) => {
        setWorkouts([...workouts, newWorkout])
        navigate('/workouts') // Navigate to the workouts page after saving
    }

    const handleUpdateWorkout = (updatedWorkout) => {
      setWorkouts(workouts.map(workout => workout.name === updatedWorkout.name ? updatedWorkout : workout))
      navigate('/workouts')
  }

    const handleDeleteWorkout = (workoutToDelete) => {
        setWorkouts(workouts.filter(workout => workout !== workoutToDelete))
    }

    const handleShowSearch = () => {
        //show search
    }

    return (
        <div className="App">

            <Header
                name={ <>THRIVE<span>workout</span></> } 
                links={["workouts"]}
                showSearch={handleShowSearch} />

            <Routes>
                <Route path="/" element={<Home exercises={exercises} />} />
                <Route 
                    path="/workouts" 
                    element={
                        <Workouts 
                            workouts={workouts}
                            onUpdateWorkout={handleUpdateWorkout}
                            onDeleteWorkout={handleDeleteWorkout}
                        />
                    } 
                />
                <Route 
                    path="/addWorkout" 
                    element={<AddWorkout onAddWorkout={handleAddWorkout} />} 
                />
                <Route path="/editWorkout/:id" element={<EditWorkout onUpdateWorkout={handleUpdateWorkout} />} />
            </Routes>
            
        </div>
    )
}

export default App