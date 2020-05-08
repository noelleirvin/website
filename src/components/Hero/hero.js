import React, {useEffect, useState} from 'react'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade';
import scrollTo from 'gatsby-plugin-smoothscroll';

import styles from './hero.module.css'

const Hero = ({ data }) => {
  const [heroTextDelay, setHeroTextDelay] = useState(4750);
  useEffect(() => {
    const intWindowWidth = window.innerWidth;
    const intWindowHeight = window.innerHeight;

    console.log(intWindowWidth, innerHeight);
    if(intWindowWidth < 400 || intWindowHeight < 400) {
      setHeroTextDelay(0);
    }
  }) 


    return(
      
  <div className={`${styles.hero}`}>
    {console.log(heroTextDelay)}
    <Fade left duration={2500}>
      <div id="heroImageContainer" className={styles.heroImageContainer}>
        <Img className={styles.heroImage} alt={data.name} fluid={data.banner[1].fluid} />
      </div>
    </Fade>
    <div className={styles.heroDetails} id="heroDetails">
     <Fade ssrReveal delay={4750} duration={1000}>
        <div className={styles.heroNav}>
            <a onClick={() => scrollTo("#about")}>About</a>
            {/* <a onClick={() => scrollTo("#portfolio")}>Portfolio</a> */}
            <a onClick={() => scrollTo("#contact")}>Contact</a>
        </div>
      </Fade>
        <div className={styles.heroHeadline}>
          <Fade ssrReveal bottom delay={2500} duration={1000}>
            <div id="headerLine1" className={styles.headerLine1}>
              {data.title.split(" ")[0]} 
              <span className={styles.heroAccent}> {data.title.split(" ")[1]}</span>
            </div>
          </Fade>
          <Fade ssrReveal bottom delay={3500} duration={1000}>
            <div id="headerLine2" className={styles.headerLine2}>
              {data.name}
            </div>
            </Fade>
        </div>
        
      <Fade ssrReveal delay={heroTextDelay} duration={1000}>
        <p className={styles.heroText}>
          {data.shortBio.shortBio.split(".")[0] + ". " + data.shortBio.shortBio.split(".")[1] + "."}
          <br/> <br/>
          {data.shortBio.shortBio.split(".")[2]}
        </p>
      </Fade>

      <span className={styles.seoText}>
        <div id="headerLine1" className={styles.headerLine1}>
              {data.title.split(" ")[0]} 
              <span className={styles.heroAccent}> {data.title.split(" ")[1]}</span>
        </div>
        <div id="headerLine2" className={styles.headerLine2}>
              {data.name}
          </div>
        <p className={styles.heroText}>
          {data.shortBio.shortBio.split(".")[0] + ". " + data.shortBio.shortBio.split(".")[1] + "."}
          <br/> <br/>
          {data.shortBio.shortBio.split(".")[2]}
        </p>
      </span>
    </div>
  </div>
    )
}

export default Hero;
