import React from 'react'
import Img from 'gatsby-image'

import styles from './about.module.css'


export default ({ data }) => (
    <>
  <div className={`${styles.about}`}>
    <div className={`${styles.aboutText} container`}>
        <p className={styles.aboutHeader}>Hello, love! My name is Noelle!</p>
        <p className={styles.pageDescription}>I am a software engineer and web developer. I enjoy designing and developing websites for small businesses. Welcome to my website!</p>
    </div>
    <Img className={styles.bannerImage} alt={data.name} fluid={data.banner[1].fluid} />
    <div className={`${styles.aboutText} container`}>
        {/* <p className={styles.aboutHeader}>About Me</p> */}
        <p className={`${styles.aboutDescription} `}>
            I got my start in web development after getting married. 
            My husband happens to be a software engineer too! 
            I've always enjoyed creating and learning new things but never imagined I'd end up doing software development too.
            {/* I love learning and have interests in many things.  */}
            {/* Faith, fitness, and psychology being a few examples! */}
            {/* I guess you could say I married into software development. */}
        </p>
        <div className={styles.aboutImageContainer}>
            <Img className={`${styles.aboutImage}`} alt={data.name} fluid={data.banner[0].fluid} />
        </div>
        <p className={`${styles.aboutDescription} `}>
            {/* There is a joke in our house that I married into the field. */}
            I think it was my curiosity that got me into web development.
            And I've found that I really enjoy the creative aspects of technology.
            I also love that I can use this skill to help people achieve what they desire in their business or personal endeavors.
        </p>
    </div>
    <div className={`${styles.aboutQuoteAndImage} container`}>
        <Img className={`${styles.aboutQuoteImage} ${styles.aboutItem}`} alt={data.name} fluid={data.banner[2].fluid} />
        <div className={`${styles.aboutQuoteContainer} `}>
            <p className={styles.aboutQuote}>
            “Around here, however, we don't look backwards for very long. We keep moving forward, opening up new doors and doing new things, because we're curious…and curiosity keeps leading us down new paths.”
            </p>
            <br/>
            <p className={styles.aboutAuthor}>~ Walt Disney</p>
        </div>
    </div>
</div>
</>
)
