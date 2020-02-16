import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
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
        <Post message="Hey Hi! It's first mesage" likesCount={30}/>
        <Post message={`Hey It's second!!!`} likesCount={20}/>
      </div>

    </div>

  );
}

export default MyPosts;