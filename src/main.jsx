import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDwP25-yw-vN-70IrKCBzUZDFCeQ5yuEt4",
  authDomain: "react-coder-squadshop.firebaseapp.com",
  projectId: "react-coder-squadshop",
  storageBucket: "react-coder-squadshop.appspot.com",
  messagingSenderId: "764851747098",
  appId: "1:764851747098:web:da685577ea24fce1d514a3"
};

const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
