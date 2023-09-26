// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD53wj7xTyBv6ukQ37t0E4Cv7VQhx4U1ms",
  authDomain: "loginuser-abfca.firebaseapp.com",
  projectId: "loginuser-abfca",
  storageBucket: "loginuser-abfca.appspot.com",
  messagingSenderId: "134310647365",
  appId: "1:134310647365:web:3621dad5516ee8fe3ff52c"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const auth =   firebase.auth();
export { auth, firebase };