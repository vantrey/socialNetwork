import React from 'react';
import styles from './Contacts.module.css'

const Contacts = (props) => {

  return (
    <div className={styles.contacts}>
      <h3>Contacts:</h3>

      {props.contactName &&
      <a href={props.contactName}>
        {props.contactName}
      </a>}

    </div>
  )
}

export default Contacts;