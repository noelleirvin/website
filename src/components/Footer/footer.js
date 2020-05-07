import React from 'react'
import Img from 'gatsby-image'
import githubIcon from '../../images/github-logo.png';
import linkedInIcon from '../../images/linkedin.png';
import styles from './footer.module.css'


export default ({ data }) => (
    <>
  <div className={styles.footer}>
    {/* <span className={styles.header}>Contact</span>  */}
        <a href="https://github.com/noelleirvin" target="_blank" rel="noopener noreferrer">
            <img className={styles.icon} src={githubIcon}/>
        </a>
        <a href="https://www.linkedin.com/in/noelle-irvin" target="_blank" rel="noopener noreferrer">
            <img className={styles.icon} src={linkedInIcon}/>
        </a>
   </div>
</>
)
