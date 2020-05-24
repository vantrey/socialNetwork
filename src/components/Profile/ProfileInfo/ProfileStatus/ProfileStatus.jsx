import React, {useState} from 'react';
import styles from './ProfileStatus.module.css'

const ProfileStatus = (props) => {

  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deActivateEditMode = () => {
    setEditMode(false)
    props.updateAuthedUserStatus(status)
  }
  const onChangeStatus = (e) => {
    setStatus(e.currentTarget.value)
  }
    return (
      <div>
        {!editMode ?
          <div>
            <span className={styles.statusText} onClick={activateEditMode}>
              {props.status || 'no status'}
            </span>
          </div>
          :
          <div>
            <input onChange={onChangeStatus} autoFocus={true} onBlur={deActivateEditMode} value={status}/>
          </div>}
      </div>
    )
}

export default ProfileStatus;