// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbJ13ujnFTJB6LIjaloVrnXMx51vDgs44",
  authDomain: "inventory-management-325f7.firebaseapp.com",
  projectId: "inventory-management-325f7",
  storageBucket: "inventory-management-325f7.appspot.com",
  messagingSenderId: "853170151125",
  appId: "1:853170151125:web:09d18ef68a096c95f34c5c",
  measurementId: "G-1M2XRFDWJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export{firestore}
