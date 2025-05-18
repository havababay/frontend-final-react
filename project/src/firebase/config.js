import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUnO91nLlsx9BHYenYTs_D4_A1xCJkKWo",
  authDomain: "grade-insight1.firebaseapp.com",
  projectId: "grade-insight1",
  storageBucket: "grade-insight1.firebasestorage.app",
  messagingSenderId: "804755726428",
  appId: "1:804755726428:web:260030f2a5d9bc68e60699"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);