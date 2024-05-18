import { useState, useEffect } from "react"
import fetchExercises from "../services/ExerciseAPI"

const CardImage = ({ index }) => {
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
      <img
        style={{ width: "200px" }}
        src={exercise.gifUrl}
        alt={exercise.name}
      />
    </div>
  )
}

export default CardImage