
import { getAuth, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDiJQh7OguQHCYn3LkQYqlub5MvpyYQENE",
  authDomain: "jpck-tms.firebaseapp.com",
  projectId: "jpck-tms",
  storageBucket: "jpck-tms.appspot.com",
  messagingSenderId: "397792692962",
  appId: "1:397792692962:web:b315f0ff90e8bfdd182cbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;