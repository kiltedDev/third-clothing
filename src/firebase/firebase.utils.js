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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
