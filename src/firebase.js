// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//
// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaUIfawhr_OTFlukbHVrG4HI4VJRmnlEk",
  authDomain: "clone-bleeding-edge.firebaseapp.com",
  projectId: "clone-bleeding-edge",
  storageBucket: "clone-bleeding-edge.appspot.com",
  messagingSenderId: "270573511536",
  appId: "1:270573511536:web:2d2361f081965fdad525b5",
  measurementId: "G-ZGNLF84G10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };