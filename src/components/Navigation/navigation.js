import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <div className={`${styles.navigation} container`}>
      <p className={styles.home}>Noelle Irvin</p>
      <ul className={styles.navigationLinks}>
        <li className={styles.navigationItem}>
          <Link to="/">About</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/blog/">Portfolio</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/blog/">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
)
