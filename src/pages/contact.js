import React from "react"

import LayoutMain from "../layouts/main/main"
import SEO from "../util/seo"

const ContactPage = () => (
  <LayoutMain>
    <SEO title="Contact" />
    <h1>I'd love to talk! Email me at the address below</h1>
    <p>
      <a href="mailto:me@example.com">me@example.com</a>
    </p>
  </LayoutMain>
)

export default ContactPage