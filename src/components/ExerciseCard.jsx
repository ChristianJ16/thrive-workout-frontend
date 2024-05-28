import { useEffect, useState } from "react"
import CardImage from "./CardImage"
import CardName from "./CardName"
import fetchExercises from "../services/ExerciseAPI"
import ExcerciseModal from "./ExerciseModal"
import Search from "./SearchBar/Search"
import "./ExerciseCard.scss"

const ExcerciseCard = () => {
  const [exerciseData, setExerciseData] = useState([])
  const [totalDisplayCount, setTotalDisplayCount] = useState(24) // Total count of items displayed
  const [selectedExercise, setSelectedExercise] = useState(null)
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const data = await fetchExercises()
      setExerciseData(data)
      setSearchResults(data.slice(0, 24))
    } catch (error) {
      console.error("Error fetching exercise data:", error)
    }
  }

  const handleLoadMore = async () => {
    try {
      const nextItems = await fetchExercises(totalDisplayCount, 8)
      setSearchResults(prevResults => [...prevResults, ...nextItems])
      setTotalDisplayCount(prevCount => prevCount + 8)
    } catch (error) {
      console.error("Error fetching more items:", error)
    }
  }

  const handleImageClick = (index) => {
    setSelectedExercise(searchResults[index])
  }

  const handleCloseModal = () => {
    setSelectedExercise(null)
  }

  const handleSearch = (query) => {
    const results = exerciseData.filter((exercise) =>
      exercise.name.toLowerCase().includes(query.toLowerCase())
    )
    setSearchResults(results)
    setTotalDisplayCount(24)
  }

  return (
    <div style={{ position: "relative" }}>
      <div className="search-bar">
        <Search exerciseData={exerciseData} onSearch={handleSearch} />
      </div>
      <div
        className="cardGrid"
      >
        {searchResults.slice(0, totalDisplayCount).map((item, index) => (
          <div
            className="ExerciseCard"
            key={item.id}
          >
            <section
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                style={{
                  all: "unset",
                  cursor: "pointer",
                  textTransform: "capitalize",
                  textAlign: "center",
                  width: "100%",
                  // height:"280px",
                }}
                onClick={() => handleImageClick(index)}
              >
                <CardName exercise={item} />
                <CardImage exercise={item} />
              </button>
            </section>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <button className="load-more-button"
          onClick={handleLoadMore}>Load More</button>
      </div>
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