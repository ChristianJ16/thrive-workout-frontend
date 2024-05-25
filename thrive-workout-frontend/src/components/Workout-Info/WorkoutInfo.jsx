import { useNavigate } from "react-router-dom"
import { useState } from "react"
import ExcerciseModal from "../ExerciseModal"
import "./WorkoutInfo.scss"

const WorkoutInfo = ({ workout, onClose, onDeleteWorkout }) => {
    const navigate = useNavigate()
    const [selectedExercise, setSelectedExercise] = useState(null)

    const handleDelete = () => {
        console.log("Deleting workout with ID: ", workout._id)
        onDeleteWorkout(workout)
        onClose()
    }
    const handleEdit = () => {
        navigate(`/editWorkout/${workout.name}`, {state: { workout }})
    }

    const handleExerciseClick = (exercise) => {
        setSelectedExercise(exercise)
        console.log("selectedExercise", selectedExercise)
    }

    const handleCloseModal = () => {
        setSelectedExercise(null)
    }

    return (
        <div className="WorkoutInfo">
            <div className="divElements">
                <button onClick={onClose} className="closeBtn">X</button>
                <h2>Workout Details</h2>
                <h3 style={{ fontSize: "22px", margin: "10px 0" }}>{workout.name}</h3>
                <button onClick={handleDelete}className="deleteBtn">Delete Workout</button>
                <div> 
                    <h3>Exercises:</h3>
                    {workout.exercises && workout.exercises.length > 0 ? (
                        workout.exercises.map((exercise,index) => (
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
                {selectedExercise && (
                    <ExcerciseModal
                    exercise={selectedExercise}
                    onClose={handleCloseModal} />
                )}
            </div>
        </div>
    )
}
export default WorkoutInfo

