// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: "login-with-github-ed0b8.firebaseapp.com",
    projectId: "login-with-github-ed0b8",
    storageBucket: "login-with-github-ed0b8.firebasestorage.app",
    messagingSenderId: "454909506265",
    appId: "1:454909506265:web:7819e389817acfeab844c8",
    measurementId: "G-SBC8X770JT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);