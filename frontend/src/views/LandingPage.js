import React from "react";
import Header from "../components/Header";
import BlankBody from "../components/BlankBody";
import Sidebar from "../components/SideBar";
import "./LandingPage.css"

function LandingPage(channels) {
  return (
    <div className="landingPage">
      <Header />
      <div className="landing__main">
        <Sidebar />
        <BlankBody />
      </div>
    </div>
  );
}

export default LandingPage;
