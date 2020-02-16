import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
  return (
    <div className={s.profileInfo}>

      <div>
        <img
          src='https://encrypted-tbn0.gstatic.com/
          images?q=tbn%3AANd9GcQ5b0WN5OIEMhbg_WlCL2OwFimtuDGGtXzNnqq3mpT5P1nUN9Hc'/>
      </div>

      <div className={s.description}>
        ava+description
      </div>

    </div>

  )
}

export default ProfileInfo;