import React from "react"
import "./timeline.css"
import TimelineCard from "./TimelineCard"

const Timeline = () => {
  return (
    <>
      <div className="timeline">
        <div className="container py-5">
          <h1 id="time">Timeline</h1>
          <div className="row">
            <div className="col-lg-7 myCard mx-auto">
              <ul className="timeline">
                <TimelineCard
                  date="25 Dec, 2020"
                  data1="12:00 AM"
                  data2="Registration Starts"
                />

                <TimelineCard
                  date="8 Jan, 2020"
                  data1="12:00 AM"
                  data2="Workshops"
                />

                <TimelineCard
                  date="15 Jan, 2020"
                  data1="6:00 PM"
                  data2="Hackathon Starts"
                />

                <TimelineCard
                  date="16 Jan, 2020"
                  data1="6:00 PM"
                  data2="Mid-Evaluation"
                />

                <TimelineCard
                  date="17 Jan, 2020"
                  data1="6:00 AM"
                  data2="Hackathon Ends"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Timeline
