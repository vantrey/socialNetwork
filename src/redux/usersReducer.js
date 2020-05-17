import {usersAPI} from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_FOLLOWING_PROGRESS = 'SET_FOLLOWING_PROGRESS'

const initialState = {
  users: [],
  currentPage: 1,
  pageSize: 20,
  totalUsersCount: 0,
  isFetching: true,
  followingProgressIDs: []
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
        users: action.users
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.pageNumber
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count
      }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case SET_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingProgressIDs: action.isFetching
          ? [...state.followingProgressIDs, action.userId]
          : state.followingProgressIDs.filter(id => id !== action.userId)
      }
    default:
      return state
  }
}
export default usersReducer
const followSuccess = (userId) => ({type: FOLLOW, userId: userId})
const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId: userId})
const setUsers = (users) => ({type: SET_USERS, users: users})
const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count})
const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching})
const setFollowingProgress = (isFetching, userId) => ({type: SET_FOLLOWING_PROGRESS, isFetching, userId})
const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})

export const requestUsers = (pageSize, pageNumber) => {
  return (dispatch) => {
    dispatch(setIsFetching(true))
    dispatch(setCurrentPage(pageNumber))
    usersAPI.getUsers(pageSize, pageNumber)
      .then(data => {
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(setIsFetching(false))
      })
  }
}
export const unfollow = (userId) => {
  return (dispath) => {
    dispath(setFollowingProgress(true, userId))
    usersAPI.unfollowUser(userId)
      .then((data) => {
        if (data.resultCode === 0) {
          dispath(unfollowSuccess(userId))
        }
        dispath(setFollowingProgress(false, userId))
      })
  }
}
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(setFollowingProgress(true, userId))
    usersAPI.followUser(userId)
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(followSuccess(userId))
        }
        dispatch(setFollowingProgress(false, userId))
      })
  }
}