import React from "react"
import PrizeCard from "./prizeCard"
import { SponserHead } from "../style"
import { specialprizeData } from "./prizeData"

function SpecialPrize(props) {
  return (
    <>
      <SponserHead
        color="white"
        style={{ backgroundColor: `#0f0000`, margin: 0, paddingBottom: `50px` }}
      >
        Special Track Prizes
      </SponserHead>
      <div className="special-prize row">{specialprizeData.map(PrizeCard)}</div>
    </>
  )
}

export default SpecialPrize
