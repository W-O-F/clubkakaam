/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"
import "./style.css"
import "aos/dist/aos.css"
import { StaticQuery, graphql } from "gatsby"

class Layout extends React.Component {
  constructor(props) {
    super()
    if (typeof window !== `undefined`) {
      const AOS = require("aos")
      AOS.init({once: true})
    }
  }
  componentDidMount() {
    if (typeof window !== `undefined`) {
      const AOS = require("aos")
      AOS.init({ once: true })
    }
  }
  componentDidUpdate() {
    if (typeof window !== `undefined`) {
      const AOS = require("aos")
      AOS.refresh()
    }
  }
  render() {
    const children = this.props.children
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <div>
              <main>{children}</main>
              <a href="https://discord.gg/at7c7rx5Cv" rel="noreferrer" style={{position:`fixed`,bottom:0,right:0,zIndex:3}}>
                <img src="images/discord.svg" alt="join discord" />
              </a>
            </div>
          </>
        )}
      />
    )
  }
}
export default Layout
