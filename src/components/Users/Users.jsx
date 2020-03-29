import React from "react"

const Users = (props) => {
  return <div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img />
          </div>
        </span>
      </div>)
    }
  </div>
}
export default Users