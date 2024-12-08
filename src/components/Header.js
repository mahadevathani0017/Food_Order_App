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
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
      <div className="logo-container bg-pink-200">
        <img className="w-50" src={LOGO_URL} />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-xl">
            Online status:{onlineStatus ? "🟩" : "🔴"}
          </li>
          <li className="px-4 bg-yellow-300 text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/grocery">Grocerys</Link>
          </li>
          <li className="px-4 text-xl">
            Cart
          </li>
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
