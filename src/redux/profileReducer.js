import {profileAPI} from "../api/api"

const ADD_NEW_POST = 'ADD-NEW-POST'
const POST_TEXT_UPD = 'POST-TEXT-UPD'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState = {
  profile: null,
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
    case ADD_NEW_POST: {
      let newPost = {
        id: 4,
        message: state.newPostText,
        likeCount: 1
      }
      return {
        ...state,
        newPostText: '',
        profilePosts: [...state.profilePosts, newPost]
      }
    }
    case POST_TEXT_UPD: {
      return {
        ...state,
        newPostText: action.text
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    default:
      return state
  }
}
export default profileReducer
export const addNewPostActionCreator = () => ({type: ADD_NEW_POST})
export const postTextUpdActionCreator = (text) => ({type: POST_TEXT_UPD, text: text})
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getUserProfile(userId)
      .then(data => {
        dispatch(setUserProfile(data))
      })
  }
}