import React from "react";
import { Fragment } from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
const Signin_component = () => {
  const logGoogleUser = async () => {
    const response =  await signInWithGooglePopup();

    console.log(response);
  };
  return (
    <div>
      <h1>sign-in.component</h1>

      <button onClick={logGoogleUser}>Sign in with Gooogle Popup</button>
    </div>
  );
};

export default Signin_component;
