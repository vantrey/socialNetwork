import {getAuthUserData} from "./authReducer"

const INITIALISED_SUCCESS = 'authReducer/INITIALISED_SUCCESS'

const initialState = {
  isInitialised: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALISED_SUCCESS:
      return {
        ...state,
        isInitialised: true
      }

    default:
      return state
  }
}
export default appReducer
const initialisedSuccess = () => ({
  type: INITIALISED_SUCCESS,
})

export const initialiseApp = () => async (dispatch) => {
  let getAuthUserDataPromise = dispatch(getAuthUserData())
  await Promise.all([getAuthUserDataPromise])
  dispatch(initialisedSuccess())
}