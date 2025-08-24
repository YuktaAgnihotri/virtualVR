import React from 'react'
import { Outlet } from "react-router-dom";
import UserPg from './UserPg';
import { useContext } from 'react';
import {Auth} from './AuthContext';
function SignLayout({onLogin}){
const {username,setusername,Password ,setPassword} = useContext(Auth);
  const HandleSubmit = (e)=>{
      e.preventDefault();
    onLogin();
  }
  return (
  
       <div className=' m-auto w-[50vw] h-[70vh] bg-amber-100 text-center border-2 ' >
       <h1 className=' text-3xl lg:text-5xl  font-light tracking-tight pt-10 pb-15'> SIGN IN </h1>

       <div className=' m-auto align-middle'>  
         <form onSubmit= {HandleSubmit}>
          <div className='p-2 m-2 flex  flex-col lg:flex '>
            <label htmlFor="" className='font-semibold'> User Name:</label>
          <input type="text" placeholder='enter User name' 
          value={username} onChange={(e)=>setusername(e.target.value)}
          className='bg-white p-2 m-auto lg:w-1/2 w-full  rounded'/>
          </div>
          
          <div className='p-2 m-2  flex flex-col lg:flex justify-center align-middle'>
            <label  className='font-semibold'> Password:</label>
          <input type="password" placeholder='enter pass' 
          value={Password} onChange={(e)=>setPassword(e.target.value)}
          className='bg-white p-2 m-auto lg:w-1/2 w-full  rounded'/>
          </div>
           <button type="submit" className=' p-2 m-4 pr-10 pl-10 rounded bg-green-300 hover:bg-green-700'> Submit </button>
         </form>
       </div>
      
    <Outlet/>
    </div>
  )
}
function Sign() {
const [isclick ,setisclick] = useState(false); 
  return(
    <>
      {isclick ? <Userpg/> : <SignLayout/> }
    </>
  );
  
 
}

export default Sign
