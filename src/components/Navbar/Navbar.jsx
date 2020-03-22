import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import SidebarContainer from "../Sidebar/SidebarContainer"

const Navbar = (props) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink to='/Profile'activeClassName={styles.activeLink}>Profile</NavLink>
      </div>
      <div className={`${styles.item} ${styles.active}`}>
        <NavLink to='/Dialogs' activeClassName={styles.activeLink}>Messages</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/News'activeClassName={styles.activeLink}>News</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/Music'activeClassName={styles.activeLink}>Music</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/Settings'activeClassName={styles.activeLink}>Settings</NavLink>
      </div>
      <SidebarContainer store={props.store}/>
    </nav>
  )
}

export default Navbar;