import React from 'react'
import user from '../fetch/user.json'
const Data = () => {
  return (
    <div>
      <h4>User data</h4>
      <ul>
        {
          user.map(u=>
          (
            <li key={u.id}>{u.name}</li>
          )
          )
        }
      </ul>
    </div>
  )
}

export default Data