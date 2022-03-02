import React from "react";
import ChannelDisplay from "../components/ChannelDisplay";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import "./AllChannelsPage.css";

function AllChannelsPage({ channels }) {
  return (
    <div className="AllChannels">
      <Header />
      <div className="AllChannels__main">
        <Sidebar />
          <ChannelDisplay channels={channels}/>
      </div>
    </div>
  );
}

export default AllChannelsPage;
