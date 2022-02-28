import React from "react";
import Channel from "./Channel";
import "./SideBar.css";
import image from "../assets/OC.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h5>Reviewed Channels</h5>
        <Channel avatar={image} name="NodeToNowhere" rating="5" />{" "}
        <Channel avatar={image} name="NodeToNowhere" rating="5" />{" "}
        <h5>Recommended Channels</h5>{" "}
        <Channel avatar={image} name="NodeToNowhere" rating="5" />{" "}
        <Channel avatar={image} name="NodeToNowhere" rating="5" />{" "}
        <p className="sidebar__topShowMore">Show More</p>{" "}
      </div>{" "}
      <div className="sidebar__bottom">
        <div className="sidebar__bottomContainer"></div>
      </div>
    </div>
  );
};
export default Sidebar;
