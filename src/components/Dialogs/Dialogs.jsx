import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {


  let dialogsElements = props.dialogs.map((item, index) => (
    <Dialog key={index} id={item.id} name={item.name}/>
  ))

  let messagesElements = props.dialogsMessages.map((item,index) => (
    <Message key={index} id={item.id} message={item.message}/>
  ))

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;