import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
