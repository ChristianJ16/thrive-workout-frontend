import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './WorkoutCard.scss'

import { faDumbbell, faStopwatch20, faHeartPulse, faPersonRunning, faHeart, faPersonBiking, faHeadphones, faWeight } from "@fortawesome/free-solid-svg-icons"


const iconMap = {
    dumbbell: faDumbbell,
    stopwatch20: faStopwatch20,
    heartPulse: faHeartPulse,
    personRunning: faPersonRunning,
    heart: faHeart,
    personBiking: faPersonBiking,
    headphones: faHeadphones,
    weight: faWeight
}


const WorkoutCard = ({ workout, onSelectWorkout }) => {
    const icon = iconMap[workout.icon] 

    return (
        <div className="WorkoutCard" onClick={() => onSelectWorkout(workout)}>
            <h3>{workout.name}</h3>
            <FontAwesomeIcon icon={icon} size="8x" />
            {workout.exercises && workout.exercises.map((exercise, index) => (
                <p key={index}>{exercise.name}</p>
            ))}
        </div>
    )
}
export default WorkoutCard

// display info for single workout card and handle selection of workout when clicked 

