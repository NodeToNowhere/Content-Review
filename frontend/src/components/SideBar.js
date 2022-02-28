import React from "react";
import Channel from "./Channel";
import "./SideBar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h5>Reviewed Channels</h5>
        <Channel
          avatar="avatar.jpg"
          name="NodeToNowhere"
          followers="816k"
        />{" "}
        <h5>Recommended Channels</h5>{" "}
        <Channel avatar="avatar.jpg" name="NodeToNowhere" followers="816k" />{" "}
        <p className="sidebar__topShowMore">Show More</p>{" "}
      </div>{" "}
      <div className="sidebar__bottom">
        <div className="sidebar__bottomContainer">
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
