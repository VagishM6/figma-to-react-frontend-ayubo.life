import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDIIxCmY40UOr_Ta00o3B7hZMcF0r8HZME",
  authDomain: "react-test-01-e5189.firebaseapp.com",
  projectId: "react-test-01-e5189",
  storageBucket: "react-test-01-e5189.firebasestorage.app",
  messagingSenderId: "263383604340",
  appId: "1:263383604340:web:8535bdc859718952904521",
  measurementId: "G-NKHX5NB4QZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);