import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5b0WN5OIEMhbg_WlCL2OwFimtuDGGtXzNnqq3mpT5P1nUN9Hc'/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;