import React from "react"
import { Sponsordiv, SponserHead } from "./style"
import Sponsorcard, { LeadOrganiser } from "./sponsorcard"
import {
  GoldSponsors,
  SilverSponsers,
  Patrons,
  EventPartners,
  Communities,
} from "../shared/sponsorlist"
class Sponsers extends React.Component {
  render() {
    return (
      <>
        <Sponsordiv id="sponsors">
          <div className="row d-flex justify-content-center">
            <h1 style={{ fontSize: `4rem` }}>Sponsors</h1>
          </div>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <SponserHead color="gold">Gold Sponsors</SponserHead>
            </div>
            <div className="row d-flex justify-content-around align-items-center stackrow">
              {GoldSponsors.map(elem => {
                return (
                  <Sponsorcard url={elem.img} link={elem.link} type={`gold`} />
                )
              })}
            </div>
            <div className="row d-flex justify-content-center">
              <SponserHead color="silver">Silver Sponsors</SponserHead>
            </div>
            <div className="row d-flex justify-content-around align-items-center stackrow">
              {SilverSponsers.map(elem => {
                return (
                  <Sponsorcard
                    url={elem.img}
                    link={elem.link}
                    type={`silver`}
                  />
                )
              })}
            </div>
            <div className="row d-flex justify-content-center">
              <SponserHead color="#b08d57">Patrons</SponserHead>
            </div>
            <div className="row d-flex justify-content-around align-items-center stackrow">
              {Patrons.map(elem => {
                return (
                  <Sponsorcard
                    url={elem.img}
                    link={elem.link}
                    type={`patrons`}
                  />
                )
              })}
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                className="row d-flex justify-content-center"
                style={{ marginTop: `75px` }}
              >
                <SponserHead color="floralwhite">Lead Organizer</SponserHead>
              </div>
              <div className="row d-flex justify-content-around align-items-center">
                <LeadOrganiser />
              </div>
              <SponserHead color="floralwhite" style={{ marginTop: `75px` }}>
                Community Partner
              </SponserHead>
            </div>
            <div className="row d-flex justify-content-around align-items-center stackrow">
              {Communities.map(elem => {
                return (
                  <Sponsorcard
                    url={elem.img}
                    link={elem.link}
                    type={`community`}
                  />
                )
              })}
            </div>
            <SponserHead color="floralwhite" style={{ marginTop: `75px` }}>
              Event Partner
            </SponserHead>
            <div className="row d-flex justify-content-around align-items-center stackrow">
              {EventPartners.map(elem => {
                return (
                  <Sponsorcard
                    url={elem.img}
                    link={elem.link}
                    type={`community`}
                  />
                )
              })}
            </div>
          </div>
        </Sponsordiv>
      </>
    )
  }
}

export default Sponsers
