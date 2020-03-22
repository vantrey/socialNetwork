import React from "react";
import {addNewDialogMsgActionCreator, dialogMsgUpdActionCreator} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs"

const DialogsContainer = (props) => {
  const state = props.store.getState()
  const dialogsItems = state.dialogsPage.dialogsItems
  const dialogsMessages = state.dialogsPage.dialogsMessages
  const newDialogMsgText = state.dialogsPage.newDialogMsgText

  let addNewDialogsMsg = () => {
    props.store.dispatch(addNewDialogMsgActionCreator())
  }
  let dialogMsgUpd = (text) => {
    props.store.dispatch(dialogMsgUpdActionCreator(text))
  }

  return (
    <Dialogs
      dialogsItems={dialogsItems}
      dialogsMessages={dialogsMessages}
      addNewDialogsMsg={addNewDialogsMsg}
      dialogMsgUpd={dialogMsgUpd}
      newDialogMsgText={newDialogMsgText}
    />
  )
}

export default DialogsContainer;