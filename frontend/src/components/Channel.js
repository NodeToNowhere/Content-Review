import React from "react";
import "./Channel.css";
import { NavLink } from "react-router-dom";

const Channel = ({ id, name, rating, avatar }) => {
  return (
    <div className="channel">
      <NavLink to="/channels/{id}" className="channel" activeClassName="active" exact>
        <img src={avatar} alt="avatar" />
        <p>{name}</p>
      <p><span role="image" aria-label="star">⭐</span> {rating}</p>
        </NavLink>
    </div>
  );
};
export default Channel;
