import s from './Profile.module.css'
import React from "react"
import {connect} from "react-redux"
import Profile from './Profile'
import {getUserProfile, getUserStatus, updateAuthedUserStatus} from "../../redux/profileReducer"
import {withRouter} from "react-router-dom"
import {compose} from "redux"

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.userId
    }
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }

  render = () => {
    return <div className={s.content}>
      <Profile {...this.props}/>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    userStatus: state.profilePage.status,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth,
  }
}

export default compose(
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateAuthedUserStatus}),
  withRouter,
)(ProfileContainer)