import React from "react";
import "./Channel.css";

const Channel = ({ avatar, name, rating }) => {
  return (
    <div className="channel">
      <div className="channel__details">
        <img src={avatar} alt="avatar" />
        <p>{name}</p>
      </div>
      <p>⭐ {rating}</p>
    </div>
  );
};
export default Channel;
