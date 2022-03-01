import React from "react";
import "./Body.css";
import Profile from "./Profile";
import Stream from "./Stream";

const Body = () => {
  return (
    <div className="body">
      <div className="body__left">
        <Stream />
        <Profile />
      </div>
    </div>
  );
};
export default Body;
