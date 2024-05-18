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
    const [filteredExercises, setFilteredExercises] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const icons = [faDumbbell, faStopwatch20, faHeartPulse, faPersonRunning, faHeart, faPersonBiking, faHeadphones, faWeight]
    useEffect(() => {
        const loadExercises = async () => {
            try {
                const data = await fetchExercises()
                console.log('Fetched exercises:', data)
                setExercises(data)
                setFilteredExercises(data)
            } catch (error){
                console.log('Error fetching exercises:', error)
                setExercises([])
            }
        }
        loadExercises()
    }, [])

    useEffect(() => {
        setFilteredExercises(
            exercises.filter(exercise => exercise.name.toLowerCase().includes(searchTerm.toLowerCase()))
        )
    }, [exercises, searchTerm])

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
        <div className="addWorkout">
            <h1 className='h1'>Add Workout</h1>
            <div className='saveWorkout'>
                <div className='workoutName'>
                    <h3>Workout Name:</h3>
                    <input 
                        type="text" 
                        value={workoutName} 
                        onChange={(e) => setWorkoutName(e.target.value)} 
                        placeholder="Enter Workout Name"
                    />
                </div>
                <div className='iconSelector'>
                    <h3> Select an Icon: </h3>
                    <div className='icons'>
                        {icons.map((icon, index) => (
                            <label key={index} className={selectedIcon === icon ? 'selected' : ''}>
                                <input
                                    type="radio" 
                                    value={icon.iconName}
                                    checked={selectedIcon === icon}
                                    onChange={() => setSelectedIcon(icon)}/>
                                <FontAwesomeIcon icon={icon} size="4x" />
                            </label>
                        ))}
                    </div>
                </div>
                <button onClick={handleSave}> Save </button>
            </div>
            <div className='exerciseSidebar'>
                <h3> Select Exercises: </h3>
                <input 
                    type='text'
                    placeholder='Search Exercises'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
                <div className='exerciseList'>
                    {filteredExercises.length > 0 ? (
                        filteredExercises.map((exercise, index) => (
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
                        <p>Loading exercises ... </p>
                    )}
                </div>
            </div>
        </div>
    )
}
export default AddWorkout

// "Only one radio button in a given group can be selected at the same time. Radio buttons are typically rendered as small circles, which are filled or highlighted when selected." -mdn web docs