import React from 'react';
import s from './MyPosts.module.css'

const MyPosts = (props) => {
  let onAddNewPost = () => {
    props.dispatch({type: 'ADD-NEW-POST'})
  }
  let onPostTextUpd = (e) => {
    let action = {type: 'POST-TEXT-UPD', text: e.currentTarget.value}
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