import { string } from "prop-types"
import React from "react"
import contact from "../images/contact.svg"

class Contact extends React.Component {
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
        <div id="contact">
          <div className="row d-flex justify-content-center contactrow">
            <h1>Contact Us</h1>
          </div>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-6 col-sm-12">
                <form
                  onSubmit={this.handleSubmit}
                  action="https://formspree.io/f/mgepozpw"
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
                      placeholder="Enter your E-mailllllllllllll"
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
                  <div className="col-sm-12 d-flex justify-content-center">
                    <button type="Submit" class="btn btn-danger">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-6 col-sm-12">
                <img src={contact} className="img-fluid" alt="contact" />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Contact
