// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChBGkznHFZ9qCXzd0SInDaBTONU5WStww",
  authDomain: "next-app-5b487.firebaseapp.com",
  projectId: "next-app-5b487",
  storageBucket: "next-app-5b487.appspot.com",
  messagingSenderId: "321055964734",
  appId: "1:321055964734:web:8e9cceb8cd9d04d70b5b6f",
  measurementId: "G-R02LQ5LC9P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
