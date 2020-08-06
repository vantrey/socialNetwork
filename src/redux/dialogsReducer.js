const ADD_NEW_DIALOG_MSG = 'dialogReducer/ADD-NEW-DIALOG-MSG' //send message

const initialState = {
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
    case ADD_NEW_DIALOG_MSG: {
      return {
        ...state,
        dialogsMessages: [
          ...state.dialogsMessages,
          {id: 6, message: action.newMessageText, ownMessage: true}
        ]
      }
    }
    default:
      return state
  }
}
export default dialogsReducer
export const addNewDialogMsgActionCreator = (newMessageText) => ({type: ADD_NEW_DIALOG_MSG, newMessageText})
