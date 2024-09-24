import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxx8FWftjjrI3j2CgcaEf4_LV-1nCz7PM",
  authDomain: "twitter-clone-a4044.firebaseapp.com",
  projectId: "twitter-clone-a4044",
  storageBucket: "twitter-clone-a4044.appspot.com",
  messagingSenderId: "844272067862",
  appId: "1:844272067862:web:507583cf65f4b6d17a5c37",
  measurementId: "G-RMX7PQNBNW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APPID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID,
// };