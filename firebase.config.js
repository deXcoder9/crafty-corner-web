// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgQnJRFT-9zHr37gmxXuGZqo68JZk9bm8",
  authDomain: "assignment-10-38723.firebaseapp.com",
  projectId: "assignment-10-38723",
  storageBucket: "assignment-10-38723.appspot.com",
  messagingSenderId: "87479394759",
  appId: "1:87479394759:web:de7fc07defdea4678039e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;