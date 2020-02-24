import React from 'react';
import styles from './Friend.module.css';

const Friend = (props) => {
  return (
    <div className={styles.friend}>
      <img src={props.icon}/>
      <span>{props.name}</span>
    </div>
  )
}

export default Friend;