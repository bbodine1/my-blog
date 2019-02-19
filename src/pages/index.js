import React from "react"
import { Link } from "gatsby"

import LayoutMain from "../layouts/main/main"
import ImgAstronaut from "../components/img-astronaut/image-astronaut"
import SEO from "../util/seo"

const IndexPage = () => (
  <LayoutMain>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <ImgAstronaut />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </LayoutMain>
)

export default IndexPage
