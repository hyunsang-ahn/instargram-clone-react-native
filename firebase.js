// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOiF8dZhy0MSGh1XfsC417OpWt9z__r1A",
  authDomain: "rn-instagram-clone-6773b.firebaseapp.com",
  projectId: "rn-instagram-clone-6773b",
  storageBucket: "rn-instagram-clone-6773b.appspot.com",
  messagingSenderId: "967971463779",
  appId: "1:967971463779:web:b5ea2a6bad8d94d8f84e56"
};


let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { firebase, db };