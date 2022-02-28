import React from "react";
import { Avatar } from "@material-ui/core";
import "./Header.css";
import image from "../assets/OC.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
      {/* set links + routes */}
        <img className="header__leftLogo" src={image} />
        <h2>Home</h2>
        <div className="header__verticalLine"></div>
        <h2>Channels</h2>
        <div className="header__verticalLine"></div>
        <h2>User</h2>
      </div>

      <div className="header__center">
        <input type="text" placeholder="Search" />
        {/* Search channel DB */}
        <i className="fas fa-Search"></i>
      </div>

      <div className="header__right">
        {/* Google Auth here */}
        <div className="header__rightContainer">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Header;
