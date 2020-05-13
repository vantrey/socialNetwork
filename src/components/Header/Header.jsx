import React from 'react';
import styles from './Header.module.css'
import {NavLink} from "react-router-dom"

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src='https://i.gifer.com/origin/27/27999bf80ed07b28e4103b770592790f_w200.webp'/>
      <div className={styles.login}>
        {props.isAuth
          ? <div>{props.login}
            <button onClick={props.logout}>Log out</button>
          </div>
          : <NavLink to={`/login`}>Login</NavLink>}
      </div>
    </header>
  )
}

export default Header;