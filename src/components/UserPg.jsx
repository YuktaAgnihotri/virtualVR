import React,{useContext} from 'react'
import {Auth} from "./AuthContext"
import { Link } from 'react-router-dom';
import Api from './Api';
function UserPg() {  
  const {user,logout }= useContext(Auth);
  return (
 
    <div className='pl-[5%] pr-[5%] bg-neutral-700 text-white'>
      <div className='flex  align-middle justify-between'>
         <h1 className='font-bold text-3xl bg-gradient-to-r from-purple-300 to-purple-600  bg-clip-text text-transparent'> Welcome {user}</h1>
 <button onClick={logout}
 className='bg-blue-600 rounded pl-4 pr-4 mt-2 ' 
  > <Link to="/"> Log out </Link>  
  </button>
      </div>

<Api/>
    </div>
  )
}

export default UserPg
