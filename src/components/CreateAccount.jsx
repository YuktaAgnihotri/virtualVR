import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import google from '../assets/google.png'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import { firebaseapp } from './firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Auth } from './AuthContext';
import UserPg from './UserPg';

const firebaseAuth = getAuth(firebaseapp);
const googleProvider = new GoogleAuthProvider();

function CreateAccount() {

  const [email, setemail] = useState("");
  const { username, setusername, Password, setPassword, login } = useContext(Auth);
  const [curruser, setcurruser] = useState(null);
  const [error, seterror] = useState("");

  // Email/password sign up
  const signEmail = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      const result = await createUserWithEmailAndPassword(firebaseAuth, email, Password);
      console.log("success", result.user);
      await updateProfile(result.user, { displayName: username });
      login();
    } catch (err) {
      console.log(err);
      seterror(err.message);
    }
  };

  // Google sign in
  const signGoogle = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      const result = await signInWithPopup(firebaseAuth, googleProvider);
       if(!result.ok){
        console.log("couldn't create user using google authentication");
      }
      console.log(result.user);
      login();
    } catch (err) {
      console.log(err);
      seterror(err.message);
    }
  };

  // Listen for auth state changes, with proper cleanup
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setcurruser(user);
      } else {
        console.log("you are logged out");
        setcurruser(null);
      }
    });

    return () => unsubscribe(); // cleanup listener on unmount
  }, []);

  if (curruser === null) {
    return (
      <div className='m-auto w-[50vw] h-[90vh] bg-amber-100 text-center border-2'>
        <h1 className='text-4xl font-light tracking-tight pt-10 pb-15'> NEW ACCOUNT </h1>
        <div className='m-auto align-middle'>
          <form>
            {error && <p className="text-red-600 font-semibold">{error}</p>}

            <div className='p-2 m-2 flex flex-col lg:flex'>
              <label htmlFor="username" className='font-semibold'>User Name:</label>
              <input
                id="username"
                type="text"
                placeholder='enter User name'
                required
                value={username}
                onChange={(e) => setusername(e.target.value)}
                className='bg-white p-2 m-auto lg:w-1/2 w-full rounded'
              />
            </div>

            <div className='p-2 m-2 flex flex-col lg:flex'>
              <label htmlFor="email" className='font-semibold'>Email:</label>
              <input
                id="email"
                type="email"
                placeholder='enter email'
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className='bg-white p-2 m-auto lg:w-1/2 w-full rounded'
              />
            </div>

            <div className='p-2 m-2 flex flex-col lg:flex justify-center align-middle'>
              <label htmlFor="password" className='font-semibold'>Set Password:</label>
              <input
                id="password"
                type="password"
                placeholder='enter pass'
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                className='bg-white p-2 m-auto lg:w-1/2 w-full rounded'
              />
            </div>

            <div>
              <select className='bg-white p-3 m-auto'>
                <option>Student</option>
                <option>Professional</option>
                <option>Teacher</option>
                <option>Other</option>
              </select>
            </div>

            <button
              type='button'
              className='p-2 m-4 pr-10 pl-10 rounded bg-green-300 hover:bg-green-700'
              onClick={signEmail}
            > Submit </button>

          <p className='text-[13px]'> Already have a account
             <div>
                <button onClick={()=>window.open('/#/sign' , "_blank")}  className=' underline hover:bg-neutral-400 py-2 px-3 rounded-md'> 
            Sign In
            </button> 
             </div> 
             </p>


           
          </form>
        </div>
        <Outlet />
      </div>
    );
  }

  return (
    <>
      <UserPg />
    </>
  );
}

export default CreateAccount;
            