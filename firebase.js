// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAN8ZlfFP57_I7JoLHPLKd2VC6wxvAdXCE",
    authDomain: "facebook-clone-479cf.firebaseapp.com",
    projectId: "facebook-clone-479cf",
    storageBucket: "facebook-clone-479cf.appspot.com",
    messagingSenderId: "512592301332",
    appId: "1:512592301332:web:71655beba06195e4ec0601"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
