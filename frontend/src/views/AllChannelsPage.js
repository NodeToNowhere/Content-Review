import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import "./AllChannelsPage.css";

function AllChannelsPage({ channels }) {
  return (
    <div className="AllChannels">
      <Header />
      <div className="AllChannels__main">
        <Sidebar />
      </div>
    </div>
  );
}

export default AllChannelsPage;
