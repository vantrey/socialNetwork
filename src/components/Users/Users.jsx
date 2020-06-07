import React from "react"
import styles from './Users.module.css'
import userNoPhoto from '../../assets/images/userImage.png'
import {NavLink} from "react-router-dom"

const Users = (props) => {

  let pagesNumbersEls = Array.from({
    length: Math.ceil(props.totalUsersCount / props.pageSize)
  }).map((el, i) => {
    let pageNumber = i + 1
    return <span
      onClick={() => {
        props.onPageChanged(pageNumber)
      }}
      key={i}
      className={`${styles.pagesNumbers} ${(props.currentPage === pageNumber && styles.selected)
      || styles.usual}`}>
     {pageNumber} -
    </span>
  })

  return <div className={styles.users}>
    <div>
      {pagesNumbersEls}
    </div>
    {
      props.users.map(u =>
        <div key={u.id}>
          <div>
            <NavLink to={`profile/${u.id}`}>
              <img className={styles.photo} src={u.photos.small !== null ? u.photos.small : userNoPhoto}/>
            </NavLink>
          </div>
          <div>
            {
              u.followed ?
                <button disabled={props.followingProgressIDs.some(id => u.id === id)} onClick={() => {
                  props.unfollow(u.id)
                }}>Unfollow</button> :
                <button disabled={props.followingProgressIDs.some(id => u.id === id)} onClick={() => {
                  props.follow(u.id)
                }}>Follow</button>
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