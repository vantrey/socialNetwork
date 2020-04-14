import React from 'react';
import styles from './Contact.module.css'

const Contact = (props) => {

  return (
    <div className={styles.contact}>
      {props.contactName &&
      <a href={props.contactName}>
        {props.contactName}
      </a>}
    </div>
  )
}

export default Contact;