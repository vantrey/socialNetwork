import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";

const Profile = (props) => {

  let profilePostsElements = props.profilePage.profilePosts.map((item, index) => (
    <Post key={index} message={item.message} likesCount={item.likeCount}/>
  ))
  return (
    <div className={s.content}>

      <ProfileInfo/>
      <MyPosts
        addNewPost={props.addNewPost}
        postTextUpd={props.postTextUpd}
        profilePostsElements={profilePostsElements}
        store={props.store}
        newPostText={props.profilePage.newPostText}
      />

    </div>
  )
}

export default Profile;