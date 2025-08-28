import React,{useContext} from 'react'
import {Auth} from "./AuthContext"
import { Link } from 'react-router-dom';
function UserPg() {  
  const {user,logout }= useContext(Auth);
  return (
 
    <div>
 <h1 className='font-bold text-3xl'> Welcome {user}</h1>
 <button onClick={logout} > <Link to="/"> Log out </Link>  </button>
 
    </div>
  )
}

export default UserPg
