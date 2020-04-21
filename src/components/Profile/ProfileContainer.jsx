import s from './Profile.module.css'
import React from "react"
import {connect} from "react-redux"
import Profile from './Profile'
import {setUserProfile} from "../../redux/profileReducer"
import {withRouter} from "react-router-dom"
import {profileAPI} from "../../api/api"

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    profileAPI.getUserProfile(userId)
      .then(data => {
        this.props.setUserProfile(data)
      })
  }

  render = () => {
    return <div className={s.content}>
      <Profile {...this.props} profile={this.props.profile}/>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}
const ProfileContainerWithRouter = withRouter(ProfileContainer)
export default  connect(mapStateToProps, {setUserProfile})(ProfileContainerWithRouter)