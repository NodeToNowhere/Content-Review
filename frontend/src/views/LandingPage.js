import React from "react";
import Header from "../components/Header";
import BlankBody from "../components/BlankBody";
import Sidebar from "../components/SideBar";
import "./LandingPage.css";

function LandingPage({channels, users}) {
  return (
    <div className="landingPage">
      <Header />
      <div className="landing__main">
        <Sidebar channels={channels} users={users}/>
        <BlankBody />
      </div>
    </div>
  );
}

export default LandingPage;
