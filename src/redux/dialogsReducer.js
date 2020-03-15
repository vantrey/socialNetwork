const ADD_NEW_DIALOG_MSG = 'ADD-NEW-DIALOG-MSG' //send message
const DIALOG_MSG_UPD = 'DIALOG-MSG-UPD'

const dialogsReducer = (action, state) => {
  switch (action.type) {
    case ADD_NEW_DIALOG_MSG:
      let newMessage = {id: 6, message: state.newDialogMsgText, ownMessage: true}
      state.dialogsMessages.push(newMessage)
      state.newDialogMsgText = ''
      return state
    case DIALOG_MSG_UPD:
      state.newDialogMsgText = action.text
      return state
    default:
      return state
  }
}
export default dialogsReducer
export const addNewDialogMsgActionCreator = () => ({type: ADD_NEW_DIALOG_MSG})
export const dialogMsgUpdActionCreator = (text) => ({type: DIALOG_MSG_UPD, text: text})
