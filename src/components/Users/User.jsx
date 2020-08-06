import React from "react"
import styles from './Users.module.css'
import userNoPhoto from '../../assets/images/userImage.png'
import {NavLink} from "react-router-dom"

const User = ({user, followingProgressIDs, unfollow, follow}) => {
    return (
        <div>
            <div>
                <NavLink to={`profile/${user.id}`}>
                    <img
                        alt={'userPhoto'}
                        className={styles.photo}
                        src={user.photos.small !== null ? user.photos.small : userNoPhoto}
                    />
                </NavLink>
            </div>
            <div>
                {
                    user.followed ?
                        <button disabled={followingProgressIDs.some(id => user.id === id)} onClick={() => {
                            unfollow(user.id)
                        }}>Unfollow</button> :
                        <button disabled={followingProgressIDs.some(id => user.id === id)} onClick={() => {
                            follow(user.id)
                        }}>Follow</button>
                }
            </div>
            <div>{user.name}</div>
            <div>{user.status}</div>
            <div>{'user.location.country'}</div>
            <div>{'user.location.city'}</div>
            <p></p>
        </div>
    )
}

export default User