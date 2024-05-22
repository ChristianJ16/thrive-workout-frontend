import { useState } from 'react'
import WorkoutCard from '../../components/WorkoutCard/WorkoutCard'
import WorkoutInfo from '../../components/Workout-Info/WorkoutInfo'
import { Link, useNavigate } from 'react-router-dom'
import './Workouts.scss'

const Workouts = ({ workouts, onUpdateWorkout, onDeleteWorkout }) => {
    const [selectedWorkout, setSelectedWorkout] = useState(null)
    const navigate = useNavigate()

    const handleSelectWorkout = (workout) => {
        setSelectedWorkout(workout)
    }

    const handleCloseWorkoutInfo = () => {
        setSelectedWorkout(null)
    }

    const handleEditWorkout = (workout) => {
        navigate(`/editWorkout/${workout.name}`, {state: { workout }})
        // passed state 
        //workout object is passed to EditWorkout component so that it can be edited
    }
    
    return (
        <div className="Workouts">
            <h1>My Workouts</h1>
            <Link to="/addWorkout">
                <button>Add New Workout</button>
            </Link>
            <div className="workoutCardsContainer">
                {workouts.map((workout, index) => (
                    <WorkoutCard 
                    key={index} 
                    workout={workout} 
                    onSelectWorkout={handleSelectWorkout}  
                    />
                ))}
            </div>
            {selectedWorkout && (
                <WorkoutInfo
                    workout={selectedWorkout}
                    onClose={handleCloseWorkoutInfo}
                    onUpdateWorkout={onUpdateWorkout}
                    onDeleteWorkout={onDeleteWorkout}
                />
            )}
            {selectedWorkout && (
                <button onClick={() => handleEditWorkout(selectedWorkout)} className='deleteBtn' > Edit Workout </button>
            )}
        </div>
    )
}

export default Workouts