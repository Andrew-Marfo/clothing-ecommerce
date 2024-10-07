// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB4r1zYs1EWvnp_iF2MHMPREfBiWk9xWY",
  authDomain: "crown-clothing-db-8ed4c.firebaseapp.com",
  projectId: "crown-clothing-db-8ed4c",
  storageBucket: "crown-clothing-db-8ed4c.appspot.com",
  messagingSenderId: "596119827874",
  appId: "1:596119827874:web:750cbc76bead4309a12efb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select-account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);