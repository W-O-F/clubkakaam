import React from "react"
import { Aboutdiv } from "./style"

class About extends React.Component {
  render() {
    return (
      <>
        <Aboutdiv id="about" className="container-fluid">
          <div className="container d-flex justify-content-around">
            <div className="row" style={{ marginTop: `5vh` }}>
              <h1
                className="abouthead"
                data-aos="zoom-in"
                data-aos-duration="300"
              >
                The Event
              </h1>
              <p
                className="abouttxt"
                data-aos="zoom-in"
                data-aos-duration="300"
              >
                Hack can do anything and everything!! Here the red sun manifests
                danger and the trainee is hacking to varnish the danger. This is
                HACKNITP. Hackslash presents HACKNITP 3.0. The path to success
                starts with a single step and a single opportunity. This is
                one!! Hackslash Developers' Club, NIT Patna empowers students to
                achieve excellence in virtual world. The world of codes may
                frighten you like huge danger but club will hold your hands to
                teach you to fight but don't forget the game is yours. HackSlash
                is student driven community. Student shall work for growth of
                students. The club strives to build and improve the open
                sourcing environment and the coding culture of the whole city of
                Patna and eventually the whole state of Bihar. The will power
                and determination of each Developer, Competitive Coder, Designer
                and Innovative thinker is what governs our great community.
              </p>
            </div>
          </div>
          <div className="container" style={{ marginTop: `5vh` }}>
            <h1
              style={{ marginTop: `5vh`, width: `100%` }}
              className="abouthead"
              data-aos="zoom-in"
              data-aos-duration="300"
            >
              Perks for each participant:-
            </h1>

            <ul className="abouttxt" data-aos="zoom-in" data-aos-duration="300">
              <li>
                Free Taskade Pro upgrade (have to send email id to organizers)
              </li>
              <li>Developer Pass for DockShip (For ML tracks)</li>
              <li>3 free months of hacker plan from Repl.it</li>
              <li>Certificate from GiveMyCertificate</li>
              <li>20% discount on ebooks from Rosenfeld Media</li>
              <li>10% discount on any of the paid courses of UAceIt</li>
              <li>
                Access to Wolfram|One for all participants for thirty days
              </li>
              <li>Voiceflow’s Professional License subscription</li>
              <li>Internship opportunity from NewsAurChai (NAC)</li>
              <li>
                30 days access to full coding interview prep course from
                Interview cake
              </li>
              <li>
                Free 1-year All Products Pack educational subscriptions of any
                JetBrains IDE
              </li>
              <li>Github Student Pack</li>
            </ul>
          </div>

          <div className="container" style={{ marginTop: `2vh` }}>
            <a
              style={{
                textDecoration: `none`,
                fontSize: `1.5rem`,
              }}
              className="abouthead"
              data-aos="zoom-in"
              data-aos-duration="300"
              href="http://bit.ly/rulebook-hacknitp3"
            >
              Download Rulebook
            </a>
          </div>
          <div className="container" style={{ marginTop: `5vh` }}>
            <h1
              style={{ marginTop: `5vh`, width: `100%` }}
              className="abouthead"
              data-aos="zoom-in"
              data-aos-duration="300"
            >
              When
            </h1>
            <h4 className="abouttxt" data-aos="zoom-in" data-aos-duration="300">
              15 January 6:00PM to 18 January 6:00AM
            </h4>
          </div>
        </Aboutdiv>
      </>
    )
  }
}

export default About
