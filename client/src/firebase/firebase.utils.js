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

export const createUserProfileDocument = async (userAuth, additionalData ) => {
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

export const addCollectionAndDocuments = async ( collectionKey, objectsToAdd ) => {
  const collectionRef = await firestore.collection( collectionKey );

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
}

export const convertCollectionSnapshotToMap = collection => {

  const transformedCollection = [];
  collection.docs.map( doc => {
    const { title, items, imageURL, linkURL, departmentNo } = doc.data();

    transformedCollection[departmentNo] = {
      routeName: encodeURI( title.toLowerCase() ),
      id: doc.id,
      title,
      items,
      imageURL,
      linkURL
    };
    return transformedCollection;
  });

  return transformedCollection
  .reduce(( accumulator, collection ) => {
    accumulator[ collection.title.toLowerCase() ] = collection;
    return accumulator
  }, {})
}

export const convertContactSnapshotToMap = contactList => {
    const transformedContactList = contactList.docs.map(doc => {
      const { title, iconUrl, contactInfo, linkTo, iconSize } = doc.data();

      return {
        id: doc.id,
        title,
        iconUrl,
        contactInfo,
        linkTo,
        iconSize
      };
    });

    return transformedContactList.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged( userAuth => {
      unsubscribe();
      resolve( userAuth );
    }, reject)
  });
}

export const getUserCartRef = async ( userId, cartId ) => {
  const cartRef = firestore.collection( 'carts' ).doc( cartId );
  const snapShot = await cartRef.get();

  if ( !snapShot.exists ) {
    const newCartRef = await newUserCart( userId )
    return newCartRef;
  } else {
    return snapShot.ref;
  }
};

export const newUserCart = async ( userId ) => {
  const userRef = firestore.collection( 'users' ).doc( userId );
  const cartDocRef = firestore.collection( 'carts' ).doc();
  await cartDocRef.set({ userId: userRef.id, cartItems: [] });
  await userRef.set({
      activeCart: cartDocRef.id
  }, { merge: true })
  return cartDocRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup( googleProvider );

export default firebase;
