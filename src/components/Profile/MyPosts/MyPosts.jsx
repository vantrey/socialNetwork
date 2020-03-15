import React from 'react';
import s from './MyPosts.module.css'
import {addNewPostActionCreator, postTextUpdActionCreator} from "../../../redux/profileReducer"

const MyPosts = (props) => {
  let onAddNewPost = () => {
    props.dispatch(addNewPostActionCreator())
  }
  let onPostTextUpd = (e) => {
    let action = postTextUpdActionCreator(e.currentTarget.value)
    props.dispatch(action)
  }

  return (
    <div className={s.myPostsWrapper}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostTextUpd} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={onAddNewPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {props.profilePostsElements}
      </div>
    </div>
  );
}

export default MyPosts;