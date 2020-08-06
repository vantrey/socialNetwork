import React from "react"
import styles from './Users.module.css'
import userNoPhoto from '../../assets/images/userImage.png'
import {NavLink} from "react-router-dom"
import Paginator from "../common/Paginator/Paginator"
import User from "./User"

const Users = ({
                   users,
                   currentPage,
                   onPageChanged,
                   pageSize,
                   totalUsersCount,
                   follow,
                   followingProgressIDs,
                   unfollow
               }) => {

    return <div className={styles.users}>
        <div>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                pageSize={pageSize}
                totalUsersCount={totalUsersCount}
            />
        </div>
        {users.map(u =>
            <User
                key={u.id}
                user={u}
                follow={follow}
                followingProgressIDs={followingProgressIDs}
                unfollow={unfollow}
            />)}
    </div>
}

export default Users