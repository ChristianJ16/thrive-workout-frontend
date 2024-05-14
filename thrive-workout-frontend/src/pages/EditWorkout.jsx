import { useState, useEffect } from'react'
import fetchExercises from '../services/ExerciseAPI'
import { useLocation } from 'react-router-dom'
// hook to get the state passed from Workouts component 
const EditWorkout = ({ onUpdateWorkout }) => {
  const location = useLocation()
  const { workout } = location.state // retrieve workout object passed from state in the Workouts component page
  const [workoutName, setWorkoutName] = useState(workout.name)
  const [selectedExercises, setSelectedExercises] = useState(workout.exercises)
  const [exercises, setExercises] = useState([])

  useEffect(() => {
      const loadExercises = async () => {
          try {
              const data = await fetchExercises()
              setExercises(data)
          } catch (error) {
              console.log('Error fetching exercises:', error)
              setExercises([])
          }
      }
      loadExercises()
  }, [])

  const handleExerciseChange = (e) => {
      const { value, checked } = e.target
      if (checked) {
          setSelectedExercises([...selectedExercises, value])
      } else {
          setSelectedExercises(selectedExercises.filter(exercise => exercise !== value))
      }
  }

  const handleSave = () => {
      const updatedWorkout = {
          ...workout,
          name: workoutName,
          exercises: selectedExercises,
      }
      onUpdateWorkout(updatedWorkout)
  }

  return (
      <div className="EditWorkout" style={{ padding: "20px" }}>
          <h1>Edit Workout</h1>
          <div className='saveWorkout'>
            <input
                type="text"
                value={workoutName}
                onChange={(e) => setWorkoutName(e.target.value)}
                placeholder="Enter Workout Name"
                style={{
                    fontSize: "18px",
                    width: "100%",
                    padding: "5px",
                    margin: "10px 0",
                }} />
            <button
                onClick={handleSave}
                style={{
                    marginTop: "20px",
                    padding: "10px",
                    backgroundColor: "blue",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }} > Save </button>
          </div>
          <div>
              <h3>Exercises:</h3>
              {exercises.length > 0 ? (
                  exercises.map((exercise, index) => (
                      <div key={index}>
                          <label>
                              <input
                                  type="checkbox"
                                  value={exercise.name}
                                  checked={selectedExercises.includes(exercise.name)}
                                  onChange={handleExerciseChange}
                              />
                              {exercise.name}
                          </label>
                      </div>
                  ))
              ) : (
                  <p>Loading exercises...</p>
              )}
          </div>
      </div>
  )
}

export default EditWorkout

// change so that after editing it goes back to the workout info page