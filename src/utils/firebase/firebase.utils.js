import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, } from "firebase/auth";
import { getFirestore, doc, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDB4r1zYs1EWvnp_iF2MHMPREfBiWk9xWY",
  authDomain: "crown-clothing-db-8ed4c.firebaseapp.com",
  projectId: "crown-clothing-db-8ed4c",
  storageBucket: "crown-clothing-db-8ed4c.appspot.com",
  messagingSenderId: "596119827874",
  appId: "1:596119827874:web:750cbc76bead4309a12efb"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

// provider.setCustomParameters({
//     prompt: 'select-account',
// });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(app);

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef)
}