import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'




  const firebaseConfig = {
  apiKey: "AIzaSyDNfcxm6hQPY6gkg9-v_15jfIKWA82FNo0",
  authDomain: "whereiswaldo-2c46f.firebaseapp.com",
  projectId: "whereiswaldo-2c46f",
  storageBucket: "whereiswaldo-2c46f.appspot.com",
  messagingSenderId: "412951895930",
  appId: "1:412951895930:web:2d4188e9c5d48709be80c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
