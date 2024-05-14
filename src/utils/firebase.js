// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9ungLMzikAj7fNMZaGF4ZPotTL_puIPA",
  authDomain: "netflixgpt-3160f.firebaseapp.com",
  projectId: "netflixgpt-3160f",
  storageBucket: "netflixgpt-3160f.appspot.com",
  messagingSenderId: "1072465838690",
  appId: "1:1072465838690:web:8a8be358aadd21eb6f873b",
  measurementId: "G-6QN92K5WGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();