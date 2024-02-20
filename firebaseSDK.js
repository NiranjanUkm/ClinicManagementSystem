// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5OROEbuzrUWuAPz9Bb8ZG4COqOmSOqro",
  authDomain: "clinic-management-fa73f.firebaseapp.com",
  projectId: "clinic-management-fa73f",
  storageBucket: "clinic-management-fa73f.appspot.com",
  messagingSenderId: "221100573079",
  appId: "1:221100573079:web:e09b888d167cdc3a3604d2",
  measurementId: "G-V4Q9RHXVB7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
