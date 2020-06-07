import React from 'react'
import styles from './Button.module.css'


const Button = (props) => {
  return (
    <button disabled={props.isDisabled} className={styles.button}>
      <span className={styles.buttonTitle}>button</span>
    </button>
  )
}

export default Button