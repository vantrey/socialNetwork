import React from 'react';
import s from './MyPosts.module.css'

const MyPosts = (props) => {
  let  newTextRef = React.createRef()
  let OnAddNewPost = () => {
    props.addNewPost(newTextRef.current.value)
  }

  return (
    <div className={s.myPostsWrapper}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newTextRef}/>
        </div>
        <div>
          <button onClick={OnAddNewPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {props.profilePostsElements}
      </div>
    </div>
  );
}

export default MyPosts;