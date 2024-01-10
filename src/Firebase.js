// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHaybuMpvrJxQ1VrYdhkrlKF68KSr9PFI",
  authDomain: "academya-49cbd.firebaseapp.com",
  projectId: "academya-49cbd",
  storageBucket: "academya-49cbd.appspot.com",
  messagingSenderId: "64185742225",
  appId: "1:64185742225:web:70e7a27ed39b519021e030",
  measurementId: "G-4919C7J518"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);