import React from "react"
import testData from "../pages/testData"

const CardName = ({ index }) => {
  const item = testData[index];

  if (!item) {
    return <div>No item found</div>;
  }

  return (
    <div>
      <h2 style={{
        fontSize: "15px",
        display: "flex",
        justifyContent: "center",
      }} >{item.name}</h2>
    </div>
  )
}

export default CardName