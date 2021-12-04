import React from "react"
import { Organiserdiv } from "./style"
import Organizerlist from "../shared/organizerlist"
import Organizercard from "./organizercard"
class Organizers extends React.Component {
  render() {
    return (
      <>
        <Organiserdiv id="organizer">
          <div className="row d-flex justify-content-center">
            <h1>Organizers</h1>
          </div>
          <div className="container">
            <div className="row d-flex justify-content-around align-items-center stackrow">
              {Organizerlist.map(elem => {
                return (
                  <div
                    style={{
                      display: `flex`,
                      justifyContent: `center`,
                      alignItems: `center`,
                      flexDirection: `column`,
                    }}
                  >
                    <Organizercard
                      url={elem.img}
                      linkedin={elem.linkedin}
                      // facebook={elem.facebook}
                      // instagram={elem.instagram}
                    />
                    <h6 style={{ color: `#ffffff`, fontFamily: `Poppins` }}>
                      {elem.name}
                    </h6>
                    <p style={{ color: `#2286e0`, fontFamily: `Poppins`,fontSize:`0.8rem` }}>
                      {elem.desg}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </Organiserdiv>
      </>
    )
  }
}

export default Organizers
