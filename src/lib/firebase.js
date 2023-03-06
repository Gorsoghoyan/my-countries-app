import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA51eHX8LSDq8TKgH7TBVO2q3DF34OMTC4",
  authDomain: "countries-app-fa8d8.firebaseapp.com",
  databaseURL: "https://countries-app-fa8d8-default-rtdb.firebaseio.com",
  projectId: "countries-app-fa8d8",
  storageBucket: "countries-app-fa8d8.appspot.com",
  messagingSenderId: "176127806423",
  appId: "1:176127806423:web:f62a6171ce29d85394d992",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
