import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBtSnJndC7SNd3oHMDbaS8SHBo3J-BEVQ8",
    authDomain: "basededatos-3c34d.firebaseapp.com",
    projectId: "basededatos-3c34d",
    storageBucket: "basededatos-3c34d.appspot.com",
    messagingSenderId: "573489971601",
    appId: "1:573489971601:web:d7eeafc3d8b393e2c09a30"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const dataBase = app.firestore();