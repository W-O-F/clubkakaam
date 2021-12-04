import React from "react"
import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap"

const PrizeCard = props => {
  return (
    <Card className=" text-center col-md-3 m-3 m-sm-5 ">
      <div className="sp-img">
        <CardImg top width="100%" src={props.src} alt={props.alt} />
      </div>
      <CardBody>
        <CardTitle tag="h3">Challenge</CardTitle>

        <CardText>{props.challenge}</CardText>
        <CardTitle tag="h3" className="pt-2">
          Prizes
        </CardTitle>
        <CardText>
          {props.prizes.map(ent => {
            return <p>{ent}</p>
          })}
        </CardText>
      </CardBody>
    </Card>
  )
}

export default PrizeCard
