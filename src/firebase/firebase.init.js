// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQCbsKjIEHJOYJO1nc3W7Qytr7ea7kFRE",
    authDomain: "email-password-auth-1e05d.firebaseapp.com",
    projectId: "email-password-auth-1e05d",
    storageBucket: "email-password-auth-1e05d.appspot.com",
    messagingSenderId: "697850210378",
    appId: "1:697850210378:web:2c2bf5b03806036d96deb3",
    measurementId: "G-Z1TLZZJPPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;