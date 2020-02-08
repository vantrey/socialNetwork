import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5b0WN5OIEMhbg_WlCL2OwFimtuDGGtXzNnqq3mpT5P1nUN9Hc'>
                </img>
            </div>
            <div>
                ava+description
            </div>
            <div>
                My posts
                <div>
                    New posts
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post1
                    </div>
                    <div className={s.item}>
                        post2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;