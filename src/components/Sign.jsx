import React, { useState, useContext, useEffect } from 'react'
import { Outlet } from "react-router-dom";
import UserPg from './UserPg';
import { Auth } from './AuthContext';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseapp } from './firebase';

const firebaseAuth = getAuth(firebaseapp);

function SignLayout({ onLogin }) {
  const { Password, setPassword, login } = useContext(Auth);
  const [email, setemail] = useState("");
  const [errorMsg, seterrorMsg] = useState("");

  const signup = async (e) => {
    e.preventDefault();
    seterrorMsg("");
    try {
      const userCredentials = await signInWithEmailAndPassword(firebaseAuth, email, Password);
      const user = userCredentials.user;
      console.log(user.email);
      login();
      onLogin();
    } catch (error) {
      console.log(error.message);
      seterrorMsg("Invalid email or password");
    }
  };

  return (
    <div className=''>
      <div className='h-20'></div>
      <div className='m-auto w-[50vw] lg:w-[30vw] h-[70vh] bg-amber-100 text-center border-2 rounded-2xl'>
        <h1 className='text-3xl lg:text-5xl font-light tracking-tighter pt-10 pb-15'> SIGN IN </h1>

        <div className='m-auto align-middle'>
          <form onSubmit={signup}>
            <div className='p-2 m-2 flex flex-col lg:flex'>
              <label htmlFor="email" className='font-semibold'>Email:</label>
              <input
                id="email"
                type="email"
                placeholder='enter email'
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className='bg-white p-2 m-auto lg:w-1/2 w-full rounded'
              />
            </div>

            <div className='p-2 m-2 flex flex-col lg:flex justify-center align-middle'>
              <label htmlFor="password" className='font-semibold'>Password:</label>
              <input
                id="password"
                type="password"
                placeholder='enter pass'
                required
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                className='bg-white p-2 m-auto lg:w-1/2 w-full rounded'
              />
            </div>
         {}
            <button
              type="submit"
              className='p-2 m-4 pr-10 pl-10 rounded-xl bg-green-300 hover:bg-green-700'
            > Submit </button>

            {errorMsg && <p className="text-red-600">{errorMsg}</p>}
          </form>
          <p className='text-[13px]'> Don't have a account
             <div>  <button onClick={()=>window.open('/#/createaccount' , "_blank")}  className=' underline hover:bg-neutral-400 py-2 px-3 rounded-md'> 
            Create Account
            </button>  </div> </p>
        </div>

        <Outlet />
      </div>
      <div className='h-[30vh]'></div>
    </div>
  );
}

function Sign() {
  const [isclick, setisclick] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setisclick(!!user);
      setCheckingAuth(false);
    });
    return () => unsubscribe();
  }, []);

  if (checkingAuth) return null; // or a loading spinner

  return (
    <>
      {isclick ? <UserPg /> : <SignLayout onLogin={() => setisclick(true)} />}
    </>
  );
}

export default Sign;