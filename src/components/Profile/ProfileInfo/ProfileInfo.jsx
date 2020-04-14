import React from 'react';
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader"
import Contact from "./Contact/Contact"

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

    </div>

  )
}

export default ProfileInfo;