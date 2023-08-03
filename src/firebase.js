// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDok1VGW1x0YDQ5hTEec7AzXna5XWRTWAE",
  authDomain: "movieprime-eb663.firebaseapp.com",
  projectId: "movieprime-eb663",
  storageBucket: "movieprime-eb663.appspot.com",
  messagingSenderId: "476703296223",
  appId: "1:476703296223:web:eeacb5849026066518f76a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)