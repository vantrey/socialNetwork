import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div className={s.myPostsWrapper}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {props.profilePostsElements}
      </div>
    </div>
  );
}

export default MyPosts;