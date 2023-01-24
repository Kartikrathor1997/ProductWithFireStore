import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getFirestore, collection, addDoc, getDocs, updateDoc,deleteDoc} from 'firebase/firestore';


// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyBykm_9zmpoXRs4ZS4kQQnfPRtozlN-EWA",
    authDomain: "handletask-30c36.firebaseapp.com",
    projectId: "handletask-30c36",
    storageBucket: "handletask-30c36.appspot.com",
    messagingSenderId: "133633140531",
    appId: "1:133633140531:web:4c2d165cd1214040ff0046"
  };
  

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();



export { app, db, auth, getFirestore,collection,addDoc, getDocs, updateDoc, deleteDoc};


