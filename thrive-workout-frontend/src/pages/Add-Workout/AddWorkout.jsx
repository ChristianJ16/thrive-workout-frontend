import { useEffect, useState, useRef } from 'react' 
import fetchExercises from '../../services/ExerciseAPI'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDumbbell, faStopwatch20, faHeartPulse, faPersonRunning, faHeart, faPersonBiking, faHeadphones, faWeight } from "@fortawesome/free-solid-svg-icons" 
import './AddWorkout.scss'
import  gsap  from 'gsap' 
import { useGSAP } from '@gsap/react'



const AddWorkout = ({ onAddWorkout }) => {
    const [workoutName, setWorkoutName] = useState('')
    const [selectedExercises, setSelectedExercises] = useState([])
    const [exercises, setExercises] = useState([])
    const [selectedIcon, setSelectedIcon] = useState(null)
    const [filteredExercises, setFilteredExercises] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)

    const icons = [faDumbbell, faStopwatch20, faHeartPulse, faPersonRunning, faHeart, faPersonBiking, faHeadphones, faWeight]

    
    // useRef hook to create a reference to elemnts
    const exerciseSidebarRef = useRef(null) 
    const exerciseListRef = useRef(null) 
    const workoutNameRef = useRef(null) 

    // fetch exercises when component mounts
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

    // filter exercises based on search term 
    useEffect(() => {
        setFilteredExercises(
            exercises.filter(exercise => exercise.name.toLowerCase().includes(searchTerm.toLowerCase()))
        )
    }, [exercises, searchTerm])

    useEffect(() => {
        setIsFormValid(workoutName && selectedIcon && selectedExercises.length > 0)
    }, [workoutName, selectedIcon, selectedExercises])

    // handle changing the selected exercises 
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
        if (!isFormValid) {
            console.log('Form is invalid') // maybe show a message that says to fill in all feilds before saving
            return
        }
        const newWorkout = {
            name: workoutName,
            exercises: selectedExercises,
            icon: selectedIcon,
        }
        console.log('Saving workout:', newWorkout)
        onAddWorkout(newWorkout)
    }

    

    // useGSAP hook to access the gsap animation library
    useGSAP(() => {
        // animate sidebar when in view 
        gsap.fromTo(exerciseSidebarRef.current, {
            // state before animation
            opacity: 0,
            x: 100 // starts 100px to the right of its final position
        }, {
            // state after animation
            opacity: 1,
            x: 0, // final position 
            duration: 1, // 1 second
        })

        // animate exercise list whith staggered effect 
        gsap.fromTo(exerciseListRef.current.children, {
            opacity: 0,
            y: 50 // positioned 50px above its final position
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1, // stagger the start time of each child eleemnt by .1 second 
        }) // cant get the list to animate when user leaves page and comes back ...???

        gsap.fromTo(workoutNameRef.current, {
            opacity: 0,
            y: -50 // positioned 50px below its final position
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
        })
    })


    return ( 
        <div className="addWorkout">
            <h1 className='h1' ref={workoutNameRef}>Add Workout</h1>
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
                <button onClick={handleSave} disabled={!isFormValid}> Save </button>
            </div>
            <div className='exerciseSidebar' ref={exerciseSidebarRef}>
                <h3> Select Exercises: </h3>
                <input 
                    type='text'
                    placeholder='Search Exercises'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
                <div className='exerciseList' ref={exerciseListRef}>
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