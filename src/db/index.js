import firebase from "firebase/app";
import "@firebase/firestore";
import "@firebase/storage";

const app = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: "me-gusta-el-arte",
  storageBucket: "me-gusta-el-arte.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
});

export function getFirebase() {
  return firebase;
}

export function getFirestore() {
  return firebase.firestore(app);
}

export function getStorage(){
  return firebase.storage(app);
}