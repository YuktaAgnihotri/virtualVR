import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import google from '../assets/google.png'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { firebaseapp } from './firebase';
import { GoogleAuthProvider , signInWithPopup } from 'firebase/auth';
import { Auth } from './AuthContext';
import UserPg from './UserPg';

 const firebaseAuth = getAuth(firebaseapp);
const googleProvider = new GoogleAuthProvider();


function CreateAccount() {

  const[email,setemail] = useState("");
const {username, setusername, Password , setPassword , login} = useContext(Auth);


const  signEmail = async(e) =>{
e.preventDefault();
 await createUserWithEmailAndPassword(firebaseAuth, email ,Password)
try{
    console.log("success")
  login();
} 
    catch(err){
      ( console.log(err))
}
}

const signGoogle = async (e) =>{
  e.preventDefault();
  try{
   const result =  await signInWithPopup(firebaseAuth , googleProvider)
  console.log(result.user);
   login();
  }catch(err){
    console.log(err);
  }
   //sets username into user so that can be viewed on userPg

}

const [curruser ,setcurruser] = useState(null);
useEffect(()=>{
  onAuthStateChanged(firebaseAuth , (curruser)=>{
    if(curruser){
      setcurruser(curruser);
    }else{
      console.log("you are logged out")
      setcurruser(null)
    }
  })
  
},[])


  if(curruser === null){
 return (
  
   <div className=' m-auto w-[50vw] h-[90vh] bg-amber-100 text-center border-2 ' >
          <h1 className=' text-4xl   font-light tracking-tight pt-10 pb-15'> NEW ACCOUNT </h1>
          <div className=' m-auto align-middle'>  
            <form >
             <div className='p-2 m-2 flex  flex-col lg:flex '>
               <label htmlFor="" className='font-semibold'> User Name:</label>
             <input type="text" placeholder='enter User name' required  
             value={username} onChange={(e)=> setusername(e.target.value)}
             className='bg-white p-2 m-auto lg:w-1/2 w-full  rounded'/>
             </div>
             
             <div className='p-2 m-2 flex  flex-col lg:flex '>
            <label htmlFor="" className='font-semibold'> Email:</label>
          <input type="email" placeholder='enter email' 
          value={email} onChange={(e)=>setemail(e.target.value)}
          className='bg-white p-2 m-auto lg:w-1/2 w-full  rounded'/>
          </div>

             <div className='p-2 m-2  flex flex-col lg:flex justify-center align-middle'>
               <label htmlFor="" className='font-semibold'>Set Password:</label>
             <input type="password" placeholder='enter pass' 
             value={Password} onChange={(e)=>setPassword(e.target.value)}
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
             

              <button type='button'
              className=' p-2 m-4 pr-10 pl-10 rounded bg-green-300 hover:bg-green-700'
              onClick={signEmail}> Submit </button>
              <br/>

            <button type='button' className='bg-neutral-300 rounded pr-8 pl-8 ' 
            onClick={signGoogle}>SignUp with <img src={google}  alt="img" className='w-10 h-10 m-auto'  />  </button>
            </form>
          </div>
       <Outlet/>
       </div>
 )
  }

  else {
  return(<>
{/*  <h1> Welcome {curruser}</h1>
<button onClick={ ()=>{signOut(firebaseAuth)}   }>Log out</button>*/}
     <UserPg/>
  </>)
 
  }
}
     
  


export default CreateAccount;