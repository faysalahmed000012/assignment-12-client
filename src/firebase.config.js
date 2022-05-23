// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZnRPszZheG7BIHhKE6D-pmoOVQpjUVfE",
  authDomain: "electro-firm-602da.firebaseapp.com",
  projectId: "electro-firm-602da",
  storageBucket: "electro-firm-602da.appspot.com",
  messagingSenderId: "583208827415",
  appId: "1:583208827415:web:21b739412c81fc04d53a52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
