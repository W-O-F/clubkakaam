import React from "react"
import { Sponsorcarddiv, Hackslash } from "./style"
import ldin from "../images/linkedinp.svg"
import fb from "../images/facebook.svg"
import insta from "../images/instagram.svg"

const Sponsorcard = props => {
  return (
    <Sponsorcarddiv
      className="d-flex justify-content-center align-items-center"
      type={props.type}
    >
      <a
        target="_blank"
        rel="noreferrer"
        style={{ maxHeight: `90%` }}
        href={props.link}
      >
        <img
          src={props.url}
          alt=""
          className="img-fluid"
          data-aos="zoom-in"
          data-aos-duration="300"
        />
      </a>
    </Sponsorcarddiv>
  )
}

export default Sponsorcard

export const LeadOrganiser = props => {
  return (
    <Hackslash>
      <div className="d-flex row m-1">
        <div className="col-md-6 mt-3 mb-3 ">
          <img
            src="images/hackslash.svg"
            alt="hackslash"
            className="main-img"
          />
        </div>

        <div className="col-md-6  mt-3 mb-3   ">
          <h2 className="card-title " style={{ fontSize: `3rem` }}>
            Hackslash Club
          </h2>
          <p className="card-text">
            Hackslash Developers' Club, NIT Patna is a community intended to
            provide a room for college students to learn and collaborate on a
            plethora of projects among themselves as well as with mentors. It is
            open for every student, ranging from novice developers who are just
            starting, to advanced developers who want to further enhance their
            skills
          </p>
          <div className="card-footer">
            <a href="https://www.linkedin.com/company/hackslash">
              <img className="social" src={ldin} alt="linkedin" />
            </a>
            <a href="https://www.facebook.com/hackSlash.nitp">
              <img className="social" src={fb} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/hackslash.nitp/">
              <img className="social" src={insta} alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </Hackslash>
  )
}
