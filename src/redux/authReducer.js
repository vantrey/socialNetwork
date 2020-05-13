import {authAPI} from "../api/api"

const SET_AUTH_USER_DATA = 'authReducer/SET_AUTH_USER_DATA'

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}
export default authReducer
const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  payload: {userId, email, login, isAuth}
})

export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.me().then(data => {
      if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
      }
    })
  }
}
export const login = (email, password, rememberMe = false) => (dispatch) => {
  authAPI.login(email, password, rememberMe)
    .then(response => {
      console.log('resultCode: ' + response.data.resultCode + ' message: ' + response.data.messages)
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
      } else if (response.data.resultCode === 10) {
        console.log('captcha')
      }
    })
}
export const logout = () => (dispatch) => {
  authAPI.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
    })
}
