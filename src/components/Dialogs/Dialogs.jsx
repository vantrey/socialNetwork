import React from "react";
import styles from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form"

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogsItems.map((dialog, index) => (
    <Dialog key={index} id={dialog.id} name={dialog.name}/>
  ))
  let messagesElements = props.dialogsPage.dialogsMessages.map((message, index) => (
    <Message key={index} id={message.id} message={message.message} ownMessage={message.ownMessage}/>
  ))

  let onAddNewDialogsMsg = (values) => {
    props.addNewDialogsMsg(values.newMessageText)
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
        <AddMessageFormRedux onSubmit={onAddNewDialogsMsg}/>
      </div>
    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={'textarea'} type={'input'} name={'newMessageText'} placeholder={`Enter your message`}/>
      <button>Add message</button>
    </form>
  )
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs









