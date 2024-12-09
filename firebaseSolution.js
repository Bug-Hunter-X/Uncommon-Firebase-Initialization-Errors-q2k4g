import { initializeApp, getApps } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Check if Firebase is already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// ... rest of your Firebase code

//Solution to multiple Initializations issue 
// By using getApps() function, we make sure that we don't initialize Firebase multiple times.