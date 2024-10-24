/**
 * The `Header` component in React displays a navigation bar with links and a login/logout button that
 * toggles its text.
 * @returns The `Header` component is being returned. It consists of a header section with a logo,
 * navigation items (Home, About, Contact Us, Cart), and a login button that toggles between "Login"
 * and "Logout" based on the `btnNameReact` state. The `Header` component is exported as the default
 * export.
 */
import { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  
  useEffect(()=>{
   
  },[btnNameReact]);
  return (
    
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about" >About</Link> </li>
          <li><Link to="/contact">Contact Us</Link> </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
               btnNameReact=="Login" 
                ?setBtnNameReact("Logout")
                :setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
    
  );
};

export default Header;
