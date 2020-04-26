import React from 'react'
import Img from 'gatsby-image'

import styles from './about.module.css'


export default ({ data }) => (
    <>
  <div className={styles.about}>
      <div id="about" className={styles.page1}>
        {/* <div className={styles.aboutWrapper}> */}
            <Img className={styles.portrait} alt={data.name} fluid={data.heroImage.fluid} />
            <div className={styles.aboutText1}>
                <span className={styles.header}>About Me</span> 
                <p>
                I got my start in web development after getting married. 
                My husband happens to be a software engineer too! 
                I've always enjoyed creating and learning new things but never imagined I'd end up doing software development too...
                </p>
            </div>
        {/* </div> */}
      </div>
      <div className={styles.page2}>
        <div className={styles.aboutText2}>
            I think it was my curiosity that got me into web development.
            And I've found that I really enjoy the creative aspects of technology.
            I also love that I can use this skill to help people achieve what they desire in their business or personal endeavors.
         </div>
        <div className={`${styles.aboutQuoteContainer} `}>
            <div className={styles.accent}>
                <p className={styles.aboutQuote}>
                “Around here, however, we don't look backwards for very long. We keep moving forward, opening up new doors and doing new things, because we're curious…and curiosity keeps leading us down new paths.”
                </p>
                <p className={styles.aboutAuthor}>~ Walt Disney</p>
            </div>
        </div>
        <Img className={`${styles.aboutQuoteImage} ${styles.aboutItem}`} alt={data.name} fluid={data.banner[2].fluid} />
      </div>
   </div>
</>
)
