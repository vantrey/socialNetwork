import React from 'react';
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader"
import Contact from "./Contact/Contact"
import yesImg from "../../../assets/images/yes-png-image.png"
import noImg from "../../../assets/images/noImg.png"
import ProfileStatus from "./ProfileStatus/ProfileStatus"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div className={styles.profileInfo}>
      <div>
        {/*<img
          src='https://encrypted-tbn0.gstatic.com/
          images?q=tbn%3AANd9GcQ5b0WN5OIEMhbg_WlCL2OwFimtuDGGtXzNnqq3mpT5P1nUN9Hc'/>*/}
      </div>

      <div className={styles.description}>
        <h1>{props.profile.fullName}</h1>
        <img className={styles.photo} src={props.profile.photos.large}/>

        <ProfileStatus updateAuthedUserStatus={props.updateAuthedUserStatus} status={props.userStatus}/>

        <p className={styles.aboutMe}>
          About me: <span>{props.profile.aboutMe}</span>
        </p>
        <div className={styles.contactsJobWrapp}>
          <div className={styles.contacts}>
            <h3>Contacts:</h3>
            <Contact contactName={props.profile.contacts.facebook}/>
            <Contact contactName={props.profile.contacts.website}/>
            <Contact contactName={props.profile.contacts.vk}/>
            <Contact contactName={props.profile.contacts.twitter}/>
            <Contact contactName={props.profile.contacts.instagram}/>
            <Contact contactName={props.profile.contacts.youtube}/>
            <Contact contactName={props.profile.contacts.github}/>
            <Contact contactName={props.profile.contacts.mainLink}/>
          </div>
          <div className={styles.job}>
            <div className={styles.jobTitle}>
              <h3>Looking for a jod: </h3>
              {(props.profile.lookingForAJob &&
                <img src={yesImg}/>) ||
              <img src={noImg}/>}
            </div>
            <span>{props.profile.lookingForAJobDescription}</span>
          </div>
        </div>
      </div>

    </div>

  )
}

export default ProfileInfo;