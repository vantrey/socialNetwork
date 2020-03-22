import React from 'react';
import styles from './Sidebar.module.css';
import Friend from "./Friend/Friend";

const Sidebar = (props) => {
  let friendsElements = props.sidebar.friends.map((item, index) =>
    <Friend
      key={index}
      name={item.name}
      id={item.id}
      icon={item.icon}/>)
  return (
    <div className={styles.sidebar}>
      <h2>Friends</h2>
      <div className={styles.friendsItems}>
        {friendsElements}
      </div>
    </div>
  )
}

export default Sidebar;