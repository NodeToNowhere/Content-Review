import React from "react";
import Header from "../components/Header";
import BlankBody from "../components/BlankBody";
import Sidebar from "../components/SideBar";
import "./UserPage.css";

function UserPage(user) {
  return (
    <div className="userPage">
      <Header />
      <div className="user__main">
        <Sidebar />
        <BlankBody />
      </div>
    </div>
  );
}

export default UserPage;
