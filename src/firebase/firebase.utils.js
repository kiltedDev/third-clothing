import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDXoP8JIA0A0Kavb7DTw01picLNQ-VKlMs",
  authDomain: "third-c-db.firebaseapp.com",
  databaseURL: "https://third-c-db.firebaseio.com",
  projectId: "third-c-db",
  storageBucket: "third-c-db.appspot.com",
  messagingSenderId: "751621014250",
  appId: "1:751621014250:web:277919414ad16df8edcd93",
  measurementId: "G-4J8P90RXWS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
