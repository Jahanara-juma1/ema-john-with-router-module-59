// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ3gZkKc-WX-PS_AKnu-izaS-fCyLwTYg",
  authDomain: "ema-john-simple-ec980.firebaseapp.com",
  projectId: "ema-john-simple-ec980",
  storageBucket: "ema-john-simple-ec980.appspot.com",
  messagingSenderId: "560419780332",
  appId: "1:560419780332:web:8a6b4842f71b97529217c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
