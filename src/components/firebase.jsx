// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx_dNdPahKMsA6LK_Qhkpnn7jDjPBHtK0",
  authDomain: "virtualvr2-1ec16.firebaseapp.com",
  projectId: "virtualvr2-1ec16",
  storageBucket: "virtualvr2-1ec16.firebasestorage.app",
  messagingSenderId: "683643281731",
  appId: "1:683643281731:web:f573ebf6404584f26b0ff6",
  databaseURl : "https://virtualvr2-1ec16/database/virtualvr2-1ec16-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);