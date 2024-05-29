import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import ExerciseModal from "../ExerciseModal"
import "./WorkoutInfo.scss"
import fetchExercises from "../../services/ExerciseAPI"

const WorkoutInfo = ({ workout, onClose, onDeleteWorkout }) => {
    const navigate = useNavigate()
    const [selectedExercise, setSelectedExercise] = useState(null)
    const [exerciseData, setExerciseData] = useState([])

    const fetchData = async () => {
        try {
        const data = await fetchExercises()
        setExerciseData(data)
        } catch (error) {
        console.error("Error fetching exercise data:", error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (!exerciseData.length) {
        return <div>Loading...</div>;
    }

    const handleDelete = () => {
        const token = localStorage.getItem('token')
        console.log("Deleting workout with ID: ", workout._id)
        onDeleteWorkout(workout._id, token)
        onClose()
    }
    const handleEdit = () => {
        navigate(`/editWorkout/${workout.name}`, {state: { workout }})
    }

    const handleExerciseClick = (exerciseName) => {
        const exerciseDetails = exerciseData.find(e => e.name === exerciseName)
        if (!exerciseDetails) {
            console.log("exercise details not found for: ", exerciseName)
            return
        }
        setSelectedExercise(exerciseDetails)
        console.log("Clicked Exercise Data:", exerciseName)
    }

    const handleCloseModal = () => {
        setSelectedExercise(null)
    }

    return (
        <div className="WorkoutInfo">
            <div className="divElements">
                <button onClick={onClose} className="closeBtn">X</button>
                <div className="workoutDetails">
                    <h1>{workout.name}</h1>
                    <div> 
                        <h3>Exercises:</h3>
                        {workout.exercises && workout.exercises.length > 0 ? (
                            workout.exercises.map((exercise, index) => (
                                <div 
                                    key={index} 
                                    onClick={() => handleExerciseClick(exercise)} 
                                    className="exercise"
                                >{exercise}</div>
                            ))
                        ) : (
                            <p>No Exercises Added...</p>
                        )}
                    </div>
                    <button onClick={handleEdit} className="editBtn"> Edit Workout </button>
                    <button onClick={handleDelete}className="deleteBtn">Delete Workout</button>
                </div>
                    {selectedExercise && (
                        <ExerciseModal
                            exercise={selectedExercise}
                            onClose={handleCloseModal} />
                    )}
                
            </div>
        </div>
    )
}
export default WorkoutInfo

