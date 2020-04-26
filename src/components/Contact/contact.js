import React from 'react'
import Img from 'gatsby-image'
import Fade from "react-reveal/Fade"

import styles from './contact.module.css'


export default ({ data }) => (
    <>
  <div id="contact" className={styles.contact}>
    <Fade bottom>
    <span className={styles.header}>Contact</span> 
    <p className={styles.text}>{data.contactText}</p>
    </Fade>
    <form method="post" netlify-honeypot="bot-field" data-netlify="true">
        <Fade bottom cascade delay={100}>
        <input type="hidden" name="bot-field" />
        <label>
            <span>Name</span>
            <input type="text" name="name" id="name" />
        </label>
        <label>
            <span>Email</span>
            <input type="email" name="email" id="email" />
        </label>
        <label>
            <span>Subject</span>
            <input type="text" name="subject" id="subject" />
        </label>
        <label>
            <span>Message</span>
            <textarea name="message" id="message" rows="5" />
        </label>
        <span className={styles.button}>
        <button type="submit">Send</button>
        </span>
        </Fade>
        </form>
   </div>
</>
)
