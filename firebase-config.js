import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAe2itPokNiOtdzB_xoceP18pTlbReiCLg",
  authDomain: "techsakhi-b4aa5.firebaseapp.com",
  projectId: "techsakhi-b4aa5",
  storageBucket: "techsakhi-b4aa5.appspot.com",
  messagingSenderId: "875234629209",
  appId: "1:875234629209:web:be7fe420c0e82aad074348",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

export { auth, db, storage };
