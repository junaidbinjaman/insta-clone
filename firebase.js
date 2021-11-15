import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAu8oErbNUBtZgn5bSBT9Ciq7P5nLrrQIE",
  authDomain: "insta-clone-8dcfa.firebaseapp.com",
  projectId: "insta-clone-8dcfa",
  storageBucket: "insta-clone-8dcfa.appspot.com",
  messagingSenderId: "35951937057",
  appId: "1:35951937057:web:6977c1e043e5fa295c8560",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
