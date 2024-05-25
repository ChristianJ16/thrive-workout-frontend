import { useEffect } from "react"
import "./ExerciseModal.scss"

const ExcerciseModal = ({ exercise, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    console.log("Modal Exercise:", exercise)
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  if (!exercise || !exercise.name) {
    return null
  }

  return (
    <div className="modal">
      <div className="modal-content">
      <span className="close" onClick={onClose}>&#x2717;</span>
        <div className="modal-name">
        <h2>{exercise.name}</h2>
        </div>
        <div className="content-container">
        <div className="modal-gif">
        <img src={exercise.gifUrl} alt={exercise.name} />
        </div>
        <div className="sideBar">
        <p><b>Target</b>: {exercise.target}</p>
        <p><b>Seconday Muscles</b>: {exercise.secondaryMuscles}</p>
        <p><b>Instructions</b>: {exercise.instructions}</p>
        <p><b>Equipment</b>: {exercise.equipment}</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ExcerciseModal
