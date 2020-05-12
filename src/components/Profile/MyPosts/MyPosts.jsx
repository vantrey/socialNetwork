import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post"
import {Field, reduxForm} from "redux-form"

const MyPosts = (props) => {

  const postsElements = props.posts.map((post, index) => (
    <Post key={index} message={post.message} likesCount={post.likeCount}/>
  ))

  const onAddNewPost = (val) => {
    props.addNewPost(val.postText)
  }

  return (
    <div className={s.myPostsWrapper}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddNewPost}/>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}
const AddNewPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field component={'textarea'} type={'input'} name={'postText'} placeholder={'Enter new post'}/>
    </div>
    <div>
      <button>Add post</button>
    </div>
  </form>
}
const AddNewPostFormRedux = reduxForm({form: 'myPostsAddNewPostForm'})(AddNewPostForm)
export default MyPosts;