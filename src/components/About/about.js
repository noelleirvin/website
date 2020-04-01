import React from 'react'
import Img from 'gatsby-image'

import styles from './about.module.css'


export default ({ data }) => (
  <div className={`${styles.about} container`}>
    <div className={styles.aboutText}>
        <p className={styles.aboutStarter}>Hello, love!</p>
        <p className={styles.aboutIndent}>My name is Noelle and I am a web developer. Welcome to my website!</p>
        {/* <p className={styles.aboutIndentb}></p> */}
    </div>
    <div className={styles.aboutImageContainer}>
        <p className={styles.aboutQuote}>
        “Around here, however, we don't look backwards for very long. We keep moving forward, opening up new doors and doing new things, because we're curious…and curiosity keeps leading us down new paths.”
        </p>
        <br/>
        <p className={styles.aboutQuoteb}>~ Walt Disney</p>
    </div>

    <div className={styles.aboutDetails}>
      <h3 className={styles.aboutHeadline}>{data.name}</h3>
      <p className={styles.aboutTitle}>{data.title}</p>
    </div>

    <Img className={styles.aboutImage} alt={data.name} fixed={data.heroImage.fixed} />

  </div>
)
