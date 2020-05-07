import React from 'react'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

import styles from './about.module.css'


export default ({ data }) => (
    <>
  <div className={styles.about}>
  <Fade bottom duration={2500}>
      <div id="about" className={styles.page1}>
            <Img className={styles.portrait} alt={data.name} fluid={data.heroImage.fluid} />
        <Fade right duration={2500}>
            <div className={styles.aboutText1}>
                <Fade delay={500} duration={500}>
                <span className={styles.header}>{data.aboutHeading}</span> 
                <p>
                {data.aboutText1.aboutText1}</p>
                </Fade>
            </div>
        </Fade>
      </div>
      </Fade>
      <Fade bottom duration={2500} distance={"20%"}>
      <div className={styles.page2}>
      <Fade left duration={2500}>
        <div className={styles.aboutText2}>
         <Fade delay={500} duration={500}>

            <span>
            {data.aboutText2.aboutText2}</span>
            </Fade>
         </div>
         </Fade>
         <Fade left duration={2500}>
        <div className={`${styles.aboutQuoteContainer} `}>
        <Fade delay={500} duration={500}>
            <div className={styles.accent}>
                <p className={styles.aboutQuote}>
                {data.quote.quote}</p>
                <p className={styles.aboutAuthor}>{data.author}</p>
            </div>
        </Fade>
        </div>
        </Fade>
        <span className={styles.aboutQuoteImageWrapper}><Img className={`${styles.aboutQuoteImage} ${styles.aboutItem}`} alt={"Photo by Travis Gergen on Unsplash"} fluid={data.banner[2].fluid} /></span>
      </div>
      </Fade>
   </div>
</>
)
