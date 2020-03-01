import React from "react";
import styles from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {
  let messageRef = React.createRef()
  let addNewMessage = () => {
    alert(messageRef.current.value)
  }
  let dialogsElements = props.dialogsPage.dialogsItems.map((dialog, index) => (
    <Dialog key={index} id={dialog.id} name={dialog.name}/>
  ))

  let messagesElements = props.dialogsPage.dialogsMessages.map((message, index) => (
    <Message key={index} id={message.id} message={message.message} ownMessage={message.ownMessage}/>
  ))

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
      </div>
      <div></div>
      <div className={styles.addNewMsg}>
        <textarea ref={messageRef}/>
        <button onClick={addNewMessage}>Add message</button>
      </div>
    </div>
  )
}

export default Dialogs;