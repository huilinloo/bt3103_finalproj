import firebase from 'firebase';
import store from "./store";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq6v-PEnsdSxHw8dsgjBKNjuSNHAorB4k",
  authDomain: "bt3103-finalproject-99e6a.firebaseapp.com",
  projectId: "bt3103-finalproject-99e6a",
  storageBucket: "bt3103-finalproject-99e6a.appspot.com",
  messagingSenderId: "662664852864",
  appId: "1:662664852864:web:3479d6204f657c716c7d65",
  measurementId: "G-LPW9W16K43"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});
var database = firebase.firestore();
export default database;