import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCRTo-wM-3g3wwsjzz5mbhT7JfSb2TTbJ0',
  authDomain: 'crwn-db-c7a71.firebaseapp.com',
  projectId: 'crwn-db-c7a71',
  storageBucket: 'crwn-db-c7a71.appspot.com',
  messagingSenderId: '675845051112',
  appId: '1:675845051112:web:9473c67cd35de29f75af5d',
  measurementId: 'G-0CY1MDWMJY',
};

initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () => signInWithPopup(auth, provider);
