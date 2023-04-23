// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn5HOsSTMmMbCvnEy_nYGcqBmnG4cfIFY",
  authDomain: "twitter-3b344.firebaseapp.com",
  projectId: "twitter-3b344",
  storageBucket: "twitter-3b344.appspot.com",
  messagingSenderId: "818204863630",
  appId: "1:818204863630:web:189367527eb50242dc6ddf"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDb = getFirestore(firebaseApp);
