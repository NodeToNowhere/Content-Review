import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Sidebar from "../components/SideBar";
import "./ChannelPage.css";

function ChannelPage() {
  return (
    <div className="channelPage">
      <Header />
      <div className="channel__main">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default ChannelPage;
