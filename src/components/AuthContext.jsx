import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';


export const Auth = createContext();

function AuthContext({children}) {
  const[username,setusername] = useState("");
  const [Password, setPassword] = useState("");
  const[user , setuser] = useState(null);

 const login = ()=>{
    setuser(username);
 }

  return (
 <Auth.Provider value={{username,setusername,Password, setPassword }}>
{children}
 </Auth.Provider>
   
  )
}

export default AuthContext;
