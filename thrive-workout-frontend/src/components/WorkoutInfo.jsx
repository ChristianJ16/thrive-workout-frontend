import { useNavigate } from "react-router-dom"

const WorkoutInfo = ({ workout, onClose, onDeleteWorkout }) => {
    const navigate = useNavigate()

    const handleDelete = () => {
        onDeleteWorkout(workout)
        onClose()
    }
    const handleEdit = () => {
        navigate(`/editWorkout/${workout.name}`, {state: { workout }})
    }

    return (
        <div 
            className="WorkoutInfo" 
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                zIndex: 1000,
                padding: "20px",
                overflowY: "scroll",
            }}>
                <button 
                    onClick={onClose}
                    style={{
                        // position: "absolute",
                        // top: 0,
                        // right: 0,
                        // padding: "10px",
                        // backgroundColor: "white",
                        // color: "black",
                    }}>X</button>
                    <h2>Workout Details</h2>
                    <h3 style={{ fontSize: "22px", margin: "10px 0" }}>{workout.name}</h3>
                    <button onClick={handleDelete} style={{ color: "red", marginBottom: "20px" }}>Delete Workout</button>
                    <div> 
                        <h3>Exercises:</h3>
                        {workout.exercises && workout.exercises.length > 0 ? (
                            workout.exercises.map((exercise,index) => (
                                <div key={index}>{exercise}</div>
                            ))
                        ) : (
                            <p>No Exercises Added...</p>
                        )}
                    </div>
                    <button onClick={handleEdit}
                    style={{
                        marginTop: "20px",
                        padding: "10px",
                        backgroundColor: "navy",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}> Edit Workout </button>
                </div>
    )
}
export default WorkoutInfo