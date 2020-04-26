import React, { useEffect } from 'react'
import Img from 'gatsby-image'
import styled, {keyframes} from 'styled-components'
import { slideInUp } from 'react-animations'

import styles from './hero.module.css'

const SlideInUp = styled.div`animation: 2s ${keyframes `${slideInUp}`}`;

// const addBullets = (title) => {
//   let array = title.split(", ");
//   return array.map((element, index) => {
//     if(index === 0) {
//       return <span>{element}</span>
//     } else {
//       return <span className={styles.heroDots}>{element}</span>
//     }
//   })
//   // return title.replace(/, /g, " · "); //TODO may want to make dot part of css so can make it pink and bold
// }

// css example
// span {
//   content: "\00B7";
// }

const Hero = ({ data }) => {

    useEffect(() => {
        // document.getElementById("heroImageContainer").style.right = 0;
        // setTimeout(() => {document.getElementById("heroImageContainer").style.width = "933px"}, 2500);
        // setTimeout(() => {
        //     document.getElementById("heroDetails").style.display = "block"
        //     document.getElementById("headerLine1").style.display = "block"
        // }, 5000);
        // setTimeout(() => {
        //     document.getElementById("headerLine1").style.top = 0
        // }, 5010);
        // setTimeout(() => {
        //     document.getElementById("headerLine2").style.display = "block"
        // }, 6000);
        // setTimeout(() => {
        //     document.getElementById("headerLine2").style.top = 0
        // }, 6010);

    });

    return(
  <div className={`${styles.hero}`}>
    <div id="heroImageContainer" className={styles.heroImageContainer}>
      <Img className={styles.heroImage} alt={data.name} fluid={data.banner[1].fluid} />
    </div>
    <div className={styles.heroDetails} id="heroDetails">
        <div className={styles.heroNav}>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
        </div>
      <SlideInUp><div className={styles.heroHeadline}>
        <span id="headerLine1" className={styles.headerLine1}>
        Hello, 
        <span className={styles.heroAccent}> love!</span>
        </span>
        <br/>
        <span id="headerLine2" className={styles.headerLine2}>
        My name is Noelle.
        </span>
      </div></SlideInUp>
      <p className={styles.heroText}>
      I am a software engineer and web developer. I enjoy designing and developing websites for small businesses. 
      </p>
      <p className={styles.heroText}>
      Welcome to my website!
      </p>
    </div>
  </div>
    )
}

export default Hero;
