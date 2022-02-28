import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__leftLogo"
          src="../assets/OC.png"
          alt="OC logo"
        />
        <h2>Home</h2>
        <h2>Channels</h2>
        <h2>User</h2>
      </div>

      <div className="header__center">
        <input type="text" placeholder="Search" />
        <i className="fas fa-Search"></i>
      </div>

      <div className="header__right">
        <img src="profilepic.jpg" />
        {/* Google Auth here */}
      </div>
    </div>
  );
};

export default Header;
