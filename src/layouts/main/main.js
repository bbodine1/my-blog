import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styles from "./main.module.css"

import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"

const LayoutMain = ({ children }) => (
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
        <Header siteTitle={data.site.siteMetadata.title} />

        <div className={styles.layoutMain}>
          <main>{children}</main>
        </div>

        <Footer />
      </>
    )}
  />
)

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutMain
