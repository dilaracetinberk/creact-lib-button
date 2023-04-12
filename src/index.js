import React from 'react'
import styles from './styles.module.css'

export const Button = ({type,text}) => {
  return (
    <div className={styles.container}>
      <button className={`${styles.btn} ${styles[type]}`}>
        {text}
      </button>
  </div>
  )
}
