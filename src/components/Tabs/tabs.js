import React, { useState } from "react"
import "./tab.css"
import CardTab from "./tabCard"
import tabData from "./tabData"

function Tab() {
  const [count, setCount] = useState(0)

  function Card(val) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <CardTab
          imgsrc={val.imgsrc}
          name={val.head}
          link={val.link}
          description={val.description}
        />
        <h4 className="title" style={{ color: `#ffffff` }}>
          {val.head}
        </h4>
        <h5 style={{ color: `#ffffff` }}>
          {val.date} <span style={{ color: "#0c85da" }}>{val.time}</span>
        </h5>
      </div>
    )
  }

  function clicked(num) {
    setCount(num)
  }
  return (
    <>
      <div className="container-fluid button-tabs">
        <div className="d-flex justify-content-center ">
          <button
            id="button"
            type="button"
            className={` ${count === 0 ? " active-glow" : "glow"}`}
            onClick={() => {
              clicked(0)
            }}
          >
            Judges
          </button>
          <button
            id="button"
            type="button"
            className={` ${count === 1 ? " active-glow" : "glow"}`}
            onClick={() => {
              clicked(1)
            }}
          >
            Speakers
          </button>

          <button
            id="button"
            type="button"
            className={` ${count === 2 ? " active-glow" : "glow"}`}
            onClick={() => setCount(2)}
          >
            Mentors
          </button>
          {/* <button
            id="button"
            type="button"
            className="glow"
            onClick={() => setCount(3)}
          >
            Sponsers
          </button> */}
        </div>

        <div className="row d-flex justify-content-around">
          {tabData[count].map(Card)}
        </div>
      </div>
    </>
  )
}
export default Tab
