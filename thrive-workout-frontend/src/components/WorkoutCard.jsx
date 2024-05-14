const WorkoutCard = ({ workout, onSelectWorkout }) => {
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
            {/* <img src={workout.image} alt={workout.name} style={{ width: '100px', height: '100px' }} /> */}
            {workout.exercises && workout.exercises.map((exercise, index) => (
                <p key={index}>{exercise.name}</p>
            ))}
        </div>
    )
}
export default WorkoutCard

// display info for single workout card and handle selection of workout when clicked 