import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"

let store = {
  _state: {
    profilePage: {
      newPostText: '',
      profilePosts: [
        {id: 1, message: 'Hey Hi! It\'s first mesagge', likeCount: 20},
        {id: 2, message: 'Hey It\'s second!!!', likeCount: 3},
        {id: 3, message: 'Hey It\'s third!!!', likeCount: 65},
        {id: 4, message: 'Hey It\'s 4th!!!', likeCount: 1}
      ],
    },
    dialogsPage: {
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
    },
    sidebar: {
      friends: [
        {id: 1, name: 'Anna', icon: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg'},
        {id: 2, name: 'Varia', icon: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg',},
        {id: 3, name: 'Ulia', icon: 'https://semantica.in/wp-content/uploads/2018/08/av-427845-1.png',},
      ]
    }
  },
  _callSubscriber() {
    console.log('no subscribers')
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  getState() {
    return this._state
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._callSubscriber(this._state)
  }
}

export default store

