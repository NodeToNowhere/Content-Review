import React from "react";
import "../stylesheets/Channel.css";
import { NavLink } from "react-router-dom";

function Channel({ id, name, rating, avatar }) {
  return (
    <div className="channel">
      <NavLink
        to="/channels/:id"
        className="channel"
      >
        <img src={avatar} alt="avatar" />
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
