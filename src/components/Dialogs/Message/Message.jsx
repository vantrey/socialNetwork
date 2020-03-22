import React from "react";
import style from './Message.module.css'


const Message = (props) => {
  let messageStyle = props.ownMessage ? style.ownMessage: style.otherMessage
  return (
    <span className={messageStyle}>{props.message}</span>
  )
}

export default Message;