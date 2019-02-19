import React from "react"
import styles from "./footer.module.css"

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      &copy; {new Date().getFullYear()}, Built with
              {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)

export default Footer