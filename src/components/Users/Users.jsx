import React from "react"
import styles from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/userImage.png'

class Users extends React.Component {

  componentDidMount() {
    this.getUsers()
  }

  getUsers = () => {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  render = () => {
    return <div>
      {
        this.props.users.map(u =>
          <div key={u.id}>
            <div>
              <img className={styles.photo} src={u.photos.small !== null ? u.photos.small : userPhoto}/>
            </div>
            <div>
              {
                u.followed ? <button onClick={() => {
                    this.props.unfollow(u.id)
                  }}>Followed</button> :
                  <button onClick={() => {
                    this.props.follow(u.id)
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


}

export default Users