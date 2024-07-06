// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { getStorage } from "firebase/storage";
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF0VPMoxRIOvq2ZAyPPC8BZFCbrnHpTuQ",
  authDomain: "portfolio-dashboard-e9da9.firebaseapp.com",
  projectId: "portfolio-dashboard-e9da9",
  storageBucket: "portfolio-dashboard-e9da9.appspot.com",
  messagingSenderId: "282654525759",
  appId: "1:282654525759:web:dcde054e90c9e4c52bab8a",
  measurementId: "G-31JW9TX3JP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);



export const signInWithGoogle =() => signInWithPopup(auth , provider);

