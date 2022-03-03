// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa328q284dJe44vnJrkzF576E5--XKZ2I",
  authDomain: "kvs-materialui-wpa-8ff4b.firebaseapp.com",
  projectId: "kvs-materialui-wpa-8ff4b",
  storageBucket: "kvs-materialui-wpa-8ff4b.appspot.com",
  messagingSenderId: "171158605227",
  appId: "1:171158605227:web:073cdbeadccd42d16656ee"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)