import { Route, Routes, useNavigate } from 'react-router'
import { useState, useEffect } from 'react'

import './App.scss'

import Home from './pages/Home'
import Workouts from './pages/Workouts/Workouts'
import AddWorkout from './pages/Add-Workout/AddWorkout'
import EditWorkout from './pages/Edit-Workout/EditWorkout'
import Header from './components/header/Header'
import Register from './components/Register'
import Login from './components/Login'
import UserSettings from './pages/UserSettings/UserSettings'

// Imports for API calls
import fetchExercises from './services/ExerciseAPI'
import fetchWorkouts from './services/fetchWorkouts'
import updateWorkout from './services/updateWorkout'
import deleteWorkout from './services/deleteWorkout'

function App() {
    const [exercises, setExercises] = useState([])
    const [workouts, setWorkouts] = useState([])
    const navigate = useNavigate()

    const [currentUser, setCurrentUser] = useState( null )

    useEffect(() => {
        const loadExercises = async () => {
            const data = await fetchExercises()
            setExercises(data)
        }
        loadExercises()
    }, [])

    useEffect(() => {
        const loadWorkouts = async () => {
            const workoutsData = await fetchWorkouts()
            setWorkouts(workoutsData)
        }
        loadWorkouts()
    }, [])
    

    const handleAddWorkout = (newWorkout) => {
        setWorkouts([...workouts, newWorkout])
        navigate('/workouts') // Navigate to the workouts page after saving
    }

    const handleUpdateWorkout = async (updatedWorkout) => {
        const result = await updateWorkout(updatedWorkout._id, updatedWorkout)
        if (result) {
            setWorkouts(workouts.map(w => w._id === result._id ? result : w))
            navigate('/workouts')
        }
    }

    const handleDeleteWorkout = async (workout) => {
        const result = await deleteWorkout(workout._id)
        if (result) {
            console.log('Deleted workout:', result)
            setWorkouts(workouts.filter(w => w._id !== workout._id))
        } else { 
            console.log('Failed to delete workout')
        }
    }

    const handleLoginSuccess = (user) => {
        setCurrentUser(user)
        navigate('/')
    }

    const handleLogout = (user) => {
        setCurrentUser( null )
        navigate('/login')
    }

    // useEffect( ()=>{
    //     if(!currentUser)navigate("/login")
    // }, [] )

    return (
        <div className="App">

            <Header
                name={ <>THRIVE<span>workout</span></> } 
                links={["workouts"]}
                currentUser={ currentUser }
                onLogout={handleLogout} 
                />
        
                <Register />


                <Login onLoginSuccess={handleLoginSuccess}/>

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

                    <Route path='/user/:userId' element={<UserSettings />}/>
                </Routes>
             

            
        </div>
    )
}

export default App