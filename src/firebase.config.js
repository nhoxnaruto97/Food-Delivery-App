import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBjsc7TIQ5Pr3bSthIoPmY40SGxra7zRto",
  authDomain: "fooddeliveryapp-6235e.firebaseapp.com",
  databaseURL: "https://fooddeliveryapp-6235e-default-rtdb.firebaseio.com",
  projectId: "fooddeliveryapp-6235e",
  storageBucket: "fooddeliveryapp-6235e.appspot.com",
  messagingSenderId: "741117352729",
  appId: "1:741117352729:web:1baf21fc62c0e51b094388",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
