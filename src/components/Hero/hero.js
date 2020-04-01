import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

const addBullets = (title) => {
  let array = title.split(", ");
  return array.map((element, index) => {
    if(index === 0) {
      return <span>{element}</span>
    } else {
      return <span className={styles.heroDots}>{element}</span>
    }
  })
  // return title.replace(/, /g, " · "); //TODO may want to make dot part of css so can make it pink and bold
}

// css example
// span {
//   content: "\00B7";
// }

export default ({ data }) => (
  <div className={`${styles.hero} container`}>
    <div className={styles.heroImageContainer}>
      <Img className={styles.heroImage} alt={data.name} fixed={data.heroImage.fixed} />
    </div>
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>{data.name}</h3>
      <p className={styles.heroTitle}>{addBullets(data.title)}</p>
    </div>
  </div>
)
