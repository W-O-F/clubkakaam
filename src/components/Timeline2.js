import React from "react"
import "./timelin2.css"

import { Chrono } from "react-chrono"

const Timeline2 = () => {
  const items = [
    {
      title: "25 Dec, 2020",
      cardTitle: "Registration Starts",
      cardSubtitle: "Registrations Open Now !!!",
    },
    {
      title: "8 Jan, 2021",
      cardTitle: "Workshops",
      cardSubtitle:
        "Workshops will be conducted to get you familiar with cutting-edge technologies...",
    },
    {
      title: "15 Jan, 2021 6:00 PM",
      cardTitle: "Hackathon Starts",
      cardSubtitle: "Get Ready for the 60-hours long Heat...",
    },
    {
      title: "16 Jan, 2021 6:00 PM",
      cardTitle: "Mid Evaluation",
      cardSubtitle: "Time to know about your power!!!",
    },
    {
      title: "18 Jan, 2021 6:00 AM",
      cardTitle: "Hackathon Ends",
      cardSubtitle: "END IS HERE...",
    },
  ]
  return (
    <>
      <div
        id="timeline"
        style={{ background: "#0f0000", color: "white", fontFamily: "Poppins" }}
        className="pt-5"
      >
        <h1 style={{ textAlign: "center", fontSize: "45px" }} className="pb-5">
          Timeline
        </h1>
        <div className="container main" style={{ background: "#0f0000" }}>
          <Chrono items={items} mode="VERTICAL_ALTERNATING" />
        </div>
      </div>
    </>
  )
}

export default Timeline2
