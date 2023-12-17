
import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, query, where, getDocs,collection, addDoc, onSnapshot,updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjC3OY64DmHFjLZCwXpcAK7jCIPSwljPI",
  authDomain: "hackathon-ab369.firebaseapp.com",
  projectId: "hackathon-ab369",
  storageBucket: "hackathon-ab369.appspot.com",
  messagingSenderId: "73851760711",
  appId: "1:73851760711:web:beb4bc1a894f2944698162"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const db = getFirestore(app);
  const storage = getStorage();
  export{ signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth,updateDoc, auth, doc, setDoc, db, signOut, getStorage, ref, uploadBytes, storage, collection, query, where, getDocs, onAuthStateChanged, getDownloadURL,addDoc, onSnapshot }