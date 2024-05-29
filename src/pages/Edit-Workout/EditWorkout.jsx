import { useState, useEffect } from 'react'
import fetchExercises from '../../services/ExerciseAPI'
import { useLocation, useNavigate } from 'react-router-dom'
// hook to get the state passed from Workouts component 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDumbbell, faStopwatch20, faHeartPulse, faPersonRunning, faHeart, faPersonBiking, faHeadphones, faWeight } from "@fortawesome/free-solid-svg-icons" 
import "./EditWorkout.scss"


const icons = [
    { iconName: 'dumbbell', icon: faDumbbell },
    { iconName: 'stopwatch20', icon: faStopwatch20 },
    { iconName: 'heartPulse', icon: faHeartPulse },
    { iconName: 'personRunning', icon: faPersonRunning },
    { iconName: 'heart', icon: faHeart },
    { iconName: 'personBiking', icon: faPersonBiking },
    { iconName: 'headphones', icon: faHeadphones },
    { iconName: 'weight', icon: faWeight }
]

const EditWorkout = ({ onUpdateWorkout, currentUser }) => {
    const navigate = useNavigate() 
    const location = useLocation() // used useLocation hook to access the location object passed from the Workouts component page
    const { workout } = location.state // destructured the workout object from location.state and assigned it to workout variable
    const [workoutName, setWorkoutName] = useState(workout.name) // initialized state with workout name
    const [selectedExercises, setSelectedExercises] = useState(workout.exercises) // initialized state with workout exercises
    const [exercises, setExercises] = useState([])
    const [selectedIcon, setSelectedIcon] = useState(icons.find(icon => icon.iconName === workout.icon)?.iconName)
    

    useEffect(() => {
        const loadExercises = async () => {
            try {
                const data = await fetchExercises()
                setExercises(data)
            } catch (error) {
                console.log('Error fetching exercises:', error)
                setExercises([])
            }
        }
        loadExercises()
    }, [])

    useEffect(() => {
        setSelectedIcon(workout.icon)
    }, [workout.icon])

    const handleExerciseChange = (e) => {
        const { value, checked } = e.target
        if (checked) {
            setSelectedExercises([...selectedExercises, value])
        } else {
            setSelectedExercises(selectedExercises.filter(exercise => exercise !== value))
        }
    }

    const handleSave = () => {
        const token = localStorage.getItem('token')
        const updatedWorkout = {
            ...workout,
            // userId: currentUser.id,
            name: workoutName,
            exercises: selectedExercises,
            icon: selectedIcon,
        }
        onUpdateWorkout(workout._id, updatedWorkout, token)
        navigate('/workouts') 
    }

    return (
        <div className="EditWorkout">
            <h1>Edit Workout</h1>
            <div className='saveWorkout'>
                <input
                    className='workoutName'
                    type="text"
                    value={workoutName}
                    onChange={(e) => setWorkoutName(e.target.value)}
                    placeholder="Enter Workout Name"
                />
                <div className='iconContainer'>
                    <h3>Select an Icon:</h3>
                    {icons.map((icon, index) => (
                        <label key={index}>
                            <input 
                                type="radio" 
                                name="icon"
                                value={icon.iconName} 
                                checked={selectedIcon === icon.iconName} 
                                onChange={() => setSelectedIcon(icon.iconName)} 
                            />
                            <FontAwesomeIcon icon={icon.icon} size="2x" />
                        </label>
                    ))}
                </div>
                <button
                    onClick={handleSave}
                    disabled={!workoutName ||!selectedExercises.length || !selectedIcon}
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
                                    checked={selectedExercises.includes(exercise.name)}
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

export default EditWorkout

