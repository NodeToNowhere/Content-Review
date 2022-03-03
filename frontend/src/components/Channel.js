import React from "react";
import "../stylesheets/Channel.css";
import { NavLink } from "react-router-dom";
import OC from "../assets/OC.png"


function Channel({ name, rating }) {
  return (
    <div className="channel">
    {/* //how to pass id??? */}
      <NavLink to="/channels/{id}" className="channel"> 
        <img src={OC} alt="avatar" />
        <p>{name}</p>
        <p>
          <span role="img" aria-label="star">
            ⭐
          </span>{" "}
          {rating}
        </p>
      </NavLink>
    </div>
  );
}
export default Channel;
