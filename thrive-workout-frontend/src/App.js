import { Route, Routes, useNavigate } from 'react-router'
import './App.css'
import Home from './pages/Home'
import fetchExercises from './services/ExerciseAPI'
import { useState, useEffect } from 'react'
import Workouts from './pages/Workouts'
import AddWorkout from './pages/AddWorkout'
import EditWorkout from './pages/EditWorkout'

function App() {
  // manage State for exercises and workouts
    const [exercises, setExercises] = useState([])
    const [workouts, setWorkouts] = useState([])
    const navigate = useNavigate()

    // fetch exercises from API/backend when component mounts
    useEffect(() => {
        const loadExercises = async () => {
            const data = await fetchExercises()
            setExercises(data)
        }
        loadExercises()
    }, [])


    // function for handling adding a new workout
    const handleAddWorkout = (newWorkout) => {
        setWorkouts([...workouts, newWorkout])
        navigate('/workouts') // Navigate to the workouts page after saving
    }

    // function for handling updating a workout
    const handleUpdateWorkout = (updatedWorkout) => {
      // update state 
      // use map to iterate over each workout object in workouts array.  for each workout in the array, if the name of the workout object (workout.name) matches the name of the updated workout (updatedWorkout.name), replace the workout object with the updated workout object, if they dont match then it stays the same 
      // set new array(created from the map function) as the new state for workouts.
      setWorkouts(workouts.map(workout => workout.name === updatedWorkout.name ? updatedWorkout : workout))

      // navigate to workouts page 
      // navigate is a function from react-router-dom.  it is used to navigate to a new page.  
      navigate('/workouts')
    }

    // function for handling deleting a workout
    const handleDeleteWorkout = (workoutToDelete) => {
        setWorkouts(workouts.filter(workout => workout !== workoutToDelete))
    }

    return (
      // routes for components and passing props
        <div className="App">
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



{/* <Route path="/workouts/:id" element={<Home exercises={exercises} />} /> */}