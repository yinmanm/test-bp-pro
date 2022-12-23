import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBy-es13bzsK1jmuRX_JYEn7MwQ-9OCokQ",
  authDomain: "text-bp-pro-login-phone.firebaseapp.com",
  projectId: "text-bp-pro-login-phone",
  storageBucket: "text-bp-pro-login-phone.appspot.com",
  messagingSenderId: "857002338180",
  appId: "1:857002338180:web:12f6f2f0c3e37c85bddfd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }
