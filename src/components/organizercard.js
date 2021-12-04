import React from "react"
import { Organizercarddiv } from "./style"
import ldin from "../images/linkedinp.svg"
import fb from "../images/facebook.svg"
import insta from "../images/instagram.svg"
const Organizercard = props => {
  return (
    <Organizercarddiv className="d-flex justify-content-center align-items-center">
      <img
        src={props.url}
        alt=""
        className="img-fluid"
        style={{ maxHeight: `100%` }}
        data-aos="zoom-in"
        data-aos-duration="300"
      />
      <div className="social">
        {props.linkedin ? (
          <a href={props.linkedin}>
            <img id="osocial" src={ldin} alt="linkedin" />
          </a>
        ) : null}
        {props.facebook ? (
          <a href={props.facebook}>
            <img id="osocial" src={fb} alt="facebook" />
          </a>
        ) : null}
        {props.instagram ? (
          <a href={props.instagram}>
            <img id="osocial" src={insta} alt="instagram" />
          </a>
        ) : null}
      </div>
    </Organizercarddiv>
  )
}

export default Organizercard
