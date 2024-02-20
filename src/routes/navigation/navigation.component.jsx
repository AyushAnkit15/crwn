import { Outlet ,Link} from "react-router-dom";
import { Fragment , useContext } from "react";
import Logo from '../../assests/007 crown.svg'
import { UserContext } from "../../contexts/user.contexts";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss'
const Navigation = () => {
    const {currentUser , setCurrentUser} = useContext(UserContext)

//     const signOutHandler = async()=>{
// const response = await signOutUser() ; 
// console.log('signed out')
// setCurrentUser(null)

//     }
   // console.log(currentUser)
    return (
    <Fragment>

      <div className="navigation">
        <Link className="logo-container" to ='/'>
        <div>
            <img src={Logo} alt ='logo'/>
        </div>
        </Link>
       
        <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
                Shop
            </Link>
            {
                currentUser ? (
                    <span className = "nav-link" onClick={signOutUser}>Sign Out</span> ):
                    ( <Link className="nav-link" to='/sign-in'>
                    SignIn
                </Link>)
                
            }
           
        </div>
        </div>  
        <Outlet/>
    </Fragment>
    );
  };


  export default Navigation