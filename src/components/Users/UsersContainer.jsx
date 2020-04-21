import React from "react"
import {connect} from "react-redux"
import {
  follow,
  setCurrentPage, setFollowingProgress,
  setIsFetching,
  setTotalUsersCount,
  setUsers,
  unfollow
} from "../../redux/usersReducer"
import Users from "./Users"
import Preloader from "../common/Preloader/Preloader"
import {usersAPI} from "../../api/api"

class UsersContainer extends React.Component {

  componentDidMount() {
    this.getUsers(this.props.currentPage)
  }

  getUsers = (pageNumber) => {
    this.props.setIsFetching(true)
    usersAPI.getUsers(this.props.pageSize, pageNumber)
      .then(data => {
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount)
        this.props.setIsFetching(false)
      })
  }

  onPageChanged = (pageNumber) => {
    this.getUsers(pageNumber)
    this.props.setCurrentPage(pageNumber)
  }
  render = () => {
    return <>
      {(this.props.isFetching && <Preloader/>) ||
      <Users
        users={this.props.users}
        currentPage={this.props.currentPage}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followingProgressIDs={this.props.followingProgressIDs}
        setFollowingProgress={this.props.setFollowingProgress}
      />}
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching,
    followingProgressIDs: state.usersPage.followingProgressIDs
  }
}
/*const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (count) => {
      dispatch(setTotalUsersCountAC(count))
    },
    setIsFetching: (isFetching) => {
      dispatch(setIsFetchingAC(isFetching))
    },
  }
}*/

export default connect(mapStateToProps, {
  follow, unfollow, setUsers,
  setCurrentPage, setTotalUsersCount, setIsFetching, setFollowingProgress,
})(UsersContainer)
