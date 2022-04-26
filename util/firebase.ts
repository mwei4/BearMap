import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAY9lUPcsg9g4h6MpuRqf7-YblKWGPYYCg",
    authDomain: "trends-a4-b73e3.firebaseapp.com",
    projectId: "trends-a4-b73e3",
    storageBucket: "trends-a4-b73e3.appspot.com",
    messagingSenderId: "970336083894",
    appId: "1:970336083894:web:ee3b3c6d10e9b3fb3eeb17"
  };

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
