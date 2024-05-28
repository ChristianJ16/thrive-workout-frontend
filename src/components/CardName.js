import React from "react"

const CardName = ({ exercise }) => {
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
