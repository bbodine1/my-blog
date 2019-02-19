import React from "react"

import LayoutMain from "../layouts/main/main"
import SEO from "../util/seo"

const NotFoundPage = () => (
  <LayoutMain>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </LayoutMain>
)

export default NotFoundPage
