
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCViBu6yjD4t2HUJZjQn4hibftztea7nqM",
  authDomain: "linkedinclonereact-3d706.firebaseapp.com",
  projectId: "linkedinclonereact-3d706",
  storageBucket: "linkedinclonereact-3d706.appspot.com",
  messagingSenderId: "349014770565",
  appId: "1:349014770565:web:2cebdb6593547b51d1baec",
  measurementId: "G-98050YTZPL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db , auth }