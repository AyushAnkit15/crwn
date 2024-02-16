import React from "react";
import { useState } from "react";
import FormInput from "../formInput/formInput.component";
import {  createAuthUserWithEmailAndPassword  , createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";

import './signUp.styles.scss'
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
//   setTimeout(() => {
//     console.log(formFields);
//   }, 1000);


  const { displayName, email, password, confirmPassword } = formFields;

  const clearFormFields = ()=>{
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event)=>{
    event.preventDefault();
    if(password !== confirmPassword){
        console.log('password and confirmPassword should match')
        return ;
    }

    try{
const {user} = await createAuthUserWithEmailAndPassword(email , password)
        // const response =

        await createUserDocumentFromAuth(user , {displayName})
        clearFormFields()
       
    }

    
    catch(err){
      if(err.code=== 'auth/email-already-in-use'){
        console.error('email already in use')
      }
        console.error(err)
    }
}
   
  

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Not registered yet</h2>
      signUp
      <form onSubmit={handleSubmit}>
    
        <FormInput 
        label= 'displayName'
          required
          onChange={handleChange}
          type="text"
          name="displayName"
          value={displayName}
        />
       
        <FormInput 
        label='email'
          required
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
        />
       
        <FormInput 
        label='password'
          type="password"
          onChange={handleChange}
          required
          name="password"
          value={password}
        />
       
        <FormInput 
        label='confirmPassword'
          type="password"
          onChange={handleChange}
          required
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button  type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
