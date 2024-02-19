import React from "react";
import { useState ,  useContext} from "react";
import FormInput from "../formInput/formInput.component";
import {  createUserDocumentFromAuth , signInWithGooglePopup ,signInUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import {UserContext} from '../../contexts/user.contexts'

import './loginForm.styles.scss'
const defaultFormFields = {

  email: "",
  password: "",
 
};
const LoginForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
//   setTimeout(() => {
//     console.log(formFields);
//   }, 1000);


  const {  email, password } = formFields;

  const {setCurrentUser} = useContext(UserContext)

  const clearFormFields = ()=>{
    setFormFields(defaultFormFields)
  }

  const loginWithGoogle = async () =>{
    const {user} = await signInWithGooglePopup() ;
    await createUserDocumentFromAuth(user)

  }

  const handleSubmit = async (event)=>{
    event.preventDefault();
    
    try{
const {user} = await signInUserWithEmailAndPassword  (email , password) ;
console.log({user}) ; 
        clearFormFields()
        setCurrentUser({user})
       
    }

    
    catch(err){
   
        console.error(err)
    }
}
   
  

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already registered</h2>
      Login
      <form onSubmit={handleSubmit}>
    
      
       
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
       
       <div className="button-containers">
       <Button  type="submit">LogIn</Button>
        <Button buttonType ='google'  type = "button" onClick = {loginWithGoogle}>Login With Google</Button>
       </div>

       
      </form>
    </div>
  );
};

export default LoginForm;
