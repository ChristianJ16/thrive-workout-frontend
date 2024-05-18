import { useEffect, useState } from "react"
import CardImage from "./CardImage"
import CardName from "./CardName"
import fetchExercises from "../services/ExerciseAPI"
import ExcerciseModal from "./ExerciseModal"

const ExcerciseCard = () => {
  const [exerciseData, setExerciseData] = useState([])
  const [displayCount, setDisplayCount] = useState(24)
  const [selectedExercise, setSelectedExercise] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const data = await fetchExercises()
      setExerciseData(data)
    } catch (error) {
      console.error("Error fetching exercise data:", error)
    }
  }

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + 8)
  }

  const handleImageClick = (index) => {
    setSelectedExercise(exerciseData[index])
  }

  const handleCloseModal = () => {
    setSelectedExercise(null)
  }

  return (
    <div style={{ position: "relative" }}>
      <div className="cardGrid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 260px)",
          justifyContent: "center",
          rowGap: "18px",
          columnGap: "18px",
          marginTop: "350px",
        }}
      >
        {exerciseData.slice(0, displayCount).map((item, index) => (
          <div
            className="ExcerciseCard"
            key={item.id}
            style={{
              borderStyle: "solid",
            }}
          >
            <section style={{
              display: "flex",
              justifyContent: "center",

            }}>
              <button style={{
                all: "unset",
                cursor: "pointer",
                textTransform: "capitalize",
                textAlign:"center",
              }} onClick={() => handleImageClick(index)}>
                <CardName index={index} />
                <CardImage index={index} />
              </button>
            </section>
          </div>
        ))}
      </div>
      {displayCount < exerciseData.length && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <button onClick={handleLoadMore}>Load More</button>
        </div>
      )}
      {selectedExercise && (
        <ExcerciseModal
          exercise={selectedExercise}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

export default ExcerciseCard