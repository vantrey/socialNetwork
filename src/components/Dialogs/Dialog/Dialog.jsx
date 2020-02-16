import React from "react";
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
  return (

    <div className={s.dialog}>
      <NavLink to={`/Dialogs/${props.id}`} activeClassName={s.active}>{props.name}</NavLink>
    </div>

  )
}

export default Dialog;