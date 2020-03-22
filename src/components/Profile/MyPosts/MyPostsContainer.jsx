import React from 'react';
import {addNewPostActionCreator, postTextUpdActionCreator} from "../../../redux/profileReducer"
import MyPosts from "./MyPosts"

const MyPostsContainer = (props) => {

  const state = props.store.getState()
  const posts = state.profilePage.profilePosts
  const newPostText = state.profilePage.newPostText

  let addNewPost = () => {
    props.store.dispatch(addNewPostActionCreator())
  }
  let postTextUpd = (text) => {
    let action = postTextUpdActionCreator(text)
    props.store.dispatch(action)
  }

  return (
    <MyPosts
      addNewPost={addNewPost}
      postTextUpd={postTextUpd}
      posts={posts}
      newPostText={newPostText}
    />
  );
}

export default MyPostsContainer;