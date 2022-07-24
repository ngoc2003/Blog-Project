import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB0AA9iCTFlwXb7elcSCToSid9EO5r9OPE",
  authDomain: "blogging-29be5.firebaseapp.com",
  projectId: "blogging-29be5",
  storageBucket: "blogging-29be5.appspot.com",
  messagingSenderId: "1053643539595",
  appId: "1:1053643539595:web:cf3bdbef1357bdde60008e",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
