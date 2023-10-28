// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from "firebase/app"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "$FIREBASE_API_KEY",
    authDomain: "$FIREBASE_PROJECT_ID.firebaseapp.com",
    projectId: "$FIREBASE_PROJECT_ID",
    storageBucket: "$FIREBASE_PROJECT_ID.appspot.com",
    messagingSenderId: "427540265611",
    appId: "1:427540265611:web:26d90f41705c7798b1b28e",
    measurementId: "G-9WS6R1TCDC"
} as FirebaseOptions

// Initialize Firebase
const app = initializeApp(firebaseConfig)