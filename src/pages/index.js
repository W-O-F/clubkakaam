import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"
import About from "../components/about"
import Themes from "../components/Theme/theme"
import Sponsers from "../components/sponsers"
import Organizers from "../components/organisers"
import Prizes from "../components/prizes/prizes"
import SpecialPrize from "../components/prizes/specialPrizes"
// import Contact from "../components/contact"
import Faq from "../components/faq"
import Footer from "../components/footer"
import Tabs from "../components/Tabs/tabs"
// import Timeline from "../components/Timeline"
import Timeline2 from "../components/Timeline2"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Main />

    <About />
    <Tabs />
    <Themes />
    <Prizes />
    <SpecialPrize />
    <Timeline2 />
    <Sponsers />
    <Organizers />
    <Faq />
    <Footer />
    {/* <Contact /> */}
  </Layout>
)

export default IndexPage
