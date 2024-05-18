import { useEffect, useState } from 'react'
import fetchExercises from '../services/ExerciseAPI'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDumbbell, faStopwatch20, faHeartPulse, faPersonRunning, faHeart, faPersonBiking, faHeadphones, faWeight } from "@fortawesome/free-solid-svg-icons" 
import './styling/AddWorkout.scss'

const AddWorkout = ({ onAddWorkout }) => {
    const [workoutName, setWorkoutName] = useState('')
    const [selectedExercises, setSelectedExercises] = useState([])
    const [exercises, setExercises] = useState([])
    const [selectedIcon, setSelectedIcon] = useState(null)

    const icons = [faDumbbell, faStopwatch20, faHeartPulse, faPersonRunning, faHeart, faPersonBiking, faHeadphones, faWeight]
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
            exercises: selectedExercises,
            icon: selectedIcon,
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
                <div>
                    <h3> Select an Icon: </h3>
                    {icons.map((icon, index) => (
                        <label key={index} style={{margin: "0 10px"}}>
                            <input
                                type="radio" 
                                value={icon.iconName}
                                checked={selectedIcon === icon}
                                onChange={() => setSelectedIcon(icon)}/>
                            <FontAwesomeIcon icon={icon} size="4x" />
                        </label>
                    ))}
                </div>
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

// "Only one radio button in a given group can be selected at the same time. Radio buttons are typically rendered as small circles, which are filled or highlighted when selected." -mdn web docs