import React from "react"
import CardImage from "./CardImage"
import CardName from "./CardName"
import testData from "../pages/testData"

const ExcerciseCard = () => {
    const limitedData = testData.slice(0,12)
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns:"repeat(4,260px)",
            justifyContent: "center",
            rowGap: "18px",
            columnGap: "18px",
            marginTop: "350px",
        }}>
          {limitedData.map((item, index) => (
            <div className="ExcerciseCard" key={item.id} style={{
                borderStyle:"solid",
            }}>
            <section>
              <CardName index={index} />
              <CardImage index={index} />
            </section>
            </div>
          ))}
        </div>
    )
}

export default ExcerciseCard