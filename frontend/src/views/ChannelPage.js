import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Sidebar from "../components/SideBar";
import "./ChannelPage.css";

function ChannelPage({channels, users}) {
  return (
    <div className="channelPage">
      <Header />
      <div className="channel__main">
        <Sidebar channels={channels} users={users}/>
        <Body />
      </div>
    </div>
  );
}

export default ChannelPage;
