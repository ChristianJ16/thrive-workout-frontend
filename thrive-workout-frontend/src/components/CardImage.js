import React from "react"
import testData from "../pages/testData"

const CardImage = ({ index }) => {
  const item = testData[index];

  if (!item) {
    return <div>No item found</div>;
  }

  return (
    <div>
      <img style={{
        width: "200px"
      }} src={item.gifUrl} alt={item.name} />
    </div>
  )
}

export default CardImage