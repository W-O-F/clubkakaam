import React from "react"
import { string } from "prop-types"
import { FooterDiv } from "./style"
import hack from "../images/hacknitp.png"
// import insta from "../images/insta.svg"
import linkedin from "../images/linkedin.svg"
// import twitter from "../images/twitter.svg"
import fb from "../images/fb.svg"
import email from "../images/Email.svg"

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: string,
      email: string,
      message: " ",
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const name = target.name
    this.setState({
      [name]: event.target.value,
    })
  }
  handleSubmit(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
      }
      xhr.send(data)
    }
    alert("Your Request has been submitted!")
  }
  render() {
    return (
      <>
        <FooterDiv id="contact">
          <div className="d-flex justify-content-center row">
            <div className="col-lg-4 col-md-6 text-sm-center text-md-left first">
              <div className="mb-5">
                <img src={hack} className="img-fluid" alt="contact" />
              </div>
              <div className="mb-5">
                <p>
                  National Institute of Technology Patna, <br />
                  Ashok Rajpath Road, Patna, <br />
                  Bihar (800005), India
                </p>
              </div>
              <div>
                <a href="https://www.facebook.com/Hack-NITP-30-105821918001593/">
                  <img src={fb} className="img-fluid logo" alt="insta" />
                </a>
                {/* <img src={twitter} className="img-fluid logo" alt="insta" /> */}
                <a href="https://www.linkedin.com/company/hack-nitp-3-0/">
                  <img src={linkedin} className="img-fluid logo" alt="insta" />
                </a>
                {/* <a href=""><img src={insta} className="img-fluid logo" alt="insta" /></a> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 text-sm-center text-md-left second">
              <h2>Contact Us</h2> <br />
              <div>
                <form
                  onSubmit={this.handleSubmit}
                  action="https://formspree.io/f/mleowdnp"
                  method="POST"
                >
                  <div class="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div class="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Enter your E-mail"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div class="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      class="form-control"
                      name="message"
                      id="message"
                      rows="3"
                      placeholder="Enter your Name"
                      value={this.state.message}
                      onChange={this.handleInputChange}
                    ></textarea>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-12 d-flex justify-content-center mb-2">
                      <button type="Submit" class="btn btn-primary ">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-sm-center text-lg-left third">
              <div className="before"></div>
              <i class="fab fa-facebook-f"></i>
              <a href="mailto:hackslashclub@nitp.ac.in">
                <img src={email} className="img-fluid" alt="mail" />
              </a>
              <h1 className="my-3">Email</h1>

              <h5>hackslashclub@nitp.ac.in</h5>
              <div className="after"></div>
              <p align="right" className="copyright">
                &copy; HackNITP 2021. All rights reserved.
              </p>
            </div>
          </div>
        </FooterDiv>
      </>
    )
  }
}

export default Footer
