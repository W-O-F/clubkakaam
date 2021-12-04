import React from 'react';
import "./timeline.css";

const TimelineCard = (props) => {
  return (
    <>
 <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
    <div className="timeline-arrow"></div>
    <span id="date_h">{props.date}</span>
    <h2 className="h5 mb-0 py-3">{props.data1}</h2>
    <p className="text-small mt-1 font-weight-light">{props.data2}</p>
</li>
    </>
  );
}

export default TimelineCard