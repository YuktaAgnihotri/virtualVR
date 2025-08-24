import React,{useContext} from 'react'
import {Auth} from "./AuthContext"
function UserPg() {  
  const {user,logout }= useContext(Auth);
  return (
 
    <div>
 <h1 className='font-bold text-3xl'> Welcome {user}</h1>
 <button onClick={logout} > Log out </button>
    </div>
  )
}

export default UserPg
