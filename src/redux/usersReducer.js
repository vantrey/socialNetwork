import {usersAPI} from "../api/api"
import {updateObjectInArray} from "../utils/helpers/object-helpers"

const FOLLOW = 'usersReducer/FOLLOW'
const UNFOLLOW = 'usersReducer/UNFOLLOW'
const SET_USERS = 'usersReducer/SET_USERS'
const SET_CURRENT_PAGE = 'usersReducer/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'usersReducer/SET_TOTAL_USERS_COUNT'
const SET_IS_FETCHING = 'usersReducer/SET_IS_FETCHING'
const SET_FOLLOWING_PROGRESS = 'usersReducer/SET_FOLLOWING_PROGRESS'

const initialState = {
    users: [],
    currentPage: 1,
    pageSize: 20,
    totalUsersCount: 0,
    isFetching: true,
    followingProgressIDs: [],
    fake: 1
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                /*users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })*/
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
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

export const requestUsers = (pageSize, pageNumber) => async (dispatch) => {
    dispatch(setIsFetching(true))
    dispatch(setCurrentPage(pageNumber))

    const data = await usersAPI.getUsers(pageSize, pageNumber)
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
    dispatch(setIsFetching(false))
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(setFollowingProgress(true, userId))
    const data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(setFollowingProgress(false, userId))
}

export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccess)
}

export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), followSuccess)
}