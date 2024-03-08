import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const key = import.meta.env.VITE_FIREBASE_KEY;
const messagingSenderId = import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID;
const appId = import.meta.env.VITE_FIREBASE_APPID;
const measurementId = import.meta.env.VITE_FIREBASE_MEASUREMENTID;

const firebaseConfig = {
  apiKey: { key },
  authDomain: "react-media-server.firebaseapp.com",
  projectId: "react-media-server",
  storageBucket: "react-media-server.appspot.com",
  messagingSenderId: { messagingSenderId },
  appId: { appId },
  measurementId: { measurementId },
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
