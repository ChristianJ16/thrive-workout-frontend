import { useState } from 'react'
import WorkoutCard from '../components/WorkoutCard'
import WorkoutInfo from '../components/WorkoutInfo'
import { Link, useNavigate } from 'react-router-dom'

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
    }
    return (
        <div className="Workouts" style={{ padding: "20px" }}>
            <h1>My Workouts</h1>
            <Link to="/addWorkout">
                <button 
                    style={{ 
                        margin: "10px", 
                        padding: "10px", 
                        backgroundColor: "navy", 
                        color: "white", 
                        border: "none", 
                        borderRadius: "5px", 
                        cursor: "pointer" 
                    }}>Add New Workout</button>
            </Link>
            <div className="workoutCardsContainer" style={{ display: "flex", flexWrap: "wrap" }}>
                {workouts.map((workout, index) => (
                    <WorkoutCard key={index} workout={workout} onSelectWorkout={handleSelectWorkout} />
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
                <button onClick={() => handleEditWorkout(selectedWorkout)}  style={{
                    marginTop: "20px",
                    padding: "10px",
                    backgroundColor: "navy",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}> Edit Workout </button>
            )}
        </div>
    )
}

export default Workouts