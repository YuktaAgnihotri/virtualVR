import React from 'react'
import { Outlet } from 'react-router-dom'
function CreateAccount() {
  return (
   <div className=' m-auto w-[50vw] h-[70vh] bg-amber-100 text-center border-2 ' >
          <h1 className=' text-4xl   font-light tracking-tight pt-10 pb-15'> NEW ACCOUNT </h1>
          <div className=' m-auto align-middle'>  
            <form action="submit" className=' '>
             <div className='p-2 m-2 flex  flex-col lg:flex '>
               <label htmlFor="" className='font-semibold'> User Name:</label>
             <input type="text" placeholder='enter User name' 
             className='bg-white p-2 m-auto lg:w-1/2 w-full  rounded'/>
             </div>
             
             <div className='p-2 m-2  flex flex-col lg:flex justify-center align-middle'>
               <label htmlFor="" className='font-semibold'>Set Password:</label>
             <input type="text" placeholder='enter pass' 
             className='bg-white p-2 m-auto lg:w-1/2 w-full  rounded'/>
             </div>
             <div>
              <select className='bg-white p-3 m-auto'>
              <option> Student</option>
               <option> Professional</option>
                <option> Teacher</option>
                 <option> Other</option>
             </select>
             </div>
             

              <button className=' p-2 m-4 pr-10 pl-10 rounded bg-green-300 hover:bg-green-700'> Submit </button>
            </form>
          </div>
       <Outlet/>
       </div>
     
  )
}

export default CreateAccount