import React from 'react';
import s from './MyPosts.module.css'

const MyPosts = (props) => {
  let onAddNewPost = () => {
    props.store.addNewPost()
  }
  let onPostTextUpd = (e) => {
    props.store.postTextUpd(e.currentTarget.value)
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