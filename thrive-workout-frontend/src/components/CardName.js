import { useState, useEffect } from "react"
import fetchExercises from "../services/ExerciseAPI"

const CardName = ({ index }) => {
  const [exercise, setExercise] = useState(null)

  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        const exercises = await fetchExercises()
        setExercise(exercises[index])
      } catch (error) {
        console.error("Error fetching exercise data:", error)
      }
    }

    fetchExerciseData()
  }, [index])

  if (!exercise) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2
        style={{
          fontSize: "15px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {exercise.name}
      </h2>
    </div>
  )
}

export default CardName