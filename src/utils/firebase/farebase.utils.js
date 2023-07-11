import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCtOlgjjGOJUMd7gwZI3q1Cux9ynqDS4vs',
  authDomain: 'kikicin-shop-db.firebaseapp.com',
  projectId: 'kikicin-shop-db',
  storageBucket: 'kikicin-shop-db.appspot.com',
  messagingSenderId: '628799583587',
  appId: '1:628799583587:web:ca0f45a27f7def1b308f56',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
