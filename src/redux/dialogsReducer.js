const ADD_NEW_DIALOG_MSG = 'ADD-NEW-DIALOG-MSG' //send message
const DIALOG_MSG_UPD = 'DIALOG-MSG-UPD'

const initialState = {
  newDialogMsgText: '',
  dialogsItems: [
    {id: 1, name: 'Ivan',},
    {id: 2, name: 'Anna',},
    {id: 3, name: 'Varia',},
    {id: 4, name: 'Ulia',},
    {id: 5, name: 'Liuda',},
  ],
  dialogsMessages: [
    {id: 1, message: 'Hi! How are you?', ownMessage: true},
    {id: 3, message: 'Marvelous', ownMessage: false},
    {id: 4, message: 'What is your name?', ownMessage: true},
    {id: 5, message: 'Anonymous', ownMessage: false},
  ],
}

const dialogsReducer = (state = initialState, action) => {
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