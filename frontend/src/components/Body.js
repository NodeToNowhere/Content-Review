import React from "react";
import "../stylesheets/Body.css";
import Profile from "./ChannelProfile";
import Stream from "./ChannelStream";

function Body() {
  return (
    <div className="body">
      <div className="body__left">
        <Stream />
        <Profile />
      </div>
    </div>
  );
}
export default Body;
