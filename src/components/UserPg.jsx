import React from 'react'
import {Auth} from "/AuthContext"
function UserPg() {
  return (
     const {user,logout }= useContext(Auth);
    <div>
 <h1 className='font-bold text-3xl'> Welcome {user}</h1>
 <button onClick={logout} > Log out </button>
    </div>
  )
}

export default UserPg
