import { signOut } from 'firebase/auth';
import React from 'react'
import { createContext } from 'react'
import { useState, useEffect } from 'react';
import { firebaseapp } from './firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import axios from 'axios';

export const Auth = createContext();
const firebaseAuth = getAuth(firebaseapp);

// Configured axios instance that automatically attaches the Firebase ID token
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '',
});

api.interceptors.request.use(
  async (config) => {
    const currentUser = firebaseAuth.currentUser;
    if (currentUser) {
      try {
        const token = await currentUser.getIdToken();
        config.headers['Authorization'] = `Bearer ${token}`;
      } catch (err) {
        console.error("Failed to retrieve Firebase ID Token:", err);
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

function AuthContext({children}) {
  const [username, setusername] = useState("");
  const [Password, setPassword] = useState("");
  const [user, setuser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setuser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const login = () => {
    if (firebaseAuth.currentUser) {
      setuser(firebaseAuth.currentUser);
    }
  };

  const logout = () => {
    setuser(null);
    setusername("");
    setPassword("");
    signOut(firebaseAuth);
  };

  return (
    <Auth.Provider value={{
      username,
      setusername,
      Password,
      setPassword,
      user,
      setuser,
      loading,
      login,
      logout
    }}>
      {children}
    </Auth.Provider>
  );
}

export default AuthContext;

