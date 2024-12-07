/**
 * The `Header` component in this JavaScript code displays a header with a logo, navigation items,
 * online status indicator, and a login/logout button that toggles its text.
 * @returns The `Header` component is being returned. It consists of a header section with a logo,
 * navigation items, online status indicator, and a login/logout button. The online status is displayed
 * as a green or red indicator emoji based on the `onlineStatus` state. The button text toggles between
 * "Login" and "Logout" when clicked.
 */

import { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus=useOnlineStatus();
  
  useEffect(()=>{
   
  },[btnNameReact]);
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online status:{onlineStatus ? "🟩" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocerys</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
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
