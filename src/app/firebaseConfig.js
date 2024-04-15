import { initializeApp } from "firebase/app";
import { getFirestore}  from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCVDf4WshHq4Qm9QU7xGNebzeMxtKaBjGE",
  authDomain: "hocbackend.firebaseapp.com",
  projectId: "hocbackend",
  storageBucket: "hocbackend.appspot.com",
  messagingSenderId: "576797642600",
  appId: "1:576797642600:web:0cbe015c9afb91192a50dd",
  measurementId: "G-6JKX681L1G"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
