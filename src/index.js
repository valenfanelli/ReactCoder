import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0Z5bVBi7dXipElK2xJt3gBJa5RO-gBwg",  // Reemplaza con tu clave
  authDomain: "valentech-ae5dd.firebaseapp.com",
  projectId: "valentech-ae5dd",
  storageBucket: "valentech-ae5dd.appspot.com",
  messagingSenderId: "266566119713",
  appId: "1:266566119713:web:0a4c83a047ccc06dad0e60"
};
console.log(console.log(process.env.REACT_APP_FIREBASE_API_KEY));


// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
