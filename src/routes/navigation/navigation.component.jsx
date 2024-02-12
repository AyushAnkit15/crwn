import { Outlet ,Link} from "react-router-dom";
import { Fragment } from "react";
import Logo from '../../assests/007 crown.svg'

import './navigation.styles.scss'
const Navigation = () => {
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
            <Link className="nav-link" to='/sign-in'>
                SignIn
            </Link>
        </div>
        </div>  
        <Outlet/>
    </Fragment>
    );
  };


  export default Navigation