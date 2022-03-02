import React from "react";
import { Avatar } from "@material-ui/core";
import "./Header.css";
import image from "../assets/OC.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        {/* set links + routes */}
        <img className="header__leftLogo" src={image} alt="logo" />
        <NavLink to="/" className="link" activeClassName="active" exact>
          <h2>Home</h2>
        </NavLink>
        <div className="header__verticalLine"></div>
        <NavLink to="/channels" className="link" activeClassName="active" exact>
          <h2>Channels</h2>
        </NavLink>
        <div className="header__verticalLine"></div>
        <NavLink to="/user" className="link" activeClassName="active" exact>
          <h2>User</h2>
        </NavLink>
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
}

export default Header;
