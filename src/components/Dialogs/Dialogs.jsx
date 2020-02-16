import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>

      <div className={s.dialogsItems}>
        <Dialog id={1} name={'Ivan'}/>
        <Dialog id={2} name={'Anna'}/>
        <Dialog id={3} name={'Varia'}/>
        <Dialog id={4} name={'Ulia'}/>
        <Dialog id={5} name={'Liuda'}/>
      </div>

      <div className={s.messages}>
         <Message message={'Hi! How are you?'}/>
         <Message message={'What is your name?'}/>
         <Message message={'Marvelous'}/>
      </div>

    </div>
  )
}

export default Dialogs;