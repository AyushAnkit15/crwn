import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  OnAuthStateChanged,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query ,
  getDocs
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYO3ftEp8D70rCHKJt4TWlLUKrkmqmvcQ",
  authDomain: "crwn-f80bf.firebaseapp.com",
  projectId: "crwn-f80bf",
  storageBucket: "crwn-f80bf.appspot.com",
  messagingSenderId: "793921274931",
  appId: "1:793921274931:web:5fde5ef5cc808e1a22cf46",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = async () => {
  return signInWithPopup(auth, provider);
};

export const signInWithGoogleRedirect = async () => {
  return await signInWithRedirect(auth, provider);
};

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) {
    return;
  } else {
    const userDocRef = doc(db, "users", userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    //console.log(userSnapshot.exists())

    if (userSnapshot.exists()) {
      // console.log(userSnapshot)
      return userDocRef;
    } else {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation,
        });
      } catch (err) {
        console.error(err);
      }
    }
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());

    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};



export const getCategoriesAndDocuments =async  () =>{
  const collectionRef = collection(db , 'categories') ;

  const q = query(collectionRef) ;

  const querySnapshot = await getDocs(q)

  const categoryMap = querySnapshot.docs.reduce((acc , docSnapshot)=>{
const {title , items} = docSnapshot.data() ;
acc[title.toLowerCase()] = items;
return acc ; 

  } ,{})
return categoryMap
} 