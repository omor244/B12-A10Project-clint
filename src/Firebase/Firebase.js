

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuyV_mULIuzWEyISMa-taBHcsb_wQmQ3M",
    authDomain: "b12a10-ass.firebaseapp.com",
    projectId: "b12a10-ass",
    storageBucket: "b12a10-ass.firebasestorage.app",
    messagingSenderId: "416946614731",
    appId: "1:416946614731:web:a342570c0cdf98c31ac64e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
