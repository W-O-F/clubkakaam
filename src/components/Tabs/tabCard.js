import React from "react"
import "./tab.css"
import ldin from "../../images/linkedinp.svg"


const CardTab = props => {
  return (
    <>
      <div id="cardcol">
        <div className="box" style={{ minWidth: `225px` }}>
          <img id="pic" src={props.imgsrc} alt="img" className="img-fluid" />
          <div className="box-content">
            <p className="description">
              {props.description }
            </p>
            <a className="read-more" href={props.link}>
              <img
                className="img-fluid"
                width="70px" height="70px"
                src={ldin}
                alt="Linkedin"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardTab
