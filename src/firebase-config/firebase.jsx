import {initializeApp} from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC--0Wt3fev7IcrzRl6K30ecWgu2QwVmzM",
    authDomain: "buenaspracticas-65028.firebaseapp.com",
    projectId: "buenaspracticas-65028",
    storageBucket: "buenaspracticas-65028.appspot.com",
    messagingSenderId: "1017996803962",
    appId: "1:1017996803962:web:ea64f09fc10f6342c360c3",
    measurementId: "G-HNJEP1KX1T"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore();