import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

const WorkoutCard = ({ workout, onSelectWorkout }) => {
    const [icon, setIcon] = useState(workout.icon)

    useEffect(() => {
        setIcon(workout.icon)
    }, [workout])

    return (
        <div className="WorkoutCard" onClick={() => onSelectWorkout(workout)} style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            margin: "10px",
            cursor: "pointer",
            width: "200px",
            textAlign: "center"
        }}>
            <h3>{workout.name}</h3>
            <FontAwesomeIcon icon={icon} size="8x" style={{ color: "rgb(87 106 187)"}} />
            {workout.exercises && workout.exercises.map((exercise, index) => (
                <p key={index}>{exercise.name}</p>
            ))}
        </div>
    )
}
export default WorkoutCard

// display info for single workout card and handle selection of workout when clicked 

