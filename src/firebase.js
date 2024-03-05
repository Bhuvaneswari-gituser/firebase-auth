// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4oTmH2t4t7D7EFWuMr64tVGpbwwDxNxI",
  authDomain: "react-authentication-f5a1b.firebaseapp.com",
  projectId: "react-authentication-f5a1b",
  storageBucket: "react-authentication-f5a1b.appspot.com",
  messagingSenderId: "856496667360",
  appId: "1:856496667360:web:477d6534f8a44e9fa4ee85",
  measurementId: "G-RWEYHHTT8Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;