// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//from firebase import..start >
import { getAuth } from "firebase/auth";
//from firebase import.End.>
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_2Gd4d1UTtdY_6QFwrXbWRTLTPoCBAnI",
  authDomain: "auth-moha-milon-d051a.firebaseapp.com",
  projectId: "auth-moha-milon-d051a",
  storageBucket: "auth-moha-milon-d051a.firebasestorage.app",
  messagingSenderId: "631059930948",
  appId: "1:631059930948:web:a27f61e2e492cc6100c111"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);
