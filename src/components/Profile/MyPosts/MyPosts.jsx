import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post"

const MyPosts = (props) => {

  const postsElements = props.posts.map((post, index) => (
    <Post key={index} message={post.message} likesCount={post.likeCount}/>
  ))

  const onAddNewPost = () => {
    props.addNewPost()
  }
  const onPostTextUpd = (e) => {
    props.postTextUpd(e.target.value)
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
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;