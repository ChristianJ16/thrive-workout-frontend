import { useEffect, useState } from 'react'
import fetchExercises from '../services/ExerciseAPI'
const AddWorkout = ({ onAddWorkout }) => {
    const [workoutName, setWorkoutName] = useState('')
    const [selectedExercises, setSelectedExercises] = useState([])
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        const loadExercises = async () => {
            try {
                const data = await fetchExercises()
                console.log('Fetched exercises:', data)
                setExercises(data)
            } catch (error){
                console.log('Error fetching exercises:', error)
                setExercises([])
            }
        }
        loadExercises()
    }, [])

    const handleExerciseChange = (e) => {
        const { value, checked } = e.target
        if (checked) {
            setSelectedExercises([...selectedExercises, value])
        } else {
            setSelectedExercises(selectedExercises.filter(exercise => exercise !== value))
        }
    }

    // add a new workout by calling the 'onAddWorkout' function passed as a prop from parent 
    const handleSave = () => {
        const newWorkout = {
            name: workoutName,
            exercises: selectedExercises
        }
        console.log('Saving workout:', newWorkout)
        onAddWorkout(newWorkout)
    }

    return (
        <div className="AddWorkout" style={{ padding: "20px" }}>
            <h1>Add Workout</h1>
            <div className='saveWorkout'>
                <input 
                    type="text" 
                    value={workoutName} 
                    onChange={(e) => setWorkoutName(e.target.value)} 
                    placeholder="Enter Workout Name"
                    style={{
                        fontSize: "18px",
                        width: "100%",
                        padding: "5px",
                        margin: "10px 0",
                    }} />
                <button 
                    onClick={handleSave} 
                    style={{ 
                        marginTop: "20px", 
                        padding: "10px", 
                        backgroundColor: "blue", 
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                > Save </button>
            </div>
            <div>
                <h3>Exercises:</h3>
                {exercises.length > 0 ? (
                    exercises.map((exercise, index) => (
                        <div key={index}>
                            <label>
                                <input 
                                    type="checkbox" 
                                    value={exercise.name} 
                                    onChange={handleExerciseChange} 
                                />
                                {exercise.name}   
                            </label>
                        </div>
                    ))
                ) : (
                    <p>Loading exercises...</p>
                )}
            </div>
        </div>
    )
}
export default AddWorkout

