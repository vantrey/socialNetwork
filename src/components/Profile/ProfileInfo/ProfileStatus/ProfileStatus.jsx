import React from 'react';
import styles from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }
  activateEditMode = () => {
    this.setState({editMode: true})
  }
  deActivateEditMode = () => {
    this.setState({editMode: false})
    this.props.updateAuthedUserStatus(this.state.status)
  }
  onChangeStatus = (e) => {
    this.setState({status: e.currentTarget.value})
  }

  render() {
    return (
      <div>
        {!this.state.editMode ?
          <div>
            <span
              className={styles.statusText}
              onClick={this.activateEditMode}
            >
              {this.props.status || '-----'}
            </span>
          </div>
          :
          <div>
            <input
              onChange={this.onChangeStatus}
              autoFocus={true}
              onBlur={this.deActivateEditMode}
              value={this.state.status}
            />
          </div>}
      </div>
    )
  }


}

export default ProfileStatus;