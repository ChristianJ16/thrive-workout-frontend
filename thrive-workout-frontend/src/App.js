import { Route, Routes, useNavigate } from 'react-router'
import './App.scss'
import Home from './pages/Home'
import fetchExercises from './services/ExerciseAPI'
import { useState, useEffect } from 'react'
import Workouts from './pages/Workouts/Workouts'
import AddWorkout from './pages/Add-Workout/AddWorkout'
import EditWorkout from './pages/Edit-Workout/EditWorkout'
import Header from './components/header/Header'

import Register from './components/Register'

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
        setWorkouts(workouts.map(workout => workout.id === updatedWorkout.id ? updatedWorkout : workout))
        navigate('/workouts')
    }

    const handleDeleteWorkout = (workoutToDelete) => {
        setWorkouts(workouts.filter(workout => workout.id !== workoutToDelete.id))
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

            <Register />

            <Routes>
                <Route path="/" element={<Home exercises={exercises} />} />
                <Route 
                    path="/workouts" 
                    element={
                        <Workouts 
                            workouts={workouts}
                            onUpdateWorkout={handleUpdateWorkout}
                            onDeleteWorkout={handleDeleteWorkout}
                        />} />
                <Route 
                    path="/addWorkout" 
                    element={<AddWorkout onAddWorkout={handleAddWorkout} />} />
                <Route path="/editWorkout/:id" element={<EditWorkout onUpdateWorkout={handleUpdateWorkout} />} />
            </Routes>
            
        </div>
    )
}

export default App