import {initializeApp} from 'firebase/app';
import {getAuth ,signInWithRedirect , signInWithPopup , GoogleAuthProvider} from 'firebase/auth' ;


const firebaseConfig = {
    apiKey: "AIzaSyBYO3ftEp8D70rCHKJt4TWlLUKrkmqmvcQ",
    authDomain: "crwn-f80bf.firebaseapp.com",
    projectId: "crwn-f80bf",
    storageBucket: "crwn-f80bf.appspot.com",
    messagingSenderId: "793921274931",
    appId: "1:793921274931:web:5fde5ef5cc808e1a22cf46"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider() ;


  provider.setCustomParameters({
    prompt: "select_account" 
  })



  export const auth = getAuth() ;

  export  const signInWithGooglePopup = async ()=>{
   return  signInWithPopup(auth , provider)
  }
