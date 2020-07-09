import React from 'react'
import Link from 'gatsby-link'

import styles from "./navbar.module.css"

export default ({props}) => (
  <div className={styles.thebar}>
    <Link to="/" style={{
      color: "#b71638",
      textDecoration: "none"
    }}>
      <div className={styles.home}>
        bl
      </div>
    </Link>
    <div className={styles.links}>
      <Link to="/" className={styles.navlinks}>HOME</Link>
    </div>
  </div>
)
