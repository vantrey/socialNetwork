import React from "react";
import styles from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {withAuthRedirect} from "../../hoc/withAuthRedirect"

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogsItems.map((dialog, index) => (
    <Dialog key={index} id={dialog.id} name={dialog.name}/>
  ))
  let messagesElements = props.dialogsPage.dialogsMessages.map((message, index) => (
    <Message key={index} id={message.id} message={message.message} ownMessage={message.ownMessage}/>
  ))

  let onAddNewDialogsMsg = () => {
    props.addNewDialogsMsg()
  }
  let onDialogMsgUpd = (e) => {
    props.dialogMsgUpd(e.target.value)
  }
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
        <textarea
          placeholder={`Enter your message`}
          onChange={onDialogMsgUpd}
          value={props.dialogsPage.newDialogMsgText}
        />
        <button onClick={onAddNewDialogsMsg}>Add message</button>
      </div>
    </div>
  )
}

export default withAuthRedirect(Dialogs);