import {profileAPI} from "../api/api"

const ADD_NEW_POST = 'profileReducer/ADD-NEW-POST'
const SET_USER_PROFILE = 'profileReducer/SET_USER_PROFILE'
const SET_USER_STATUS = 'profileReducer/SET_USER_STATUS'

const initialState = {
  profile: null,
  profilePosts: [
    {id: 1, message: 'Hey Hi! It\'s first mesagge', likeCount: 20},
    {id: 2, message: 'Hey It\'s second!!!', likeCount: 3},
    {id: 3, message: 'Hey It\'s third!!!', likeCount: 65},
    {id: 4, message: 'Hey It\'s 4th!!!', likeCount: 1}
  ],
  status: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST: {
      let newPost = {
        id: 4,
        message: action.newPostText,
        likeCount: 1
      }
      return {
        ...state,
        profilePosts: [...state.profilePosts, newPost]
      }
    }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }

    case SET_USER_STATUS:
      return {...state, status: action.status}
    default:
      return state
  }
}
export default profileReducer
export const addNewPostActionCreator = (newPostText) => ({type: ADD_NEW_POST, newPostText})
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfile = (userId) => async (dispatch) => {
   const data = await profileAPI.getUserProfile(userId)

        dispatch(setUserProfile(data))
  }

export const getUserStatus = (userId) => async (dispatch) => {
  const response = profileAPI.getUserStatus(userId)

      dispatch(setUserStatus(response.data))
}

export const updateAuthedUserStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateUserStatus(status)

      if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
      }
}