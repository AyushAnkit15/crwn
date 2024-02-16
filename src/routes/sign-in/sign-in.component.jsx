import React from "react";
import { Fragment } from "react";
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import { auth  ,signInWithGooglePopup  , createUserDocumentFromAuth  ,signInWithGoogleRedirect} from "../../utils/firebase/firebase.utils";
import LoginForm from "../../components/loginForm/loginFirm.component";
import SignUpForm from "../../components/signUp/signUpform.component";
import './sign-in.styles.scss'
const Signin_component = () => {
//  useEffect(async()=>{
//   const response = await getRedirectResult(auth) ;
//   console.log(response)
  
// } , [])


// useEffect(()=>{
//   async  function fetch (){
//     const response = await getRedirectResult(auth) ;

//     if(response){
//       const userDocRef = await createUserDocumentFromAuth(response.user)
//     }
//    // console.log(response) ;
//   }

// fetch() ; 
// })
  const logGoogleUser = async () => {
    const  {user} =  await signInWithGooglePopup();

    console.log(user);
   const userDocRef = await  createUserDocumentFromAuth(user)
  };

  const logGoogleRedirectUser =async ()=>{
const {user} = await signInWithGoogleRedirect() ;
console.log({user}) ; 
  }
  return (
    <div className="authentication-container">
      {/* <h1>sign-in.component</h1> */}

      {/* <button onClick={logGoogleUser}>Sign in with Gooogle Popup</button> */}
      <SignUpForm/>
      <LoginForm/>

    </div>
  );
};

export default Signin_component;
