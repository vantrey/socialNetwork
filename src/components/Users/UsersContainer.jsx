import React from "react"
import {connect} from "react-redux"
import {
  follow,
  setCurrentPage,
  setIsFetching,
  setTotalUsersCount,
  setUsers,
  unfollow
} from "../../redux/usersReducer"
import Users from "./Users"
import * as axios from "axios"
import Preloader from "../common/Preloader/Preloader"

class UsersContainer extends React.Component {

  componentDidMount() {
    this.getUsers(this.props.currentPage)
  }

  getUsers = (pageNumber) => {
    this.props.setIsFetching(true)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`,
        {withCredentials: true}
        )
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
        this.props.setIsFetching(false)
      })
  }

  setCurrentPage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.getUsers(pageNumber)
  }
  render = () => {
    return <>
      {(this.props.isFetching && <Preloader/>) ||
      <Users
        users={this.props.users}
        currentPage={this.props.currentPage}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        setCurrentPage={this.setCurrentPage}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
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
  setCurrentPage, setTotalUsersCount, setIsFetching
})(UsersContainer)
