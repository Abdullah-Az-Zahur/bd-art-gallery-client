// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqmrQeOx91IuhOh3jTmBjMri4SZT3NVKs",
  authDomain: "bd-art-gallery.firebaseapp.com",
  projectId: "bd-art-gallery",
  storageBucket: "bd-art-gallery.appspot.com",
  messagingSenderId: "789479847872",
  appId: "1:789479847872:web:eb74adba4a6584123c3a25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
export default app;