import React from 'react';
import {addNewPostActionCreator, postTextUpdActionCreator} from "../../../redux/profileReducer"
import MyPosts from "./MyPosts"
import {connect} from "react-redux"

/*const MyPostsContainer = (props) => {
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
  )
}*/

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.profilePosts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: () => {
      dispatch(addNewPostActionCreator())
    },
    postTextUpd: (text) => {
      dispatch(postTextUpdActionCreator(text))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;