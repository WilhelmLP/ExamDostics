// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, query } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcwljXu1xYYkoW2MU3nBKKLwuHuN7QwQ4",
  authDomain: "fb-crud-react-d9ddc.firebaseapp.com",
  projectId: "fb-crud-react-d9ddc",
  storageBucket: "fb-crud-react-d9ddc.appspot.com",
  messagingSenderId: "741688984083",
  appId: "1:741688984083:web:db8860e2b8424fd0ff35e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default db;



//const fb = firebase.initializeApp(firebaseConfig);
//export const db = fb.firestore();

