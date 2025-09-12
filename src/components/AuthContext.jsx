import { signOut } from 'firebase/auth';
import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';
import { firebaseapp } from './firebase';
import { getAuth } from 'firebase/auth';


const firebaseAuth = getAuth(firebaseapp);
export const Auth = createContext();

function AuthContext({children}) {
  const[username,setusername] = useState("");
  const [Password, setPassword] = useState("");
  const[user , setuser] = useState("");

 const login = ()=>{
    setuser(username);
 }
  const logout = () => {
  setuser(null);
  setusername("");
  setPassword("");
  signOut(firebaseAuth);
  
};

  return (
 <Auth.Provider value={{username,setusername,Password, setPassword , user,setuser , login ,logout }}>
{children}
 </Auth.Provider>
   
  );
}

export default AuthContext;
