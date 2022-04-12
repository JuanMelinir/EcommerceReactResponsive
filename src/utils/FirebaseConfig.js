// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJsMUkP4JuV8Vflz2sl5t-3e-3--ZatsI",
  authDomain: "ecommerceremeras.firebaseapp.com",
  projectId: "ecommerceremeras",
  storageBucket: "ecommerceremeras.appspot.com",
  messagingSenderId: "337157925681",
  appId: "1:337157925681:web:58c0a0267998b9b1bd5e10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;