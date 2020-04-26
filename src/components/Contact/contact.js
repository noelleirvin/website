import React from 'react'
import Img from 'gatsby-image'

import styles from './contact.module.css'


export default ({ data }) => (
    <>
  <div id="contact" className={styles.contact}>
    <span className={styles.header}>Contact</span> 
    <p className={styles.text}>Interested in working with me? Send me a message below or reach me through LinkedIn.</p>
    <form method="post" netlify-honeypot="bot-field" data-netlify="true">
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
        {/* <input type="reset" value="Clear" /> */}
        </form>
   </div>
</>
)
