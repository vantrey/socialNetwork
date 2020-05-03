import React from "react"
import {connect} from "react-redux"
import {
  follow, getUsers,
  setCurrentPage,
  unfollow
} from "../../redux/usersReducer"
import Users from "./Users"
import Preloader from "../common/Preloader/Preloader"

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.currentPage)
  }

  /*  getUsers = (pageNumber) => {
      this.props.setIsFetching(true)
      usersAPI.getUsers(this.props.pageSize, pageNumber)
        .then(data => {
          this.props.setUsers(data.items)
          this.props.setTotalUsersCount(data.totalCount)
          this.props.setIsFetching(false)
        })
    }*/

  onPageChanged = (pageNumber) => {
    this.props.getUsers(this.props.pageSize, pageNumber)
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

export default connect(mapStateToProps, {
  follow, unfollow, setCurrentPage, getUsers
})(UsersContainer)
