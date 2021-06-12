// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyATwy8cfxsjasF1lne8RJe6nn4eHFrxxWU",
    authDomain: "clone-bf994.firebaseapp.com",
    projectId: "clone-bf994",
    storageBucket: "clone-bf994.appspot.com",
    messagingSenderId: "429029834355",
    appId: "1:429029834355:web:afd4a36c83d5dcf3d17406",
    measurementId: "G-BT5PJYJ6BZ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};