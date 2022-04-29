import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDz2zI9H165uK5qHjK8qy4k_3KFtXZcTcM",
  authDomain: "final-project-trends.firebaseapp.com",
  projectId: "final-project-trends",
  storageBucket: "final-project-trends.appspot.com",
  messagingSenderId: "777742760054",
  appId: "1:777742760054:web:02eb683ccd2854118fc757"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
