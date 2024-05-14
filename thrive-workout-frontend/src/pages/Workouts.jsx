import './Workouts.css'
// this is a modal
const Workouts = ({isVisible, onClose, workouts }) => {
    if (!isVisible) return null

    return (
        <div className="workouts-modal">
            <div className="workouts-modal-content">
                <button onClick={onClose}>X</button>
                <h1>Workouts</h1>
                <div className="workout-card-container">
                    {workouts.map((workout, index) => (
                        <div key={index} className="workout-card">
                            <h3>{workout.name}</h3>
                        </div>
                    ))}
                </div>
                <button className="add-workout-btn">Add New Workout</button>
                </div>
        </div>
    )
}
export default Workouts
