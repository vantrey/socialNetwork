import React from "react";
import styles from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogsItems.map((item, index) => (
    <Dialog key={index} id={item.id} name={item.name}/>
  ))

  let messagesElements = props.dialogsPage.dialogsMessages.map((item,index) => (
    <Message key={index} id={item.id} message={item.message} ownMessage={item.ownMessage}/>
  ))

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;