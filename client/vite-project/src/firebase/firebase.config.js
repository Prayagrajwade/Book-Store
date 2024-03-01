// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdn5OuAlYMZYF4MValP83T13tgMxw4rcw",
  authDomain: "mern-book-inventory-dd9bf.firebaseapp.com",
  projectId: "mern-book-inventory-dd9bf",
  storageBucket: "mern-book-inventory-dd9bf.appspot.com",
  messagingSenderId: "648379376866",
  appId: "1:648379376866:web:2c28c377c90faf9852aabb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;