import React from 'react';
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader"
import Contacts from "./Contacts/Contacts"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div className={styles.profileInfo}>
      <div>
        <img
          src='https://encrypted-tbn0.gstatic.com/
          images?q=tbn%3AANd9GcQ5b0WN5OIEMhbg_WlCL2OwFimtuDGGtXzNnqq3mpT5P1nUN9Hc'/>
      </div>

      <div className={styles.description}>
        <img src={props.profile.photos.large}/>
        <span>
          {props.profile.aboutMe}
        </span>
        <Contacts contacts={props.profile.contacts}/>

      </div>

    </div>

  )
}

export default ProfileInfo;