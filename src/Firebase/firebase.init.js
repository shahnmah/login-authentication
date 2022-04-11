import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBTTgYfUnV88AmELRzPrsI-okCRVTGjsSE",
  authDomain: "login-authentication-3648e.firebaseapp.com",
  projectId: "login-authentication-3648e",
  storageBucket: "login-authentication-3648e.appspot.com",
  messagingSenderId: "450180920768",
  appId: "1:450180920768:web:3373895bfa96ce554bc425"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;