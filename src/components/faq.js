import React, { Component, useState } from "react"
import { FAQ } from "../shared/faq-data"
import {
  FaqWrapper,
  FaqSection,
  // FaqHeading,
  // ExpandTag,
  FaqSolutionWrapper,
} from "./style"
import faq from "../images/faq.svg"
import { Collapse } from "reactstrap"

function RenderFaq({ item }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const toggleIcon = isOpen => {
    if (isOpen) {
      return (
        <img
          src={faq}
          className="img-fluid size"
          alt="faq"
          style={{ transform: `rotate(180deg)` }}
        />
      )
    } else {
      return <img src={faq} alt="faq" className="img-fluid" />
    }
  }
  return (
    <div>
      <FaqWrapper key={item.id} role="button" onClick={toggle}>
        <span style={{ margin: 0, padding: 0 }}>
          {item.question}
        </span>
        <span className="expand">{toggleIcon(isOpen)}</span>
      </FaqWrapper>
      <Collapse isOpen={isOpen}>
        <FaqSolutionWrapper>{item.solution}</FaqSolutionWrapper>
      </Collapse>
    </div>
  )
}

class Faq extends Component {
  constructor(props) {
    super(props)
    this.state = {
      faq: FAQ,
    }
  }

  render() {
    const faq = this.state.faq.map(que => {
      return (
        <li className="mb-2">
          <RenderFaq item={que} />
        </li>
      )
    })

    return (
      <FaqSection id="FAQ">
        <div className="row d-flex justify-content-center faqrow">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="row d-flex  justify-content-center">
          <ul className="col-11 col-md-9 col-lg-7 list-unstyled px-0 mx-0">{faq}</ul>
        </div>
      </FaqSection>
    )
  }
}

export default Faq
