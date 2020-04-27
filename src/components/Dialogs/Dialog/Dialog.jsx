import React from "react";
import style from './Dialog.module.css'
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
  let path = `/Dialogs/${props.id}`
  return (
    <div className={style.dialog}>
      <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
    </div>
  )
}

export default Dialog;