import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  onSnapshot,
} from 'firebase/firestore';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCRTo-wM-3g3wwsjzz5mbhT7JfSb2TTbJ0',
  authDomain: 'crwn-db-c7a71.firebaseapp.com',
  projectId: 'crwn-db-c7a71',
  storageBucket: 'crwn-db-c7a71.appspot.com',
  messagingSenderId: '675845051112',
  appId: '1:675845051112:web:9473c67cd35de29f75af5d',
  measurementId: 'G-0CY1MDWMJY',
};

const app = initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const docRefOnSnapShot = onSnapshot;

export const signUp = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const updateUserProfile = (user, additionalData) =>
  updateProfile(user, additionalData);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`);

  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};
