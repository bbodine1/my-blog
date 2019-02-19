import React from "react"
import { Link } from "gatsby"

import LayoutMain from "../layouts/main/main"
import SEO from "../util/seo"

const SecondPage = () => (
  <LayoutMain>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </LayoutMain>
)

export default SecondPage
