import React from "react"
import {connect} from "react-redux"
import {
  follow, requestUsers,
  unfollow
} from "../../redux/usersReducer"
import Users from "./Users"
import Preloader from "../common/Preloader/Preloader"
import {compose} from "redux"
import {
  getCurrentPage,
  getFollowingProgressIDs, getIsAuth,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from "../../redux/usersSelectors"

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.currentPage)
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(this.props.pageSize, pageNumber)
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
        isAuth={this.props.isAuth}
      />}
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    isFetching: getIsFetching(state),
    followingProgressIDs: getFollowingProgressIDs(state),
    isAuth: getIsAuth(state)
  }
}

export default compose(
  connect(mapStateToProps, {follow, unfollow, getUsers: requestUsers}),
)(UsersContainer)
