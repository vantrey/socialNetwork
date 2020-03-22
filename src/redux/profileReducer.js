const ADD_NEW_POST = 'ADD-NEW-POST'
const POST_TEXT_UPD = 'POST-TEXT-UPD'

const initialState = {
  newPostText: '',
  profilePosts: [
    {id: 1, message: 'Hey Hi! It\'s first mesagge', likeCount: 20},
    {id: 2, message: 'Hey It\'s second!!!', likeCount: 3},
    {id: 3, message: 'Hey It\'s third!!!', likeCount: 65},
    {id: 4, message: 'Hey It\'s 4th!!!', likeCount: 1}
  ],
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      let newPost = {id: 5, message: state.newPostText, likeCount: 0}
      state.profilePosts.push(newPost)
      state.newPostText = ''
      return state
    case POST_TEXT_UPD:
      state.newPostText = action.text
      return state
    default:
      return state
  }
}
export default profileReducer
export const addNewPostActionCreator = () => ({type: ADD_NEW_POST})
export const postTextUpdActionCreator = (text) => ({type: POST_TEXT_UPD, text: text})