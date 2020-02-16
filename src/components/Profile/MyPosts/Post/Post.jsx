import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>

      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0sjmm1L3U-O25T93OLc8kGRm5BCzHd4yCi8zbdWB3DpyDrWU0'/>
      {props.message}

      <div>
        <span>like</span> {props.likesCount}
      </div>

    </div>
  )
}

export default Post;