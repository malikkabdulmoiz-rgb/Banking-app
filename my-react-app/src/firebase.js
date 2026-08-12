import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNgpIT_V6Vpagfby1sQbm59SYyQq2dn50",
  authDomain: "banking-app-dda59.firebaseapp.com",
  databaseURL: "https://banking-app-dda59-default-rtdb.firebaseio.com",
  projectId: "banking-app-dda59",
  storageBucket: "banking-app-dda59.firebasestorage.app",
  messagingSenderId: "899186731613",
  appId: "1:899186731613:web:06bf914eb53f7247bffbb4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);