import React from "react"

const CardImage = ({ exercise }) => {
  if (!exercise) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <img
        style={{ width: "200px", height: "auto", objectFit: "cover" }}
        src={exercise.gifUrl}
        alt={exercise.name}
      />
    </div>
  )
}

export default CardImage
