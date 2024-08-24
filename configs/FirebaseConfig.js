// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC23Ochr7ftt8PzOtamaz3jVzHwaH4Q1YE",
  authDomain: "taskrabbit-250da.firebaseapp.com",
  projectId: "taskrabbit-250da",
  storageBucket: "taskrabbit-250da.appspot.com",
  messagingSenderId: "769707585354",
  appId: "1:769707585354:web:b58e2685a0c803e88e1bb3",
  measurementId: "G-P5M6FGGRM0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);