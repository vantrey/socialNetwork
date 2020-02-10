import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hey Hi! It's first mesage" likesCount={30}/>
        <Post message={`Hey It's second!!!`} likesCount={20}/>
      </div>
    </div>

  );
}

export default MyPosts;