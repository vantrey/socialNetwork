const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
  users: [
    /*{
      id: 1,
      followed: false,
      fullName: 'Ivan',
      status: 'I am a boss',
      location: {city: 'Minsk', country: 'Belarus'}
    },
    {
      id: 2,
      followed: true,
      fullName: 'Anna',
      status: 'I am a boss boss',
      location: {city: 'Moscow', country: 'Russia'}
    },
    {
      id: 3,
      followed: false,
      fullName: 'Uliana',
      status: 'I am a boss boss boss',
      location: {city: 'Kiev', country: 'Ukraine'}
    },*/
  ],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return user
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: [
          ...state.users,
          ...action.users
        ]
      }
    default:
      return state
  }
}
export default usersReducer
export const followAC = (userId) => ({type: FOLLOW, userId: userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsersAC = (users) => ({type: SET_USERS, users: users})