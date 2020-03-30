import React from "react"
import styles from './Users.module.css'

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:'https://upload.wikimedia.org/wikipedia/commons/8/88/Ivan_Okhlobystin_16.jpg',
        followed: false,
        fullName: 'Ivan',
        status: 'I am a boss',
        location: {city: 'Minsk', country: 'Belarus'}
      },
      {
        id: 2,
        photoUrl:'https://lumiere-a.akamaihd.net/v1/images/ct_frozen_anna_18466_6775584b.jpeg?region=0,0,600,600',
        followed: true,
        fullName: 'Anna',
        status: 'I am a boss boss',
        location: {city: 'Moscow', country: 'Russia'}
      },
      {
        id: 3,
        photoUrl:'https://upload.wikimedia.org/wikipedia/commons/5/52/Uliana_Kaisheva.jpg',

        followed: false,
        fullName: 'Uliana',
        status: 'I am a boss boss boss',
        location: {city: 'Kiev', country: 'Ukraine'}
      },
    ])
  }
  return <div>
    {
      props.users.map(u =>
        <div key={u.id}>
          <div>
            <img className={styles.photo} src={u.photoUrl}/>
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
          <div>{u.fullName}</div>
          <div>{u.status}</div>
          <div>{u.location.country}</div>
          <div>{u.location.city}</div>
          <p> </p>
        </div>
      )
    }
  </div>
}
export default Users