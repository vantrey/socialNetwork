import React from "react";
import {addNewDialogMsgActionCreator, dialogMsgUpdActionCreator} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs"
import {connect} from "react-redux"

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewDialogsMsg: () => {
      dispatch(addNewDialogMsgActionCreator())
    },
    dialogMsgUpd: (text) => {
      dispatch(dialogMsgUpdActionCreator(text))
    },
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer