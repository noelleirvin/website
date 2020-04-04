import React from 'react'
import Img from 'gatsby-image'

import styles from './about.module.css'


export default ({ data }) => (
    <>
  <div className={`${styles.about}`}>
    <div className={`${styles.aboutText} container`}>
        <p className={styles.aboutStarter}>Hello, love! My name is Noelle!</p>
        <p className={styles.aboutIndent}>I am a software engineer and web developer. I enjoy designing and developing websites for small businesses. Welcome to my website!</p>
        {/* <p className={styles.aboutIndentb}></p> */}
    </div>
    <Img className={styles.aboutImage} alt={data.name} fluid={data.banner[1].fluid} />
    <div className={`${styles.aboutText2} container`}>
        <p className={`${styles.aboutIndent} ${styles.aboutItem}`}>
            I got my start in web development after getting married. 
            My husband happens to be a software engineer too!
            I've always enjoyed creating new things but never imagined I'd end up in this field.
            I love learning and have interests in many things. 
            Faith, fitness, and psychology being a few examples!
            {/* I guess you could say I married into software development. */}
        </p>
        <Img className={`${styles.aboutImage1} ${styles.aboutItem}`} alt={data.name} fluid={data.banner[2].fluid} />
    </div>
    <div className={`${styles.aboutQuoteContainer} container`}>
        <p className={styles.aboutQuote}>
        “Around here, however, we don't look backwards for very long. We keep moving forward, opening up new doors and doing new things, because we're curious…and curiosity keeps leading us down new paths.”
        </p>
        <br/>
        <p className={styles.aboutQuoteb}>~ Walt Disney</p>
    </div>
    <div className={`${styles.aboutText3} container`}>
        <Img className={`${styles.aboutImage2} ${styles.aboutItem2}`} alt={data.name} fluid={data.banner[0].fluid} />
        <p className={`${styles.aboutIndent} ${styles.aboutItem3}`}>
            While this path wasn't planned, I think it was my curiosity that got me here.
            I've found that I really enjoy the creative aspects of technology.
            I also love that I can use this skill to help people achieve what they desire in their business or personal endeavors.
        </p>
    </div>
</div>
</>
)
