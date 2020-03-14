let store = {
  _state: {
    profilePages: {
      newPostText: '',
      profilePosts: [
        {id: 1, message: 'Hey Hi! It\'s first mesagge', likeCount: 20},
        {id: 2, message: 'Hey It\'s second!!!', likeCount: 3},
        {id: 3, message: 'Hey It\'s third!!!', likeCount: 65},
        {id: 4, message: 'Hey It\'s 4th!!!', likeCount: 1}
      ],
    },
    dialogsPage: {
      newDialogMsgText: 'yoyoyo',
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
/*  addNewPost() {
    let newPost = {id: 5, message: this._state.profilePages.newPostText, likeCount: 0}
    this._state.profilePages.profilePosts.push(newPost)
    this._state.profilePages.newPostText = ''
    this._callSubscriber(this._state)
  },
  addNewDialogsMsg() {
    let newMessage = {id: 6, message: this._state.dialogsPage.newDialogMsgText, ownMessage: true}
    this._state.dialogsPage.dialogsMessages.push(newMessage)
    this._state.dialogsPage.newDialogMsgText = ''
    this._callSubscriber(this._state)
  },
  postTextUpd(text) {
    this._state.profilePages.newPostText = text
    this._callSubscriber(this._state)
  },
  dialogMsgUpd(text) {
    this._state.dialogsPage.newDialogMsgText = text
    this._callSubscriber(this._state)
  },*/
  subscribe(observer) {
    this._callSubscriber = observer
  },
  getState() {
    return this._state
  },
  dispatch(action) {
    if (action.type === 'ADD-NEW-POST') {
      let newPost = {id: 5, message: this._state.profilePages.newPostText, likeCount: 0}
      this._state.profilePages.profilePosts.push(newPost)
      this._state.profilePages.newPostText = ''
      this._callSubscriber(this._state)
    }
    else if (action.type === 'ADD-NEW-DIALOG-MSG') {
      let newMessage = {id: 6, message: this._state.dialogsPage.newDialogMsgText, ownMessage: true}
      this._state.dialogsPage.dialogsMessages.push(newMessage)
      this._state.dialogsPage.newDialogMsgText = ''
      this._callSubscriber(this._state)
    }
    else if (action.type === 'POST-TEXT-UPD') {
      this._state.profilePages.newPostText = action.text
      this._callSubscriber(this._state)
    }
    else if (action.type === 'DIALOG-MSG-UPD') {
      this._state.dialogsPage.newDialogMsgText = action.text
      this._callSubscriber(this._state)
    }
  }
}

export default store

