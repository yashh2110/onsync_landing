import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAxOJLK0CZUOCY-VuZV7vieDj_nO8fp62I",
  authDomain: "onsync-b9627.firebaseapp.com",
  projectId: "onsync-b9627",
  storageBucket: "onsync-b9627.appspot.com",
  messagingSenderId: "545269095340",
  appId: "1:545269095340:web:88e53b945f810176697809",
  measurementId: "G-ZH7DXW0QWS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firedb = getFirestore(app);
