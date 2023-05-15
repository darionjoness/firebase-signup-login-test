// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt9_FhSNEcjf_Mzj7wo-t4PwCOeMnv6Dw",
  authDomain: "solo-signup-login2.firebaseapp.com",
  projectId: "solo-signup-login2",
  storageBucket: "solo-signup-login2.appspot.com",
  messagingSenderId: "515755067691",
  appId: "1:515755067691:web:2f1f07cabd0a5ac70e9d6e",
  measurementId: "G-RDC4QREKXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
const analytics = getAnalytics(app);