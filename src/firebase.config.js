import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBzU8L5axyblha48evRNPtyKHnOrG_socE",
  authDomain: "trio-aoe.firebaseapp.com",
  projectId: "trio-aoe",
  storageBucket: "trio-aoe.appspot.com",
  messagingSenderId: "776485381778",
  appId: "1:776485381778:web:2f338c2540553e836c284b"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const storage =getStorage(app)
export default app