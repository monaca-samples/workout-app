// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  browserLocalPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { env } from "/env";

function isEmpty(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }
  return true;
}
if (isEmpty(env)) {
  alert("Environment variables are not configured. The app will fail. Refer to https://github.com/juan-serrano-soria/workout-app?tab=readme-ov-file#setup for more information")
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  projectId: env.FIREBASE_PROJECT_ID,
  storageBucket: env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
  appId: env.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Check if iOS
const isIos = () => {
  const userAgent = navigator.userAgent;
  return /iPad|iPhone|iPod/i.test(userAgent);
};

// Initialize Auth
let auth;
if (isIos()) {
  auth = initializeAuth(app, {
    persistence: browserLocalPersistence,
  });
} else {
  auth = getAuth(app);
}

// Initialize Firestore
const db = getFirestore(app);

export { auth, db };
