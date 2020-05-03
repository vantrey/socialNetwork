import s from './Profile.module.css'
import React from "react"
import {connect} from "react-redux"
import Profile from './Profile'
import {getUserProfile} from "../../redux/profileReducer"
import {withRouter} from "react-router-dom"
import {withAuthRedirect} from "../../hoc/withAuthRedirect"

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    this.props.getUserProfile(userId)
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
  }
}
const ProfileContainerWithRouter = withRouter(ProfileContainer)
export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(ProfileContainerWithRouter))