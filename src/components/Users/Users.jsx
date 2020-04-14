import React from "react"
import styles from './Users.module.css'
import userPhoto from '../../assets/images/userImage.png'
import {NavLink} from "react-router-dom"

const Users = (props) => {

  let pagesNumbersEls = Array.from({
    length: Math.ceil(props.totalUsersCount / props.pageSize)
  }).map((el, i) => {
    let pageNumber = i + 1
    return <span
      onClick={() => {
        props.setCurrentPage(pageNumber)
      }}
      key={i}
      className={
        `${styles.pagesNumbers} ${(props.currentPage === pageNumber && styles.selected) || styles.usual}`
      }
    >
     {pageNumber} -
    </span>
  })

  return <div>
    <div>
      {pagesNumbersEls}
    </div>
    {
      props.users.map(u =>
        <div key={u.id}>
          <div>
            <NavLink to={`profile/u.id`}>
              <img className={styles.photo} src={u.photos.small !== null ? u.photos.small : userPhoto}/>
            </NavLink>
          </div>
          <div>
            {
              u.followed ? <button onClick={() => {
                  props.unfollow(u.id)
                }}>Followed</button> :
                <button onClick={() => {
                  props.follow(u.id)
                }}>Unfollowed</button>
            }
          </div>
          <div>{u.name}</div>
          <div>{u.status}</div>
          <div>{'u.location.country'}</div>
          <div>{'u.location.city'}</div>
          <p></p>
        </div>
      )
    }
  </div>
}

export default Users