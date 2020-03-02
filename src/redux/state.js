import {rerenderEntireTree} from '../render'

let state = {
  profilePages: {
    newPostText:'',
    profilePosts: [
      {id: 1, message: 'Hey Hi! It\'s first mesagge', likeCount: 20},
      {id: 2, message: 'Hey It\'s second!!!', likeCount: 3},
      {id: 3, message: 'Hey It\'s third!!!', likeCount: 65},
      {id: 4, message: 'Hey It\'s 4th!!!', likeCount: 1}
    ],
  },
  dialogsPage: {
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
}
export let addNewPost = () => {
  let newPost = {id: 5, message: state.profilePages.newPostText, likeCount: 0}
  state.profilePages.profilePosts.push(newPost)
  state.profilePages.newPostText = ''
  rerenderEntireTree(state)
}
export let addNewDialogsMsg = (newDialogMsgText) => {
  let newMessage = {id: 6, message: newDialogMsgText, ownMessage: true}
  state.dialogsPage.dialogsMessages.push(newMessage)
  rerenderEntireTree(state)
}
export let postTextUpd = (newPostText) => {
  state.profilePages.newPostText = newPostText
  rerenderEntireTree(state)
}

export default state

