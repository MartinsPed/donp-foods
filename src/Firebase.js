// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL7G6gSOK4IR8USjp5NdL8oZRvRnrD2fU",
  authDomain: "donp-foods.firebaseapp.com",
  databaseURL: "https://donp-foods-default-rtdb.firebaseio.com",
  projectId: "donp-foods",
  storageBucket: "donp-foods.appspot.com",
  messagingSenderId: "706124297661",
  appId: "1:706124297661:web:4d400df357a8e757e3ced4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const storage = getStorage(app)

export { app, db, auth, provider, storage}