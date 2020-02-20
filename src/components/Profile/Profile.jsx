import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";

const Profile = (props) => {

  let profilePostsElements = props.profilePosts.map((item, index) => (
    <Post key={index} message={item.message} likesCount={item.likeCount}/>
  ))
  return (
    <div className={s.content}>

      <ProfileInfo/>
      <MyPosts profilePostsElements={profilePostsElements}/>

    </div>
  )
}

export default Profile;