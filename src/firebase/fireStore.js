import {getFirestore} from "firebase/firestore"
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaomL6tLMoX_G6VbM3qID9U_0h7WvwnbM",
  authDomain: "mock-2-a4132.firebaseapp.com",
  projectId: "mock-2-a4132",
  storageBucket: "mock-2-a4132.appspot.com",
  messagingSenderId: "596500010552",
  appId: "1:596500010552:web:10d7616dc85187f32178cd",
  measurementId: "G-FW94T836LT"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {db, auth}


